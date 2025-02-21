import { NavLink } from "react-router-dom";
import { Button } from "./Button";
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

export const Header = () => {
  return (
    <header className="flex sticky top-0 z-20 bg-white flex-col md:flex-row md:gap-10 gap-7 items-center justify-between mt-5 lg:mt-[35px] py-5 mb-[5px] lg:mb-[45px]">
      <NavLink
        to="/"
        className="cursor-pointer transition hover:scale-110 focus:scale-110 active:scale-100 outline-0"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <SvgLogo />
      </NavLink>
      <div className="flex items-center gap-10">
        <nav className="flex items-center gap-10">
          {links.map((link) => (
            <NavLink
              className="md:text-md transition hover:text-green focus:text-green focus:text-balck outline-none leading-[28px]"
              key={link.label}
              to={link.link}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Button
          as="link"
          href="/#contacts"
          className="hidden lg:block"
          variant="light"
        >
          Отправить заявку
        </Button>
      </div>
    </header>
  );
};
