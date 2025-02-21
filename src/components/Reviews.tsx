import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const reviews = [
  {
    role: "Системный администратор",
    name: "Иванов Сергей Петрович",
    review:
      "После перехода на IPv6 наша сеть стала работать гораздо стабильнее, а скорость соединения заметно выросла. Спасибо за доступные материалы и понятные инструкции!",
  },
  {
    role: "Инженер по сетевым технологиям",
    name: "Петрова Анна Викторовна",
    review:
      "Очень полезный ресурс для тех, кто хочет разобраться в тонкостях нового протокола. Информация изложена четко, а примеры помогают быстрее освоить тему.",
  },
  {
    role: "Руководитель IT-отдела",
    name: "Сидоров Максим Олегович",
    review:
      "Долго искал подробное объяснение преимуществ IPv6 — нашел все, что нужно, на вашем сайте. Отличная работа, теперь мы внедряем IPv6 в нашей компании!",
  },
  {
    role: "Специалист по информационной безопасности",
    name: "Мельникова Елена Андреевна",
    review:
      "Статья о сравнении IPv4 и IPv6 оказалась очень наглядной. Понял, что пора переходить на новую версию протокола, чтобы оставаться в тренде современных технологий.",
  },
  {
    role: "Менеджер по IT-проектам",
    name: "Орлов Денис Александрович",
    review:
      "Благодаря вашим рекомендациям процесс миграции на IPv6 прошел без особых проблем. Отличный контент, который помогает экономить время и деньги!",
  },
];

export const Reviews = () => {
  return (
    <section className=" overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-10 mb-10 md:mb-20">
        <h2 className="px-[7px] text-center sm:text-left w-fit rounded-[7px] bg-green text-xl font-semibold">
          Отзывы
        </h2>
        <p className="text-center md:text-left max-w-[290px]">
          отзывы пользователей об опыте эксплуатации IPv6
        </p>
      </div>
      <div className="relative bg-dark py-[84px] rounded-[45px] text-white">
        <Swiper
          wrapperClass="pb-30"
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1.9}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.9,
            },
          }}
          navigation
          centeredSlides
          pagination={{ clickable: true }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.review}>
              <div className="rounded-[45px] mx-5 md:mx-0 overflow-visible mb-[48px] relative border border-green px-[52px] py-12">
                {review.review}
                <i
                  style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }}
                  className="block border bg-green border-green absolute top-full left-[51px] w-[64px] h-[39px]"
                />
              </div>
              <div className="grid ml-[85px]">
                <div className="text-green text-md font-semibold">
                  {review.name}
                </div>
                <div>{review.role}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
