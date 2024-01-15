const Tab = ({ isActive, label, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={`tab ${isActive ? "active" : ""}`}>
        {label}
      </button>
    </>
  );
};

export default Tab;
