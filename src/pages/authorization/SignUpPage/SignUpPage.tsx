import styles from "./SignUpPage.module.css";
import React from "react";
import AuthForm from "../components/AuthForm/AuthForm";
import { Link } from "react-router-dom";

export const SignUpPage: React.FC = () => {
  return (
    <>
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
          <img src="/src/assets/images/sighUp.png" alt="111" />
        </div>
      </div>
    </>
  );
};
