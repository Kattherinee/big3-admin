import styles from "./PlayerCard.module.css";
import { PlayerDto } from "../../../../api/dto/PlayersDtos/PlayerDto";
import { getTeamNameById } from "../../../../core/redux/teamsThunks/fetchTeamsThunk";
import { useSelector } from "react-redux";
import { RootState } from "../../../../core/redux/store/store";

interface PlayerCardProps {
  player: PlayerDto;
  onClick: () => void;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player, onClick }) => {
  const teams = useSelector((state: RootState) => state.teams.data);
  const teamsLoading = useSelector(
    (state: RootState) => state.teams.status === "loading"
  );

  const teamName = teamsLoading
    ? "Loading..."
    : getTeamNameById(player.team, teams);

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.head}>
        <img
          src={player.avatarUrl}
          alt="player's photo"
          className={styles.logo}
        />
      </div>

      <div className={styles.details}>
        <span className={styles.name}>
          {player.name} <span className={styles.number}>#{player.number}</span>
        </span>
        <span className={styles.team}>{teamName}</span>
      </div>
    </div>
  );
};

export default PlayerCard;
