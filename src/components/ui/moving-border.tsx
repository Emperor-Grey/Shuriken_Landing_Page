import React from "react";
import { cn } from "../../lib/utils";

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
  as: Component = "div",
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: any;
}) => {
  return (
    <Component
      className={cn(
        "relative cursor-pointer bg-dark-950/80 backdrop-blur-3xl p-[1px] transition-all hover:scale-105",
        containerClassName
      )}
    >
      <div
        className={cn("absolute inset-0 rounded-[inherit]", borderClassName)}
        style={{
          background:
            "linear-gradient(var(--angle), #0EA5E9, #38BDF8, #0EA5E9, #38BDF8)",
          animation: `rotation ${duration}ms linear infinite`,
          "--angle": "0deg",
        } as React.CSSProperties}
      />

      <div className={cn(
        "relative bg-dark-950/90 backdrop-blur-xl rounded-[inherit]",
        "before:absolute before:inset-0 before:bg-gradient-radial before:from-dark-950/5 before:to-dark-950/80 before:rounded-[inherit]",
        className
      )}>
        {children}
      </div>

      <style>
        {`
          @property --angle {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
          }

          @keyframes rotation {
            to {
              --angle: 360deg;
            }
          }
        `}
      </style>
    </Component>
  );
};