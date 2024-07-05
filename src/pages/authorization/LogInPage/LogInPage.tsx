import React from "react";
import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm/AuthForm";
import styles from "./LogInPage.module.css";

export const LogInPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.header}>Sign In</div>
        <AuthForm appearence="signIn" />
        <p className={styles.text}>
          Not a member yet?
          <Link className={styles.link} to="/auth/signUp">
            Sign up
          </Link>
        </p>
      </div>
      <div className={styles["img-section"]}>
        <img src="/src/assets/images/logIn.png" alt="111" />
      </div>
    </div>
  );
};
