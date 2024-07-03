import { useState, forwardRef } from "react";
import styles from "./Input.module.css";
import cn from "classnames";
import { InputProps } from "./Input.props";
import showPasswordIcon from "/src/assets/icon/close_eye.svg";
import hidePasswordIcon from "/src/assets/icon/eye.svg";

const InputField = forwardRef<HTMLInputElement, InputProps>(function Input(
  { type = "text", className, error, ...props },
  ref
) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const isPassword = type === "password";
  const inputType = isPassword
    ? isPasswordVisible
      ? "text"
      : "password"
    : type;

  return (
    <div
      className={cn(styles.inputContainer, { [styles.errorContainer]: error })}
    >
      <input
        ref={ref}
        className={cn(styles.input, { [styles.error]: error })}
        type={inputType}
        {...props}
      />
      {isPassword && (
        <img
          src={isPasswordVisible ? hidePasswordIcon : showPasswordIcon}
          alt={isPasswordVisible ? "Hide password" : "Show password"}
          onClick={togglePasswordVisibility}
          className={styles.passwordToggleIcon}
        />
      )}
    </div>
  );
});

export default InputField;
