import { useState } from "react";
import sofaInformation from "../assets/detailPage/sofa-information.png";
import { IMebel } from "../types/IMebel";

interface IFurnituresDetailContentProps {
  furnitur: IMebel;
  reviewQuantity: number;
}

const contentInformation = [
  {
    id: 186,
    label: "Description",
    text: "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. \n \n Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
    image: sofaInformation,
  },
  {
    id: 245,
    label: "Additional Information",
    text: "my life my rules my style my attitude",
  },
  { id: 124, label: "Reviews" },
];

export const FurnituresDetailContent = ({
  furnitur,
  reviewQuantity,
}: IFurnituresDetailContentProps) => {
  const [contentChoise, setContentChoise] = useState<number>(
    contentInformation[0].id
  );

  return (
    <div className="mb-16">
      <div className="flex gap-[52px] justify-center mb-9">
        {contentInformation.map((item, index) => {
          return (
            <div key={item.id} className="">
              <div className="">
                <button
                  onClick={() => setContentChoise(item.id)}
                  className={`text-grey hover:text-darkGrey transition-colors ease-in text-2xl font-medium ${
                    contentChoise === item.id && "text-black"
                  }`}>
                  {item.label}
                  {index === 2 && ` [ ${reviewQuantity} ] `}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {contentInformation.map((item) => {
        return (
          <div key={item.id} className="">
            {contentChoise === item.id && (
              <div className="">
                {item.text && (
                  <div className="container w-[1026px] mx-auto text-grey mb-9 ">
                    <p className={`whitespace-pre-line text-justify`}>
                      {item.text}
                    </p>
                  </div>
                )}
                {item.image && (
                  <div className="flex gap-7 justify-center">
                    <img
                      className="h-[348px] max-w-[605px] w-full bg-background rounded-xl"
                      src={item.image}
                      alt=""
                    />
                    <img
                      className="h-[348px] max-w-[605px] w-full bg-background rounded-xl"
                      src={item.image}
                      alt=""
                    />
                  </div>
                )}
                {furnitur.review && (
                  <span>Rating: {furnitur.review[0].rating}</span>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
