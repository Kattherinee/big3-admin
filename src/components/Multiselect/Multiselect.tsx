import { useState, useEffect } from "react";

import styles from "./Multiselect.module.css";
import cn from "classnames";

export interface SelectOption {
  id: number;
  name: string;
}

interface MultiSelectProps {
  multiple: true;
  value?: SelectOption[];
  onChange: (value: SelectOption[]) => void;
}

interface SingleSelectProps {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
}

type SelectProps = {
  options: SelectOption[];
} & (MultiSelectProps | SingleSelectProps);

export function Select({ multiple, value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }

  function selectOption(option: SelectOption) {
    if (multiple) {
      const selectedValues = (value as SelectOption[]) || [];
      if (selectedValues.includes(option)) {
        onChange(selectedValues.filter((o) => o.id !== option.id));
      } else {
        onChange([...selectedValues, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  }

  function isOptionSelected(option: SelectOption) {
    return multiple ? value?.includes(option) : option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);
  return (
    <div
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      className={styles.container}
    >
      <span className={styles.value}>
        {multiple
          ? value?.map((v) => (
              <div
                key={v.id}
                onClick={(e) => {
                  e.stopPropagation(), selectOption(v);
                }}
                className={styles["option-card"]}
              >
                {v.name}
                <img
                  src="src\assets\icon\close_24px.svg"
                  alt="&times;"
                  className={styles["remove-btn"]}
                />
              </div>
            ))
          : value?.name}
      </span>

      <button
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
        className={styles["clear-btn"]}
      >
        &times;
      </button>

      <div className={styles.divider}></div>
      <div className={styles.caret}>
        <img src="src\assets\icon\expand_more_24px.svg" alt="▼" />
      </div>

      <ul className={cn(styles.options, isOpen ? styles.show : "")}>
        {options.map((option, index) => (
          <li
            onClick={() => {
              selectOption(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.id}
            className={cn(
              styles.option,
              isOptionSelected(option) ? styles.selected : "",
              index === highlightedIndex ? styles.highlighted : ""
            )}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
