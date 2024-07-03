import styles from "./ErrorPage.module.css";

export function ErrorPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles["error-content"]}>
          <img src="/src/assets/images/illustration.png" alt="404" />
          <span className={styles.head}>Page not found</span>
          <span className={styles.message}>
            Sorry, we can’t find what you’re looking for
          </span>
        </div>
      </div>
    </>
  );
}
