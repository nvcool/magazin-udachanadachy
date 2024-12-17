import { createContext, useContext } from "react";
import { IMebel } from "../../types/IMebel";

interface IMebelContext {
  mebels: IMebel[];
  setMebels: React.Dispatch<React.SetStateAction<IMebel[]>>;
}

export const MebelContext = createContext<IMebelContext>({
  mebels: [],
  setMebels: () => {},
});

export const useMebel = () => {
  return useContext(MebelContext);
};
