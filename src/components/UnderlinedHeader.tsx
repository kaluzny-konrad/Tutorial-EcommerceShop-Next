import { Icons } from "./Icons";

export default function UnderlinedHeader({ children }: { children: string }) {
  return (
    <span className="relative px-2">
      {children}
      <Icons.underline className="absolute inset-x-0 -bottom-6 text-green-500" />
    </span>
  );
}
