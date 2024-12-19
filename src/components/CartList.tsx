import { CartListItem } from "./CartListItem";
import { useCart } from "./context/CartContext";

interface ICartListProps {
  formatPrice: (price: number) => string;
  subtotalPrice: (unprice: number) => string;
}

export const CartList = ({ formatPrice, subtotalPrice }: ICartListProps) => {
  const { cart } = useCart();
  return (
    <ul className="grid gap-3">
      {cart.map((item) => {
        return (
          <li key={item.id}>
            <div className=""></div>
            <CartListItem
              item={item}
              formatPrice={formatPrice}
              subtotalPrice={subtotalPrice}
            />
          </li>
        );
      })}
    </ul>
  );
};
