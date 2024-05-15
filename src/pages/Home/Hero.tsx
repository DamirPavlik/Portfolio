import { useContext } from "react";
import { motion } from "framer-motion";
import { LoadingContext } from "../../components/layout/Layout";

const Hero = () => {
  const loading = useContext(LoadingContext);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={loading === 100 ? { opacity: 1, scale: 1 } : undefined}
        transition={{
          duration: 0.8,
          delay: 0.6,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h1 className="text-xl font-medium tracking-wider">Damir Pavlik</h1>
        <div className="my-8">
          <p className="lg:text-base text-sm text-gray mb-2">
            Full Stack Web Developer
          </p>
          <p className="lg:text-base text-sm text-gray">
            {/* Transforming Visions into Engaging Digital Experiences */}
            Creating engaging experiences that awaken{" "}
            <br className="lg:block hidden " />
            people in the post-print era.
          </p>
        </div>
        <p className="lg:text-base text-sm text-gray">
          Currently working at <br className="block lg:hidden" />
          <u>
            <a href="https://omnistreak.com/" target="_blank">
              OmniStreak Digital Solutions
            </a>
          </u>
        </p>
      </motion.div>
    </>
  );
};

export default Hero;
