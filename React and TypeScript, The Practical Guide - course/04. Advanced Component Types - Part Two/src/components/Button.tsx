import { ComponentPropsWithoutRef } from "react";

type BtnProps = {
  el: "btn";
  text: string;
} & ComponentPropsWithoutRef<"button">;

type LinkProps = {
  el: "link";
  text: string;
} & ComponentPropsWithoutRef<"a">;

function Button(props: BtnProps | LinkProps) {
  if (props.el === "link") {
    const { el, text, ...otherProps } = props;
    return <a {...otherProps}>{text}</a>;
  }

  const { el, text, ...otherProps } = props;
  return <button {...otherProps}>{text}</button>;
}

export default Button;
