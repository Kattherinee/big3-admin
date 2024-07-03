import { useState } from "react";
import styles from "./AuthForm.module.css";
import InputField from "../../../../components/Input/Input";
import Checkbox from "../../../../components/CheckBox/Checkbox";
import Button from "../../../../components/Button/Button";
import cn from "classnames";

interface IAuthForm {
  appearence: "signIn" | "signUp";
}

function AuthForm({ appearence }: IAuthForm) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  return (
    <div className={styles.formContainer}>
      <form className={cn(styles["form"])}>
        <div
          className={cn(styles.input, {
            [styles["signIn"]]: appearence === "signIn",
          })}
        >
          <label htmlFor="Name">Name</label>
          <InputField type="text" />
        </div>
        <div className={cn(styles.input, styles.login)}>
          <label htmlFor="login">Login</label>
          <InputField type="text" />
        </div>
        <div className={cn(styles.input, styles.password)}>
          <label htmlFor="password">Password</label>
          <InputField type="password" />
        </div>
        <div
          className={cn(styles.input, {
            [styles["signIn"]]: appearence === "signIn",
          })}
        >
          <label htmlFor="password">Enter your password again</label>
          <InputField type="password" />
        </div>
        <div
          className={cn(styles.check, {
            [styles["signIn"]]: appearence === "signIn",
          })}
        >
          <Checkbox
            label="I accept the agreement"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </div>

        <Button appearence="sign">Sign In</Button>
      </form>
    </div>
  );
}

export default AuthForm;
