// TeamCard.tsx
import React from "react";
import styles from "./TeamCard.module.css";
import { TeamDto } from "../../../../api/dto/TeamsDtos/TeamDto";

interface TeamCardProps {
  team: TeamDto;
  onClick: () => void;
}

const TeamCard: React.FC<TeamCardProps> = ({ team, onClick }) => {
  const placeholderImage = "path/to/placeholder/image.png";

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.head}>
        <img
          src={team.imageUrl || placeholderImage}
          alt="team logo"
          className={styles.logo}
        />
      </div>
      <div className={styles.details}>
        <span className={styles.name}>{team.name}</span>
        <span className={styles.year}>
          Year of foundation: {team.foundationYear}
        </span>
      </div>
    </div>
  );
};

export default TeamCard;
