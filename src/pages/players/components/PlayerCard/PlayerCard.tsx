import React from "react";
import styles from "./PlayerCard.module.css";
// import { Team } from "../../../Team";

// interface TeamCardprops {
//   team: Team;
// }

const PlayerCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <img
          src="src\assets\images\photo.png"
          alt="player's photo"
          className={styles.logo}
        />
      </div>

      <div className={styles.details}>
        <span className={styles.name}>
          Jaylen Adams <span className={styles.number}>#10</span>
        </span>
        <span className={styles.year}>Portland trail blazers</span>
      </div>
    </div>
  );
};

export default PlayerCard;
