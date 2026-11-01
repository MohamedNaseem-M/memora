import { AlertTriangle, Info, CheckCircle, ShieldAlert } from "lucide-react";

type AlertVariant = "warning" | "info" | "success" | "critical";

interface AlertBannerProps {
  variant: AlertVariant;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const variantConfig: Record<
  AlertVariant,
  { bg: string; border: string; iconColor: string; Icon: React.ElementType }
> = {
  warning: {
    bg: "bg-amber-950/25",
    border: "border-amber-700/35",
    iconColor: "text-amber-400",
    Icon: AlertTriangle,
  },
  info: {
    bg: "bg-indigo-950/30",
    border: "border-indigo-700/35",
    iconColor: "text-indigo-400",
    Icon: Info,
  },
  success: {
    bg: "bg-teal-950/25",
    border: "border-teal-700/35",
    iconColor: "text-teal-400",
    Icon: CheckCircle,
  },
  critical: {
    bg: "bg-rose-950/25",
    border: "border-rose-700/35",
    iconColor: "text-rose-400",
    Icon: ShieldAlert,
  },
};

export function AlertBanner({
  variant,
  title,
  children,
  className = "",
}: AlertBannerProps) {
  const { bg, border, iconColor, Icon } = variantConfig[variant];

  return (
    <div
      role="note"
      className={`
        flex gap-4 rounded-xl border p-5 items-start
        ${bg} ${border} ${className}
      `}
    >
      <Icon
        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${iconColor}`}
        aria-hidden="true"
      />
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-slate-100 text-sm mb-1">{title}</p>
        <div className="text-sm text-slate-400 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
