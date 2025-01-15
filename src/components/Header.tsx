import { NavLink } from "react-router";
import logo from "../assets/header/header-svg.svg";
import { AccountImageSvg } from "../assets/header/AccountImageSvg";
import { SearchImageSvg } from "../assets/header/SearchImageSvg";
import { HeartImageSvg } from "../assets/header/HeartImageSvg";
import { useCart } from "./context/CartContext";
import { CartModal } from "./СartModal";

interface IHeaderProps {
  formatPrice: (price: number) => string;
}

const links = [
  { link: "/", name: "Home" },
  { link: "cart", name: "Cart" },
  { link: "about", name: "About" },
  { link: "contact", name: "Contact" },
];

export const Header = ({ formatPrice }: IHeaderProps) => {
  const { cart } = useCart();

  const totalCount = cart.length;

  return (
    <header className="flex justify-between items-center py-[20px] px-[54px] sticky top-0  z-50 w-full bg-white bg-opacity-80">
      <NavLink
        className="text-[34px] font-bold flex gap-2 hover:text-liteGray transition-colors ease-in"
        to={"/"}>
        <img src={logo} alt="" />
        Funiro
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
        <div className="flex gap-2 items-center">
          <span className="px-2 w-[30px] text-center rounded-full bg-green text-white">
            {totalCount}
          </span>
          <CartModal formatPrice={formatPrice} />
        </div>
      </div>
    </header>
  );
};
