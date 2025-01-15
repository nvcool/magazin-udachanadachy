import cupImage from "../assets/cart/cup-cart.svg";
import guarenteeImage from "../assets/cart/guarantee-cart.svg";
import shippingImagee from "../assets/cart/shipping-cart.svg";
import supportImage from "../assets/cart/customer-support-cart.svg";

export const Garante = () => {
  return (
    <section className="bg-background py-[100px] px-12 flex justify-between">
      <div className="flex">
        <img src={cupImage} alt="" />
        <div className="grid">
          <span className=" text-darkGrey text-2xl font-semibold leading-[150%]">
            High Quality
          </span>
          <span className="text-grey text-xl font-medium leading-[150%]">
            crafted from top materials
          </span>
        </div>
      </div>
      <div className="flex">
        <img src={guarenteeImage} alt="" />
        <div className="grid">
          <span className=" text-darkGrey text-2xl font-semibold leading-[150%]">
            Warranty Protection
          </span>
          <span className="text-grey text-xl font-medium leading-[150%]">
            Over 2 years
          </span>
        </div>
      </div>
      <div className="flex">
        <img src={shippingImagee} alt="" />
        <div className="grid">
          <span className=" text-darkGrey text-2xl font-semibold leading-[150%]">
            Free Shipping
          </span>
          <span className="text-grey text-xl font-medium leading-[150%]">
            Order over 150 $
          </span>
        </div>
      </div>
      <div className="flex">
        <img src={supportImage} alt="" />
        <div className="grid">
          <span className=" text-darkGrey text-2xl font-semibold leading-[150%]">
            24 / 7 Support
          </span>
          <span className="text-grey text-xl font-medium leading-[150%]">
            Dedicated support
          </span>
        </div>
      </div>
    </section>
  );
};
