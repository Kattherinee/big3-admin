import { forwardRef, useState } from "react";
import styles from "./Search.module.css";
import cn from "classnames";
import { SearchProps } from "./Search.props";

const Search = forwardRef<HTMLInputElement, SearchProps>(function Search(
  { className, ...props },
  ref
) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      console.log(`Searching for: ${query}`);
      // Ваша логика поиска
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input
        ref={ref}
        className={cn(styles.search, className)}
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        {...props}
      />
      <span className={styles.searchIcon} onClick={handleSearch}>
        <img src="src\assets\icon\search.svg" alt="" />
      </span>
    </div>
  );
});

export default Search;
