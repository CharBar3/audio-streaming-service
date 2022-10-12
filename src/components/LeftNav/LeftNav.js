import "./LeftNav.css";
import NavMenu from "./NavMenu";

import { ReactComponent as MusicIcon } from "../Icons/music.svg";
import { ReactComponent as UserIcon } from "../Icons/user.svg";
import { ReactComponent as SpeakerIcon } from "../Icons/speaker.svg";
import { ReactComponent as PlayCircleIcon } from "../Icons/play-circle.svg";
import { ReactComponent as ShoppingBagIcon } from "../Icons/shopping-bag.svg";
import { ReactComponent as RadioIcon } from "../Icons/radio.svg";
import { ReactComponent as HeartIcon } from "../Icons/heart.svg";
import { ReactComponent as SearchIcon } from "../Icons/search.svg";

const LeftNav = () => {
  const handleResize = () => {
    const navMenu = document.querySelector(".left-nav");

    if (window.innerWidth >= 600) {
      navMenu.style.display = "flex";
    } else {
      navMenu.style.display = "none";
    }
  };

  window.addEventListener("resize", handleResize);

  const library = [
    {
      name: "Playlists",
      href: "place holder",
      svg: <MusicIcon />,
    },
    {
      name: "Artists",
      href: "place holder",
      svg: <UserIcon />,
    },
    {
      name: "Albums",
      href: "place holder",
      svg: <SpeakerIcon />,
    },
    {
      name: "Songs",
      href: "place holder",
      svg: <PlayCircleIcon />,
    },
  ];

  const discover = [
    {
      name: "Store",
      href: "place holder",
      svg: <ShoppingBagIcon />,
    },
    {
      name: "Radio",
      href: "place holder",
      svg: <RadioIcon />,
    },
    {
      name: "For You",
      href: "place holder",
      svg: <HeartIcon />,
    },
    {
      name: "Browse",
      href: "place holder",
      svg: <SearchIcon />,
    },
  ];
  return (
    <div className="left-nav">
      <div className="left-nav-cap"></div>
      <NavMenu menuItems={library} title="Library" />
      <NavMenu menuItems={discover} title="Discover" />
    </div>
  );
};

export default LeftNav;
