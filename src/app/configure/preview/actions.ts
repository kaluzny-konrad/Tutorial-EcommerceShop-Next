"use server";

import {
  ALLOWED_PAYMENT_METHODS,
  DEFAULT_ALLOWED_COUNTRIES,
  DEFAULT_PAYMENT_MODE,
  DEFAULT_PRICE_DATA,
} from "@/config/products";
import { db } from "@/db";
import { getTotalPrice } from "@/lib/price";
import { stripe } from "@/lib/stripe";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Order } from "@prisma/client";
import { ROUTE_CONFIGURE_PREVIEW } from "./page";
import { ROUTE_THANKYOU } from "@/app/thank-you/page";

export const createCheckoutSession = async ({
  caseConfigurationId,
}: {
  caseConfigurationId: string;
}) => {
  const caseConfiguration = await db.caseConfiguration.findUnique({
    where: { id: caseConfigurationId },
  });

  if (!caseConfiguration) {
    throw new Error("Case configuration not found");
  }

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("You need to be logged in");
  }

  const totalPrice = getTotalPrice(caseConfiguration);

  let order: Order | undefined = undefined;

  const existingOrder = await db.order.findFirst({
    where: {
      userId: user.id,
      caseConfigurationId: caseConfiguration.id,
    },
  });

  if (existingOrder) {
    order = existingOrder;
  } else {
    order = await db.order.create({
      data: {
        amount: totalPrice / 100,
        userId: user.id,
        caseConfigurationId: caseConfiguration.id,
      },
    });
  }

  const product = await stripe.products.create({
    name: "Custom Phone Case",
    images: [caseConfiguration.imageUrl],
    default_price_data: {
      currency: DEFAULT_PRICE_DATA.currency,
      unit_amount: totalPrice,
    },
  });

  const stripeSession = await stripe.checkout.sessions.create({
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}${ROUTE_THANKYOU(order.id)}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}${ROUTE_CONFIGURE_PREVIEW(caseConfiguration.id)}`,
    payment_method_types: ALLOWED_PAYMENT_METHODS,
    mode: DEFAULT_PAYMENT_MODE,
    shipping_address_collection: {
      allowed_countries: DEFAULT_ALLOWED_COUNTRIES,
    },
    metadata: {
      userId: user.id,
      orderId: order.id,
    },
    line_items: [{ price: product.default_price as string, quantity: 1 }],
  });

  return { url: stripeSession.url };
};
