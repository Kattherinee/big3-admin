import React from "react";
import styles from "./TeamCard.module.css";
// import { Team } from "../../../Team";

// interface TeamCardprops {
//   team: Team;
// }

const TeamCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <img
          src="src\assets\images\POR 1.png"
          alt="team logo"
          className={styles.logo}
        />
      </div>

      <div className={styles.details}>
        <span className={styles.name}>Portland trail blazers</span>
        <span className={styles.year}>Year of foundation: 1970</span>
      </div>
    </div>
  );
};

export default TeamCard;
