import { NavLink } from "react-router-dom";
import { SvgLogo } from "./svg/SvgLogo";
const links = [
  {
    label: "Детали",
    link: "/#details",
  },
  {
    label: "Контакты",
    link: "/#contacts",
  },
  {
    label: "Преимущества",
    link: "/advantages",
  },
  {
    label: "Отзывы",
    link: "/reviews",
  },
];
export const Footer = () => {
  return (
    <footer className="py-[55px] px-3 sm:px-[60px] rounded-t-[45px] bg-dark text-white">
      <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row items-center justify-between pb-[50px] border-b border-b-white">
        <NavLink
          to="/"
          className="cursor-pointer transition hover:scale-110 focus:scale-110 active:scale-100 outline-0"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <SvgLogo className="text-white" />
        </NavLink>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-10">
            {links.map((link) => (
              <NavLink
                className="md:text-md transition hover:text-green focus:text-green focus:text-balck outline-none leading-[28px]"
                key={link.label}
                to={link.link}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-[50px] text-center">
        © 2025 Positivus. All Rights Reserved.
      </div>
    </footer>
  );
};
