import * as Dialog from "@radix-ui/react-dialog";
import { CartImage } from "../assets/header/CartImageSvg";
import { CartModalClose } from "../assets/cart/CartModalClose";
import { useCart } from "./context/CartContext";
import { NavLink } from "react-router";
import { useState } from "react";

interface ICartModalProps {
  formatPrice: (price: number) => string;
}

export const CartModal = ({ formatPrice }: ICartModalProps) => {
  const { cart, setCart } = useCart();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const deleteCart = (id: number) => {
    setCart((cartItem) => cartItem.filter((item) => item.id !== id));
  };

  const subtotalCart = cart.reduce(
    (total, item) => total + item.unprice * item.count,
    0
  );

  const totalCartModal = cart.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button>
          <CartImage />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30 " />
        <Dialog.Content className="fixed top-[91px] right-0 max-w-[416px]  w-full bg-white p-[30px] ">
          <div className="flex pb-[30px] border-b border-grey border-opacity-50 mb-10">
            <Dialog.Title className="text-2xl flex-1 font-semibold ">
              Shopping Cart
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="" aria-label="Close">
                <CartModalClose />
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Description className=""></Dialog.Description>
          <ul className="grid gap-3 mb-[10%]">
            {cart.map((item) => {
              return (
                <li key={item.id} className="flex items-center justify-between">
                  <img
                    className="bg-background  rounded-md p-1 w-24 h-24"
                    src={item.image[0]}
                    alt=""
                  />
                  <div className="">
                    <span>{item.title}</span>
                    <div className="flex gap-4 ">
                      <span className="font-light">{item.count}</span>
                      <span className="font-light">x</span>
                      <span className="text-orange font-medium">
                        Rs.{formatPrice(item.unprice)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteCart(item.id)}
                    className=" rotate-[45deg] bg-grey bg-opacity-30 hover:bg-opacity-70 py-1 px-3 rounded-full">
                    +
                  </button>
                </li>
              );
            })}
          </ul>
          <div className=" border-b border-grey border-opacity-50 pb-4  mb-4">
            <div className="flex  mb-4 ">
              <span className="flex-1">Subtotal</span>
              <span className="text-grey opacity-60 line-through font-semibold">
                Rs.{formatPrice(subtotalCart)}
              </span>
            </div>
            <div className="flex">
              <span className="flex-1">Total</span>
              <span className="text-xl text-orange">
                Rs.{formatPrice(totalCartModal)}
              </span>
            </div>
          </div>
          <div className="flex gap-[14px] justify-center">
            <NavLink
              onClick={closeModal}
              to={"cart"}
              className="text-xs border py-1 px-4 rounded-xl hover:bg-green hover:text-white transition-colors ease-in">
              Cart
            </NavLink>
            <button
              onClick={closeModal}
              className="text-xs border py-1 px-4 rounded-xl hover:bg-orange hover:text-white transition-colors ease-in">
              Checkout
            </button>
            <button
              onClick={closeModal}
              className="text-xs border py-1 px-4 rounded-xl hover:bg-red hover:text-white transition-colors ease-in">
              Comparison
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
