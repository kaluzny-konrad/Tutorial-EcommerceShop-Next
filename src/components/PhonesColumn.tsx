"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import PhoneWrapper from "./PhoneWrapper";

export default function PhonesColumn({
  reviews,
  className,
  phoneClassName,
  msPerPixel = 0,
}: {
  reviews: Array<string>;
  className?: string;
  phoneClassName?: (phoneIndex: number) => string;
  msPerPixel?: number;
}) {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const duration = columnHeight * msPerPixel;

  useEffect(() => {
    if (!columnRef.current) return;
    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={cn("animate-marquee space-y-8 py-4", className)}
      style={{ "--duration": `${duration}ms` } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((imgSrc, phoneIndex) => (
        <PhoneWrapper
          imgSrc={imgSrc}
          key={phoneIndex}
          className={phoneClassName?.(phoneIndex % reviews.length)}
        />
      ))}
    </div>
  );
}
