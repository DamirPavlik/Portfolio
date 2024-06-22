import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../../components/layout/Layout";

const Navigation = () => {
  const loading = useContext<number>(LoadingContext);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const isMobile: boolean = windowWidth <= 768;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={loading === 100 ? { y: 0, opacity: 1 } : undefined}
        transition={{ type: "spring", stiffness: 100, damping: 24, delay: 0.3 }}
      >
        <Link
          to="/experience"
          className="text-[15vw] lg:text-[10vw] xl:text-[8vw] block font-grandslang text-brown hover:ml-3 transition-all duration-300"
        >
          Experience
        </Link>
      </motion.div>
      <motion.hr
        initial={{ width: 0 }}
        animate={
          loading === 100 ? { width: isMobile ? "100vw" : "100%" } : undefined
        }
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="lg:text-brown text-[#333] -mx-5 lg:mx-0"
      />
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={loading === 100 ? { y: 0, opacity: 1 } : undefined}
        transition={{ type: "spring", stiffness: 100, damping: 24, delay: 0.3 }}
      >
        <Link
          to="/about"
          className="text-[15vw] lg:text-[10vw] xl:text-[8vw] block font-grandslang text-brown hover:ml-3 transition-all duration-300"
        >
          About
        </Link>
      </motion.div>
      <motion.hr
        initial={{ width: 0 }}
        animate={
          loading === 100 ? { width: isMobile ? "100vw" : "100%" } : undefined
        }
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="lg:text-brown text-[#333]  -mx-5 lg:mx-0 "
      />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={loading === 100 ? { y: 0, opacity: 1 } : undefined}
        transition={{ type: "spring", stiffness: 300, damping: 24, delay: 0.3 }}
      >
        <Link
          to="/contact"
          className="text-[15vw] lg:text-[10vw] xl:text-[8vw] block font-grandslang text-brown hover:ml-3 transition-all duration-300"
        >
          Contact
        </Link>
      </motion.div>
    </>
  );
};

export default Navigation;
