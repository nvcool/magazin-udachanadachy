// import { useState } from "react";
import { IMebel } from "../types/IMebel";
import { useCart } from "./context/CartContext";
// import { useMebel } from "./context/MebelContext";
import { NavLink } from "react-router";
import { FurnituresDetailContent } from "./FurnituresDetailContent";
import { useState } from "react";
import StarRatings from "react-star-ratings";

interface IFurnituresDetailInfotmationProps {
  furnitur: IMebel;
  formatPrice: (price: number) => string;
}

export const FurnituresDetailInfotmation = ({
  furnitur,
  formatPrice,
}: IFurnituresDetailInfotmationProps) => {
  // const [variant, setVariant] = useState<{ size: string; color: string }>({
  //   size: furnitur.size[0].size,
  //   color: furnitur.color[0].color,
  // });

  const { cart, setCart } = useCart();

  const [sizeChange, setSizeChange] = useState<string>(furnitur.size[0].size);
  const [colorChange, setColorChange] = useState<string>(
    furnitur.color[0].color
  );
  const contentInformation = [
    {
      id: 186,
      label: "Description",
    },
    {
      id: 245,
      label: "Additional Information",
    },
    { id: 124, label: `Reviews [ ${furnitur.review.length} ]` },
  ];
  const [contentChoise, setContentChoise] = useState<number>(
    contentInformation[0].id
  );

  const plusCount = (id: string) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
    });
  };

  const minusCount = (id: string) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      });
    });
    setCart((prev) => prev.filter((item) => item.count > 0));
  };

  const itemCount = (itemId: string) => {
    const item = cart.find((item) => item.id === itemId);
    return item ? item.count : 0;
  };

  const addToCart = (product: IMebel) => {
    setCart((prevState) => {
      const existingProduct = prevState.some((item) => item.id === product.id);

      if (existingProduct) {
        return prevState.map((item) => {
          return item.id === product.id
            ? { ...item, count: item.count + 1 }
            : item;
        });
      }
      return [...prevState, { ...product, count: 1 }];
    });
  };

  const reviewQuantity = furnitur.review.length;

  const midlRating =
    furnitur.review.reduce((item, piton) => item + piton.rating, 0) /
    furnitur.review.length;

  return (
    <div className="">
      <section className="grid grid-flow-col gap-[100px] mb-14 px-[100px]">
        {/* IMAGE DESCRIPTION */}
        <div className="flex gap-8 w-full h-[500px]  ">
          <div className="grid gap-7 ">
            {furnitur.descriptionImage.map((image, index) => {
              return (
                <img
                  className="h-20 w-full bg-background pt-2 pb-4 px-2 object-cover rounded-[10px] hover:scale-105 cursor-pointer"
                  key={index}
                  src={image}
                  alt=""
                />
              );
            })}
          </div>
          <img
            className="object-cover  max-w-[400px] w-full py-8 px-3 rounded-xl bg-background"
            src={furnitur.image[0]}
            alt=""
          />
        </div>
        <div className="grid h-full">
          <h1 className="text-[42px]">{furnitur.title}</h1>
          <span className="text-grey text-2xl font-medium mb-[10px]">
            Rs.{formatPrice(furnitur.unprice)}
          </span>
          <div className="flex items-center gap-4 mb-3">
            <StarRatings
              rating={midlRating}
              starRatedColor="orange"
              starEmptyColor="white"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="5px"
            />
            <span className="text-4xl font-extralight text-grey"> | </span>
            <button
              onClick={() => setContentChoise(contentInformation[2].id)}
              id="customerReview"
              className="text-grey text-sm hover:text-darkGrey transition-colors ease-in">
              <a href="#reviews">{reviewQuantity} Customer Review</a>
            </button>
          </div>
          <span className="text-sm mb-6 w-[424px] overflow-hidden truncate ">
            {furnitur.description}
          </span>

          {/* SIZE */}
          <div className="grid gap-3 mb-[18px]">
            <span className="text-grey text-sm">Size</span>
            <div className="flex gap-4">
              {furnitur.size.map((item, index) => (
                <button
                  onClick={() => setSizeChange(item.size)}
                  key={index} // Уникальный ключ для каждого элемента
                  className={`p-2  rounded-md 
                hover:text-white hover:bg-orange hover:bg-opacity-60 transition-colors ease-in 
                ${
                  sizeChange === item.size
                    ? " bg-orange text-white"
                    : "bg-background"
                }`}>
                  {item.size}
                </button>
              ))}
            </div>
          </div>

          {/* COLOR */}
          <div className="grid gap-3 mb-8">
            <span className="text-grey text-sm">Color</span>
            <div className="flex gap-3">
              {furnitur.color.map((color, index) => {
                return (
                  <button
                    onClick={() => setColorChange(color.color)}
                    className={`p-2  rounded-md 
                hover:text-white hover:bg-orange hover:bg-opacity-60 transition-colors ease-in ${
                  colorChange === color.color
                    ? "bg-orange text-white"
                    : "bg-background"
                }`}
                    key={index}>
                    {color.color}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ANY BUTTON */}

          <div className="flex gap-5 mb-[60px]">
            {cart.find((item) => item.id === furnitur.id) ? (
              <div className="flex gap-2 py-5 px-2 border border-grey border-opacity-50 rounded-lg">
                <button
                  onClick={() => minusCount(furnitur.id)}
                  className=" hover:bg-red hover:text-white px-2 rounded-full transition-colors ease-in">
                  -
                </button>
                <input
                  value={itemCount(furnitur.id)}
                  onChange={(e) =>
                    setCart([{ ...furnitur, count: +e.target.value }])
                  }
                  className="w-10 text-center "
                  type="number"
                />
                <button
                  onClick={() => plusCount(furnitur.id)}
                  className=" hover:bg-green hover:text-white px-2 rounded-full transition-colors ease-in">
                  +
                </button>
              </div>
            ) : null}

            {cart.find((item) => item.id === furnitur.id) ? null : (
              <button
                onClick={() => addToCart(furnitur)}
                className="py-5 px-9 border border-grey border-opacity-50 rounded-lg hover:bg-green hover:text-white transition-colors ease-in">
                Add To Cart
              </button>
            )}

            {/*EDIT THERE*/}

            <NavLink
              to={`/furniture/${furnitur.id}/admin`}
              className="py-5 px-9 border border-grey border-opacity-50 rounded-lg hover:bg-orange hover:text-white transition-colors ease-in">
              + Edit
            </NavLink>
          </div>

          <div className=" grid gap-3 text-grey pt-[40px] border-t border-grey border-opacity-50">
            <div className="grid grid-cols-[102px_1fr] ">
              <div className="grid grid-cols-[90px_12px]">
                <span className="">SKU</span>
                <span>:</span>
              </div>
              <span>{furnitur.sku}</span>
            </div>
            <div className="grid grid-cols-[102px_1fr]">
              <div className="grid grid-cols-[90px_12px]">
                <span className="">Category</span>
                <span>:</span>
              </div>
              <span>{furnitur.category}</span>
            </div>
            <div className="grid grid-cols-[102px_1fr]">
              <div className="grid grid-cols-[90px_12px]">
                <span className="">Tags</span>
                <span className="">:</span>
              </div>
              <span>
                {furnitur.tags[0]}, {furnitur.tags[1]}
              </span>
            </div>
            <div className="grid grid-cols-[102px_1fr]">
              <div className="grid grid-cols-[90px_12px]">
                <span className="">Share</span>
                <span className="">:</span>
              </div>
              <div className="flex items-center gap-4">
                <NavLink to={furnitur.share[0].link}>
                  <img src={furnitur.share[0].image} alt="" />
                </NavLink>
                <NavLink to={furnitur.share[1].link}>
                  <img src={furnitur.share[1].image} alt="" />
                </NavLink>
                <NavLink to={furnitur.share[2].link}>
                  <img src={furnitur.share[2].image} alt="" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-12 border-t border-grey border-opacity-50">
        <FurnituresDetailContent
          contentInformation={contentInformation}
          contentChoise={contentChoise}
          setContentChoise={setContentChoise}
          furnitur={furnitur}
        />
      </section>
    </div>
  );
};
