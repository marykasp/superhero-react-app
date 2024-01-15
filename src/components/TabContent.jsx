const TabContent = ({ stats, content, isActive }) => {
  return (
    <ul className={`tab-content ${isActive ? "active" : ""}`}>
      {content.map((title) => (
        <li key={title}>{title}</li>
      ))}
    </ul>
  );
};

export default TabContent;
