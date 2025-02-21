import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface IAdvantageDropdownProps {
  text: string;
  title: string;
  number: number;
}

export const AdvantageDropdown = ({
  text,
  title,
  number,
}: IAdvantageDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className={twMerge(
        "shadow-[0px_5px_0px_0px_#191A23] rounded-[45px] transition",
        isOpen ? "bg-green" : "bg-gray"
      )}
    >
      <button
        className="flex text-left cursor-pointer items-center w-full justify-between pb-[30px] pt-10 px-[60px]"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex items-center gap-6">
          <span className="text-xl md:text-2xl font-semibold">
            {"0" + number}
          </span>
          <span className="text-md md:text-lg font-semibold">{title}</span>
        </div>
        <div className="md:min-w-[58px] min-w-[38px] h-[38px] md:h-[58px] rounded-[50%] bg-gray border border-black flex items-center justify-center text-lg md:text-2xl font-extrabold">
          {isOpen ? "-" : "+"}
        </div>
      </button>
      {isOpen && <p className="pt-[30px] pb-10 mx-[60px] border-t">{text}</p>}
    </div>
  );
};
