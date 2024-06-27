import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

export default function HeaderHighlights() {
  const highlights = [
    "High-quality, durable material",
    "5 year print guarantee",
    "Modern iPhone models supported",
  ];

  return (
    <ul className="mt-8 flex flex-col items-center space-y-2 font-medium lg:items-start">
      {highlights.map((highlight, index) => (
        <HeaderHighlight key={index}>{highlight}</HeaderHighlight>
      ))}
    </ul>
  );
}

function HeaderHighlight(
  props: React.PropsWithChildren<{ className?: string }>,
) {
  return (
    <li className={cn("flex items-center gap-1.5 text-left", props.className)}>
      <CheckIcon className="h-5 w-5 shrink-0 text-green-600" />
      {props.children}
    </li>
  );
}
