import React, { ReactElement } from "react";

interface IButtons {
  text?: string;
  bg?: string;
  color?: string;
  icon?: ReactElement;
  link?: string; // New prop for dynamic Instagram profile link
  onClick?: (e?: React.MouseEventHandler<HTMLButtonElement>) => void;
  className?: string;
}

export const BoxedButton = ({
  text,
  onClick,
  icon,
  link,
  bg = "bg-pink-500",
  className,
  color = "text-white",
}: IButtons) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank"); // Redirect to the Instagram profile
    } else if (onClick) {
      onClick(); // Call the custom onClick function if provided
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`${className} ${bg} cursor-pointer text-white drop-shadow-xl px-4 py-3 rounded-lg flex flex-row justify-start items-center`}
    >
      {icon && icon}
      <div className={`${color} ml-1`}>{text}</div>
    </div>
  );
};

export const WhiteButtons = ({ icon, link, onClick, className }: IButtons) => {
  return (
    <BoxedButton
      bg={"bg-gray-100"}
      icon={icon}
      link={link} // Pass the dynamic link to BoxedButton
      onClick={onClick}
      className={className}
    />
  );
};