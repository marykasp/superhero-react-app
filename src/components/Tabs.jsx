import { useState } from "react";
import Tab from "./Tab";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
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
        {/* powerstats tab content*/}
        <ul
          className={`tab-content powerstats ${
            activeTab === 1 ? "active" : ""
          }`}
        >
          <li>
            <div>
              <span>intelligence</span>
            </div>
            <span>100</span>
          </li>
          <li>
            <div>
              <span>strength</span>
            </div>
            <span>26</span>
          </li>
          <li>
            <div>
              <span>speed</span>
            </div>
            <span>27</span>
          </li>
          <li>
            <div>
              <span>durability</span>
            </div>
            <span>50</span>
          </li>
          <li>
            <div>
              <span>power</span>
            </div>
            <span>47</span>
          </li>
          <li>
            <div>
              <span>combat</span>
            </div>
            <span>100</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
