import { Outlet } from "react-router";
import { Header } from "../components/Header";

export const AppLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      {/*Footer*/}
    </div>
  );
};
