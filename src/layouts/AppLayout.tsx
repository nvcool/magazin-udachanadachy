import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

interface IAppLayoutProps {
  formatPrice: (price: number) => string;
}

export const AppLayout = ({ formatPrice }: IAppLayoutProps) => {
  return (
    <div>
      <Header formatPrice={formatPrice} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
