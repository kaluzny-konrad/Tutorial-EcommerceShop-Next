import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

const LINKS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="h-20 bg-white">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200" />

        <div
          className={cn(
            "flex h-full items-center",
            "flex-col justify-center md:flex-row md:justify-between",
          )}
        >
          <div className="pb-2 md:pb-0 md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          <div className="flex space-x-8">
            {LINKS.map((link, index) => (
              <FooterLink key={index} href={link.href}>
                {link.title}
              </FooterLink>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}

interface FooterLinkProps extends HTMLAttributes<HTMLDivElement> {
  href: string;
}

function FooterLink(props: FooterLinkProps) {
  return (
    <Link
      href={props.href}
      className={cn(
        "text-sm text-muted-foreground hover:text-gray-600",
        props.className,
      )}
    >
      {props.children}
    </Link>
  );
}
