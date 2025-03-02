import React from "react";

export default function LinkButton({ text, href, icon }) {
  return (
    <a
      href={href}
      className="flex flex-col items-center justify-center p-6 bg-white rounded-xl hover:shadow-md transition-all duration-300 border border-accent/10 hover:border-accent/30 group"
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      <h3 className="text-xl font-light text-accent mb-3 group-hover:text-accent/80">
        {text}
      </h3>
      {React.cloneElement(icon, {
        className:
          "w-8 h-8 text-accent/60 group-hover:text-accent transition-colors",
      })}
    </a>
  );
}
