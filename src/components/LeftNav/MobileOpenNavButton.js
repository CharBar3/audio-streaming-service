import CircleButton from "../CircleButton/CircleButton";
import "./MobileOpenNavButton.css";
import { ReactComponent as MenuIcon } from "../Icons/menu.svg";

const MobileOpenNavButton = () => {
  return (
    <div className="mobile-open-nav">
      <CircleButton icon={<MenuIcon />} />
    </div>
  );
};

export default MobileOpenNavButton;
