import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ROUTE_CONFIGURE_UPLOAD } from "@/app/configure/upload/page";

export default function CreateCaseRedirectButton() {
  return (
    <div className="flex justify-center">
      <Link
        className={buttonVariants({
          size: "lg",
          className: "mx-auto mt-8",
        })}
        href={ROUTE_CONFIGURE_UPLOAD}
      >
        Create your case now <ArrowRightIcon className="ml-1.5 h-4 w-4" />
      </Link>
    </div>
  );
}
