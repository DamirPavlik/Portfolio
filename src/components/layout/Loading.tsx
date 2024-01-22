import { useContext } from "react";
import { LoadingContext } from "./Layout";

const Loading = () => {
  const loading = useContext(LoadingContext);

  return (
    <>
      <div
        className={`fixed w-full h-screen bg-brown z-50 ${
          loading === 100
            ? "translate-y-[-100%] transition-all duration-700"
            : ""
        }`}
      >
        <h1 className="absolute font-grandslang lg:text-[15vw] text-[20vw] text-beige lg:right-20 lg:bottom-10 lg:left-auto left-1/2 lg:top-auto top-1/2 lg:translate-x-[none] -translate-x-1/2 lg:translate-y-[none] -translate-y-1/2 leading-none">
          {loading}%
        </h1>
      </div>
    </>
  );
};

export default Loading;
