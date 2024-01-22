import { ReactSVG } from "react-svg";
import { ExperienceTabsContentProps } from "../../types/types";
import { motion } from "framer-motion";
import { useContext } from "react";
import { LoadingContext } from "../../components/layout/Layout";

const ExperienceTabsContent: React.FC<ExperienceTabsContentProps> = ({
  activeTab,
}) => {
  const loading = useContext(LoadingContext);
  return (
    <div className="lg:col-span-8 col-span-12">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={
          loading === 100 && activeTab === 1 ? { y: 0, opacity: 1 } : undefined
        }
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className={`${activeTab === 1 ? "" : "hidden"} lg:ml-16`}
      >
        <h4 className="text-xl text-brown mb-0 font-semibold">
          Front End Engineer — OmniStreak Digital Solutions
        </h4>
        <p className="text-silver text-sm lg:mb-0 mb-4">Jun 2023 - Present</p>
        <ul className="lg:mt-8 lg:ml-16">
          <li className="flex text-gray lg:text-base text-sm lg:mb-8 mb-5">
            <ReactSVG src="triangle.svg" className="mr-4 mt-1" />I have been
            actively engaged in front-end development, specializing in
            JavaScript. <br className="lg:block hidden" />
            Additionally, I have demonstrated versatility by contributing to PHP
            and WordPress projects. <br className="lg:block hidden" /> My
            primary focus has been on product launches and the development of
            JavaScript-based applications.
          </li>
          <li className="flex text-gray lg:text-base text-sm">
            <ReactSVG src="triangle.svg" className="mr-4 mt-1" />
            This experience has been instrumental in deepening my understanding
            of web technologies, particularly in the realms of PHP and
            JavaScript. I am proud to have secured this position at the age of
            18, a testament to my dedication and proficiency in the field.
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={
          loading === 100 && activeTab === 2 ? { y: 0, opacity: 1 } : undefined
        }
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className={`${activeTab === 2 ? "" : "hidden"} lg:ml-16`}
      >
        <div className="lg:mb-16">
          <h4 className="text-xl text-brown mb-0 font-semibold">
            Crveno Vino Restaurant
          </h4>
          <p className="text-silver text-sm">UI/UX Design & Development</p>
          <ul className="lg:mt-8 mt-4 lg:ml-16">
            <li className="flex text-gray lg:text-base text-sm lg:mb-8 mb-5">
              <ReactSVG src="triangle.svg" className="mr-4 mt-1" />I have been
              actively engaged in front-end development, specializing in
              JavaScript. <br className="lg:block hidden" />
              Additionally, I have demonstrated versatility by contributing to
              PHP and WordPress projects. <br className="lg:block hidden" /> My
              primary focus has been on product launches and the development of
              JavaScript-based applications.
            </li>
            <li className="flex text-gray lg:text-base text-sm">
              <ReactSVG src="triangle.svg" className="mr-4 mt-1" />
              Technologies used: <br />
              HTML, CSS, JavaScript, Bootstrap, Figma
            </li>
          </ul>
          <div className="flex lg:ml-[88px] ml-6 lg:mt-6 mt-5 lg:mb-0 mb-8">
            <a
              href="https://github.com/DamirPavlik/crvenovino.rs"
              target="_blank"
            >
              <img src="/github.png" alt="" className="mr-1 w-8" />
            </a>
            <a href="https://crvenovino.rs/" target="_blank">
              <img src="/web.png" alt="" className="mr-1 w-8" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-xl text-brown mb-0 font-semibold">
            Gimnazija “Mihajlo Pupin” Kovacica
          </h4>
          <p className="text-silver text-sm">UI/UX Design & Development</p>
          <ul className="lg:mt-8 mt-4 lg:ml-16">
            <li className="flex text-gray lg:mb-8 mb-5">
              <ReactSVG src="triangle.svg" className="mr-4 mt-1" />
              The gymnasium in Kovacica already had a website, but they needed a
              fresh new look. I provided a design in Figma and once they
              approved it, I began developing the website. The end result was a
              modern, user-friendly website that accurately represented the
              school's values and mission.
            </li>
            <li className="flex  text-gray">
              <ReactSVG src="triangle.svg" className="mr-4 mt-1" />
              Technologies used: <br />
              PHP, WordPress, jQuery, JavaScript, Sass, Bootstrap, Figma
            </li>
          </ul>
          <div className="flex lg:ml-[88px] ml-6 lg:mt-6 mt-5">
            <a
              href="https://github.com/DamirPavlik/gymko.edu.rs"
              target="_blank"
            >
              <img src="/github.png" alt="" className="mr-1 w-8" />
            </a>
            <a href="https://gymko.edu.rs/" target="_blank">
              <img src="/web.png" alt="" className="mr-1 w-8" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceTabsContent;
