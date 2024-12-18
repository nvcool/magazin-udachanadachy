import { createContext, useContext } from "react";
import { IMebel } from "../../types/IMebel";

interface IMebelContext {
  furnitures: IMebel[];
  setFurnitures: React.Dispatch<React.SetStateAction<IMebel[]>>;
}

export const MebelContext = createContext<IMebelContext>({
  furnitures: [],
  setFurnitures: () => {},
});

export const useMebel = () => {
  return useContext(MebelContext);
};
