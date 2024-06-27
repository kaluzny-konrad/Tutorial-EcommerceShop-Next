import { cn } from "@/lib/utils";

export default function Header() {
  return (
      <div className="flex flex-col items-center">
        <img
          src="/snake-1.png"
          className="w-28 lg:self-start lg:w-24"
        />
        <h1
          className={cn(
            "text-balance font-bold !leading-tight tracking-tight text-gray-900",
            "text-center text-5xl md:text-6xl lg:text-left lg:text-7xl",
          )}
        >
          Your Image on a{" "}
          <span className="bg-green-600 px-2 text-white">Custom</span> Phone
          Case
        </h1>
    </div>
  );
}
