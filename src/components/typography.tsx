import React from "react";
import clsx from "clsx";

export const VARIANTS = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
} as const;

type VariantType = keyof typeof VARIANTS;
type HeadingVariant = "lg" | "md" | "sm" | "xs";
type ParagraphVariant = "md" | "sm" | "xs";
type ColorVariant = "default" | "muted" | "primary" | "error";

type VariantElement<V extends VariantType> = V extends "p"
  ? HTMLParagraphElement
  : HTMLHeadingElement;

interface TypographyProps<V extends VariantType>
  extends React.HTMLAttributes<VariantElement<V>> {
  variant: V;
  children: React.ReactNode;
  headingSize?: HeadingVariant;
  paragraphSize?: ParagraphVariant;
  color?: ColorVariant;
  truncate?: boolean;
}

const STYLES = {
  heading: {
    lg: "text-base lg:text-5xl 2xl:text-5xl",
    md: "text-2xl md:text-3xl 2xl:text-4xl leading-snug",
    sm: "text-xl 2xl:text-2xl leading-relaxed",
    xs: "text-sm lg:text-lg leading-relaxed",
  },
  paragraph: {
    md: "text-base md:text-lg 2xl:text-xl leading-relaxed text-gray-600",
    sm: "text-sm md:text-base 2xl:text-lg leading-normal text-gray-600",
    xs: "text-sm 2xl:text-lg",
  },
  color: {
    default: "text-black",
    muted: "text-gray-600 dark:text-gray-400",
    primary: "text-primary dark:text-primary-dark",
    error: "text-red-600 dark:text-red-400",
  },
} as const;

export const Typography = React.forwardRef(
  <V extends VariantType>(
    {
      variant,
      children,
      className,
      headingSize = "lg",
      paragraphSize = "md",
      color = "default",
      truncate = false,
      ...props
    }: TypographyProps<V>,
    ref: React.Ref<VariantElement<V>>,
  ) => {
    const isHeading = variant !== "p";
    const Component: React.ElementType = variant;

    const styles = clsx(
      STYLES.color[color],
      isHeading ? STYLES.heading[headingSize] : STYLES.paragraph[paragraphSize],
      truncate && "truncate",
      className,
    );

    return (
      <Component className={styles} ref={ref} {...props}>
        {children}
      </Component>
    );
  },
);

Typography.displayName = "Typography";

export default Typography;
