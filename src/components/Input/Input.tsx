import { forwardRef } from "react";
import styles from "./Input.module.css";
//import cn from "classnames";
import { InputProps } from "./Input.props";

const InputField = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, label, error, required, ...props },
  ref
) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <input
        ref={ref}
        className={`${styles.input} ${error ? styles.errorInput : ""}`}
        type="text"
        required={required}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
  // return (
  //   <div className={cn(styles.inputContainer)}>
  //     <label className={cn(styles.label)}>{label}</label>
  //     <input
  //       ref={ref}
  //       className={cn(styles.input, { [styles.errorInput]: error })}
  //       type="text"
  //       required={required}
  //       {...props}
  //     />
  //     {error && <span className={styles.errorMessage}>{error}</span>}
  //   </div>
  // );
});

export default InputField;
