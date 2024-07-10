import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../core/redux/store/store";
import { selectUser } from "../../core/redux/store/user.slice";
import { updateProfile } from "../../core/redux/store/user.thunks/updateProfileThunk";
import { uploadImage } from "../../api/requests/uploadImageRequest";
import { RootState } from "../../core/redux/store/store";
import styles from "./EditProfilePage.module.css";
import Button from "../../ui/Button/Button";
import InputField from "../../ui/Input/Input";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import cn from "classnames";

const EditProfile: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { userName, avatarUrl } = useSelector(selectUser);
  const [newUserName, setNewUserName] = useState<string>(userName || "");
  const [newAvatarUrl, setNewAvatarUrl] = useState<string>(avatarUrl || "");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("User data from Redux:", { userName, avatarUrl });
  }, [userName, avatarUrl]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewUserName(event.target.value);
  };

  const token = useSelector((s: RootState) => s.user.token) || "";

  const handleAvatarChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setIsUploading(true);

      try {
        const imageUrl = await uploadImage(file, token);
        setNewAvatarUrl(imageUrl);
      } catch (error) {
        console.error("Failed to upload image:", error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // предотвращаем автоматическое обновление страницы

    let avatarUrlToSend = newAvatarUrl;

    if (selectedFile) {
      setIsUploading(true);

      try {
        avatarUrlToSend = await uploadImage(selectedFile, token);
      } catch (error) {
        console.error("Failed to upload image:", error);
      } finally {
        setIsUploading(false);
      }
    }

    try {
      console.log("Submitting profile update with:");
      console.log("UserName:", newUserName);
      console.log("AvatarUrl:", avatarUrlToSend);

      await dispatch(
        updateProfile({ userName: newUserName, avatarUrl: avatarUrlToSend })
      ).unwrap();
      console.log("Profile updated successfully");
      navigate("/teams");
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles["avatar-container"]}>
        <ImageUpload avatarUrl={newAvatarUrl} onChange={handleAvatarChange} />
      </div>

      <div className={styles["form-container"]}>
        <div className={styles.input}>
          <label className={styles["label-iput"]} htmlFor="name">
            Name
          </label>
          <InputField
            type="text"
            onChange={handleNameChange}
            value={newUserName}
          />
        </div>
        <div className={styles.buttons}>
          <Button
            appearence="cancel"
            onClick={() => navigate("/")}
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
  );
};

export default EditProfile;
