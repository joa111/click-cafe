import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center justify-center", className)}>
      <svg
        className="h-14 w-14"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="98" fill="white" stroke="black" strokeWidth="2" />
        <text
          x="50%"
          y="42%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-headline font-bold text-4xl"
        >
          <tspan>CL</tspan>
          <tspan fill="#D4271E">!</tspan>
          <tspan>CK</tspan>
        </text>
        <text
          x="50%"
          y="62%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-headline font-bold text-4xl"
        >
          CAFE
        </text>
        <text
          x="50%"
          y="80%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-body text-[10px] tracking-widest"
        >
          ESTD. 2020
        </text>
      </svg>
      <span className="sr-only">Click Cafe Logo</span>
    </Link>
  );
}
