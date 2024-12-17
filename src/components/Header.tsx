import { NavLink } from "react-router";
import logo from "../assets/header/header-svg.svg";
import { AccountImageSvg } from "../assets/header/AccountImageSvg";
import { SearchImageSvg } from "../assets/header/SearchImageSvg";
import { HeartImageSvg } from "../assets/header/HeartImageSvg";
import { CartImage } from "../assets/header/CartImageSvg";

const links = [
  { link: "/", name: "Home" },
  { link: "shop", name: "Shop" },
  { link: "about", name: "About" },
  { link: "contact", name: "Contact" },
];

export const Header = () => {
  return (
    <header className="flex justify-between items-center py-[20px] px-[54px]">
      <NavLink
        className="text-[34px] font-bold flex gap-2 hover:text-liteGray transition-colors ease-in"
        to={"/"}>
        <img src={logo} alt="" />
        Furniro
      </NavLink>
      <ul className="flex gap-[75px] font-medium items-center">
        {links.map((link) => {
          return (
            <li
              className="hover:text-liteGray transition-colors ease-in"
              key={link.link}>
              <NavLink to={link.link}>{link.name}</NavLink>
            </li>
          );
        })}
      </ul>
      <div className="flex gap-11">
        <a href="#">
          <AccountImageSvg />
        </a>
        <a href="#">
          <SearchImageSvg />
        </a>
        <a href="#">
          <HeartImageSvg />
        </a>
        <NavLink to={"cart"}>
          <CartImage />
        </NavLink>
      </div>
    </header>
  );
};
