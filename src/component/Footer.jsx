import React from "react";
import { FacebookSvg } from "./SVGs/FacebookSvg";
import { InstagramSvg } from "./SVGs/InstagramSvg";
import { TwitterSvg } from "./SVGs/TwitterSvg";
import { InSvg } from "./SVGs/InSvg";

export const Footer = () => {
  return (
    <div className="pl-[350px] pr-[350px] pb-[75px] pt-[64px] bg-[#F6F6F7]">
      <div className="flex">
        <div className="w-[289px] h-[236px] flex flex-col gap-[24px]">
          <div className="flex flex-col gap-3">
            <h4 className="text-[#181A2A] text-lg">About</h4>
            <p className="text-[#696A75]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div>
            <div className="h-[24px]">
              <p>Email : info@jstemplate.net</p>
            </div>
            <div className="h-[24px]">
              <p>Phone : 880 123 456 789</p>
            </div>
          </div>
        </div>
        <div className="w-[521px] h-[236px] flex flex-col gap-[8px] items-center">
          <p>Home</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="flex gap-[26px]">
          <FacebookSvg />
          <TwitterSvg />
          <InstagramSvg />
          <InSvg />
        </div>
      </div>
      <div></div>
    </div>
  );
};
