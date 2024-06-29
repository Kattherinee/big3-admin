import { forwardRef } from "react";
import styles from "./Search.module.css";
import cn from "classnames";
import { SearchProps } from "./Search.props";

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input(
  { className, ...props },
  ref
) {
  return (
    <input ref={ref} className={cn(styles.search)} type="text" {...props} />
  );
});

export default Search;
