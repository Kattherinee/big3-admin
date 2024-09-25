import React, { ChangeEvent } from "react";
import styles from "./ImageUpload.module.css";
import photoinst from "/src/assets/images/Rectangle 207.png";
import addd from "/src/assets/icon/add_a_photo.svg";

interface ImageUploadProps {
  avatarUrl: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  avatarUrl: photoUrl,
  onChange,
}) => {
  return (
    <div className={styles["avatar-cover"]}>
      <label htmlFor="avatarUpload" className={styles.avatar}>
        <img
          src={photoUrl || photoinst}
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
          <img src={addd} alt="+" />
        </div>
      </label>
    </div>
  );
};

export default ImageUpload;
