import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const isNotHomePage = useLocation().pathname !== "/";

  return (
    <div className="flex flex-row-reverse lg:flex-col items-center lg:items-start lg:h-screen justify-between lg:justify-evenly mt-7 lg:mt-0">
      {isNotHomePage && (
        <Link to="/" className="flex lg:flex-col-reverse items-center">
          <img
            src="/rect.jpg"
            alt="Rectangle For Home Navigation"
            className="mt-8 hidden lg:block"
          />
          <img src="/rect-horizontal.jpg" alt="" className="lg:hidden mr-3" />
          <p className="inline-block lg:-rotate-90 text-brown">Home</p>
        </Link>
      )}
      <p className="font-montserrat text-base lg:-rotate-90 text-center lg:inline-block text-brown">
        © 2023
      </p>
    </div>
  );
};

export default Sidebar;
