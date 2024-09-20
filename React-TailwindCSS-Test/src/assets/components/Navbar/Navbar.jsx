import React, { useState } from "react";
import { NavbarMenu } from "../../../mockData/dataNavbar";
import { CiSearch } from "react-icons/ci";
import { SiCodersrank } from "react-icons/si";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import ResponsiveMenu from "./ResponsiveMenu";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8 bg-gradient-to-br from-[#4affde] via-[#5b9dff] to-[#ff34d2] animate-movingGradient bg-[length:200%_200%] rounded-lg my-1">
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <SiCodersrank />
            <p>Ldrekoh</p>
            <p className="text-secondary">Coders</p>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block py-1 px-3 hover:text-primary font-semibold text-white text-2xl"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-3xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiSearch />
            </button>
            <button className="text-3xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartThin />
            </button>
            <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-primary px-6 py-2 duration-200 hidden md:block text-2xl">
              Login
            </button>
          </div>
          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      <ResponsiveMenu open={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
