import { Link, Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <>
      <div>
        <Link to="/">Teams</Link>
        <Link to="/players">Playerss</Link>
      </div>
      <div>
        //В то , что находится в outlet мы подставляем вложено страничку
        <Outlet></Outlet>
      </div>
    </>
  );
}
