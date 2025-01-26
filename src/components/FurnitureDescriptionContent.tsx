import { IMebel } from "../types/IMebel";

interface IFurnitureDescriptionContentProps {
  description: string;
  image: string[];
}

export const FurnitureDescriptionContent = ({
  description,
  image,
}: IFurnitureDescriptionContentProps) => {
  return (
    <div className="w-[1026px] grid mx-auto text-grey gap-9">
      <p className=" whitespace-pre-line">{description}</p>
      <div className="flex gap-8">
        <img
          className="bg-background h-[348px] w-[605px] p-12 object-contain rounded-2xl"
          src={image[0]}
          alt=""
        />
        <img
          className="bg-background h-[348px] w-[605px] p-12 object-contain rounded-2xl"
          src={image[0]}
          alt=""
        />
      </div>
    </div>
  );
};
