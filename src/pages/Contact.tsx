import { NavLink } from "react-router";
import previewImage from "../assets/cart/preview-cart.jpg";
import logoImage from "../assets/header/header-svg.svg";
import arrowImgae from "../assets/cart/arrow-nav-cart.svg";
import { Garante } from "../components/Garante";
import { ContactForm } from "../components/ContactForm";
import { useCart } from "../components/context/CartContext";
import { useState } from "react";

interface IContactProps {
  formatPrice: (price: number) => string;
}

const paymentTypes = [
  {
    id: 52,
    label: "Direct Bank Transfer",
    description:
      "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
  },
  {
    id: 554,
    label: "Direct Bank Transfer 2",
    description:
      "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
  },
  { id: 12, label: "Cash On Delivery", description: "Gau" },
];

export const Contact = ({ formatPrice }: IContactProps) => {
  const { cart } = useCart();
  const [payment, setPayment] = useState<number>(paymentTypes[0].id);

  const totalSubtotal = cart.reduce(
    (total, item) => total + item.unprice * item.count,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  return (
    <div className="grid gap-[100px]">
      <section className="relative ">
        <div
          className="grid h-[316px] bg-cover bg-no-repeat bg-center "
          style={{
            backgroundImage: `url(${previewImage})`,
          }}>
          <div className="backdrop-blur-[3px] bg-[#9f9f9f70] w-full grid justify-center items-center">
            <div className="grid justify-items-center">
              <img className="mb-4" src={logoImage} alt="" />
              <h1 className="text-5xl font-medium">Checkout</h1>
              <div className="flex gap-2">
                <NavLink className="font-medium" to={"/"}>
                  Home
                </NavLink>
                <img src={arrowImgae} alt="" />
                <span className="font-light">Contact</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center gap-36">
        <ContactForm />
        <aside className="max-w-[528px] w-full">
          <div className="mb-8">
            <div className="flex justify-between w-full text-2xl font-medium mb-[14px]">
              <span>Product</span>
              <span>Subtotal</span>
            </div>
            <div className="grid gap-5 mb-5">
              {cart.map((item) => {
                return (
                  <div key={item.id} className="flex justify-between">
                    <div className="flex gap-3 items-center">
                      <span className="text-grey ">{item.title}</span>
                      <span className="text-xs font-medium">X</span>
                      <span className="text-xs font-medium">{item.count}</span>
                    </div>
                    <span className="font-light ">
                      Rs.{formatPrice(item.unprice)}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="grid gap-5">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-light text-grey line-through">
                  Rs.{formatPrice(totalSubtotal)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Total</span>
                <span className="text-orange text-2xl font-bold">
                  Rs.{formatPrice(totalPrice)}
                </span>
              </div>
            </div>
          </div>
          <div className="grid gap-6 border-t border-grey border-opacity-50 pt-6 mb-5">
            {paymentTypes.map((type) => {
              return (
                <div key={type.id} className="grid gap-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      checked={payment === type.id}
                      name="paymentType"
                      id={type.id.toString()}
                      value={type.id}
                      onChange={() => setPayment(type.id)}
                      className="text-lg font-light"
                    />
                    <label htmlFor={type.id.toString()} className="">
                      {type.label}
                    </label>
                  </div>
                  {payment === type.id && (
                    <span className="text-grey font-light">
                      {type.description}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          <p className="font-light mb-10">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="font-semibold">privacy policy.</span>
          </p>
          <button className="py-4 px-[100px] border text-xl mx-auto block rounded-2xl hover:text-white hover:bg-green transition-colors ease-in">
            Place order
          </button>
        </aside>
      </section>
      <Garante />
    </div>
  );
};
