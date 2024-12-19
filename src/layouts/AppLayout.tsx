import { Outlet } from "react-router";
import { Header } from "../components/Header";

interface IAppLayoutProps {
  formatPrice: (price: number) => string;
  subtotalPrice: (unprice: number) => string;
}

export const AppLayout = ({ formatPrice, subtotalPrice }: IAppLayoutProps) => {
  return (
    <div>
      <Header formatPrice={formatPrice} subtotalPrice={subtotalPrice} />
      <main>
        <Outlet />
      </main>
      {/*Footer*/}
    </div>
  );
};
