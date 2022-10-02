import "./styles.css";

const ListItems = () => {
  const menuItems = ["shop", "fabric", "journal", "about"];

  return (
    <div className="menu-items">
      <h2>Matter</h2>
      {menuItems.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};

export default ListItems;
