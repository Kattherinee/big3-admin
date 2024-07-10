import styles from "./Checkbox.module.css";
import cn from "classnames";
import { forwardRef } from "react";

interface CheckboxProps {
  label: string;
  disabled?: boolean;
  error?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, disabled, error, checked, onChange }, ref) => {
    const handleCheckboxChange = () => {
      if (!disabled && onChange) {
        onChange(!checked);
      }
    };

    return (
      <div className={cn(styles.container)} onClick={handleCheckboxChange}>
        <input
          type="checkbox"
          className={cn(styles.input)}
          checked={checked}
          readOnly
          ref={ref}
        />
        <span
          className={cn(
            styles.custom,
            checked ? styles.checked : "",
            disabled ? styles.disabled : "",
            error ? styles.errorCustom : ""
          )}
        >
          <img src="/src/assets/icon/ok.svg" alt="✔" />
        </span>
        <span
          className={cn(
            styles.label,
            disabled ? styles.disabled : "",
            error ? styles.errorLabel : ""
          )}
        >
          {label}
        </span>
      </div>
    );
  }
);

export default Checkbox;
