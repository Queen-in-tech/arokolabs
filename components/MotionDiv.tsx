"use client";
import { motion, type HTMLMotionProps } from "framer-motion";

export const MotionDiv = ({ children, ...props }: HTMLMotionProps<"div">) => (
  <motion.div {...props}>{children}</motion.div>
);

export const MotionSection = ({ children, ...props }: HTMLMotionProps<"section">) => (
  <motion.section {...props}>{children}</motion.section>
);

export const MotionArticle = ({ children, ...props }: HTMLMotionProps<"article">) => (
  <motion.article {...props}>{children}</motion.article>
);
