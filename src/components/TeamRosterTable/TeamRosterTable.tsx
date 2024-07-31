import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../core/redux/store/store";
import { fetchPlayersThunk } from "../../core/redux/playersThunks/fetchPlayersThunk";
import styles from "./TeamRosterTable.module.css";

interface TeamRosterTableProps {
  teamId: number | undefined;
}

const TeamRosterTable: React.FC<TeamRosterTableProps> = ({ teamId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const players = useSelector((state: RootState) => state.players.data);
  const playersStatus = useSelector((state: RootState) => state.players.status);

  useEffect(() => {
    if (teamId !== null) {
      dispatch(fetchPlayersThunk({}));
    }
  }, [dispatch, teamId]);

  const teamPlayers = players.filter((player) => player.team === teamId);

  if (playersStatus === "loading") {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loading}>Loading...</div>
      </div>
    );
  }

  if (playersStatus === "failed") {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.error}>Error loading players</div>
      </div>
    );
  }
  return (
    <div className={styles.tableContainer}>
      <div className={styles.header}>Roster</div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Player</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {teamPlayers.map((player) => (
            <tr key={player.id}>
              <td>{player.number || "-"}</td>
              <td className={styles.playerInfo}>
                <img
                  src={player.avatarUrl}
                  alt={player.name}
                  className={styles.avatar}
                />
                <div className={styles.playerDetails}>
                  <div className={styles.playerName}>{player.name}</div>
                  <div className={styles.playerPosition}>{player.position}</div>
                </div>
              </td>
              <td>{player.height} cm</td>
              <td>{player.weight} kg</td>
              <td>
                {new Date().getFullYear() -
                  new Date(player.birthday).getFullYear()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamRosterTable;
