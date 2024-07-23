import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../../core/redux/store/store";
import { fetchPlayersThunk } from "../../../../core/redux/playersThunks/fetchPlayersThunk";
import styles from "./TeamDetailPage.module.css";
import TeamInfoDetail from "../../../../components/TeamInfoDetail/TeamInfoDetail";
import TeamRosterTable from "../../../../components/TeamRosterTable/TeamRosterTable";

export const TeamDetailPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const teamId = useSelector((state: RootState) => state.teams.currentTeam?.id);

  useEffect(() => {
    dispatch(fetchPlayersThunk({}));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <TeamInfoDetail />
      <TeamRosterTable teamId={teamId} />
    </div>
  );
};

export default TeamDetailPage;
