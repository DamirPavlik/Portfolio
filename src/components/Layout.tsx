import { Outlet } from "react-router-dom";
import { Sidebar } from ".";

const Layout = () => {
  return (
    <div className="bg-beige">
      <div className="grid grid-cols-12 mx-5 lg:mx-[50px] items-center">
        <div className="col-span-12 lg:col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-12 lg:col-span-11">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
