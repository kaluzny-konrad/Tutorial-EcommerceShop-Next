import ThankYou from "@/components/ThankYou";
import { Suspense } from "react";

export function ROUTE_THANKYOU(orderId: string) {
  return `/thank-you?orderId=${orderId}`;
}

export default function ThankYouPage() {
  return (
    <Suspense>
      <ThankYou />
    </Suspense>
  );
}
