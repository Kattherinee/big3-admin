// TeamCard.tsx
import React from "react";
import styles from "./TeamCard.module.css";
import { TeamDto } from "../../../../api/dto/TeamsDtos/TeamDto";

interface TeamCardProps {
  team: TeamDto;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  const placeholderImage = "path/to/placeholder/image.png"; // Укажите путь к placeholder изображению

  return (
    <div className={styles.card}>
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
