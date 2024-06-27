import Phone from "./Phone";

export default function HeaderPhoneCaseImage() {
  return (
    <div className="mt-16 flex h-fit w-full justify-center sm:mt-32 lg:mt-20">
      <div className="relative">
        <img
          src="/your-image.png"
          className="absolute -top-20 left-56 hidden w-40 select-none sm:block lg:hidden lg:w-52 xl:block"
        />
        <img
          src="/line.png"
          className="absolute -bottom-6 -left-6 w-20 select-none"
        />
        <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
      </div>
    </div>
  );
}
