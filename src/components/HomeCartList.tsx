import shareImage from "../assets/home/home-cart/share-cart.svg";
import compareImage from "../assets/home/home-cart/compare-cart.svg";
import likeImage from "../assets/home/home-cart/like-cart.svg";
import { useMebel } from "./context/MebelContext";
import { useCart } from "./context/CartContext";
import { IMebel } from "../types/IMebel";

interface IHomeCartListProps {
  formatPrice: (price: number) => string;
  subtotalPrice: (unprice: number) => string;
}

export const HomeCartList = ({
  formatPrice,
  subtotalPrice,
}: IHomeCartListProps) => {
  const { furnitures } = useMebel();
  const { cart, setCart } = useCart();

  const addToCart = (mebel: IMebel) => {
    setCart((prevState) => {
      const existingMebel = prevState.some((item) => item.id === mebel.id);

      if (existingMebel) {
        return prevState.map((item) => {
          return item.id === mebel.id
            ? { ...item, count: item.count + 1 }
            : item;
        });
      }
      return [...prevState, { ...mebel, count: 1 }];
    });
  };

  const plusToCart = (id: number) => {
    setCart((prev) => {
      return prev.map((item) => {
        return item.id === id ? { ...item, count: item.count + 1 } : item;
      });
    });
  };

  const totalItemsCartCount = (id: number) => {
    return cart.reduce((total, item) => {
      if (item.id === id) {
        return total + item.count;
      }
      return total;
    }, 0);
  };

  const minusCart = (id: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          return item.id === id ? { ...item, count: item.count - 1 } : item;
        })
        .filter((item) => item.count > 0);
    });
  };

  return (
    <div className="grid justify-items-center">
      <ul className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10 ">
        {furnitures.map((furniture) => {
          return (
            <li key={furniture.image} className=" w-full">
              <div className="relative bg-grey bg-opacity-20 overflow-hidden ">
                <div className="relative w-max mb-4">
                  {furniture.tag ? (
                    <span className="absolute right-[24px] top-[24px] text-white bg-green px-3 py-4 rounded-full">
                      {furniture.tag}
                    </span>
                  ) : null}
                  {furniture.sale ? (
                    <span className="absolute right-[24px] top-[24px] text-white bg-red px-2 py-4 rounded-full">
                      -{furniture.sale}%
                    </span>
                  ) : null}

                  <img className="mx-0" src={furniture.image} alt="" />
                </div>
                <div className="grid px-4">
                  <span className="text-darkGrey text-2xl leading-[120%] font-semibold mb-2">
                    {furniture.title}
                  </span>
                  <span className="text-liteGray font-medium leading-[150%] mb-2">
                    {" "}
                    {furniture.description}
                  </span>
                  <div className="flex mb-8 gap-4 items-center">
                    <span className="text-xl font-semibold leading-[150%]">
                      Rs. {formatPrice(furniture.price)}
                    </span>
                    <span className="leading-[150%] line-through opacity-30">
                      Rs. {subtotalPrice(furniture.unprice)}
                    </span>
                  </div>
                </div>
                <div className="bg-darkGrey absolute left-0 top-0 w-full h-full bg-opacity-50 flex flex-col justify-center items-center gap-6 opacity-0 transition-all ease-in-out hover:opacity-100  z-10">
                  {totalItemsCartCount(furniture.id) === 0 ? (
                    <button
                      onClick={() => addToCart(furniture)}
                      className="bg-white text-orange w-max px-14 py-3 hover:bg-orange hover:bg-opacity-40 hover:text-white transition-colors ease-in">
                      add to cart
                    </button>
                  ) : (
                    <div className="flex items-center gap-2">
                      <button
                        className="hover:text-white py-2 px-4 rounded-full hover:bg-green text-darkGrey bg-white transition-colors ease-in text-xl "
                        onClick={() => plusToCart(furniture.id)}>
                        +
                      </button>
                      <span className=" py-2 px-4 text-center w-20 bg-orange text-white rounded-full text-xl">
                        {totalItemsCartCount(furniture.id)}
                      </span>
                      <button
                        className="hover:text-white py-2 px-4 rounded-full hover:bg-red text-darkGrey bg-white transition-colors ease-in text-xl "
                        onClick={() => minusCart(furniture.id)}>
                        -
                      </button>
                    </div>
                  )}
                  <div className="flex gap-5">
                    <button className="flex text-white font-semibold leading-[150%] hover:text-orange transition-colors ease-in items-center">
                      <img src={shareImage} alt="" />
                      Share
                    </button>
                    <button className="flex text-white font-semibold leading-[150%] hover:text-green transition-colors ease-in items-center">
                      <img src={compareImage} alt="" />
                      Compare
                    </button>
                    <button className="flex text-white font-semibold leading-[150%] hover:text-red transition-colors ease-in items-center">
                      <img src={likeImage} alt="" />
                      Like
                    </button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <button className="block text-orange font-semibold px-[74px] py-3 border-orange border mx-auto hover:bg-orange hover:text-white transition-colors ease-in">
        Show More
      </button>
    </div>
  );
};

// const addToCart = (mebel: IMebel) => {
//   setCart((prevCart) => {
//     const existingMebel = prevCart.some((item) => item.id === mebel.id);

//     if (existingMebel) {
//       return prevCart.map((item) =>
//         item.id === mebel.id ? { ...item, count: item.count + 1 } : item
//       );
//     } else {
//       return [...prevCart, { ...mebel, count: 1 }];
//     }
//   });
// };
