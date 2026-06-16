import { ArrowRight } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "light";
  children: ReactNode;
};

export function LinkButton({
  variant = "primary",
  children,
  className = "",
  ...props
}: LinkButtonProps) {
  return (
    <a className={`button button--${variant} ${className}`.trim()} {...props}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={18} strokeWidth={1.75} />
    </a>
  );
}
