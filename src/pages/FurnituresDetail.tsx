import { Navigate, Outlet, useParams } from "react-router";
import { FurnituresDetailHeder } from "../components/FurnituresDetailHeder";
import { FurnituresDetailInfotmation } from "../components/FurnituresDetailInfotmation";
import { FurntituresDetailRelatedProducts } from "../components/FurntituresDetailRelatedProducts";
import { IMebel } from "../types/IMebel";
import { useEffect, useState } from "react";
import { IErrorType } from "../types/IErrorType";
import { useQuery, useQueryClient } from "@tanstack/react-query";

interface IFurnituresDetailProps {
  formatPrice: (price: number) => string;
}

// const getFurniture = async (id: string): Promise<IMebel> => {
//   const response = await fetch(`http://localhost:3000/furnitures/${id}`);
//   if (!response.ok) {
//     throw { message: response.statusText, status: response.status };
//   } else {
//     return response.json();
//   }
// };

export const FurnituresDetail = ({ formatPrice }: IFurnituresDetailProps) => {
  const { id } = useParams();

  // const [furniture, setFurniture] = useState<IMebel>();
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [error, setError] = useState<IErrorType>();

  const {
    data: furniture,
    isLoading,
    error,
  } = useQuery<IMebel>({
    queryKey: ["furniture", id],
    queryFn: () =>
      fetch(`http://localhost:3000/furnitures/${id}`).then((res) => res.json()),
    // enabled: !!id,   нужно ли это тут вообще если у нас айди и так стопудово есть, я понял запрос как то с этим связан но не до конца
  });

  if (isLoading) {
    return (
      <h3 className=" text-center text-5xl font-semibold py-20">
        {" "}
        Loading . . .
      </h3>
    );
  }

  if (error) {
    return (
      <h3 className=" text-center text-5xl font-semibold py-20">
        Error: {error.message}
      </h3>
    );
  }

  // const { isLoading, error } = useQuery({
  //   queryKey: ["furnitureData"],
  //   queryFn: () => {
  //     fetch(`http://localhost:3000/furnitures/${id}`).then((res) => res.json());
  //   },
  // });

  // const getFurnitureHandler = async () => {
  //   setIsLoading(true);
  //   // const dongle = await new Promise((resolve) => {
  //   //   setTimeout(() => {
  //   //     resolve(2);
  //   //   }, 1000);
  //   //   // resolve(getFurniture(Number(id)));
  //   // }).then(() => {
  //   //   // setFurniture(data);
  //   //   // setIsLoading(false);
  //   // });
  //   // // .catch((data) => {
  //   // //   console.log(data);
  //   // // })
  //   // // .finally(() => {
  //   // //   console.log("finally");
  //   // // });
  //   try {
  //     const data = await getFurniture(String(id));
  //     setFurniture(data);
  //     setError(undefined);
  //   } catch (error2) {
  //     setError(error2 as IErrorType);
  //   }
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   getFurnitureHandler();
  // }, []);

  if (furniture === undefined && !isLoading && !error) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <div className="">
      {/* {error && (
        <div className="">
          <span>{error}</span>
          <span></span>
        </div>
      )}
      {isLoading && (
        <h3 className=" text-center text-5xl font-semibold py-20">
          {" "}
          Loading . . .
        </h3>
      )} */}
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
