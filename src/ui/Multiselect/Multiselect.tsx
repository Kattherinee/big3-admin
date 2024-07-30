import React, { useEffect, useState } from "react";
import Select, { StylesConfig, MultiValue, SingleValue } from "react-select";
import styles from "./Multiselect.module.css";

export interface SelectOption {
  id: number;
  name: string;
}

interface MultiSelectProps {
  appearance: "multi";
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
}

interface SingleSelectProps {
  appearance: "single";
  value: SelectOption | null;
  onChange: (value: SelectOption | null) => void;
}

type CustomSelectProps = {
  options: SelectOption[];
  placeholder?: string;
  error?: boolean;
} & (MultiSelectProps | SingleSelectProps);
const CustomSelect: React.FC<CustomSelectProps> = ({
  appearance,
  value,
  onChange,
  options,
  placeholder,
}) => {
  const [displayedValue, setDisplayedValue] = useState<SelectOption[]>([]);

  useEffect(() => {
    if (appearance === "multi" && value) {
      let width = 0;
      const newValue: SelectOption[] = [];
      let ellipsisAdded = false;

      const selectedAreaWidth =
        document.querySelector(".custom__value-container")?.clientWidth || 0;

      value.forEach((val, index) => {
        const itemWidth = getTextWidth(val.name, "14px Avenir-Book") + 30;
        const ellipsisWidth = getTextWidth("...", "14px Avenir-Book") + 30;

        if (width + itemWidth > selectedAreaWidth) {
          if (!ellipsisAdded && width + ellipsisWidth <= selectedAreaWidth) {
            newValue[newValue.length - 1] = { id: -1, name: "..." };
            ellipsisAdded = true;
          }
          return;
        } else {
          if (
            width + itemWidth + ellipsisWidth > selectedAreaWidth &&
            index === value.length - 1
          ) {
            newValue[newValue.length - 1] = { id: -1, name: "..." };
          } else {
            newValue.push(val);
            width += itemWidth + 8;
          }
        }
      });

      setDisplayedValue(newValue);
    }
  }, [value, appearance]);

  const handleChange = (
    selected:
      | MultiValue<{ value: number; label: string }>
      | SingleValue<{ value: number; label: string }>
  ) => {
    if (appearance === "multi") {
      onChange(
        (selected as MultiValue<{ value: number; label: string }>).map(
          (item) => ({
            id: item.value,
            name: item.label,
          })
        )
      );
    } else {
      const selectedOption = selected as SingleValue<{
        value: number;
        label: string;
      }>;
      onChange(
        selectedOption
          ? { id: selectedOption.value, name: selectedOption.label }
          : null
      );
    }
  };

  const formatOptions = options.map((option) => ({
    value: option.id,
    label: option.name,
  }));

  const customStyles: StylesConfig<{ value: number; label: string }, boolean> =
    {
      control: (base, state) => ({
        ...base,
        borderColor: "var(--lightest-grey)",
        borderRadius: "4px",
        boxShadow: state.isFocused ? "0px 0px 5px #d9d9d9" : "none",
        "&:hover": {
          boxShadow: "0px 0px 2px #d9d9d9",
        },
        height: "40px",
        display: "flex",
        alignItems: "center",
        width: "366px",
      }),
      multiValue: (base) => ({
        ...base,
        backgroundColor: "var(--red-default)",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        marginRight: "4px",
        height: "24px",
      }),
      multiValueLabel: (base) => ({
        ...base,
        color: "white",
      }),
      multiValueRemove: (base) => ({
        ...base,
        color: "white",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "20px",
        height: "20px",
        "&:hover": {
          color: " var(--lightest-grey)",
          background: "none",
        },
      }),
      dropdownIndicator: (base) => ({
        ...base,
        transform: "scale(0.8)",
        color: "var(--lightest-grey)",
        cursor: "pointer",
        "&:hover": {
          color: "var(--light-grey)",
        },
      }),
      clearIndicator: (base) => ({
        ...base,
        color: "var(--lightest-grey)",
        cursor: "pointer",
        transform: "scale(0.8)",
        "&:hover": {
          color: "var(--light-grey)",
        },
      }),

      menu: (base) => ({
        ...base,
        zIndex: 1000,
      }),
      option: (base, state) => ({
        ...base,
        borderBottom: "1px solid var(--lightest-grey)",
        backgroundColor: state.isSelected
          ? "var(--dark-red)"
          : state.isFocused
          ? "var(--dark-red)"
          : "white",
        color:
          state.isSelected || state.isFocused ? "white" : "var(--light-grey)",
        "&:active": {
          backgroundColor: "var(--dark-red)",
        },
      }),
    };

  const getTextWidth = (text: string, font: string) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (context) {
      context.font = font;
      return context.measureText(text).width;
    }
    return 0;
  };

  return (
    <Select
      isMulti={appearance === "multi"}
      value={
        appearance === "multi"
          ? displayedValue.map((val) => ({
              value: val.id,
              label: val.name,
            }))
          : value
          ? {
              value: (value as SelectOption).id,
              label: (value as SelectOption).name,
            }
          : null
      }
      onChange={handleChange}
      options={formatOptions}
      placeholder={placeholder}
      styles={customStyles}
      className={styles.selectContainer}
      classNamePrefix="custom"
    />
  );
};

export default CustomSelect;
