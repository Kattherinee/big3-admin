import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import cn from "classnames";
import styles from "./AuthForm.module.css";
import InputField from "../../../../components/Input/Input";
import Checkbox from "../../../../components/CheckBox/Checkbox";
import Button from "../../../../components/Button/Button";
import {
  registerUser,
  loginUser,
} from "../../../../api/requests/authorization";
import { UnauthorizedResult } from "../../../../api/dto/AuthorizationDto/UnauthorizedResult";
import ServerError from "../../../../components/ServerError/ServerError";

interface IAuthFormProps {
  appearence: "signIn" | "signUp";
}

interface IFormInputs {
  name?: string;
  login: string;
  password: string;
  confirmPassword?: string;
  agreement: boolean;
}

function AuthForm({ appearence }: IAuthFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
    setError,
  } = useForm<IFormInputs>();
  const [serverError, setServerError] = useState<string | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);
  const navigate = useNavigate();

  const submit: SubmitHandler<IFormInputs> = async (data) => {
    const { name, login, password } = data;
    setServerError(null);
    setAuthError(null);

    try {
      if (appearence === "signUp") {
        const response = await registerUser({
          userName: name!,
          login,
          password,
        });
        const { token } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("userName", name!);
        navigate("/teams");
      } else {
        const response = await loginUser({ login, password });
        const { token } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("userName", login);
        navigate("/teams");
      }
      reset();
    } catch (error: any) {
      if (error as UnauthorizedResult) {
        if (error.status === 401) {
          setServerError(
            "User with the specified username / password was not found."
          );
          setError("password", {
            type: "manual",
            message: "Incorrect password",
          });
        }
      } else {
        console.error(error);
        setServerError("An unexpected error occurred. Please try again.");
      }
    }
  };

  const password = watch("password");

  return (
    <div className={styles.formContainer}>
      <ServerError message={serverError} />
      <form onSubmit={handleSubmit(submit)} className={cn(styles.form)}>
        {appearence === "signUp" && (
          <div className={cn(styles.input, { [styles.error]: !!errors.name })}>
            <label htmlFor="name">Name</label>
            <InputField
              type="text"
              {...register("name", { required: "Name is required" })}
              error={!!errors.name}
            />
            {errors.name && (
              <p className={styles.errorMessage}>{errors.name.message}</p>
            )}
          </div>
        )}
        <div
          className={cn(styles.input, styles.login, {
            [styles.error]: !!errors.login,
          })}
        >
          <label htmlFor="login">Login</label>
          <InputField
            type="text"
            {...register("login", { required: "Login is required" })}
            error={!!errors.login}
          />
          {errors.login && (
            <p className={styles.errorMessage}>{errors.login.message}</p>
          )}
        </div>
        <div
          className={cn(styles.input, styles.password, {
            [styles.error]: !!errors.password,
          })}
        >
          <label htmlFor="password">Password</label>
          <InputField
            type="password"
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
          />
          {errors.password && (
            <p className={styles.errorMessage}>{errors.password.message}</p>
          )}
          {authError && <p className={styles.errorMessage}>{authError}</p>}
        </div>
        {appearence === "signUp" && (
          <div
            className={cn(styles.input, {
              [styles.error]: !!errors.confirmPassword,
            })}
          >
            <label htmlFor="confirmPassword">Enter your password again</label>
            <InputField
              type="password"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              error={!!errors.confirmPassword}
            />
            {errors.confirmPassword && (
              <p className={styles.errorMessage}>
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        )}
        {appearence === "signUp" && (
          <div
            className={cn(styles.check, { [styles.error]: !!errors.agreement })}
          >
            <Controller
              name="agreement"
              control={control}
              defaultValue={false}
              rules={{ required: "You must accept the agreement" }}
              render={({ field }) => (
                <Checkbox
                  label="I accept the agreement"
                  checked={field.value}
                  onChange={field.onChange}
                  error={!!errors.agreement}
                />
              )}
            />
            {errors.agreement && (
              <p className={styles.errorMessage}>{errors.agreement.message}</p>
            )}
          </div>
        )}

        <Button className={styles.button} appearence="sign">
          {appearence === "signUp" ? "Sign Up" : "Sign In"}
        </Button>
      </form>
    </div>
  );
}

export default AuthForm;
