import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Link
        to="/experience"
        className="text-[15vw] lg:text-[10vw] block font-grandslang text-brown hover:ml-3 transition-all duration-300"
      >
        Experience
      </Link>
      <hr className="bg-brown -mx-5 lg:mx-0" />
      <Link
        to="/about"
        className="text-[15vw] lg:text-[10vw] block font-grandslang text-brown hover:ml-3 transition-all duration-300"
      >
        About
      </Link>
      <hr className="bg-brown -mx-5 lg:mx-0" />
      <Link
        to="/contact"
        className="text-[15vw] lg:text-[10vw] block font-grandslang text-brown hover:ml-3 transition-all duration-300"
      >
        Contact
      </Link>
    </>
  );
};

export default Navigation;
