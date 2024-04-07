import { Heading, Subheading } from "../../components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LoadingContext } from "../../components/layout/Layout";
import { useContext } from "react";

const About = () => {
  const currentDate = new Date();
  const startedDate = new Date(2023, 5, 1);
  let monthsOfWorking =
    (currentDate.getFullYear() - startedDate.getFullYear()) * 12 +
    currentDate.getMonth() -
    startedDate.getMonth();
  const loading = useContext(LoadingContext);

  return (
    <div className="pt-12 pb-8 lg:pb-24 lg:pt-5 ">
      <Heading
        headingText="Get To Know Me"
        fontSize="text-[15vw] lg:text-[10.5vw]"
        additionalStyles="z-10 lg:leading-[150%] leading-none"
      />
      <div className="grid grid-cols-12">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={loading === 100 ? { x: 0, opacity: 1 } : undefined}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.3,
            duration: 0.7,
          }}
          className="col-span-12 lg:col-span-5"
        >
          <div className="lg:mb-16 mb-12">
            <Subheading text="Hi there!" />
            <p className="lg:text-base text-sm text-gray mb-3">
              I am a 19-year-old web developer, specializing primarily in
              front-end technologies. With a solid start established at the age
              of 15, I embarked on a self-taught journey that led me to
              successfully land my first client at the age of 17. Now, with{" "}
              {monthsOfWorking} months of industry experience, I have honed my
              skills in developing JavaScript-based applications, complemented
              by occasional forays into backend development using PHP.
            </p>
            <p className="lg:text-base text-sm text-gray mb-3">
              The inherent diversity embedded in each project is a source of
              excitement for me, and I actively seek and incorporate feedback
              from experienced colleagues to continually enhance my proficiency.
            </p>
            <p className="lg:text-base text-sm text-gray mb-8">
              My journey of continual improvement is a testament to my
              dedication to personal and professional development.
            </p>
            <a
              href="#"
              className="bg-gradient-to-r from-brown to-[#2e241f] drop-shadow-lg text-beige rounded-[4px] py-[10px] px-[20px] lg:text-base text-sm"
            >
              Resume
            </a>
          </div>

          <div className="lg:mb-16 mb-12">
            <Subheading text="Why me?" />
            <p className="lg:text-base text-sm text-gray mb-3">
              I am a web developer with a profound passion for my craft and I've
              got the skills to turn your ideas into reality. Whether your
              projects require specialized coding or design, I’ve got you
              covered. My commitment to excellence is underscored by a focus on
              quality, responsiveness, and effective communication. What sets me
              apart is my unwavering dedication to maintaining the highest
              standards.{" "}
            </p>
            <p className="lg:text-base text-sm text-gray mb-3">
              If you're looking for a developer who's all about speed and
              cutting corners, we are probably not the right fit. If, however,
              you want to work with someone who’s been around the block a few
              times and consistently delivers on promises, then we are indeed
              the right fit.{" "}
            </p>
            <p className="lg:text-base text-sm text-gray mb-8">
              Your satisfaction is not just a goal but a commitment, and I am
              here to ensure the success of your endeavors. If this aligns with
              your vision, please feel free to leave me a message, and let's
              discuss how I can bring value to your company.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-brown to-[#2e241f] drop-shadow-lg text-beige rounded-[4px] py-[10px] px-[20px] lg:text-base text-sm"
            >
              Get in touch
            </Link>
          </div>

          <div>
            <Subheading text="Skills" />
            <p className="lg:text-base text-sm text-gray ">
              Some of the technologies I’ve used:
            </p>
            <p className="lg:text-base text-sm text-gray">
              React, JavaScript, TypeScript, Next.js, jQuery, PHP, MySQL,
              WordPress, Firebase Sass, Bootstrap, TailwindCSS, Git, Figma,
              Photoshop
            </p>
          </div>
        </motion.div>
        <div className="col-span-12 lg:col-span-6">
          <motion.img
            initial={{ x: 20, opacity: 0 }}
            animate={loading === 100 ? { x: 0, opacity: 1 } : undefined}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.3,
              duration: 0.7,
            }}
            src="/aboutPicture.jpg"
            alt=""
            className="block mx-auto lg:-mt-36 z-0 lg:static absolute lg:w-auto w-[22%] lg:right-0 right-[6%] lg:top-0 top-[13%]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
