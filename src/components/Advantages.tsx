import { AdvantageDropdown } from "./AdvantageDropdown";

const advantages = [
  {
    title: "Безграничное адресное пространство",
    text: "IPv6 использует 128-битные адреса, что позволяет создать практически бесконечное количество уникальных IP-адресов. Это особенно важно для развития IoT и подключенных устройств.",
  },
  {
    title: "Улучшенная безопасность",
    text: "Встроенная поддержка IPSec обеспечивает шифрование трафика и защиту данных без необходимости дополнительных настроек.",
  },
  {
    title: "Оптимизированная маршрутизация",
    text: "IPv6 устраняет необходимость в NAT, что делает соединение более прямым и эффективным, снижая задержки и повышая производительность сети.",
  },
  {
    title: "Автоматическая конфигурация",
    text: "Благодаря SLAAC (Stateless Address Autoconfiguration) устройства могут самостоятельно получать IPv6-адреса, упрощая настройку сетей.",
  },
  {
    title: "Поддержка новых технологий",
    text: "IPv6 лучше адаптирован для работы с 5G, IoT, облачными сервисами и другими передовыми технологиями, обеспечивая стабильность и масштабируемость.",
  },
  {
    title: "Эффективная передача данных",
    text: "Использование Jumbograms и улучшенной обработки пакетов позволяет быстрее передавать большие объемы данных с меньшей нагрузкой на сеть.",
  },
];

export const Advantages = () => {
  return (
    <section className="">
      <div className="flex flex-col md:flex-row items-center gap-10 mb-10 md:mb-20">
        <h2 className="px-[7px] text-center sm:text-left w-fit rounded-[7px] bg-green text-xl font-semibold">
          Преимущества IPv6
        </h2>
        <p className="text-center sm:text-left max-w-[290px]">
          Современные технологии для нового поколения интернет-сетей
        </p>
      </div>
      <ol className="grid gap-[30px]">
        {advantages.map((advantage, i) => (
          <li key={advantage.title}>
            <AdvantageDropdown {...advantage} number={i + 1} />
          </li>
        ))}
      </ol>
    </section>
  );
};
