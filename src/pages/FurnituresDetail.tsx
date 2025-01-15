import { Navigate, useParams } from "react-router";
import { useMebel } from "../components/context/MebelContext";
import { FurnituresDetailHeder } from "../components/FurnituresDetailHeder";
import { FurnituresDetailInfotmation } from "../components/FurnituresDetailInfotmation";
import { FurntituresDetailRelatedProducts } from "../components/FurntituresDetailRelatedProducts";

interface IFurnituresDetailProps {
  formatPrice: (price: number) => string;
}

export const FurnituresDetail = ({ formatPrice }: IFurnituresDetailProps) => {
  const { furnitures } = useMebel();

  const { id } = useParams();

  const furnitur = furnitures.find((item) => item.id === Number(id));

  if (furnitur === undefined) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <div className="">
      <FurnituresDetailHeder furnitur={furnitur} id={id} />
      <FurnituresDetailInfotmation
        furnitur={furnitur}
        formatPrice={formatPrice}
      />
      <FurntituresDetailRelatedProducts furnitur={furnitur} />
    </div>
  );
};
