// TeamsPage.tsx
import React, { useEffect } from "react";
import Search from "../../../ui/search/Search";
import Button from "../../../ui/Button/Button";
import TeamCard from "../components/TeamsCard/TeamCard";
import { RootState, AppDispatch } from "../../../core/redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchTeams } from "../../../core/redux/teamsThunks/fetchTeamsThunk";
import styles from "./TeamsPage.module.css";
import { useNavigate } from "react-router-dom";

export const TeamsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: teams, status } = useSelector(
    (state: RootState) => state.teams
  );
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchTeams({ page: 1, pageSize: 6 }));
  }, [dispatch]);

  useEffect(() => {
    console.log(teams);
  }, [teams]);

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.head}>
            <Search />
            <Button
              appearence="add"
              onClick={() => navigate("/teams/add_new_team")}
            >
              Add +
            </Button>
          </div>
          <div className={styles.cards}>
            {status === "loading" && <p>Loading...</p>}
            {status === "succeeded" &&
              teams.map((team) => <TeamCard key={team.id} team={team} />)}
            {status === "succeeded" && teams.length === 0 && (
              <p>No teams found</p>
            )}
            {status === "failed" && <p>Failed to load teams</p>}
          </div>
        </main>
      </div>
    </>
  );
};
