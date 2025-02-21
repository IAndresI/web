import formatImg from "../assets/format.png";
import configImg from "../assets/config.png";
import effiImg from "../assets/effi.png";
import secureImg from "../assets/secure.png";
import illustrationImg from "../assets/Illustration.png";
import { Button } from "./Button";

export const Details = () => {
  return (
    <section id="details" className="">
      <div className="flex flex-col md:flex-row items-center gap-10 mb-10 md:mb-20">
        <h2 className="px-[7px] text-center sm:text-left w-fit rounded-[7px] bg-green text-xl font-semibold">
          Технические детали
        </h2>
        <p className="text-center sm:text-left">
          IPv6 - это современный протокол интернет-сетей, разработанный для
          решения проблем ограниченного адресного пространства IPv4. Он
          предоставляет улучшенную маршрутизацию, поддержку автоконфигурации и
          усиленную безопасность.
        </p>
      </div>
      <div className="grid mb-[120px] lg:grid-cols-2 gap-10">
        <div className="bg-gray gap-5 sm:gap-10 justify-between grid sm:grid-cols-2 items-center relative shadow-[0px_5px_0px_0px_#191A23] rounded-[45px] p-[50px]">
          <div className="h-full flex flex-col gap-5">
            <h3 className="px-[7px] w-fit rounded-[7px] bg-green text-lg font-semibold">
              Формат адреса
            </h3>
            <ul className="grid gap-3 text-[14px] list-disc pl-5">
              <li>128-битные адреса (в отличие от 32-битных в IPv4)</li>
              <li>
                Запись в шестнадцатеричном формате (пример:{" "}
                <code className=" break-all">
                  2001:0db8:85a3::8a2e:0370:7334
                </code>
                )
              </li>
            </ul>
          </div>
          <img
            className="w-[210px] mx-auto sm:ml-auto -order-[1] lg:order-1"
            src={formatImg}
          />
        </div>
        <div className="bg-green gap-5 sm:gap-10 justify-between grid sm:grid-cols-2 items-center relative shadow-[0px_5px_0px_0px_#191A23] rounded-[45px] p-[50px]">
          <div className="h-full flex flex-col gap-5">
            <h3 className="px-[7px] w-fit rounded-[7px] bg-gray text-lg font-semibold">
              Конфигурация
            </h3>
            <ul className="grid gap-3 text-[14px] list-disc pl-5">
              <li>Поддержка SLAAC (Stateless Address Autoconfiguration)</li>
              <li>Улучшенная работа с мобильными сетями и IoT-устройствами</li>
            </ul>
          </div>
          <img
            className="w-[210px] mx-auto sm:ml-auto -order-[1] lg:order-1"
            src={configImg}
          />
        </div>
        <div className="bg-dark gap-5 sm:gap-10 justify-between grid sm:grid-cols-2 items-center relative shadow-[0px_5px_0px_0px_#191A23] rounded-[45px] p-[50px]">
          <div className="h-full flex flex-col gap-5">
            <h3 className="px-[7px] w-fit rounded-[7px] bg-white text-black text-lg font-semibold">
              Безопасность и защита данных
            </h3>
            <ul className="grid gap-3 text-white text-[14px] list-disc pl-5">
              <li>Встроенная поддержка IPSec для шифрования трафика</li>
              <li>Улучшенные механизмы защиты от атак типа spoofing</li>
            </ul>
          </div>
          <img
            className="w-[210px] mx-auto sm:ml-auto -order-[1] lg:order-1"
            src={secureImg}
          />
        </div>
        <div className="bg-gray gap-5 sm:gap-10 justify-between grid sm:grid-cols-2 items-center relative shadow-[0px_5px_0px_0px_#191A23] rounded-[45px] p-[50px]">
          <div className="h-full flex flex-col gap-5">
            <h3 className="px-[7px] w-fit rounded-[7px] bg-green text-lg font-semibold">
              Эффективность
            </h3>
            <ul className="grid gap-3 text-[14px] list-disc pl-5">
              <li>
                Отмена NAT (Network Address Translation), что упрощает прямое
                соединение устройств
              </li>
              <li>Оптимизированная передача пакетов благодаря Jumbograms</li>
            </ul>
          </div>
          <img
            className="w-[210px] mx-auto sm:ml-auto -order-[1] lg:order-1"
            src={effiImg}
          />
        </div>
      </div>
      <div className="p-[60px] relative rounded-[45px] bg-gray flex justify-between">
        <div className="max-w-[500px] grid gap-[26px]">
          <div className="text-lg font-semibold">
            Узнайте больше о работе IPv6
          </div>
          <div>
            Контактируйте с нами, чтобы узнать, как IPv6 может улучшить вашу
            сеть и подготовить ее к будущему.
          </div>
          <Button as="link" href="/#contacts" className="w-fit">
            Подробнее
          </Button>
        </div>
        <img
          className="absolute w-[359px] hidden lg:block right-[110px] top-1/2 -translate-y-1/2"
          src={illustrationImg}
          alt="illustration image"
        />
      </div>
    </section>
  );
};
