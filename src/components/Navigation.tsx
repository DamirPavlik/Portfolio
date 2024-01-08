import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Link
        to="/experience"
        className="text-[15vw] lg:text-[10vw] block font-grandslang text-brown nav-item"
      >
        Experience
      </Link>
      <hr className="bg-brown -mx-5 lg:mx-0" />
      <Link
        to="/about"
        className="text-[15vw] lg:text-[10vw] block font-grandslang text-brown nav-item"
      >
        About
      </Link>
      <hr className="bg-brown -mx-5 lg:mx-0" />
      <Link
        to="/contact"
        className="text-[15vw] lg:text-[10vw] block font-grandslang text-brown nav-item"
      >
        Contact
      </Link>
    </>
  );
};

export default Navigation;
