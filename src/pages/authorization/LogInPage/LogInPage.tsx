import styles from "./LogInPage.module.css";
import React from "react";
import AuthForm from "../components/AuthForm/AuthForm";
import { Link } from "react-router-dom";

export const LogInPage: React.FC = () => {
  return (
    <>
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
          <img src="/src/assets/images/logIn.png" alt="basketball photo" />
        </div>
      </div>
    </>
  );
};
