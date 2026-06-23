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
    {label && <span className="mb-3 inline-block font-display text-xs font-semibold uppercase tracking-widest text-[--color-primary]">{label}</span>}
    <h2 className="font-display text-3xl font-bold leading-tight text-[--color-foreground] md:text-4xl lg:text-5xl">{title}</h2>
    {description && <p className={`mt-4 font-body text-base text-[--color-muted-foreground] md:text-lg ${align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>{description}</p>}
  </MotionDiv>
);

export default SectionHeading;
