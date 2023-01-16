import React from "react";
import { Link } from "./Next";

export default function Button({
  href,
  children,
  className,
}: {
  href?: string;
  children: React.ReactElement<any> | string;
  className?: string;
}) {
  return (
    <Link
      href={`${href}`}
      className={`rounded-xl text-center bg-black text-white  w-20 p-3 ${className} `}
    >
      {children}
    </Link>
  );
}
