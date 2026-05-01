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
    <div className={`mb-12 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className={`text-xs uppercase tracking-widest text-text-muted mb-2 ${itemAlign}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-bold text-text-primary mb-4 ${itemAlign}`}>{title}</h2>
      {subtitle && (
        <p className={`mt-3 text-lg text-text-secondary max-w-xl ${itemAlign}`}>{subtitle}</p>
      )}
    </div>
  );
}
