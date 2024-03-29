import Hero from "./Hero";
import Navigation from "./Navigation";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="grid grid-cols-12  lg:h-screen lg:items-center">
      <div className="col-span-12 lg:col-span-4 mt-16 lg:mt-[90%] lg:-ml-[30px] lg:mb-0 mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
        </motion.div>
      </div>
      <div className="col-span-12 lg:col-span-8">
        <Navigation />
      </div>
    </div>
  );
};

export default Home;
