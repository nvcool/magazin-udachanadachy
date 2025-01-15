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
import { FurnituresDetail } from "./pages/FurnituresDetail";
import descImage1 from "./assets/detailPage/sofa1.png";
import descImage2 from "./assets/detailPage/sofa2.png";
import descImage3 from "./assets/detailPage/sofa3.png";
import descImage4 from "./assets/detailPage/sofa4.png";
import shareFacebook from "./assets/detailPage/detail-share-facebook.svg";
import shareInstagram from "./assets/detailPage/detail-share-instagram.svg";
import shareTwitter from "./assets/detailPage/detail-share-twitter.svg";

// const carts = [
//   {
//     id: 1,
//     image: cart1,
//     title: "Syltherine",
//     description: "Stylish cafe chair",
//     price: 2500000,
//     unprice: 3500000,
//     sale: 30,
//     count: 1,
//     rating: 5,
//     size: "xl s sm",
//   },
//   {
//     id: 2,
//     image: cart2,
//     title: "Leviosa",
//     description: "Stylish cafe chair",
//     price: 2500000,
//     unprice: 3500000,
//     sale: 30,
//     count: 1,
//     rating: 5,
//     size: "xl s zs sm",
//   },
//   {
//     id: 3,
//     image: cart3,
//     title: "Lolito",
//     description: "Luxury big sofa",
//     price: 7000000,
//     unprice: 14000000,
//     sale: 50,
//     count: 1,
//     rating: 5,
//     size: "xl xxl s w sm",
//   },
//   {
//     id: 4,
//     image: cart4,
//     title: "Respira",
//     description: "Outdoor bar table and stool",
//     price: 500000,
//     unprice: 3500000,
//     tag: "New",
//     count: 1,
//     rating: 5,
//     size: "sm",
//   },
//   {
//     id: 5,
//     image: cart5,
//     title: "Grifo",
//     description: "Night lamp",
//     price: 1500000,
//     unprice: 3500000,
//     count: 1,
//     rating: 5,
//     size: "xl s",
//   },
//   {
//     id: 6,
//     image: cart6,
//     title: "Muggo",
//     description: "Small mug",
//     price: 150000,
//     unprice: 3500000,
//     tag: "New",
//     count: 1,
//     rating: 5,
//     size: "xl vvs s sm",
//   },
//   {
//     id: 7,
//     image: cart7,
//     title: "Pingky",
//     description: "Cute bed set",
//     price: 7000000,
//     unprice: 14000000,
//     sale: 50,
//     count: 1,
//     rating: 5,
//     size: "xl s sm qw  yys",
//   },
//   {
//     id: 8,
//     image: cart8,
//     title: "Potty",
//     description: "Minimalist flower pot",
//     price: 500000,
//     unprice: 14000000,
//     tag: "New",
//     count: 1,
//     rating: 5,
//     size: "xl s sm ye",
//   },
// ];

