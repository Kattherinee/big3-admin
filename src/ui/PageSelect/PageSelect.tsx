import styles from "./PageSelect.module.css";
import { useState } from "react";

interface CustomSelectProps {
  options: number[];
  value: number;
  onChange: (value: number) => void;
}

const PageSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: number) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles["select-container"]} onClick={handleToggle}>
      <div className={styles["custom-select"]}>
        <div className={styles["select-value"]}> {value}</div>
        <div className={styles.divider}></div>
        <img src="/src/assets/icon/expand_more_24px.svg" alt="" />
      </div>
      {isOpen && (
        <div className={styles["select-options"]}>
          {options.map((option) => (
            <div key={option} onClick={() => handleSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PageSelect;
