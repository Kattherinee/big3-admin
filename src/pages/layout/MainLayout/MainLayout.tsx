import { Outlet } from "react-router-dom";
import Header from "../../../components/Header/Header";
import styles from "./MainLayout.module.css";

export function MainLayout() {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <div className={styles.headerPlaceholder} />
      <div className={styles.contentWrapper}>
        <div className={styles.sidebarPlaceholder} />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
