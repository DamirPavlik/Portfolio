import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "..";
import Loading from "./Loading";

const Layout = () => {
  const isHomePage = useLocation().pathname === "/";
  return (
    <>
      <div className={`bg-beige ${isHomePage ? "h-screen" : ""}`}>
        <Loading />
        <div className="grid grid-cols-12 mx-5 lg:mx-[50px] ">
          <div className="col-span-12 lg:col-span-1">
            <Sidebar />
          </div>
          <div className="col-span-12 lg:col-span-11">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
