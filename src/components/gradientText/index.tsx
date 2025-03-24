import { GradientTextProps } from "./types";

export default function GradientText({
  children,
  fromColor = "#006AFF",
  toColor = "#00F9FF",
  as: Tag = "p",
  size = "xl",
  className = "",
}: GradientTextProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
    xl: "text-[42px]",
  };

  return (
    <Tag
      className={`font-bold bg-gradient-to-r from-[${fromColor}] to-[${toColor}] bg-clip-text text-transparent ${sizeClasses[size]} ${className}`}
    >
      {children}
    </Tag>
  );
}
