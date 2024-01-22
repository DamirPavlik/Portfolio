import { useContext } from "react";
import { ExperienceTabsProps } from "../../types/types";
import { LoadingContext } from "../../components/layout/Layout";
import { motion } from "framer-motion";

const ExperienceTabs: React.FC<ExperienceTabsProps> = ({
  activeTab,
  handleTabClick,
}) => {
  const loading = useContext(LoadingContext);

  return (
    <div className="lg:col-span-2 col-span-12">
      <div className="flex lg:flex-row flex-col">
        <div className="lg:flex-grow lg:block flex justify-around">
          <motion.h4
            initial={{ x: -20, opacity: 0 }}
            animate={loading === 100 ? { x: 0, opacity: 1 } : undefined}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.1,
            }}
            onClick={() => handleTabClick(1)}
            className={`${
              activeTab === 1 ? "underline" : "text-gray"
            } cursor-pointer lg:text-xl text-[18px] lg:mb-6 mb-3`}
          >
            Work Experience
          </motion.h4>
          <motion.h4
            initial={{ x: -30, opacity: 0 }}
            animate={loading === 100 ? { x: 0, opacity: 1 } : undefined}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 24,
              delay: 0.2,
            }}
            onClick={() => handleTabClick(2)}
            className={`${
              activeTab === 2 ? "underline" : "text-gray"
            } cursor-pointer lg:text-xl text-[18px] lg:mb-0 mb-3 lg:mr-0 mr-7`}
          >
            Projects
          </motion.h4>
        </div>
        <div className="lg:self-end lg:w-[1px] w-[100vw] lg:h-[400px] h-[1px] lg:bg-brown bg-gray lg:mb-0 mb-8 lg:mx-0 -mx-[20px]"></div>
      </div>
    </div>
  );
};

export default ExperienceTabs;
