import { Link, Outlet } from "react-router-dom";
import Header from "../../../components/Header/Header";
import styles from "./MainLayout.module.css";

export function MainLayout() {
  return (
    <>
      <div className={styles.layout}>
        <Header />
        <div>
          <Link to="/">Teams</Link>
          <Link to="/players">Playerss</Link>
        </div>
        <div>
          {/* В то , что находится в outlet мы подставляем вложено страничку */}
          <Outlet />
        </div>
      </div>
    </>
  );
}
