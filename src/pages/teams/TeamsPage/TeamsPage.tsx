import { useEffect, useState } from "react";
import Search from "../../../ui/search/Search";
import Button from "../../../ui/Button/Button";
import TeamCard from "../components/TeamsCard/TeamCard";
import { RootState, AppDispatch } from "../../../core/redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchTeams } from "../../../core/redux/teamsThunks/fetchTeamsThunk";
import styles from "./TeamsPage.module.css";
import { useNavigate } from "react-router-dom";
import cn from "classnames";
import ReactPaginate from "react-paginate";
import PageSelect from "../../../ui/PageSelect/PageSelect";
import { Spinner } from "../../../ui/Spinner/Spinner";
import left from "/src/assets/icon/chevron_left_24px.svg";
import right from "/src/assets/icon/chevron_right_24px.svg";
import empty from "/src/assets/images/emptyHere.png";

export const TeamsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: teams,
    count: totalTeams,
    status,
  } = useSelector((state: RootState) => state.teams);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchTeams({ name: searchQuery, page, pageSize }));
  }, [dispatch, page, pageSize, searchQuery]);

  const handleCardClick = (id: number) => {
    navigate(`/teams/${id}`);
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  const leftArrow = <img src={left} alt="Previous Page" />;
  const rightArrow = <img src={right} alt="Next Page" />;

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setPage(1);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query.trim());
    setPage(1);
  };

  const getGridStyle = () => {
    if (pageSize === 6) return styles.six;
    if (pageSize === 12) return styles.twelve;
    return styles.twentyfour;
  };

  const filteredTeams = teams.filter((team) => team.name.includes(searchQuery));

  return (
    <div className={cn(styles.container)}>
      <main className={styles.main}>
        <div className={styles.head}>
          <Search onSearch={handleSearch} className={styles.search} />
          <Button
            appearence="add"
            onClick={() => navigate("/teams/add_new_team")}
            className={styles.button}
          >
            Add +
          </Button>
        </div>

        <div
          className={cn(
            styles.cards,
            getGridStyle(),
            filteredTeams.length === 0 ? styles.empty : ""
          )}
        >
          {status === "loading" && <Spinner />}
          {status === "succeeded" &&
            filteredTeams.map((team) => (
              <TeamCard
                key={team.id}
                team={team}
                onClick={() => handleCardClick(team.id)}
              />
            ))}
          {status === "succeeded" && filteredTeams.length === 0 && (
            <div className={styles.emptyPage}>
              <img src={empty} alt="Empty" />
              <div className={styles.headText}>Empty here</div>
              <div className={styles.text}>Add new teams to continue</div>
            </div>
          )}

          {status === "failed" && (
            <p className={styles.errorLoad}>Failed to load teams</p>
          )}
        </div>

        <div className={styles["pagination-container"]}>
          <ReactPaginate
            previousLabel={leftArrow}
            nextLabel={rightArrow}
            breakLabel={"..."}
            pageCount={Math.ceil(totalTeams / pageSize)}
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
  );
};
