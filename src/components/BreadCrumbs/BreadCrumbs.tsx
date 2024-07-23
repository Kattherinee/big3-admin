import React from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "./BreadCrumbs.module.css";
import { breadcrumbsMap } from "./breadcrumbsMap";
import { useSelector } from "react-redux";
import { RootState } from "../../core/redux/store/store";

const BreadCrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const basePath = pathnames[0];
  const basePathUrl = `/${basePath}`;

  const currentPlayer = useSelector(
    (state: RootState) => state.players.currentPlayer
  );
  const currentTeam = useSelector(
    (state: RootState) => state.teams.currentTeam
  );

  return (
    <nav className={styles.breadcrumbs}>
      {breadcrumbsMap[basePathUrl] && (
        <Link to={basePathUrl}>{breadcrumbsMap[basePathUrl]}</Link>
      )}
      {pathnames.slice(1).map((value, index) => {
        const to = `/${pathnames.slice(0, index + 2).join("/")}`;
        let breadcrumbName = breadcrumbsMap[to] || value;

        if (basePath === "players" && !isNaN(Number(value)) && currentPlayer) {
          breadcrumbName = currentPlayer.name;
        }
        if (basePath === "teams" && !isNaN(Number(value)) && currentTeam) {
          breadcrumbName = currentTeam.name;
        }

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

export default BreadCrumbs;
