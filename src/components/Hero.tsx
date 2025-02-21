import heroImg from "../assets/hero.png";
import { Button } from "./Button";

export const Hero = () => {
  return (
    <section className="grid  md:grid-cols-2 items-center ">
      <div className="grid gap-5 md:gap-[35px]">
        <h1 className="text-xl lg:text-2xl font-semibold">
          Будущее интернет-сетей: IPv6 уже здесь!
        </h1>
        <p className="text-md leading-7">
          Протокол IPv6 открывает новые возможности для интернета, обеспечивая
          бесконечное количество адресов, повышенную безопасность и лучшую
          производительность сети. Узнайте, почему переход на IPv6 — это шаг в
          будущее цифровой связи.
        </p>
        <Button as="link" href="/#details" className="w-fit">
          Узнать больше
        </Button>
      </div>
      <img
        className="-order-[1] md:order-1 max-w-[400px] lg:max-w-full mx-auto"
        src={heroImg}
        alt="hero image"
      />
    </section>
  );
};
