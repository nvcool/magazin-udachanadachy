import { NavLink } from "react-router";
import previewImage from "../assets/cart/preview-cart.jpg";
import logoImage from "../assets/header/header-svg.svg";
import arrowImgae from "../assets/cart/arrow-nav-cart.svg";
import { CartList } from "../components/CartList";
import { useCart } from "../components/context/CartContext";

export const Cart = () => {
  const { cart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.count,
    0
  );
  const subotalPrice = cart.reduce(
    (total, item) => total + item.unprice * item.count,
    0
  );

  return (
    <div className="">
      <section className="relative ">
        <img
          className="h-[316px] w-full object-cover blur-[3px] opacity-60"
          src={previewImage}
          alt=""
        />
        <div className="absolute top-[30%] left-[50%] grid justify-items-center ">
          <img className="mb-4" src={logoImage} alt="" />
          <h1 className="text-5xl font-medium">Cart</h1>
          <div className="flex gap-2">
            <NavLink className="font-medium" to={"/"}>
              Home
            </NavLink>
            <img src={arrowImgae} alt="" />
            <span className="font-light">Cart</span>
          </div>
        </div>
      </section>
      <section className="py-20 px-[100px] flex gap-[30px] ">
        <div className="flex-1">
          <div className="flex bg-background h-fit py-4 px-[140px] justify-between font-medium mb-[55px]">
            <span>Product</span>
            <span>Price</span>
            <div className="flex gap-9">
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>
          </div>
          <CartList />{" "}
        </div>
        <div className="bg-background px-[75px] pt-[15px] pb-20 ">
          <h2 className="text-[32px] font-semibold mb-[60px]">Cart Totals</h2>
          <div className="flex flex-col gap-[30px] mb-10 max-w-[393px] w-full">
            <div className="flex gap-[60px]">
              <span className="font-medium">Subtotal</span>
              <span className="opacity-30 ">Rs. {subotalPrice}</span>
            </div>
            <div className="flex gap-[60px]">
              <span className="font-medium">Total</span>
              <span className="text-orange text-[20px]">Rs. {totalPrice}</span>
            </div>
          </div>
          <button className="border py-[14px] px-[60px] rounded-[15px] hover:bg-green hover:text-white transition-colors ease-in">
            Check Out
          </button>
        </div>
      </section>
      <section></section>
    </div>
  );
};
