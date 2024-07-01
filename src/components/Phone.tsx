import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
  priority?: boolean;
}

const Phone = ({
  imgSrc,
  className,
  dark = false,
  priority = false,
  ...props
}: PhoneProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none relative z-50 overflow-hidden",
        className,
      )}
      {...props}
    >
      <Image
        width={1280}
        height={1280}
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        className="z-50 select-none"
        alt="phone case layout"
        priority={priority}
      />

      <div className="absolute inset-0 -z-10">
        <Image
          width={1280}
          height={1280}
          className="min-h-full min-w-full object-cover"
          src={imgSrc}
          alt="example of your image on a phone case"
          priority={priority}
        />
      </div>
    </div>
  );
};

export default Phone;
