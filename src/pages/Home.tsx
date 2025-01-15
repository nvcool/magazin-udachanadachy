import previewInterier from "../assets/home/prev.jpg";
import browse1 from "../assets/home/browse1.png";
import browse2 from "../assets/home/browse2.png";
import browse3 from "../assets/home/browse3.png";
import { HomeCartList } from "../components/HomeCartList";
import homeImage1 from "../assets/home/home-furniture/home-1.png";
import homeImage2 from "../assets/home/home-furniture/home-2.png";
import homeImage3 from "../assets/home/home-furniture/home-3.png";
import homeImage4 from "../assets/home/home-furniture/home-4.png";
import homeImage5 from "../assets/home/home-furniture/home-5.png";
import homeImage6 from "../assets/home/home-furniture/home-6.png";
import homeImage7 from "../assets/home/home-furniture/home-7.png";
import homeImage8 from "../assets/home/home-furniture/home-8.png";
import homeImage9 from "../assets/home/home-furniture/home-9.png";

interface IHomeProps {
  formatPrice: (price: number) => string;
}

export const Home = ({ formatPrice }: IHomeProps) => {
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
        <HomeCartList formatPrice={formatPrice} />
      </section>
      <section className=" grid justify-center text-center mb-[50px]">
        <span className="text-liteGray text-xl font-semibold leading-[150%]">
          Share your setup with
        </span>
        <h3 className="text-darkGrey text-[40px] font-bold  leading-[120%]">
          #FuniroFurniture
        </h3>
        <div className="flex gap-4 items-center">
          <div className="grid flex-1 gap-4">
            <div className="flex justify-end gap-4 items-end">
              <img
                className="h-[382px] object-cover object-right"
                src={homeImage1}
                alt=""
              />
              <img className="w-[451px] h-[312px]" src={homeImage2} alt="" />
            </div>
            <div className="flex justify-end gap-4">
              <div className="overflow-hidden">
                <img
                  className=" h-[323px] object-cover object-right"
                  src={homeImage3}
                  alt=""
                />
              </div>
              <img className="w-[344px] h-[242px]" src={homeImage4} alt="" />
            </div>
          </div>
          <div className="">
            <img className="w-[295px] h-[392px]" src={homeImage5} alt="" />
          </div>
          <div className=" flex-1 grid gap-4">
            <div className="flex gap-4 items-end">
              <img
                className="w-[290px] h-[348px] object-cover"
                src={homeImage6}
                alt=""
              />
              <img className="w-[262px] h-[433px]" src={homeImage7} alt="" />
            </div>
            <div className="flex gap-4">
              <img
                className="w-[178px] h-[242px] object-cover"
                src={homeImage8}
                alt=""
              />
              <img className="w-[258px] h-[196px]" src={homeImage9} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
