import { Loader2 } from "lucide-react";

import { ButtonProps } from "./types";

export default function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  icon,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const base =
    "rounded-full font-medium flex items-center justify-center gap-2 cursor-pointer";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className} disabled:opacity-50`}
      disabled={isLoading || rest.disabled}
      {...rest}
    >
      {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : icon}
      {children}
    </button>
  );
}
