import React, { ChangeEvent } from "react";
import styles from "./ImageUpload.module.css";

interface ImageUploadProps {
  avatarUrl: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ avatarUrl, onChange }) => {
  return (
    <div className={styles["avatar-cover"]}>
      <label htmlFor="avatarUpload" className={styles.avatar}>
        <img
          src={avatarUrl || "/path/to/default-avatar.png"}
          alt="Avatar Preview"
          className={styles.avatar}
        />
        <input
          id="avatarUpload"
          type="file"
          accept="image/*"
          className={styles.hiddenInput}
          onChange={onChange}
        />
        <div className={styles.avatarOverlay}>
          <img src="/src/assets/icon/add_a_photo.svg" alt="+" />
        </div>
      </label>
    </div>
  );
};

export default ImageUpload;
