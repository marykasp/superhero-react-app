const TabContent = ({ stats, content, label, isActive }) => {
  return (
    <ul className={`tab-content ${isActive ? "active" : ""} ${label}`}>
      {content.map((title) => (
        <li key={title}>{title}</li>
      ))}
    </ul>
  );
};

export default TabContent;
