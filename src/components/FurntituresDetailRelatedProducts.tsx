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
    </section>
  );
};
