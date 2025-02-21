import { ComponentProps, JSX } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = {
  light:
    "border border-dark active:text-black hover:text-green focus:text-green hover:border-green focus:border-green",
  dark: "bg-dark text-white active:bg-black hover:bg-green focus:bg-green",
};

type BaseProps = {
  variant?: keyof typeof buttonVariants;
  icon?: JSX.Element;
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: "button";
  };

type ButtonAsLink = BaseProps &
  Omit<ComponentProps<"a">, keyof BaseProps> & {
    as: "link";
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = ({
  children,
  className,
  variant,
  icon,
  ...props
}: ButtonProps) => {
  const allClassNames = twMerge(
    `rounded-[14px] cursor-pointer transition text-md py-5 px-[35px] leading-[28px] ${
      variant ? buttonVariants[variant] : buttonVariants["dark"]
    } ${className || ""} `
  );
  if (props.as === "link") {
    return (
      <a {...props} className={allClassNames}>
        {children}
        {icon}
      </a>
    );
  } else {
    return (
      <button {...props} className={allClassNames}>
        {children}
        {icon}
      </button>
    );
  }
};
