import "./NavMenu.css";

const NavMenu = ({ title, menuItems }) => {
  const mappedMneuItems = menuItems.map(({ name, href, svg }) => {
    return (
      <a href={href}>
        <div className="nav-menu-mapped-menu-item">
          <div className="nav-menu-svg">{svg}</div>
          <div className="nav-menu-name">
            <span>{name}</span>
          </div>
        </div>
      </a>
    );
  });
  return (
    <div className="nav-menu">
      <h3>{title}</h3>
      {mappedMneuItems}
    </div>
  );
};

export default NavMenu;
