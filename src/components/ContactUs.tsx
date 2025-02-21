import { Button } from "./Button";
import illustrationImg from "../assets/Illustration-2.png";
import { FormEvent, useState } from "react";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

export const ContactUs = () => {
  const [formData, setFormData] = useState(initialFormState);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.message.length < 50) {
      return alert("Сообщние должно быть более 50-ти символов!");
    }
    setFormData(initialFormState);
    return alert("Заявка успешно отправлено!");
  };
  return (
    <section id="contacts" className="">
      <div className="flex flex-col md:flex-row items-center gap-10 mb-10 md:mb-20">
        <h2 className="px-[7px] text-center sm:text-left w-fit rounded-[7px] bg-green text-xl font-semibold">
          Свяжитесь с нами!
        </h2>
        <p className="text-center sm:text-left max-w-[290px]">
          Свяжитесь с нами: давайте обсудим ваши потребности в IPv6
        </p>
      </div>
      <div className="p-[60px] relative rounded-[45px] bg-gray flex justify-between">
        <form
          onSubmit={onSubmit}
          className="max-w-[556px] relative z-[1] gap-[25px] w-full grid"
        >
          <label className="grid gap-[5px]">
            <span className=" leading-7 text-[16px]">Имя</span>
            <input
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="px-[30px] leading-0 bg-white py-[18px] rounded-[14px] border"
              placeholder="Введите ваше имя"
              type="text"
            />
          </label>
          <label className="grid gap-[5px]">
            <span className="leading-7 text-[16px]">Email*</span>
            <input
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              required
              className="px-[30px] leading-0 bg-white py-[18px] rounded-[14px] border"
              placeholder="Введите ваш email"
              type="email"
            />
          </label>
          <label className="grid gap-[5px]">
            <span className=" leading-7 text-[16px]">Сообщение*</span>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              required
              className="px-[30px] min-h-[190px] bg-white py-[18px] rounded-[14px] border"
              placeholder="Введите ваше сообщение"
            />
          </label>
          <Button className="">Отправить заявку</Button>
        </form>
        <img
          className="absolute w-[359px]  right-0 top-1/2 -translate-y-1/2"
          src={illustrationImg}
          alt="illustration image"
        />
      </div>
    </section>
  );
};
