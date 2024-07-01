import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import PhonesGrid from "./PhonesGrid";

const PHONES: Array<string> = [
  "/testimonials/1.jpg",
  "/testimonials/2.jpg",
  "/testimonials/3.jpg",
  "/testimonials/4.jpg",
  "/testimonials/5.jpg",
  "/testimonials/6.jpg",
];

export default function WhatPeopleBuying() {
  return (
    <div className="pt-16">
      <MaxWidthWrapper className="relative max-w-5xl">
        <Image
          aria-hidden="true"
          alt=""
          role="presentation"
          src="/what-people-are-buying.png"
          width={193}
          height={143}
          className="absolute -left-32 top-1/3 hidden select-none xl:block"
        />

        <PhonesGrid phones={PHONES} />
      </MaxWidthWrapper>
    </div>
  );
}
