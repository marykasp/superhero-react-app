const TabContent = ({ stats, content, label, isActive }) => {
  // get stats based on label - appearance, biography, powerstats, connections

  return (
    <ul className={`tab-content ${isActive ? "active" : ""} ${label}`}>
      {content.map((title) => (
        <li key={title}>
          <div>
            <span>{title}</span>
          </div>
          <span>{stats[title]}</span>
        </li>
      ))}
    </ul>
  );
};

export default TabContent;
