import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { AppDispatch } from "../../../../core/redux/store/store";
import { RootState } from "../../../../core/redux/store/store";
import styles from "./PlayerForm.module.css";
import Button from "../../../../ui/Button/Button";
import InputField from "../../../../ui/Input/Input";
import ImageUpload from "../../../../components/ImageUpload/ImageUpload";
import cn from "classnames";
import { uploadImage } from "../../../../api/requests/uploadImageRequest";
import Breadcrumbs from "../../../../components/BreadCrumbs/BreadCrumbs";
import { addPlayerThunk } from "../../../../core/redux/playersThunks/addPlayerThunk";
import { Select, SelectOption } from "../../../../ui/Multiselect/Multiselect";
import { getPositionsThunk } from "../../../../core/redux/playersThunks/getPositionsThunk";
import { fetchTeams } from "../../../../core/redux/teamsThunks/fetchTeamsThunk";

interface FormValues {
  name: string;
  position: string;
  team: number;
  birthday: string;
  height: number;
  weight: number;
  num: number;
}

const PlayerForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((s: RootState) => s.user.token) || "";
  const positions = useSelector((state: RootState) => state.players.positions);
  const teams = useSelector((state: RootState) => state.teams.data);
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const navigate = useNavigate();

  const [selectedPosition, setSelectedPosition] = useState<
    SelectOption | undefined
  >();
  const [selectedTeam, setSelectedTeam] = useState<SelectOption | undefined>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>();

  useEffect(() => {
    dispatch(getPositionsThunk());
    dispatch(fetchTeams({ name: "", page: 1, pageSize: 100 }));
  }, [dispatch]);

  const handleAvatarChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setIsUploading(true);

      try {
        const avatarUrl = await uploadImage(file, token);
        setAvatarUrl(avatarUrl);
      } catch (error) {
        console.error("Failed to upload image:", error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const { num, ...rest } = data;

      await dispatch(
        addPlayerThunk({
          ...rest,
          number: num,
          avatarUrl,
          position: selectedPosition?.name || "",
          team: selectedTeam?.id || 0,
        })
      );
    } catch (error) {
      console.error("Failed to add player:", error);
    }
  };

  const positionOptions: SelectOption[] = positions.map((position, index) => ({
    id: index,
    name: position,
  }));

  const teamOptions: SelectOption[] = teams.map((team) => ({
    id: team.id,
    name: team.name,
  }));

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.breadcrumbs}>
          <Breadcrumbs />
        </div>
        <div className={styles["avatar-container"]}>
          <ImageUpload avatarUrl={avatarUrl} onChange={handleAvatarChange} />
        </div>

        <div className={styles["form-container"]}>
          <div className={styles.inputs}>
            <div className={styles.input}>
              <label className={styles["label-iput"]} htmlFor="name">
                Name
              </label>
              <InputField
                type="text"
                {...register("name", { required: "Required" })}
                error={!!errors.name}
              />
              {errors.name && (
                <p className={styles.error}>{errors.name.message}</p>
              )}
            </div>
            <div className={styles.input}>
              <label className={styles["label-input"]} htmlFor="position">
                Position
              </label>
              <Controller
                name="position"
                control={control}
                rules={{ required: "Required" }}
                render={({ field }) => (
                  <Select
                    options={positionOptions}
                    value={selectedPosition}
                    onChange={(option) => {
                      field.onChange(option?.name);
                      setSelectedPosition(option);
                    }}
                  />
                )}
              />
              {errors.position && (
                <p className={styles.error}>{errors.position.message}</p>
              )}
            </div>
            <div className={styles.input}>
              <label className={styles["label-input"]} htmlFor="team">
                Team
              </label>
              <Controller
                name="team"
                control={control}
                rules={{ required: "Required" }}
                render={({ field }) => (
                  <Select
                    options={teamOptions}
                    value={selectedTeam}
                    onChange={(option) => {
                      field.onChange(option?.name);
                      setSelectedTeam(option);
                    }}
                  />
                )}
              />
              {errors.team && (
                <p className={styles.error}>{errors.team.message}</p>
              )}
            </div>
            <div className={styles.shortContainer}>
              <div className={styles.inputShort}>
                <label className={styles["label-iput"]} htmlFor="height">
                  Height (cm)
                </label>
                <InputField
                  type="number"
                  {...register("height", {
                    required: "Required",
                    valueAsNumber: true,
                  })}
                  error={!!errors.height}
                />
                {errors.height && (
                  <p className={styles.error}>{errors.height.message}</p>
                )}
              </div>
              <div className={styles.inputShort}>
                <label className={styles["label-iput"]} htmlFor="weight">
                  Weight (kg)
                </label>
                <InputField
                  type="number"
                  {...register("weight", {
                    required: "Required",
                    valueAsNumber: true,
                  })}
                  error={!!errors.weight}
                />
                {errors.weight && (
                  <p className={styles.error}>{errors.weight.message}</p>
                )}
              </div>
              <div className={styles.inputShort}>
                <label className={styles["label-input"]} htmlFor="birthday">
                  Birthday
                </label>
                <InputField
                  type="date"
                  {...register("birthday", {
                    required: "Required",
                  })}
                  error={!!errors.birthday}
                />
                {errors.birthday && (
                  <p className={styles.error}>{errors.birthday.message}</p>
                )}
              </div>
              <div className={styles.inputShort}>
                <label className={styles["label-input"]} htmlFor="num">
                  Number
                </label>
                <InputField
                  type="number"
                  {...register("num", {
                    required: "Required",
                    valueAsNumber: true,
                  })}
                  error={!!errors.num}
                />
                {errors.num && (
                  <p className={styles.error}>{errors.num.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <Button
              appearence="cancel"
              onClick={() => navigate("/teams")}
              className={styles.button}
              type="button"
            >
              Cancel
            </Button>
            <Button
              appearence="add"
              disabled={isUploading}
              className={cn(styles.button, styles["save-btn"])}
              type="submit"
            >
              Save
            </Button>
            {isUploading && (
              <p className={styles.uploadingMessage}>Uploading...</p>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default PlayerForm;
