import { FormEvent, useState } from "react";
import { NavLink } from "react-router";

const emailState = {
  email: "",
};

export const Footer = () => {
  const [emailPerson, setEmailPerson] = useState(emailState);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(emailPerson); // Это выведет текущее значение email.text в консоль
  };

  return (
    <footer className="  py-12 px-[100px] border-t border-grey border-opacity-50">
      <div className="flex justify-between pb-12">
        <div className="">
          <h3 className="text-2xl font-bold mb-[50px]">Funiro</h3>
          <p className="text-grey ">
            400 University Drive Suite 200 Coral <br /> Gables,
            <br />
            FL 33134 USA
          </p>
        </div>

        <div className="grid gap-[50px]">
          <span className="text-grey font-medium">Links</span>
          <div className="grid gap-[46px]">
            <NavLink
              className="font-medium hover:opacity-50 transition-all ease-in"
              to={"/"}>
              Home
            </NavLink>
            <NavLink
              className="font-medium hover:opacity-50 transition-all ease-in"
              to={"shop"}>
              Shop
            </NavLink>
            <NavLink
              className="font-medium hover:opacity-50 transition-all ease-in"
              to={"about"}>
              About
            </NavLink>
            <NavLink
              className="font-medium hover:opacity-50 transition-all ease-in"
              to={"contact"}>
              Contact
            </NavLink>
          </div>
        </div>
        <div className="grid gap-[50px] h-fit">
          <span className="text-grey font-medium ">Help</span>
          <div className="grid gap-[46px]">
            <NavLink
              className="font-medium hover:opacity-50 transition-all ease-in"
              to={"cart"}>
              Payment Options
            </NavLink>
            <NavLink
              className="font-medium hover:opacity-50 transition-all ease-in"
              to={"cart"}>
              Returns
            </NavLink>
            <NavLink
              className="font-medium hover:opacity-50 transition-all ease-in"
              to={"cart"}>
              Privacy Policies
            </NavLink>
          </div>
        </div>
        <div className="grid gap-[50px] h-fit">
          <span className="text-grey font-medium">Newsletter</span>
          <form onSubmit={handleSubmit} className="flex gap-3 ">
            <input
              value={emailPerson.email}
              onChange={(e) =>
                setEmailPerson({ ...emailPerson, email: e.target.value })
              }
              className="text-sm pb-1 border-b outline-none"
              placeholder="Enter Your Email Address"
              type="email"
            />
            <button className="text-sm pb-1 font-medium border-b hover:text-green transition-colors ease-in">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <div className="pt-[35px] border-t border-grey border-opacity-50 ">
        2023 funiro. All rights reverved
      </div>
    </footer>
  );
};
