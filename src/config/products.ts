import Stripe from "stripe";

export const PRODUCT_PRICES = {
  material: {
    silicone: 0,
    polycarbonate: 5_00,
  },
  finish: {
    smooth: 0,
    textured: 3_00,
  },
} as const;

export const BASE_PRICE = 14_00;

export const DEFAULT_PRICE_DATA: Stripe.ProductCreateParams.DefaultPriceData = {
  currency: "USD",
  unit_amount: BASE_PRICE,
};

export const ALLOWED_PAYMENT_METHODS: Stripe.Checkout.SessionCreateParams.PaymentMethodType[] =
  ["card", "paypal"];

export const DEFAULT_PAYMENT_MODE: Stripe.Checkout.SessionCreateParams.Mode =
  "payment";

export const DEFAULT_ALLOWED_COUNTRIES: Stripe.Checkout.SessionCreateParams.ShippingAddressCollection.AllowedCountry[] =
  ["PL"];
