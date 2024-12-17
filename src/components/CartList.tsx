import { CartListItem } from "./CartListItem";
import { useCart } from "./context/CartContext";

export const CartList = () => {
  const { cart } = useCart();
  return (
    <ul className="grid gap-3">
      {cart.map((item) => {
        return (
          <li key={item.id}>
            <div className=""></div>
            <CartListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
};
