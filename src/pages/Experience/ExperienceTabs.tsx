import { ExperienceTabsProps } from "../../types/types";

const ExperienceTabs: React.FC<ExperienceTabsProps> = ({
  activeTab,
  handleTabClick,
}) => {
  return (
    <div className="lg:col-span-2 col-span-12">
      <div className="flex lg:flex-row flex-col">
        <div className="lg:flex-grow lg:block flex justify-around">
          <h4
            onClick={() => handleTabClick(1)}
            className={`${
              activeTab === 1 ? "underline" : "text-gray"
            } cursor-pointer lg:text-xl text-[18px] lg:mb-6 mb-3`}
          >
            Work Experience
          </h4>
          <h4
            onClick={() => handleTabClick(2)}
            className={`${
              activeTab === 2 ? "underline" : "text-gray"
            } cursor-pointer lg:text-xl text-[18px] lg:mb-0 mb-3 lg:mr-0 mr-7`}
          >
            Projects
          </h4>
        </div>
        <div className="lg:self-end lg:w-[1px] w-[100vw] lg:h-[400px] h-[1px] lg:bg-brown bg-gray lg:mb-0 mb-8 lg:mx-0 -mx-[20px]"></div>
      </div>
    </div>
  );
};

export default ExperienceTabs;
