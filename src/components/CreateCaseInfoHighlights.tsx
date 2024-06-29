import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

export default function CreateCaseInfoHighlights() {
  const HIGHLIGHTS = [
    "High-quality silicone material",
    "Scratch - and fingerprint resistant coating",
    "Wireless charging compatible",
    "5 year print warranty",
  ];

  return (
    <ul className="mx-auto mt-12 w-fit space-y-2 sm:text-lg">
      {HIGHLIGHTS.map((highlight, index) => (
        <Highlight key={index}>{highlight}</Highlight>
      ))}
    </ul>
  );
}

function Highlight(props: React.PropsWithChildren<{ className?: string }>) {
  return (
    <li className={cn("w-fit", props.className)}>
      <CheckIcon className="mr-1.5 inline h-5 w-5 text-green-600" />
      {props.children}
    </li>
  );
}
