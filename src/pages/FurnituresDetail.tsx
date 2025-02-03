import { Navigate, Outlet, useParams } from "react-router";
import { FurnituresDetailHeder } from "../components/FurnituresDetailHeder";
import { FurnituresDetailInfotmation } from "../components/FurnituresDetailInfotmation";
import { FurntituresDetailRelatedProducts } from "../components/FurntituresDetailRelatedProducts";
import { IMebel } from "../types/IMebel";
import { useEffect, useState } from "react";
import { IErrorType } from "../types/IErrorType";

interface IFurnituresDetailProps {
  formatPrice: (price: number) => string;
}

const getFurniture = async (id: string): Promise<IMebel> => {
  const response = await fetch(`http://localhost:3000/furnitures/${id}`);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  } else {
    return response.json();
  }
};

export const FurnituresDetail = ({ formatPrice }: IFurnituresDetailProps) => {
  const [furniture, setFurniture] = useState<IMebel>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<IErrorType>();

  const { id } = useParams();

  const getFurnitureHandler = async () => {
    setIsLoading(true);
    // const dongle = await new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(2);
    //   }, 1000);
    //   // resolve(getFurniture(Number(id)));
    // }).then(() => {
    //   // setFurniture(data);
    //   // setIsLoading(false);
    // });
    // // .catch((data) => {
    // //   console.log(data);
    // // })
    // // .finally(() => {
    // //   console.log("finally");
    // // });
    try {
      const data = await getFurniture(String(id));
      setFurniture(data);
      setError(undefined);
    } catch (error2) {
      setError(error2 as IErrorType);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getFurnitureHandler();
  }, []);

  if (furniture === undefined && !isLoading && !error) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <div className="">
      {error && (
        <div className="">
          <span>{error.status}</span>
          <span>{error.message}</span>
        </div>
      )}
      {isLoading && (
        <h3 className=" text-center text-5xl font-semibold py-20">
          {" "}
          Loading . . .
        </h3>
      )}
      {!isLoading && !error && furniture && (
        <>
          <FurnituresDetailHeder furnitur={furniture} id={id} />
          <FurnituresDetailInfotmation
            furnitur={furniture}
            formatPrice={formatPrice}
          />
          <FurntituresDetailRelatedProducts furnitur={furniture} />
          <Outlet />
        </>
      )}
    </div>
  );
};
