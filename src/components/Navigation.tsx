import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Link
        to="/experience"
        className="text-[15vw] lg:text-[10vw] block font-grandslang text-brown transition-all duration-300 ease-linear hover:italic"
      >
        Experience
      </Link>
      <hr className="bg-brown -mx-5 lg:mx-0" />
      <Link
        to="/about"
        className="text-[15vw] lg:text-[10vw] block font-grandslang text-brown transition-all duration-300 ease-linear hover:italic"
      >
        About
      </Link>
      <hr className="bg-brown -mx-5 lg:mx-0" />
      <Link
        to="/contact"
        className="text-[15vw] lg:text-[10vw] block font-grandslang text-brown transition-all duration-300 ease-linear hover:italic"
      >
        Contact
      </Link>
    </>
  );
};

export default Navigation;
