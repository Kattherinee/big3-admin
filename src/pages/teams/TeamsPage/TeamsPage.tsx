import Search from "../../../components/search/Search";
import styles from "./TeamsPage.module.css";
import Button from "../../../components/Button/Button";

export const TeamsPage: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.head}>
            <Search placeholder="Search..." />
            <Button appearence="add">Add +</Button>
          </div>
        </main>
      </div>
    </>
  );
};
