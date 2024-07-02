import styles from "./AuthForm.module.css";
import InputField from "../../../../components/Input/Input";

import Button from "../../../../components/Button/Button";
import cn from "classnames";

interface IAuthForm {
  appearence: "signIn" | "signUp";
}

function AuthForm({ appearence }: IAuthForm) {
  return (
    <div className={styles.formContainer}>
      <form className={cn(styles["form"])}>
        <div
          className={cn(styles.input, {
            [styles["signIn"]]: appearence === "signIn",
          })}
        >
          <label htmlFor="Name">Name</label>
          <InputField />
        </div>
        <div className={cn(styles.input, styles.login)}>
          <label htmlFor="login">Login</label>
          <InputField />
        </div>
        <div className={cn(styles.input, styles.password)}>
          <label htmlFor="password">Password</label>
          <InputField />
        </div>
        <div
          className={cn(styles.input, {
            [styles["signIn"]]: appearence === "signIn",
          })}
        >
          <label htmlFor="password">Enter your password again</label>
          <InputField />
        </div>
        <div
          className={cn(styles.check, {
            [styles["signIn"]]: appearence === "signIn",
          })}
        >
          <input type="checkbox" />
          <span>I accept the agreement</span>
        </div>

        <Button appearence="sign">Sign In</Button>
      </form>
    </div>
  );
}

export default AuthForm;
