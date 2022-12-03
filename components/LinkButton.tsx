import Link from "next/link";
import React from "react";

export default function LinkButton({
  text,
  href,
  icon,
}: {
  text: string;
  href: string;
  icon: React.ReactElement;
}) {
  return (
    <Link
      href={href}
      className="flex w-2/3 flex-col items-center rounded-2xl border border-solid border-gray-100 p-4 align-middle shadow-md sm:w-1/4"
    >
      <h3 className="pb-2 text-xl font-semibold text-green-600">{text}</h3>
      {React.cloneElement(icon, { className: "w-10 h-10" })}
    </Link>
  );
}
