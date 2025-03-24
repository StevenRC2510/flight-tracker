import { ReactNode } from "react";

export interface TabOption {
  label: string;
  value: string;
}

export interface TabsContentMap {
  [key: string]: ReactNode;
}

export interface TabsProps {
  options: TabOption[];
  defaultTab?: string;
  activeTab?: string;
  onTabChange?: (value: string) => void;
  className?: string;
  content?: TabsContentMap;
}
