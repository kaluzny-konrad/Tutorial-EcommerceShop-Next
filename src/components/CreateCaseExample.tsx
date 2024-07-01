import React from "react";
import PhoneWrapper from "./PhoneWrapper";
import Image from "next/image";

type Props = {
  imgSrc: string;
};

export default function CreateCaseExample({ imgSrc }: Props) {
  return (
    <div className="mx-auto w-fit px-8 sm:px-52 md:px-0">
      <div className="flex flex-col items-center gap-16 md:flex-row md:gap-5">
        <Image
          src={imgSrc}
          alt="Example of image sent to us"
          width={384}
          height={576}
          className="rounded-md object-cover shadow-xl md:min-w-60 md:max-w-96 lg:min-w-40"
        />
        <Image
          src="/arrow.png"
          aria-hidden="true"
          alt=""
          role="presentation"
          width={126}
          height={31}
          className="rotate-90 md:rotate-0"
        />
        <PhoneWrapper className="md:min-w-48 md:max-w-80" imgSrc={imgSrc} />
      </div>
    </div>
  );
}
