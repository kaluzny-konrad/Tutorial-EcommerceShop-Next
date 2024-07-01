import Image from "next/image";
import Phone from "./Phone";

export default function HeaderPhoneCaseImage() {
  return (
    <div className="mt-16 flex h-fit w-full justify-center sm:mt-32 lg:mt-20">
      <div className="relative">
        <Image
          src="/your-image.png"
          width={208}
          height={144}
          className="absolute -top-20 left-56 hidden w-40 select-none sm:block lg:hidden lg:w-52 xl:block"
          aria-hidden="true"
          alt=""
          role="presentation"
        />
        <Image
          src="/line.png"
          width={80}
          height={143}
          className="absolute -bottom-6 -left-6 w-20 select-none"
          aria-hidden="true"
          alt=""
          role="presentation"
        />
        <Phone className="w-64" imgSrc="/testimonials/1.jpg" priority={true} />
      </div>
    </div>
  );
}
