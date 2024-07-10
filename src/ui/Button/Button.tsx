import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";

export default function Button({
  children,
  className,
  appearence,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(styles["button"], className, {
        [styles["signIn"]]: appearence === "sign",
        [styles["cancel"]]: appearence === "cancel",
        [styles["add"]]: appearence === "add",
      })}
      {...props}
    >
      {children}
    </button>
  );
}
