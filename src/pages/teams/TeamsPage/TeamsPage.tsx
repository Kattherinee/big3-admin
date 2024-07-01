import React from "react";
import Search from "../../../components/search/Search";
import Button from "../../../components/Button/Button";
import TeamCard from "../components/TeamList/TeamCard/TeamCard";

import styles from "./TeamsPage.module.css";

export const TeamsPage: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.head}>
            <Search />
            <Button appearence="add">Add +</Button>
          </div>
          <div className={styles.cards}>
            <TeamCard />
            <TeamCard />
          </div>
        </main>
      </div>
    </>
  );
};
