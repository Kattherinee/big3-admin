import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { AppDispatch, RootState } from "../../../../core/redux/store/store";
import styles from "./TeamForm.module.css";
import Button from "../../../../ui/Button/Button";
import InputField from "../../../../ui/Input/Input";
import ImageUpload from "../../../../components/ImageUpload/ImageUpload";
import cn from "classnames";
import { uploadImage } from "../../../../api/requests/uploadImageRequest";
import Breadcrumbs from "../../../../components/BreadCrumbs/BreadCrumbs";
import { updateTeamThunk } from "../../../../core/redux/teamsThunks/updateTeamThunk";
import { getTeamThunk } from "../../../../core/redux/teamsThunks/getTeamThunk";
import { addTeamThunk } from "../../../../core/redux/teamsThunks/addTeamThunk";

interface FormValues {
  name: string;
  foundationYear: number;
  division: string;
  conference: string;
}

const TeamForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.user.token) || "";
  const [imageUrl, setImageUrl] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const navigate = useNavigate();

  const currentTeam = useSelector(
    (state: RootState) => state.teams.currentTeam
  );
  const currentTeamStatus = useSelector(
    (state: RootState) => state.teams.currentTeamStatus
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>();

  useEffect(() => {
    if (id) {
      dispatch(getTeamThunk({ id: parseInt(id) }));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (currentTeam && id) {
      setValue("name", currentTeam.name);
      setValue("division", currentTeam.division);
      setValue("conference", currentTeam.conference);
      setValue("foundationYear", currentTeam.foundationYear);
      setImageUrl(currentTeam.imageUrl);
    }
  }, [currentTeam, id, setValue]);

  const handleAvatarChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setIsUploading(true);

      try {
        const imageUrl = await uploadImage(file, token);
        setImageUrl(imageUrl);
      } catch (error) {
        console.error("Failed to upload image:", error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const teamData = {
        ...data,
        imageUrl,
      };

      if (id) {
        await dispatch(updateTeamThunk({ id: parseInt(id), ...teamData }));
      } else {
        await dispatch(addTeamThunk(teamData));
      }
      navigate("/teams");
    } catch (error) {
      console.error("Failed to submit team:", error);
    }
  };

  if (currentTeamStatus === "loading" && id) {
    return <p>Loading...</p>;
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs />
      </div>
      <div className={styles["avatar-container"]}>
        <ImageUpload avatarUrl={imageUrl} onChange={handleAvatarChange} />
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
            <label className={styles["label-input"]} htmlFor="division">
              Division
            </label>
            <InputField
              type="text"
              {...register("division", { required: "Required" })}
              error={!!errors.division}
            />
            {errors.division && (
              <p className={styles.error}>{errors.division.message}</p>
            )}
          </div>
          <div className={styles.input}>
            <label className={styles["label-input"]} htmlFor="conference">
              Conference
            </label>
            <InputField
              type="text"
              {...register("conference", { required: "Required" })}
              error={!!errors.conference}
            />
            {errors.conference && (
              <p className={styles.error}>{errors.conference.message}</p>
            )}
          </div>
          <div className={styles.input}>
            <label className={styles["label-input"]} htmlFor="foundationYear">
              Foundation Year
            </label>
            <InputField
              type="number"
              {...register("foundationYear", {
                required: "Required",
                valueAsNumber: true,
              })}
              error={!!errors.foundationYear}
            />
            {errors.foundationYear && (
              <p className={styles.error}>{errors.foundationYear.message}</p>
            )}
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
            {id ? "Update" : "Save"}
          </Button>
          {isUploading && (
            <p className={styles.uploadingMessage}>Uploading...</p>
          )}
        </div>
      </div>
    </form>
  );
};

export default TeamForm;
