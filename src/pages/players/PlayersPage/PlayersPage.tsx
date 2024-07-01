import React, { useState } from "react";
import Search from "../../../components/search/Search";
import Button from "../../../components/Button/Button";
import {
  Select,
  SelectOption,
} from "../../../components/Multiselect/Multiselect";
import styles from "./PlayersPage.module.css";
import PlayerCard from "../components/PlayerCard/PlayerCard";

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiRWNhdGVyaW5hIiwidGVuYW50IjoiMTA4NCIsIm5iZiI6MTcxOTgyNjc1NSwiZXhwIjoxNzE5OTEzMTU1LCJpc3MiOiJUZXN0LUJhY2tlbmQtMSIsImF1ZCI6IkJhc2tldEJhbGxDbHViU2FtcGxlIn0.GWQGn6grIy8Wn1IURczJgOoHEUHhpkMVbBQq-XwSSL8";

// axios
//   .get("http://dev.trainee.dex-it.ru/api/Team/GetTeams", {
//     headers: {
//       accept: "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });
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
