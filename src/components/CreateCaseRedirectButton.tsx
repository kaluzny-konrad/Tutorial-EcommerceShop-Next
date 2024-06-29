import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function CreateCaseRedirectButton() {
  return (
    <div className="flex justify-center">
      <Link
        className={buttonVariants({
          size: "lg",
          className: "mx-auto mt-8",
        })}
        href="/configure/upload"
      >
        Create your case now <ArrowRightIcon className="ml-1.5 h-4 w-4" />
      </Link>
    </div>
  );
}
