interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div className={`eyebrow mb-3 ${className}`}>
      {children}
    </div>
  );
}
