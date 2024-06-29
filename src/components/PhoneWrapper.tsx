import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Phone from "./Phone";

interface PhoneAnimatedProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}

export default function PhoneWrapper({
  imgSrc,
  className,
  ...props
}: PhoneAnimatedProps) {
  return (
    <div
      className={cn(
        "rounded-[2.25rem] bg-white p-6 shadow-xl shadow-slate-900/5",
        className,
      )}
      {...props}
    >
      <Phone imgSrc={imgSrc} />
    </div>
  );
}
