import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../core/redux/store/store";
import Search from "../../../ui/search/Search";
import Button from "../../../ui/Button/Button";
import CustomSelect, {
  SelectOption,
} from "../../../ui/Multiselect/Multiselect";
import styles from "./PlayersPage.module.css";
import PlayerCard from "../components/PlayerCard/PlayerCard";
import { fetchPlayersThunk } from "../../../core/redux/playersThunks/fetchPlayersThunk";
import { fetchTeams } from "../../../core/redux/teamsThunks/fetchTeamsThunk";
import { useNavigate } from "react-router-dom";
import cn from "classnames";
import ReactPaginate from "react-paginate";
import PageSelect from "../../../ui/PageSelect/PageSelect";

export const PlayersPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: players,
    count: totalPlayers,
    status: playersStatus,
  } = useSelector((state: RootState) => state.players);
  const { data: teams } = useSelector((state: RootState) => state.teams);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");
  const [value, setValue] = useState<SelectOption[]>([]);

  useEffect(() => {
    dispatch(fetchPlayersThunk({ name: searchQuery, page, pageSize }));
    dispatch(fetchTeams({ name: "", page: 1, pageSize: 100 }));
  }, [dispatch, page, pageSize, searchQuery]);

  const teamOptions: SelectOption[] = teams.map((team) => ({
    name: team.name,
    id: team.id,
  }));

  const handleCardClick = (id: number) => {
    navigate(`/players/${id}`);
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setPage(1);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase().trim());
    setPage(1);
  };

  const getGridStyle = () => {
    if (pageSize === 6) return styles.six;
    if (pageSize === 12) return styles.twelve;
    return styles.twentyfour;
  };

  const filteredPlayers = players.filter((player) =>
    value.length === 0 ? true : value.some((team) => team.id === player.team)
  );

  return (
    <>
      <div className={cn(styles.container)}>
        <main className={styles.main}>
          <div className={styles.head}>
            <Search onSearch={handleSearch} />
            <CustomSelect
              appearance="multi"
              options={teamOptions}
              value={value}
              placeholder="Select..."
              onChange={setValue}
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
              getGridStyle(),
              filteredPlayers.length === 0 ? styles.empty : ""
            )}
          >
            {playersStatus === "loading" && <p>Loading...</p>}
            {playersStatus === "succeeded" &&
              filteredPlayers.map((player) => (
                <PlayerCard
                  key={player.id}
                  player={player}
                  onClick={() => handleCardClick(player.id)}
                />
              ))}
            {playersStatus === "succeeded" && filteredPlayers.length === 0 && (
              <div className={styles.emptyPage}>
                <img
                  src="/src/assets/images/emptyPlayers.png"
                  alt="Play BasketBall"
                />
                <div className={styles.headText}>Empty here</div>
                <div className={styles.text}>Add new teams to continue</div>
              </div>
            )}
            {playersStatus === "failed" && <p>Failed to load players</p>}
          </div>

          <div className={styles["pagination-container"]}>
            <ReactPaginate
              previousLabel={
                <img
                  src="/src/assets/icon/chevron_left_24px.svg"
                  alt="Previous Page"
                />
              }
              nextLabel={
                <img
                  src="/src/assets/icon/chevron_right_24px.svg"
                  alt="Next Page"
                />
              }
              breakLabel={"..."}
              pageCount={Math.ceil(totalPlayers / pageSize)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              className={styles.pagination}
              activeClassName={styles.active}
            />
            <div className={styles.controls}>
              <label>
                <PageSelect
                  options={[6, 12, 24]}
                  value={pageSize}
                  onChange={handlePageSizeChange}
                />
              </label>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
