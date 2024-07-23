import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../core/redux/store/store";
import Search from "../../../ui/search/Search";
import Button from "../../../ui/Button/Button";
import { Select, SelectOption } from "../../../ui/Multiselect/Multiselect";
import styles from "./PlayersPage.module.css";
import PlayerCard from "../components/PlayerCard/PlayerCard";
import { fetchPlayersThunk } from "../../../core/redux/playersThunks/fetchPlayersThunk";
import { useNavigate } from "react-router-dom";
import cn from "classnames";

export const PlayersPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: players, status } = useSelector(
    (state: RootState) => state.players
  );

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPlayersThunk({ name: "", page: 1, pageSize: 6 }));
  }, [dispatch]);

  const [value, setValue] = useState<SelectOption[] | undefined>();

  const playerOptions: SelectOption[] = players.map((player) => ({
    name: player.name,
    id: player.id,
  }));

  const handleCardClick = (id: number) => {
    navigate(`/players/${id}`);
  };

  return (
    <>
      <div className={cn(styles.container)}>
        <main className={styles.main}>
          <div className={styles.head}>
            <Search />
            <Select
              multiple
              options={playerOptions}
              value={value}
              placeholder="Select..."
              onChange={(o) => setValue(o)}
            />
            <Button
              appearence="add"
              onClick={() => navigate("/players/add_new_player")}
            >
              Add +
            </Button>
          </div>
          <div
            className={cn(
              styles.cards,
              players.length === 0 ? styles.empty : ""
            )}
          >
            {status === "loading" && <p>Loading...</p>}
            {status === "succeeded" &&
              players.map((player) => (
                <PlayerCard
                  key={player.id}
                  player={player}
                  onClick={() => handleCardClick(player.id)}
                />
              ))}
            {status === "succeeded" && players.length === 0 && (
              <div className={styles.emptyPage}>
                <img
                  src="/src/assets/images/emptyPlayers.png"
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
