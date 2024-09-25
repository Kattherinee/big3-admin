import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
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
import { updatePlayerThunk } from "../../../../core/redux/playersThunks/updatePlayerThunk";
import CustomSelect, {
  SelectOption,
} from "../../../../ui/Multiselect/CustomSelect";
import { getPositionsThunk } from "../../../../core/redux/playersThunks/getPositionsThunk";
import { fetchTeams } from "../../../../core/redux/teamsThunks/fetchTeamsThunk";
import { getPlayerThunk } from "../../../../core/redux/playersThunks/getPlayerThunk";

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
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((s: RootState) => s.user.token) || "";
  const positions = useSelector((state: RootState) => state.players.positions);
  const teams = useSelector((state: RootState) => state.teams.data);
  const currentPlayer = useSelector(
    (state: RootState) => state.players.currentPlayer
  );
  const currentPlayerStatus = useSelector(
    (state: RootState) => state.players.currentPlayerStatus
  );
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<FormValues>();

  useEffect(() => {
    dispatch(getPositionsThunk());
    dispatch(fetchTeams({ name: "", page: 1, pageSize: 100 }));

    if (id) {
      dispatch(getPlayerThunk({ id: parseInt(id) }));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (currentPlayer && id) {
      setValue("name", currentPlayer.name);
      setValue("position", currentPlayer.position);
      setValue("team", currentPlayer.team);
      setValue("birthday", currentPlayer.birthday.split("T")[0]);
      setValue("height", currentPlayer.height);
      setValue("weight", currentPlayer.weight);
      setValue("num", currentPlayer.number);
      setAvatarUrl(currentPlayer.avatarUrl);
    }
  }, [currentPlayer, id, setValue]);

  const handleAvatarChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setIsUploading(true);
      console.log(selectedFile);

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
      const playerData = {
        ...rest,
        number: num,
        avatarUrl,
        position: data.position,
        team: data.team,
      };

      if (id) {
        await dispatch(updatePlayerThunk({ id: parseInt(id), ...playerData }));
      } else {
        await dispatch(addPlayerThunk(playerData));
      }
      navigate("/players");
    } catch (error) {
      console.error("Failed to submit player:", error);
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

  if (currentPlayerStatus === "loading" && id) {
    return <p>Loading...</p>;
  }

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
              <label className={styles["label-input"]} htmlFor="name">
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
                  <CustomSelect
                    appearance="single"
                    options={positionOptions}
                    value={
                      field.value
                        ? {
                            id:
                              positionOptions.find(
                                (opt) => opt.name === field.value
                              )?.id ?? 0,
                            name: field.value,
                          }
                        : null
                    }
                    onChange={(val: SelectOption | null) =>
                      field.onChange(val ? val.name : "")
                    }
                    placeholder="Select..."
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
                  <CustomSelect
                    appearance="single"
                    options={teamOptions}
                    value={
                      field.value
                        ? {
                            id: field.value,
                            name:
                              teamOptions.find((opt) => opt.id === field.value)
                                ?.name ?? "",
                          }
                        : null
                    }
                    onChange={(val: SelectOption | null) => {
                      field.onChange(val ? val.id : 0);
                    }}
                    placeholder="Select..."
                  />
                )}
              />

              {errors.team && (
                <p className={styles.error}>{errors.team.message}</p>
              )}
            </div>
            <div className={styles.shortContainer}>
              <div className={styles.inputShort}>
                <label className={styles["label-input"]} htmlFor="height">
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
                <label className={styles["label-input"]} htmlFor="weight">
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
            </div>
            <div className={styles.shortContainer}>
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
              onClick={() => navigate("/players")}
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
              {id ? "Update" : "Save"}
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
