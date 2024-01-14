import { Heading, Subheading } from "../../components";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="pt-12 pb-8 lg:pb-24 lg:pt-5 ">
      <Heading
        headingText="Get To Know Me"
        fontSize="text-[19vw] lg:text-[11vw]"
        zIndex="z-10"
      />
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-5">
          <div className="lg:mb-16 mb-12">
            <Subheading text="Hi there!" />
            <p className="text-base text-gray mb-3">
              I am a 19-year-old web developer, specializing primarily in
              front-end technologies. With a solid start established at the age
              of 15, I embarked on a self-taught journey that led me to
              successfully land my first client at the age of 17. Now, with 7
              months of industry experience, I have honed my skills in
              developing JavaScript-based applications, complemented by
              occasional forays into backend development using PHP.
            </p>
            <p className="text-base text-gray mb-3">
              The inherent diversity embedded in each project is a source of
              excitement for me, and I actively seek and incorporate feedback
              from experienced colleagues to continually enhance my proficiency.
            </p>
            <p className="text-base text-gray lg:mb-8 mb-4">
              My journey of continual improvement is a testament to my
              dedication to personal and professional development.
            </p>
            <a
              href="#"
              className="bg-brown text-beige rounded-[4px] py-[10px] px-[20px] text-base"
            >
              Resume
            </a>
          </div>

          <div className="lg:mb-16 mb-12">
            <Subheading text="Why me?" />
            <p className="text-base text-gray mb-3">
              I am a web developer with a profound passion for my craft and I've
              got the skills to turn your ideas into reality. Whether your
              projects require specialized coding or design, I’ve got you
              covered. My commitment to excellence is underscored by a focus on
              quality, responsiveness, and effective communication. What sets me
              apart is my unwavering dedication to maintaining the highest
              standards.{" "}
            </p>
            <p className="text-base text-gray mb-3">
              If you're looking for a developer who's all about speed and
              cutting corners, we are probably not the right fit. If, however,
              you want to work with someone who’s been around the block a few
              times and consistently delivers on promises, then we are indeed
              the right fit.{" "}
            </p>
            <p className="text-base text-gray lg:mb-8 mb-4">
              Your satisfaction is not just a goal but a commitment, and I am
              here to ensure the success of your endeavors. If this aligns with
              your vision, please feel free to leave me a message, and let's
              discuss how I can bring value to your company.
            </p>
            <Link
              to="/contact"
              className="bg-brown text-beige rounded-[4px] py-[10px] px-[20px] text-base"
            >
              Get in touch
            </Link>
          </div>

          <div>
            <Subheading text="Skills" />
            <p className="text-base text-gray -mb-1">
              Some of the technologies I’ve used:
            </p>
            <p className="text-base text-gray">
              React, JavaScript, TypeScript, PHP, WordPress, Sass, Bootstrap,
              TailwindCSS, Git
            </p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <img
            src="/aboutPicture.jpg"
            alt=""
            className="block mx-auto -mt-36 z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
