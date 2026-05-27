import React from "react";
import { cn } from "../../lib/utils";

interface ContactButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function ContactButton({ className, ...props }: ContactButtonProps) {
  return (
    <button
      onClick={() => window.open("https://www.linkedin.com/in/malav-patel-766196302/", "_blank")}
      className={cn(
        "rounded-full text-white font-medium uppercase tracking-widest outline-none",
        "px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base",
        "hover:scale-105 transition-transform duration-300",
        className
      )}
      style={{
        background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
        outline: "2px solid white",
        outlineOffset: "-3px"
      }}
      {...props}
    >
      Contact Me
    </button>
  );
}
