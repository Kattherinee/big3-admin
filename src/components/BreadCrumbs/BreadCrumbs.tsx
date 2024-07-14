import React from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "./BreadCrumbs.module.css";
import { breadcrumbsMap } from "./breadcrumbsMap";

const BreadСrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const basePath = pathnames[0];
  const basePathUrl = `/${basePath}`;

  return (
    <nav className={styles.breadcrumbs}>
      {breadcrumbsMap[basePathUrl] && (
        <Link to={basePathUrl}>{breadcrumbsMap[basePathUrl]}</Link>
      )}
      {pathnames.slice(1).map((value, index) => {
        const to = `/${pathnames.slice(0, index + 2).join("/")}`;
        const breadcrumbName = breadcrumbsMap[to] || value;

        return (
          <React.Fragment key={to}>
            <span className={styles.separator}>/</span>
            <Link to={to}>{breadcrumbName}</Link>
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default BreadСrumbs;
