interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  title,
  subtitle,
  eyebrow,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const itemAlign = align === "center" ? "mx-auto" : "";

  return (
    <div className={`mb-16 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className={`text-sm uppercase tracking-[0.2em] font-medium text-primary mb-3 ${itemAlign}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6 ${itemAlign}`}>{title}</h2>
      {subtitle && (
        <p className={`text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed ${itemAlign}`}>{subtitle}</p>
      )}
    </div>
  );
}
