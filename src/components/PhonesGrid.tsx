"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { cn, splitArray } from "@/lib/utils";
import PhonesColumn from "./PhonesColumn";

export interface PhonesGridProps {
  phones: Array<string>;
}

export default function PhonesGrid({ phones }: PhonesGridProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });
  const columns = splitArray(phones, 3);
  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = splitArray(columns[2], 2);

  if (!isInView) {
    return <div ref={containerRef} />;
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-[50rem] max-h-[150vh] gap-12 overflow-hidden px-12",
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      )}
    >
      <PhonesColumn
        reviews={[...column1, ...column3.flat(), ...column2]}
        phoneClassName={(phoneIndex) =>
          cn({
            "sm:hidden": phoneIndex >= column1.length + column3[0].length,
            "lg:hidden": phoneIndex >= column1.length,
          })
        }
        msPerPixel={8}
      />
      <PhonesColumn
        reviews={[...column2, ...column3[1]]}
        className="hidden sm:block"
        phoneClassName={(phoneIndex) =>
          phoneIndex >= column2.length ? "lg:hidden" : ""
        }
        msPerPixel={12}
      />
      <PhonesColumn
        reviews={column3.flat()}
        className="hidden sm:block"
        msPerPixel={8}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100" />
    </div>
  );
}
