import React from "react";
import PhoneWrapper from "./PhoneWrapper";

type Props = {
  imgSrc: string;
};

export default function CreateCaseExample({ imgSrc }: Props) {
  return (
    <div className="mx-auto w-fit px-8 sm:px-52 md:px-0">
      <div className="flex flex-col items-center gap-16 md:flex-row md:gap-5">
        <img
          src={imgSrc}
          className="rounded-md object-cover shadow-xl md:min-w-60 md:max-w-96 lg:min-w-40"
        />
        <img src="/arrow.png" className="rotate-90 md:rotate-0" />
        <PhoneWrapper className="md:min-w-48 md:max-w-80" imgSrc={imgSrc} />
      </div>
    </div>
  );
}
