import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "../../../../core/redux/store/store";
import { getPlayerThunk } from "../../../../core/redux/playersThunks/getPlayerThunk";
import { deletePlayerThunk } from "../../../../core/redux/playersThunks/deletePlayerThunk";
import styles from "./PlayerDetailPage.module.css";
import BreadCrumbs from "../../../../components/BreadCrumbs/BreadCrumbs";

const PlayerDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { currentPlayer, currentPlayerStatus, currentPlayerError } =
    useSelector((state: RootState) => state.players);

  useEffect(() => {
    if (id) {
      dispatch(getPlayerThunk({ id: parseInt(id) }));
    }
  }, [dispatch, id]);

  const handleEditClick = () => {
    navigate(`/players/update/${id}`);
  };

  const handleDeleteClick = async () => {
    if (id) {
      await dispatch(deletePlayerThunk(parseInt(id)));
      navigate("/players");
    }
  };

  const calculateAge = (birthday: string): number => {
    const birthDate = new Date(birthday);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      return age - 1;
    }
    return age;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.breadcrumbs}>
          <BreadCrumbs />
        </div>
        <div className={styles.icons}>
          <img
            src="/src/assets/icon/create.svg"
            alt="Edit"
            onClick={handleEditClick}
          />
          <img
            src="/src/assets/icon/delete.svg"
            alt="Delete"
            onClick={handleDeleteClick}
          />
        </div>
      </div>
      {currentPlayerStatus === "loading" && <p>Loading...</p>}
      {currentPlayerStatus === "failed" && <p>Error: {currentPlayerError}</p>}
      {currentPlayerStatus === "succeeded" && currentPlayer && (
        <div className={styles.details}>
          <div className={styles.avatarContainer}>
            <img src={currentPlayer.avatarUrl} alt={currentPlayer.name} />
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.name}>
              {currentPlayer.name} <span>#{currentPlayer.number}</span>
            </div>
            <div className={styles.shorts}>
              <div className={styles.info}>
                <p className={styles.infoHead}>Position</p>{" "}
                {currentPlayer.position}
              </div>
              <div className={styles.info}>
                <p className={styles.infoHead}>Team</p> {currentPlayer.teamName}
              </div>
            </div>
            <div className={styles.shorts}>
              <div className={styles.info}>
                <p className={styles.infoHead}>Height</p>
                {currentPlayer.height} cm
              </div>
              <div className={styles.info}>
                <p className={styles.infoHead}>Weight</p> {currentPlayer.weight}{" "}
                kg
              </div>
            </div>
            <div className={styles.info}>
              <p className={styles.infoHead}>Age</p>
              {calculateAge(currentPlayer.birthday)} years
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerDetailPage;
