import React, { useState } from "react";
import Search from "../../../components/search/Search";
import Button from "../../../components/Button/Button";
import {
  Select,
  SelectOption,
} from "../../../components/Multiselect/Multiselect";
import styles from "./PlayersPage.module.css";
import PlayerCard from "../components/PlayerCard/PlayerCard";

const options = [
  { name: "Denver Nuggets", id: 1098 },
  { name: "Portland trail blazers", id: 1011 },
  { name: "Minnesota timberwolves", id: 1023 },
  { name: "Philadelphia", id: 1021 },
];

export const PlayersPage: React.FC = () => {
  const [value, setValue] = useState<SelectOption[] | undefined>();
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.head}>
            <Search />
            <Select
              multiple
              options={options}
              value={value}
              onChange={(o) => setValue(o)}
            />
            <Button appearence="add">Add +</Button>
          </div>
          <div className={styles.cards}>
            <PlayerCard />
          </div>
        </main>
      </div>
    </>
  );
};
