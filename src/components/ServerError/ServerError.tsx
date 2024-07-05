import React from "react";
import styles from "./ServerError.module.css";

interface ServerErrorProps {
  message: string | null;
}

const ServerError: React.FC<ServerErrorProps> = ({ message }) => {
  if (!message) return null;

  return <div className={styles.serverError}>{message}</div>;
};

export default ServerError;
