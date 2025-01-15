import { IMebel } from "../types/IMebel";

interface IFurntituresDetailRelatedProductsProps {
  furnitur: IMebel;
}

export const FurntituresDetailRelatedProducts = ({
  furnitur,
}: IFurntituresDetailRelatedProductsProps) => {
  return (
    <section>
      <h3 className="text-center text-4xl font-medium mb-6">
        Related Products
      </h3>
      <ul className="">
        <li>
          <img src={furnitur.image[0]} alt="" />
          <span>{furnitur.title}</span>
        </li>
      </ul>
    </section>
  );
};
