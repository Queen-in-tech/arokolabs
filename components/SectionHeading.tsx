interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

const SectionHeading = ({ label, title, description, className = "" }: SectionHeadingProps) => {
  return (
    <div className={`mb-10 text-center ${className}`}>
      {label && (
        <span className="mb-3 inline-block font-display text-xs font-semibold uppercase tracking-widest text-primary">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 font-body text-base text-muted-foreground">{description}</p>
      )}
    </div>
  );
};

export default SectionHeading;
