import { useEffect } from "react";
import Search from "../../../ui/search/Search";
import Button from "../../../ui/Button/Button";
import TeamCard from "../components/TeamsCard/TeamCard";
import { RootState, AppDispatch } from "../../../core/redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchTeams } from "../../../core/redux/teamsThunks/fetchTeamsThunk";
import styles from "./TeamsPage.module.css";
import { useNavigate } from "react-router-dom";
import cn from "classnames";

export const TeamsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: teams, status } = useSelector(
    (state: RootState) => state.teams
  );
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchTeams({ name: "", page: 1, pageSize: 6 }));
  }, [dispatch]);

  useEffect(() => {
    console.log(teams);
  }, [teams]);

  return (
    <>
      <div className={cn(styles.container)}>
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
          <div
            className={cn(styles.cards, teams.length === 0 ? styles.empty : "")}
          >
            {status === "loading" && <p>Loading...</p>}
            {status === "succeeded" &&
              teams.map((team) => <TeamCard key={team.id} team={team} />)}
            {status === "succeeded" && teams.length === 0 && (
              <div className={styles.emptyPage}>
                <img
                  src="/src/assets/images/emptyHere.png"
                  alt="Play BasketBall)"
                />
                <div className={styles.headText}>Empty here</div>
                <div className={styles.text}>Add new teams to continue</div>
              </div>
            )}
            {status === "failed" && <p>Failed to load teams</p>}
          </div>
        </main>
      </div>
    </>
  );
};
