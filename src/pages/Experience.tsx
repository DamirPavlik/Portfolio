import { useState } from "react";
import { ExperienceTabs, ExperienceTabsContent, Heading } from "../components";

const Experience = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="pt-12 pb-16 lg:pt-5">
      <Heading headingText="Experience" fontSize="text-[17vw] lg:text-[11vw]" />
      <div className="grid grid-cols-12">
        <ExperienceTabs activeTab={activeTab} handleTabClick={handleTabClick} />
        <ExperienceTabsContent activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Experience;
