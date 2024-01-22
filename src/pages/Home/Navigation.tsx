import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { LoadingContext } from "../../components/layout/Layout";

const Navigation = () => {
  const loading = useContext(LoadingContext);
  return (
    <>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={loading === 100 ? { y: 0, opacity: 1 } : undefined}
        transition={{ type: "spring", stiffness: 100, damping: 24, delay: 0.3 }}
      >
        <Link
          to="/experience"
          className="text-[15vw] lg:text-[10vw] block font-grandslang text-brown hover:ml-3 transition-all duration-300"
        >
          Experience
        </Link>
      </motion.div>
      <hr className="bg-brown -mx-5 lg:mx-0" />
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={loading === 100 ? { y: 0, opacity: 1 } : undefined}
        transition={{ type: "spring", stiffness: 100, damping: 24, delay: 0.3 }}
      >
        <Link
          to="/about"
          className="text-[15vw] lg:text-[10vw] block font-grandslang text-brown hover:ml-3 transition-all duration-300"
        >
          About
        </Link>
      </motion.div>
      <hr className="bg-brown -mx-5 lg:mx-0" />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={loading === 100 ? { y: 0, opacity: 1 } : undefined}
        transition={{ type: "spring", stiffness: 300, damping: 24, delay: 0.3 }}
      >
        <Link
          to="/contact"
          className="text-[15vw] lg:text-[10vw] block font-grandslang text-brown hover:ml-3 transition-all duration-300"
        >
          Contact
        </Link>
      </motion.div>
    </>
  );
};

export default Navigation;
