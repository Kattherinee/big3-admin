import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import styles from "./TeamInfoDetail.module.css";
import { RootState, AppDispatch } from "../../core/redux/store/store";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTeamThunk } from "../../core/redux/teamsThunks/getTeamThunk";
import { deleteTeamThunk } from "../../core/redux/teamsThunks/deleteTeamThunk";
import { Spinner } from "../../ui/Spinner/Spinner";
import create from "/src/assets/icon/create.svg";
import remove from "/src/assets/icon/delete.svg";

const TeamInfoDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { currentTeam, currentTeamStatus, currentTeamError } = useSelector(
    (state: RootState) => state.teams
  );

  useEffect(() => {
    if (id) {
      dispatch(getTeamThunk({ id: parseInt(id) }));
    }
  }, [dispatch, id]);

  const handleEditClick = () => {
    navigate(`/teams/update/${id}`);
  };

  const handleDeleteClick = async () => {
    if (id) {
      await dispatch(deleteTeamThunk(parseInt(id)));
      navigate("/teams");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.breadcrumbs}>
          <BreadCrumbs />
        </div>
        <div className={styles.icons}>
          <img src={create} alt="Edit" onClick={handleEditClick} />
          <img src={remove} alt="Delete" onClick={handleDeleteClick} />
        </div>
      </div>
      {currentTeamStatus === "loading" && (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      )}
      {currentTeamStatus === "failed" && (
        <div className={styles.errorContainer}>
          <p className={styles.errors}>Error: {currentTeamError}</p>
        </div>
      )}
      {currentTeamStatus === "succeeded" && currentTeam && (
        <div className={styles.details}>
          <div className={styles.avatarContainer}>
            <img src={currentTeam.imageUrl} alt={currentTeam.name} />
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.name}>{currentTeam.name}</div>
            <div className={styles.shorts}>
              <div className={styles.info}>
                <p className={styles.infoHead}>Year of Foundation</p>
                {currentTeam.foundationYear}
              </div>
              <div className={styles.info}>
                <p className={styles.infoHead}>Division</p>
                {currentTeam.division}
              </div>
            </div>

            <div className={styles.info}>
              <p className={styles.infoHead}>Conference</p>
              {currentTeam.conference}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamInfoDetail;
