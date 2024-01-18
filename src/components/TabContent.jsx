const TabContent = ({ stats, content, label, isActive }) => {
  // get stats based on label - appearance, biography, powerstats, connections
  console.log(stats);

  return (
    <ul className={`tab-content ${isActive ? "active" : ""} ${label}`}>
      {content.map((title) => (
        <li key={title}>{title}</li>
      ))}
    </ul>
  );
};

export default TabContent;
