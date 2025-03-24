import { ReactNode, ElementType } from "react";

export interface GradientTextProps {
  children: ReactNode;
  fromColor?: string;
  toColor?: string;
  as?: ElementType;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}
