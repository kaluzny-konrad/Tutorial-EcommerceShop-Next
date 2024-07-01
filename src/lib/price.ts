import { BASE_PRICE, PRODUCT_PRICES } from "@/config/products";
import { CaseConfiguration } from "@prisma/client";

export function getTotalPrice(caseConfiguration: CaseConfiguration) {
  const { CaseFinish, CaseMaterial } = caseConfiguration;
  let totalPrice = BASE_PRICE;

  if (CaseFinish === "textured") {
    totalPrice += PRODUCT_PRICES.finish.textured;
  }

  if (CaseMaterial === "polycarbonate") {
    totalPrice += PRODUCT_PRICES.material.polycarbonate;
  }

  return totalPrice;
}
