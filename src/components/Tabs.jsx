import { useState } from "react";
import Tab from "./Tab";
import TabContent from "./TabContent";

const Tabs = ({ tabs, hero }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.label}
            onClick={() => handleTabClick(tab.id)}
            isActive={tab.id === activeTab}
          />
        ))}
      </div>

      {/* another component that will be passed down the final data from the search */}
      <div className="tabs-body">
        {tabs.map((tab) => (
          <TabContent
            content={tab.titles}
            label={tab.label}
            stats={hero}
            key={`${tab.id}-content`}
            isActive={tab.id === activeTab}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
