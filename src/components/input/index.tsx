import { InputProps } from "./types";

export default function Input({
  iconLeft,
  iconRight,
  className = "",
  ...rest
}: InputProps) {
  return (
    <div className="relative w-full">
      {iconLeft && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          {iconLeft}
        </div>
      )}

      <input
        {...rest}
        className={`w-full bg-white rounded-full p-3 pl-${
          iconLeft ? "10" : "4"
        } pr-${iconRight ? "10" : "4"} text-blue-700 outline-none ${className}`}
      />

      {iconRight && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          {iconRight}
        </div>
      )}
    </div>
  );
}
