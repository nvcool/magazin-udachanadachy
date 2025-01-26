import React, { ComponentProps } from "react";

interface ISelectProps extends ComponentProps<"select"> {
  options: { value: string; text: string; className?: string }[];
  isError?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, ISelectProps>(
  ({ options, className, isError, ...props }: ISelectProps, ref) => {
    return (
      <select
        {...props}
        ref={ref}
        className={`w-full border  py-3 px-2 rounded-[10px] ${
          isError ? "border-red text-red" : "border-grey"
        } ${className}`}>
        {options.map((option) => {
          return (
            <option
              className={option.className}
              key={option.value}
              value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
    );
  }
);
