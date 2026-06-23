import { MotionDiv } from "@/components/MotionDiv";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ label, title, description, align = "center" }: SectionHeadingProps) => (
  <MotionDiv
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
  >
    {label && (
      <span className="mb-3 inline-block font-display text-xs font-semibold uppercase tracking-widest text-primary">
        {label}
      </span>
    )}
    <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
      {title}
    </h2>
    {description && (
      <p className="mx-auto mt-4 max-w-2xl font-body text-base text-muted-foreground md:text-lg">
        {description}
      </p>
    )}
  </MotionDiv>
);

export default SectionHeading;
