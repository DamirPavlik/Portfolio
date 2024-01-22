import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "..";
import Loading from "./Loading";
import { createContext, useEffect, useState } from "react";

export const LoadingContext = createContext<number>(0);

const Layout = () => {
  const isHomePage = useLocation().pathname === "/";
  const [loading, setLoading] = useState<number>(0);

  useEffect(() => {
    const loadingNum = setTimeout(() => {
      setLoading((prevState) => (prevState < 100 ? prevState + 1 : prevState));
    }, 30);

    return () => {
      clearTimeout(loadingNum);
    };
  }, [loading]);

  return (
    <LoadingContext.Provider value={loading}>
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
    </LoadingContext.Provider>
  );
};

export default Layout;
