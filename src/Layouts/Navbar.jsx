import { createElement, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { content } from "../Content";

const Navbar = () => {
  const { nav } = content;
  const [shwoMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className=" w-full flex justify-center ">
      <div
        className=" font-bold sm:cursor-pointer bg-white/40 p-2 fixed top-10 left-10 rounded-lg z-[999]"
        onClick={() => setShowMenu(!shwoMenu)}>
        <HiMenuAlt2 size={34} />
      </div>
      <nav
        className={`fixed z-[999] flex items-center backdrop-blur-md rounded-full gap-5 sm:cursor-pointer bg-slate-200/60 px-6 py-3 duration-300 
      ${shwoMenu ? " bottom-10" : "bottom-[-100%]"}`}>
        {nav.map((item, i) => (
          <a
            onClick={() => setActive(i)}
            key={i}
            href={item.link}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer ${
              active === i && " bg-dark_primary text-white"
            }`}>
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
