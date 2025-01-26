import { Navigate, useParams } from "react-router";
import { FurnituresDetailHeder } from "../components/FurnituresDetailHeder";
import { FurnituresDetailInfotmation } from "../components/FurnituresDetailInfotmation";
import { FurntituresDetailRelatedProducts } from "../components/FurntituresDetailRelatedProducts";
import { IMebel } from "../types/IMebel";
import { useEffect, useState } from "react";

interface IFurnituresDetailProps {
  formatPrice: (price: number) => string;
}

const getFurniture = (id: number) => {
  return fetch(`http://localhost:3000/furnitures/${id}`).then((data) => {
    return data.json();
  });
};

export const FurnituresDetail = ({ formatPrice }: IFurnituresDetailProps) => {
  const [furniture, setFurniture] = useState<IMebel>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams();

  const getFurnitureHandler = async () => {
    setIsLoading(true);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 5000);
    });
    const data = await getFurniture(Number(id));
    setFurniture(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getFurnitureHandler();
  }, []);

  if (furniture === undefined && !isLoading) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <div className="">
      {isLoading && "Loading . . ."}
      {!isLoading && furniture && (
        <>
          <FurnituresDetailHeder furnitur={furniture} id={id} />
          <FurnituresDetailInfotmation
            furnitur={furniture}
            formatPrice={formatPrice}
          />
          <FurntituresDetailRelatedProducts furnitur={furniture} />
        </>
      )}
    </div>
  );
};
