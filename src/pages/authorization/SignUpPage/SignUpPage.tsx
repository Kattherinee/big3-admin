import styles from "./SignUpPage.module.css";
import React from "react";
import AuthForm from "../components/AuthForm/AuthForm";
import { Link } from "react-router-dom";
import signup from "/src/assets/images/sighUp.png";

export const SignUpPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.header}>Sign Up</div>
        <AuthForm appearence="signUp" />
        <p className={styles.text}>
          Already a member?
          <Link className={styles.link} to="/auth/signIn">
            Sign in
          </Link>
        </p>
      </div>
      <div className={styles["img-section"]}>
        <img src={signup} alt="111" />
      </div>
    </div>
  );
};
