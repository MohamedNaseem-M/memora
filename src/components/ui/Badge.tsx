interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "indigo" | "teal" | "amber" | "rose" | "violet";
  size?: "sm" | "md";
  className?: string;
}

const variantClasses = {
  default: "bg-white/5 text-slate-300 border-white/10",
  indigo:  "bg-indigo-950/60 text-indigo-300 border-indigo-700/40",
  teal:    "bg-teal-950/60 text-teal-300 border-teal-700/40",
  amber:   "bg-amber-950/60 text-amber-300 border-amber-700/40",
  rose:    "bg-rose-950/60 text-rose-300 border-rose-700/40",
  violet:  "bg-violet-950/60 text-violet-300 border-violet-700/40",
};

const sizeClasses = {
  sm: "px-2.5 py-0.5 text-xs",
  md: "px-3.5 py-1 text-xs",
};

export function Badge({
  children,
  variant = "default",
  size = "md",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center font-mono font-semibold uppercase tracking-wider
        border rounded-full
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
