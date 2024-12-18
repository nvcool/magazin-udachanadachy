import * as Dialog from "@radix-ui/react-dialog";
import { CartImage } from "../assets/header/CartImageSvg";
import { CartModalClose } from "../assets/cart/CartModalClose";
import { useCart } from "./context/CartContext";
import cartItem from "../assets/cart/cart-item.png";

export const CartModal = () => {
  const { cart, setCart } = useCart();

  const deleteCart = (id: number) => {
    setCart((cartItem) => cartItem.filter((item) => item.id !== id));
  };

  const subtotalCart = cart.reduce(
    (total, item) => total + item.unprice * item.count,
    0
  );

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>
          <CartImage />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30 " />
        <Dialog.Content className="fixed top-0 right-0 max-w-[416px]  w-full bg-white p-[30px] overflow-">
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
          <Dialog.Description className="">
            <ul className="grid gap-3 mb-[254px]">
              {cart.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="flex items-center justify-between">
                    <img
                      className="bg-background  rounded-md"
                      src={cartItem}
                      alt=""
                    />
                    <div className="">
                      <span>{item.title}</span>
                      <div className="flex gap-4 ">
                        <span className="font-light">{item.count}</span>
                        <span className="font-light">x</span>
                        <span className="text-orange font-medium">
                          Rs.{item.unprice}
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
            <div className="flex gap-24 pb-4 border-b border-grey border-opacity-50 mb-4">
              <span className="">Subtotal</span>
              <span className="text-orange font-semibold">
                Rs.{subtotalCart}
              </span>
            </div>
            <div className="flex gap-[14px] justify-center">
              <button className="text-xs border py-1 px-4 rounded-xl hover:bg-green hover:text-white transition-colors ease-in">
                Cart
              </button>
              <button className="text-xs border py-1 px-4 rounded-xl hover:bg-orange hover:text-white transition-colors ease-in">
                Checkout
              </button>
              <button className="text-xs border py-1 px-4 rounded-xl hover:bg-red hover:text-white transition-colors ease-in">
                Comparison
              </button>
            </div>
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
