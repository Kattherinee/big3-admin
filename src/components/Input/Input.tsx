import { forwardRef } from "react";
import styles from "./Input.module.css";
//import cn from "classnames";
import { InputProps } from "./Input.props";

const InputField = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref
) {
  return <input ref={ref} className={styles.input} type="text" {...props} />;
});

export default InputField;
