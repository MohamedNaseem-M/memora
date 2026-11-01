import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-600 hover:border-indigo-500 shadow-lg shadow-indigo-900/30",
  secondary:
    "bg-white/5 hover:bg-white/10 text-slate-100 border border-white/10 hover:border-white/20",
  ghost:
    "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white border border-transparent",
  outline:
    "bg-transparent hover:bg-indigo-950/40 text-indigo-300 hover:text-indigo-200 border border-indigo-700/50 hover:border-indigo-500",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg gap-1.5",
  md: "px-5 py-2.5 text-sm rounded-xl gap-2",
  lg: "px-7 py-3.5 text-base rounded-xl gap-2.5",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    children,
    className = "",
    fullWidth = false,
    as,
    ...rest
  } = props;

  const baseClasses = `
    inline-flex items-center justify-center font-semibold
    transition-all duration-200 cursor-pointer select-none
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `.trim();

  if (as === "a") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as: _asDiscarded, ...anchorRest } = rest as ButtonAsAnchor & {
      as: "a";
    };
    return (
      <a className={baseClasses} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
