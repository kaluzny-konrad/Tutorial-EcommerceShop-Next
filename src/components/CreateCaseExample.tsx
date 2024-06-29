import React from "react";
import Phone from "./Phone";

type Props = {
  imgSrc: string;
};

export default function CreateCaseExample({ imgSrc }: Props) {
  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-8">
      <div className="relative flex grid-cols-2 flex-col items-center gap-40 md:grid">
        <img
          src="/arrow.png"
          className="absolute left-1/2 top-[25rem] z-10 -translate-x-1/2 -translate-y-1/2 rotate-90 md:top-1/2 md:rotate-0"
        />

        <div className="relative h-80 w-full max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 md:h-full md:justify-self-end lg:rounded-2xl">
          <img
            src={imgSrc}
            className="h-full w-full rounded-md bg-white object-cover shadow-2xl ring-1 ring-gray-900/10"
          />
        </div>

        <Phone className="w-60" imgSrc={imgSrc} />
      </div>
    </div>
  );
}
