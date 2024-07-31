import { forwardRef, useState, useEffect } from "react";
import styles from "./Search.module.css";
import cn from "classnames";
import { SearchProps } from "./Search.props";

const Search = forwardRef<HTMLInputElement, SearchProps>(function Search(
  { className, onSearch, ...props },
  ref
) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    onSearch(query);
  }, [query, onSearch]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        ref={ref}
        className={cn(styles.search, className)}
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        {...props}
      />
      <span className={styles.searchIcon}>
        <img src="/src/assets/icon/search.svg" alt="Search" />
      </span>
    </div>
  );
});

export default Search;
