import { Route, Routes } from "react-router";
import { AppLayout } from "./layouts/AppLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Shop } from "./pages/Shop";
import { Contact } from "./pages/Contact";
import { Cart } from "./pages/Cart";
import { useEffect, useState } from "react";
import cart1 from "./assets/home/home-cart/cart1.png";
import cart2 from "./assets/home/home-cart/cart2.png";
import cart3 from "./assets/home/home-cart/cart3.png";
import cart4 from "./assets/home/home-cart/cart4.png";
import cart5 from "./assets/home/home-cart/cart5.png";
import cart6 from "./assets/home/home-cart/cart6.png";
import cart7 from "./assets/home/home-cart/cart7.png";
import cart8 from "./assets/home/home-cart/cart8.png";
import { IMebel } from "./types/IMebel";
import { MebelContext } from "./components/context/MebelContext";
import { CartContext } from "./components/context/CartContext";

const carts = [
  {
    id: 1,
    image: cart1,
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: 2500000,
    unprice: 3500000,
    sale: "-30%",
    count: 1,
  },
  {
    id: 2,
    image: cart2,
    title: "Leviosa",
    description: "Stylish cafe chair",
    price: 2500000,
    unprice: 3500000,
    sale: "-30%",
    count: 1,
  },
  {
    id: 3,
    image: cart3,
    title: "Lolito",
    description: "Luxury big sofa",
    price: 7000000,
    unprice: 14000000,
    sale: "-50%",
    count: 1,
  },
  {
    id: 4,
    image: cart4,
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: 500000,
    unprice: 3500000,
    sale: "New",
    count: 1,
  },
  {
    id: 5,
    image: cart5,
    title: "Grifo",
    description: "Night lamp",
    price: 1500000,
    unprice: 3500000,
    count: 1,
  },
  {
    id: 6,
    image: cart6,
    title: "Muggo",
    description: "Small mug",
    price: 150000,
    unprice: 3500000,
    sale: "New",
    count: 1,
  },
  {
    id: 7,
    image: cart7,
    title: "Pingky",
    description: "Cute bed set",
    price: 7000000,
    unprice: 14000000,
    sale: "-50%",
    count: 1,
  },
  {
    id: 8,
    image: cart8,
    title: "Potty",
    description: "Minimalist flower pot",
    price: 500000,
    unprice: 14000000,
    sale: "New",
    count: 1,
  },
];

const initialStateCart: IMebel[] = JSON.parse(
  localStorage.getItem("cart") || "[]"
);

function App() {
  const [mebels, setMebels] = useState<IMebel[]>(carts);
  const [cart, setCart] = useState<IMebel[]>(initialStateCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <MebelContext.Provider value={{ mebels, setMebels }}>
        <div className="">
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </div>
      </MebelContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
