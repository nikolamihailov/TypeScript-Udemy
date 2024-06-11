import { ComponentPropsWithoutRef } from "react";

type InputProps = {
  labelText: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

function Input({ labelText, id, ...props }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{labelText}</label>
      <input id={id} {...props} />
    </p>
  );
}

export default Input;
