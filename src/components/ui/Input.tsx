import React, { ComponentProps, useState } from "react";

interface IInputProps extends ComponentProps<"input"> {
  isError?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ className, isError, ...props }: IInputProps, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className={`outline-none border py-3 px-2 rounded-[10px] w-full ${
          isError ? "border-red text-red" : "border-grey"
        } ${className}`}
      />
    );
  }
);
