import { ReactNode } from "react";

export type CardLayoutProps = {
  leftContent: ReactNode;
  rightContent?: ReactNode;
  onClick?: () => void;
};
