import CircleButton from "../CircleButton/CircleButton";
import "./MobileOpenNavButton.css";
import { ReactComponent as MenuIcon } from "../Icons/menu.svg";

const MobileOpenNavButton = () => {
  const openCloseNav = () => {
    const nav = document.querySelector(".left-nav");
    if (nav.style.display === "flex" || nav.style.display === null) {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
    }
  };

  return (
    <div className="mobile-open-nav" onClick={() => openCloseNav()}>
      <CircleButton icon={<MenuIcon />} />
    </div>
  );
};

export default MobileOpenNavButton;
