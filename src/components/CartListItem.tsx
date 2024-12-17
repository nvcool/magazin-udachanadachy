import cartItemImage from "../assets/cart/cart-item.png";
import { CartTrashImage } from "../assets/cart/CartTrashImage";
import { IMebel } from "../types/IMebel";
import { useCart } from "./context/CartContext";

interface ICartListItem {
  item: IMebel;
}

export const CartListItem = ({ item }: ICartListItem) => {
  const { setCart } = useCart();

  const deleteCartItem = (id: number) => {
    setCart((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <div className="flex items-center gap-10 justify-between">
      <img className="bg-background  rounded-md" src={cartItemImage} alt="" />
      <div className="flex gap-20 w-full items-center">
        <span className="flex-1 text-grey">{item.title}</span>
        <span className="flex-1 text-grey">Rs. {item.price}</span>
        <div className="flex gap-4">
          <button className="p-2">+</button>
          <input
            className=" border border-grey rounded-[5px] px-4  max-w-20"
            value={item.count}
            onChange={(e) => {
              setCart((prev) => {
                return prev.map((prevarka) => {
                  if (prevarka.id === item.id) {
                    return { ...prevarka, count: +e.target.value };
                  }
                  return prevarka;
                });
              });
            }}
            type="number"
          />
          <button className="p-2">-</button>
        </div>
        <span>Rs. {item.unprice}</span>
      </div>
      <button onClick={() => deleteCartItem(item.id)}>
        <CartTrashImage />
      </button>
    </div>
  );
};
