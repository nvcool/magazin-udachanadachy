import { CartListItem } from "./CartListItem";
import { useCart } from "./context/CartContext";

interface ICartListProps {
  formatPrice: (price: number) => string;
}

export const CartList = ({ formatPrice }: ICartListProps) => {
  const { cart } = useCart();
  return (
    <ul className="grid gap-3">
      {cart.map((item) => {
        return (
          <li key={item.id}>
            <CartListItem item={item} formatPrice={formatPrice} />
          </li>
        );
      })}
    </ul>
  );
};