const carts: IMebel[] = [
  {
    id: 1,
    image: [cart1],
    descriptionImage: [descImage1, descImage2, descImage3, descImage4],
    title: "A soft sofa",
    description: "A comfortable and stylish sofa for the living room.",
    price: 49999,
    unprice: 59999,
    sale: 15,
    count: 1,
    rating: 4.8,
    size: [{ size: "200x90x80" }, { size: "220x100x85" }],
    color: [{ color: "Purple" }, { color: "Black" }, { color: "Brown" }],
    review: [
      { comment: "A very comfortable sofa!", nickName: "Anna", rating: 5 },
      { comment: "Good quality.", nickName: "Ivan", rating: 4 },
    ],
    information: "Made of high-quality materials.",
    sku: "SKU12345",
    category: "Sofas",
    tags: ["soft furniture", "living room"],
    share: [
      {
        image: shareFacebook,
        link: "/furniture/:id",
      },
      {
        image: shareInstagram,
        link: "/furniture/:id",
      },
      {
        image: shareTwitter,
        link: "/furniture/:id",
      },
    ],
  },
  {
    id: 2,
    image: [cart2],
    descriptionImage: [descImage1, descImage2, descImage3, descImage4],
    title: "Leather armchair",
    description: "An elegant armchair made of genuine leather.",
    price: 29999,
    unprice: 34999,
    count: 1,
    rating: 4.7,
    size: [{ size: "100x80x90" }],
    color: [{ color: "black" }, { color: "brown" }],
    review: [
      {
        comment: "Excellent chair for the office.",
        nickName: "Oleg",
        rating: 5,
      },
    ],
    information: "Genuine leather, wooden frame.",
    sku: "SKU12346",
    category: "Armchairs",
    tags: ["leather", "office"],
    share: [
      {
        image: shareFacebook,
        link: "/furniture/:id",
      },
      {
        image: shareInstagram,
        link: "/furniture/:id",
      },
      {
        image: shareTwitter,
        link: "/furniture/:id",
      },
    ],
  },
  {
    id: 3,
    image: [cart3],
    descriptionImage: [descImage1, descImage2, descImage3, descImage4],
    title: "Dining table",
    description: "Large wooden dining table.",
    price: 25999,
    unprice: 27999,
    tag: "best seller",
    count: 1,
    rating: 4.6,
    size: [{ size: "180x90x75" }],
    color: [{ color: "oak" }, { color: "walnut" }],
    review: [
      { comment: "Stylish and sturdy table.", nickName: "Maria", rating: 5 },
    ],
    information: "Wooden tabletop and metal legs.",
    sku: "SKU12347",
    category: "Tables",
    tags: ["dining table", "dining room"],
    share: [
      {
        image: shareFacebook,
        link: "/furniture/:id",
      },
      {
        image: shareInstagram,
        link: "/furniture/:id",
      },
      {
        image: shareTwitter,
        link: "/furniture/:id",
      },
    ],
  },
  {
    id: 4,
    image: [cart4],
    descriptionImage: [descImage1, descImage2, descImage3, descImage4],
    title: "Chair with soft seat",
    description: "Ergonomic chair for the office or home.",
    price: 5999,
    unprice: 6999,
    count: 1,
    rating: 4.5,
    size: [{ size: "45x50x90" }],
    color: [{ color: "white" }, { color: "black" }],
    review: [
      { comment: "Very comfortable!", nickName: "Denis", rating: 5 },
      {
        comment: "The seat is soft, but the backrest is stiff.",
        nickName: "Katya",
        rating: 4,
      },
    ],
    information: "Durable material, chrome legs.",
    sku: "SKU12348",
    category: "Chairs",
    tags: ["office", "comfort"],
    share: [
      {
        image: shareFacebook,
        link: "/furniture/:id",
      },
      {
        image: shareInstagram,
        link: "/furniture/:id",
      },
      {
        image: shareTwitter,
        link: "/furniture/:id",
      },
    ],
  },
  {
    id: 5,
    image: [cart5],
    descriptionImage: [descImage1, descImage2, descImage3, descImage4],
    title: "Children's bed",
    description: "Sturdy bed for children with safety rails.",
    price: 17999,
    unprice: 19999,
    count: 1,
    rating: 4.9,
    size: [{ size: "160x80x60" }],
    color: [{ color: "blue" }, { color: "pink" }],
    review: [{ comment: "The kids love it!", nickName: "Svetlana", rating: 5 }],
    information: "Eco-friendly materials, safe design.",
    sku: "SKU12349",
    category: "Beds",
    tags: ["children's furniture", "comfort"],
    share: [
      {
        image: shareFacebook,
        link: "/furniture/:id",
      },
      {
        image: shareInstagram,
        link: "/furniture/:id",
      },
      {
        image: shareTwitter,
        link: "/furniture/:id",
      },
    ],
  },
  {
    id: 6,
    image: [cart6],
    descriptionImage: [descImage1, descImage2, descImage3, descImage4],
    title: "Wardrobe doors",
    description: "Spacious wardrobe with mirrored doors.",
    price: 34999,
    unprice: 39999,
    tag: "popular",
    count: 1,
    rating: 4.7,
    size: [{ size: "200x60x220" }],
    color: [{ color: "white" }, { color: "wenge" }],
    review: [
      { comment: "Very convenient wardrobe!", nickName: "Alexey", rating: 5 },
      { comment: "Good quality mirrors.", nickName: "Elena", rating: 4 },
    ],
    information: "Plenty of space for clothes, sturdy construction.",
    sku: "SKU12350",
    category: "Wardrobes",
    tags: ["wardrobe", "bedroom"],
    share: [
      {
        image: shareFacebook,
        link: "/furniture/:id",
      },
      {
        image: shareInstagram,
        link: "/furniture/:id",
      },
      {
        image: shareTwitter,
        link: "/furniture/:id",
      },
    ],
  },
  {
    id: 7,
    image: [cart7],
    descriptionImage: [descImage1, descImage2, descImage3, descImage4],
    title: "Kitchen set",
    description: "Modular kitchen set with backlighting.",
    price: 99999,
    unprice: 119999,
    sale: 20,
    count: 1,
    rating: 4.9,
    size: [{ size: "300x60x220" }],
    color: [{ color: "white" }, { color: "gray" }],
    review: [
      {
        comment: "A great choice for a modern kitchen.",
        nickName: "Margarita",
        rating: 5,
      },
    ],
    information: "Custom assembly, built-in backlight.",
    sku: "SKU12351",
    category: "Kitchen",
    tags: ["kitchen", "modular furniture"],
    share: [
      {
        image: shareFacebook,
        link: "/furniture/:id",
      },
      {
        image: shareInstagram,
        link: "/furniture/:id",
      },
      {
        image: shareTwitter,
        link: "/furniture/:id",
      },
    ],
  },
  {
    id: 8,
    image: [cart8],
    descriptionImage: [descImage1, descImage2, descImage3, descImage4],
    title: "TV stand",
    description: "Elegant TV stand with shelves for accessories.",
    price: 12999,
    unprice: 14999,
    count: 1,
    rating: 4.6,
    size: [{ size: "150x40x50" }],
    color: [{ color: "black" }, { color: "oak" }],
    review: [
      { comment: "Beautiful and functional.", nickName: "Igor", rating: 5 },
    ],
    information: "MDF with coating, stable frame.",
    sku: "SKU12352",
    category: "TV Stands",
    tags: ["living room", "TV furniture"],
    share: [
      {
        image: shareFacebook,
        link: "/furniture/:id",
      },
      {
        image: shareInstagram,
        link: "/furniture/:id",
      },
      {
        image: shareTwitter,
        link: "/furniture/:id",
      },
    ],
  },
];

const initialStateCart: IMebel[] = JSON.parse(
  localStorage.getItem("cart") || "[]"
);

const formatPrice = (price: number) => {
  return price.toLocaleString("en-EN");
};

function App() {
  const [furnitures, setFurnitures] = useState<IMebel[]>(carts);
  const [cart, setCart] = useState<IMebel[]>(initialStateCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <MebelContext.Provider value={{ furnitures, setFurnitures }}>
        <div className="">
          <Routes>
            <Route element={<AppLayout formatPrice={formatPrice} />}>
              <Route path="/" element={<Home formatPrice={formatPrice} />} />
              <Route path="shop" element={<Shop />} />
              <Route path="about" element={<About />} />
              <Route
                path="contact"
                element={<Contact formatPrice={formatPrice} />}
              />
              <Route path="cart" element={<Cart formatPrice={formatPrice} />} />
              <Route
                path="/furniture/:id"
                element={<FurnituresDetail formatPrice={formatPrice} />}
              />
            </Route>
          </Routes>
        </div>
      </MebelContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
