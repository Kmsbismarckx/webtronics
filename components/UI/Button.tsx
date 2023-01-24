import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <button ref={ref} {...props}>
      {props.children}
    </button>
  );
});

export default Button;
