import previewInterier from "../assets/home/prev.jpg";
import browse1 from "../assets/home/browse1.png";
import browse2 from "../assets/home/browse2.png";
import browse3 from "../assets/home/browse3.png";
import { HomeCartList } from "../components/HomeCartList";

interface IHomeProps {
  formatPrice: (price: number) => string;
  subtotalPrice: (unprice: number) => string;
}

export const Home = ({ formatPrice, subtotalPrice }: IHomeProps) => {
  return (
    <div className="grid gap-[56px]">
      <section className=" relative">
        <img
          style={{ objectPosition: "100% 70%" }}
          className="h-[717px] w-full object-cover "
          src={previewInterier}
          alt=""
        />
        <div className="bg-background py-9 px-10 w-max rounded-[10px] absolute bottom-[116px] right-[58px]">
          <span className="text-darkGrey font-semibold">New Arrial</span>
          <h1 className="text-orange text-[52px] font-bold leading-[125%] mb-[17px]">
            Discover Our <br /> New Collection
          </h1>
          <p className="text-darkGrey text-lg leading-[24px] font-medium mb-[46px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />
            elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="text-white bg-orange hover:bg-opacity-70 transition ease-in py-[25px] px-[72px] font-bold">
            BUY NOW
          </button>
        </div>
      </section>
      <section>
        <h2 className="text-darkGrey font-bold text-[32px] text-center">
          Browse The Range
        </h2>
        <p className="text-liteGray text-xl text-center mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex gap-5 justify-center">
          <div className="text-2xl font-semibold text-center">
            <img className="rounded-2xl mb-5" src={browse1} alt="" />
            <span className="">Dining</span>
          </div>
          <div className="text-2xl font-semibold text-center">
            <img className="rounded-2xl mb-5" src={browse2} alt="" />
            <span>Living</span>
          </div>
          <div className="text-2xl font-semibold text-center">
            <img className="rounded-2xl mb-5" src={browse3} alt="" />
            <span>Bedroom</span>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-center text-darkGrey text-[40px] font-bold leading-[120%] mb-8">
          Our Products
        </h2>
        <HomeCartList formatPrice={formatPrice} subtotalPrice={subtotalPrice} />
      </section>
      <section></section>
    </div>
  );
};
