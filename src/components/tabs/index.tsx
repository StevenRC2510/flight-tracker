"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { TabsProps } from "./types";

export default function Tabs({
  options,
  defaultTab = options[0].value,
  activeTab,
  onTabChange,
  className = "",
  content,
}: TabsProps) {
  const isControlled = activeTab !== undefined;
  const [internalTab, setInternalTab] = useState(defaultTab);
  const currentTab = isControlled ? activeTab : internalTab;

  const handleChange = (value: string) => {
    if (!isControlled) setInternalTab(value);
    if (onTabChange) onTabChange(value);
  };

  return (
    <>
      <div
        className={`grid gap-4 mb-8 bg-gray-700 ${className}`}
        style={{
          gridTemplateColumns: `repeat(${options.length}, 1fr)`,
        }}
      >
        {options.map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleChange(tab.value)}
            className={`relative cursor-pointer px-4 py-2 rounded-md transition-colors duration-200 ${
              currentTab === tab.value
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            {tab.label}

            {currentTab === tab.value && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-1 bg-blue-400 rounded"
              />
            )}
          </button>
        ))}
      </div>

      <div className="mt-4">{content && content[currentTab]}</div>
    </>
  );
}
