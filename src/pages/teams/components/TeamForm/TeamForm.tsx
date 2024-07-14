import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../../../core/redux/store/store";
import { RootState } from "../../../../core/redux/store/store";
import styles from "./TeamForm.module.css";
import Button from "../../../../ui/Button/Button";
import InputField from "../../../../ui/Input/Input";
import ImageUpload from "../../../../components/ImageUpload/ImageUpload";
import cn from "classnames";
import { uploadImage } from "../../../../api/requests/uploadImageRequest";
import Breadcrumbs from "../../../../components/BreadCrumbs/BreadCrumbs";

const TeamForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((s: RootState) => s.user.token) || "";
  const [teamName, setTeamName] = useState<string>("");
  const [foundationYear, setFoundationYear] = useState<number>(0);
  const [division, setDivision] = useState<string>("");
  const [conference, setConference] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const navigate = useNavigate();

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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      console.log("Submitting new team with:", {
        teamName,
        foundationYear,
        division,
        conference,
        imageUrl,
      });
      // Here you would dispatch an action to save the team
      navigate("/teams");
    } catch (error) {
      console.error("Failed to add team:", error);
    }
  };

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        <div className={styles.breadcrumbs}>
          <Breadcrumbs />
        </div>
        <div className={styles["avatar-container"]}>
          <ImageUpload avatarUrl={imageUrl} onChange={handleAvatarChange} />
        </div>

        <div className={styles["form-container"]}>
          <div className={styles.inputs}>
            <div className={styles.input}>
              <label className={styles["label-iput"]} htmlFor="name">
                Name
              </label>
              <InputField
                type="text"
                // value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
            </div>
            <div className={styles.input}>
              <label className={styles["label-iput"]} htmlFor="division">
                Division
              </label>
              <InputField
                type="text"
                // value={division}
                onChange={(e) => setDivision(e.target.value)}
              />
            </div>
            <div className={styles.input}>
              <label className={styles["label-iput"]} htmlFor="conference">
                Conference
              </label>
              <InputField
                type="text"
                // value={conference}
                onChange={(e) => setConference(e.target.value)}
              />
            </div>
            <div className={styles.input}>
              <label className={styles["label-iput"]} htmlFor="foundationYear">
                Foundation Year
              </label>
              <InputField
                type="text"
                // value={foundationYear}
                onChange={(e) => setFoundationYear(Number(e.target.value))}
              />
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

export default TeamForm;
