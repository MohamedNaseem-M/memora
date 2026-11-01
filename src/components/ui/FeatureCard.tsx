import type { FeatureCardData } from "@/types";

interface FeatureCardProps extends FeatureCardData {
  className?: string;
}

const accentBorderMap = {
  indigo: "hover:border-indigo-600/40",
  teal:   "hover:border-teal-600/40",
  violet: "hover:border-violet-600/40",
  amber:  "hover:border-amber-600/40",
};

const accentIconBgMap = {
  indigo: "bg-indigo-950/70 text-indigo-400 border-indigo-800/50",
  teal:   "bg-teal-950/70 text-teal-400 border-teal-800/50",
  violet: "bg-violet-950/70 text-violet-400 border-violet-800/50",
  amber:  "bg-amber-950/70 text-amber-400 border-amber-800/50",
};

export function FeatureCard({
  icon,
  title,
  description,
  accent = "indigo",
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`
        glass-card p-6 flex flex-col gap-4
        ${accentBorderMap[accent]}
        ${className}
      `}
    >
      <div
        className={`
          w-11 h-11 rounded-xl border flex items-center justify-center
          flex-shrink-0
          ${accentIconBgMap[accent]}
        `}
        aria-hidden="true"
      >
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-slate-100 text-base mb-1.5 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
