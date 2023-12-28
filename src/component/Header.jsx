import React from "react";
import { HeaderSvg } from "./SVGs/HeaderSvg";
import { SearchSVG } from "./SVGs/SearchSVG";

export const Header = () => {
  return (
    <div className="flex items-center justify-between pt-8 pb-8 pl-[350px] pr-[350px]">
      <div>
        <HeaderSvg />
      </div>
      <div className="flex w-[667px] h-[24px] gap-10 justify-center">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">Blog</p>
        <p className="cursor-pointer">Contact</p>
      </div>
      <div className="flex items-center gap-6 rounded-xl w-[166px] h-[36px] bg-gray-100 pl-4 justify-between pr-2 cursor-pointer">
        <label className="cursor-pointer">Search </label>
        <SearchSVG />
      </div>
    </div>
  );
};
