import { useState, useEffect, useRef, createRef } from "react";
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
  placeholder?: string;
} & (MultiSelectProps | SingleSelectProps);

export function Select({
  multiple,
  value,
  onChange,
  options,
  placeholder,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const valueRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentWidth, setCurrentWidth] = useState(0);
  const [displayedValue, setDisplayedValue] = useState<SelectOption[]>([]);

  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
    setCurrentWidth(0);
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

  useEffect(() => {
    if (multiple && value && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      let width = 0;
      const newValue: SelectOption[] = [];
      let ellipsisAdded = false;

      for (let i = 0; i < value.length; i++) {
        const itemWidth = valueRefs.current[i]?.offsetWidth || 0;
        if (width + itemWidth > containerWidth) {
          if (!ellipsisAdded) {
            newValue.push({ id: -1, name: "..." });
            ellipsisAdded = true;
          }
          break;
        } else {
          newValue.push(value[i]);
          width += itemWidth;
        }
      }
      setDisplayedValue(newValue);
      setCurrentWidth(width);
    }
  }, [value, multiple, currentWidth]);

  return (
    <div
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      className={styles.container}
    >
      <span className={styles.value} ref={containerRef}>
        {multiple ? (
          displayedValue.length > 0 ? (
            displayedValue.map((v, index) =>
              v.id === -1 ? (
                <div key="ellipsis" className={styles["option-card"]}>
                  {v.name}
                </div>
              ) : (
                <div
                  key={v.id}
                  ref={(el) => (valueRefs.current[index] = el)}
                  onClick={(e) => {
                    e.stopPropagation(), selectOption(v);
                  }}
                  className={styles["option-card"]}
                >
                  {v.name}
                  <img
                    src="src/assets/icon/close_24px.svg"
                    alt="&times;"
                    className={styles["remove-btn"]}
                  />
                </div>
              )
            )
          ) : (
            <span className={styles.placeholder}>{placeholder}</span>
          )
        ) : (
          value?.name || (
            <span className={styles.placeholder}>{placeholder}</span>
          )
        )}
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
        <img src="src/assets/icon/expand_more_24px.svg" alt="▼" />
      </div>

      {isOpen && (
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
      )}
    </div>
  );
}
