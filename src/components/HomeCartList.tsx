import shareImage from "../assets/home/home-cart/share-cart.svg";
import compareImage from "../assets/home/home-cart/compare-cart.svg";
import likeImage from "../assets/home/home-cart/like-cart.svg";
import { useMebel } from "./context/MebelContext";
import { useCart } from "./context/CartContext";
import { IMebel } from "../types/IMebel";

export const HomeCartList = () => {
  const { mebels } = useMebel();
  const { setCart } = useCart();

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

  const addToCart = (mebel: IMebel) => {
    setCart((prevState) => {
      const existingMebel = prevState.some((item) => item.id === mebel.id);

      if (existingMebel) {
        return prevState.map((item) =>
          item.id === mebel.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevState, { ...mebel, count: 1 }];
      }
    });
  };

  return (
    <div>
      <ul className="flex flex-wrap gap-8 justify-center mb-10">
        {mebels.map((mebel) => {
          return (
            <li key={mebel.image} className=" w-max">
              <div className="relative bg-grey bg-opacity-20 overflow-hidden ">
                <div className="relative w-max mb-4">
                  <span className="absolute right-[24px] top-[24px] text-white bg-red px-2 py-4 rounded-full">
                    {mebel.sale}
                  </span>
                  <img src={mebel.image} alt="" />
                </div>
                <div className="grid px-4">
                  <span className="text-darkGrey text-2xl leading-[120%] font-semibold mb-2">
                    {mebel.title}
                  </span>
                  <span className="text-liteGray font-medium leading-[150%] mb-2">
                    {" "}
                    {mebel.description}
                  </span>
                  <div className="flex mb-8 gap-4 items-center">
                    <span className="text-xl font-semibold leading-[150%]">
                      {mebel.price}
                    </span>
                    <span className="leading-[150%] line-through opacity-30">
                      {mebel.unprice}
                    </span>
                  </div>
                </div>
                <div className="bg-darkGrey absolute left-0 top-0 w-full h-full bg-opacity-50 flex flex-col justify-center items-center gap-6 opacity-0 transition-all ease-in-out hover:opacity-100  z-10">
                  <button
                    onClick={() => addToCart(mebel)}
                    className="bg-white text-orange w-max px-14 py-3 hover:bg-orange hover:bg-opacity-40 hover:text-white transition-colors ease-in">
                    add to cart
                  </button>
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
