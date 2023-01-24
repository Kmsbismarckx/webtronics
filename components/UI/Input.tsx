import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";
import { FieldErrors } from "react-hook-form";
import inputStyles from "../../styles/Input.module.scss";

type RefProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface InputProps extends RefProps {
  errors: FieldErrors | undefined;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { errors, name, className } = props;
  const [classes, setClasses] = useState([className ?? ""]);
  useEffect(() => {
    if (name && errors?.[name]) {
      setClasses([...classes, inputStyles.input__error]);
    }
  }, [errors]);
  return (
    <>
      <div className={inputStyles.container}>
        <input className="123" ref={ref} {...props} />
      </div>
      {name && errors?.[name] && (
        <p className={inputStyles.error__message}>
          {String(errors?.[name]?.message)}
        </p>
      )}
    </>
  );
});

export default Input;
