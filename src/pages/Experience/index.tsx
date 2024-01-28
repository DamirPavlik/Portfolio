import { useState } from "react";
import { Heading } from "../../components";
import ExperienceTabsContent from "./ExperienceTabsContent";
import ExperienceTabs from "./ExperienceTabs";

const Experience = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="pt-12 pb-16 lg:pt-5 min-h-screen md:min-h-0">
      <Heading headingText="Experience" fontSize="text-[17vw] lg:text-[11vw]" />
      <div className="grid grid-cols-12">
        <ExperienceTabs activeTab={activeTab} handleTabClick={handleTabClick} />
        <ExperienceTabsContent activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Experience;
