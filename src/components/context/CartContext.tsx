import { createContext, useContext } from "react";
import { IMebel } from "../../types/IMebel";

interface ICartContext {
  cart: IMebel[];
  setCart: React.Dispatch<React.SetStateAction<IMebel[]>>;
}

export const CartContext = createContext<ICartContext>({
  cart: [],
  setCart: () => {},
});

export const useCart = () => {
  return useContext(CartContext);
};
