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
      className="sm:w-1/4 w-2/3 border border-gray-100 border-solid rounded-2xl shadow-md p-4 flex flex-col items-center align-middle"
    >
      <h3 className="text-green-600 text-xl font-semibold pb-2">{text}</h3>
      {React.cloneElement(icon, { className: "w-10 h-10" })}
    </Link>
  );
}
