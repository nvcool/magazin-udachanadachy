import { useState } from "react";
import { IMebel } from "../types/IMebel";
import { FurnitureDescriptionContent } from "./FurnitureDescriptionContent";
import { FurnitureAdditionalInformation } from "./FurnitureAdditionalInformation";
import { FurnitureReviews } from "./FurnitureReviews";

interface IFurnituresDetailContentProps {
  furnitur: IMebel;
  contentChoise: number;
  setContentChoise: React.Dispatch<React.SetStateAction<number>>;
  contentInformation: {
    id: number;
    label: string;
  }[];
}

export const FurnituresDetailContent = ({
  furnitur,
  contentChoise,
  setContentChoise,
  contentInformation,
}: IFurnituresDetailContentProps) => {
  return (
    <div className="mb-16">
      <div className="flex gap-[52px] justify-center mb-9">
        {contentInformation.map((item) => {
          return (
            <div key={item.id} className="">
              <div className="">
                <button
                  onClick={() => setContentChoise(item.id)}
                  className={` hover:text-darkGrey transition-colors ease-in text-2xl font-medium ${
                    contentChoise === item.id ? "text-black" : "text-grey"
                  }`}>
                  {item.label}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {contentChoise === contentInformation[0].id && (
        <FurnitureDescriptionContent
          description={furnitur.description}
          image={furnitur.image}
        />
      )}

      {contentChoise === contentInformation[1].id && (
        <FurnitureAdditionalInformation />
      )}

      {contentChoise === contentInformation[2].id && (
        <FurnitureReviews review={furnitur.review} />
      )}
    </div>
  );
};
