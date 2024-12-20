import React from "react";
import { LiaAnkhSolid } from "react-icons/lia";
import { MdDescription } from "react-icons/md";
import { RiUserLine, RiMailLine } from "react-icons/ri";

export const Headline = ({ text }: { text: string }) => {
  return (
    <h3 className="text-3xl font-pop font-bolder text-slate-800 mb-2">
      {text}
    </h3>
  );
};

export const LightText = ({ text }: { text: string }) => {
  return <p className="text-sm font-pop font-light text-gray-700">{text}</p>;
};

export const UserLightText = ({
  text,
  hasIcon
}: {
  text: string;
  hasIcon?: boolean;
}) => {
  return (
    <div className="flex flex-row mr-5 justify-start items-center ">
      {hasIcon && <RiUserLine size={18} className="text-pink-500 mr-1" />}
      <LightText text={text} />
    </div>
  );
};

export const EmailLightText = ({ description }: { description: string }) => {
  return (
    <div className="flex flex-col justify-start items-start mr-5">
    <div className="flex flex-row items-center mb-1">
      <MdDescription size={18} className="text-pink-500 mr-2" />
      <h3>About Us</h3>
    </div>
    <LightText text={description} />
  </div>
  );
};
