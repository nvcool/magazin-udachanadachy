import { NavLink } from "react-router";
import linkArrow from "../assets/cart/arrow-nav-cart.svg";
import { IMebel } from "../types/IMebel";

interface IFurnituresDetailHeaderProps {
  furnitur: IMebel;
  id: string | undefined;
}

export const FurnituresDetailHeder = ({
  furnitur,
}: IFurnituresDetailHeaderProps) => {
  return (
    <div className="flex items-center gap-6 py-8 px-[100px] bg-background w-full mb-9">
      <div className="flex gap-4 text-grey items-center ">
        <NavLink
          className="hover:text-black transition-colors ease-in"
          to={"/"}>
          Home
        </NavLink>
        <img className="h-fit" src={linkArrow} alt="" />
        <NavLink
          className="hover:text-black transition-colors ease-in"
          to={"cart"}>
          Shop
        </NavLink>
        <img className="h-fit" src={linkArrow} alt="" />
      </div>
      <span className=" text-5xl text-grey font-extralight">|</span>
      <span className=""> {furnitur.title} </span>
    </div>
  );
};
