"use client";

import { CaseColor } from "@prisma/client";
import { useEffect, useRef, useState } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  croppedImageUrl: string;
  color: CaseColor;
};

export default function PhonePreview({ croppedImageUrl, color }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const [imageSize, setImageSize] = useState({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    if (!ref.current) return;
    const { width, height } = ref.current.getBoundingClientRect();
    setImageSize({ width, height });
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let caseBackgroundColor = "bg-zinc-950";
  if (color === "blue") caseBackgroundColor = "bg-blue-950";
  if (color === "rose") caseBackgroundColor = "bg-rose-950";

  return (
    <AspectRatio ref={ref} ratio={3000 / 2001} className="relative">
      <div
        className="absolute z-20 scale-[1.0352]"
        style={{
          left: imageSize.width / 2 - imageSize.width / (1216 / 121),
          top: imageSize.height / 6.22,
        }}
      >
        <Image
          width={imageSize.width / (3000 / 637)}
          height={imageSize.height / (2001 / 1216)} // Temporary fix for the image not showing up
          className={cn(
            "phone-skew relative z-20 rounded-b-[10px] rounded-t-[15px] md:rounded-b-[20px] md:rounded-t-[30px]",
            caseBackgroundColor,
          )}
          src={croppedImageUrl}
          alt="cropped image"
          priority
        />
      </div>

      <div className="relative z-40 h-full w-full">
        <Image
          alt="phone background"
          src="/clearphone.png"
          width={3000}
          height={2001} // Temporary fix for the image not showing up
          className="pointer-events-none h-full w-full rounded-md antialiased"
          priority
        />
      </div>
    </AspectRatio>
  );
}
