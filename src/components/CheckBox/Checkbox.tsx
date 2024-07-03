import styles from "./Checkbox.module.css";
import cn from "classnames";

interface CheckboxProps {
  label: string;
  disabled?: boolean;
  error?: boolean;
  checked?: boolean;

  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  disabled,
  error,
  checked,
  onChange,
}) => {
  const handleCheckboxChange = () => {
    if (!disabled) {
      if (onChange) {
        onChange(!checked);
      }
    }
  };
  return (
    <div
      className={cn(
        styles.container,

        error ? styles.error : ""
      )}
      onClick={handleCheckboxChange}
    >
      <input type="checkbox" className={styles.input} />
      <span
        className={cn(
          styles["custom"],
          checked ? styles.checked : "",
          disabled ? styles.disabled : ""
        )}
        onChange={handleCheckboxChange}
      >
        <img src="/src/assets/icon/ok.svg" alt="✔" />
      </span>
      <span />
      <span className={cn(styles["label"], disabled ? styles.disabled : "")}>
        {label}
      </span>
    </div>
  );
};

export default Checkbox;
