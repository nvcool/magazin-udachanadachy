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

  const plusCartCount = (id: number) => {
    setCart((prev) => {
      return prev.map((item) => {
        return item.id === id ? { ...item, count: item.count + 1 } : item;
      });
    });
    return item;
  };

  const minusCartItem = (id: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          return item.id === id ? { ...item, count: item.count - 1 } : item;
        })
        .filter((item) => item.count > 0);
    });
  };

  return (
    <div className="flex items-center">
      <img className="bg-background  rounded-md" src={cartItemImage} alt="" />
      <div className="flex w-full px-[34px]">
        <div className="grid grid-cols-3 w-full  items-center mr-[50px]">
          <span className="   text-grey">{item.title}</span>
          <span className="  text-grey">Rs.{item.price}</span>
          <div className="flex  gap-4">
            <div className="flex gap-4 items-center">
              <button
                onClick={() => plusCartCount(item.id)}
                className="px-3 py-1 bg-green bg-opacity-70 hover:bg-opacity-100 transition-colors ease-in text-white rounded-full">
                +
              </button>
              <input
                className=" border border-grey rounded-[5px] py-2 px-4  max-w-20"
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
              <button
                onClick={() => minusCartItem(item.id)}
                className="px-3 py-1 bg-red bg-opacity-70 hover:bg-opacity-100 transition-colors ease-in text-white rounded-full mr-4">
                -
              </button>
              <span>Rs.{item.unprice}</span>
            </div>
          </div>
        </div>
        <button onClick={() => deleteCartItem(item.id)}>
          <CartTrashImage />
        </button>
      </div>
    </div>
  );
};
