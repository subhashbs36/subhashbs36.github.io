import { Heading, Img } from "../../components";
import React from "react";

export default function Hero_section() {
  return (
    <div className="px-14 md:px-5">
      <div className="flex items-start justify-between gap-5 md:flex-col">
        <div className="w-[80%] self-center md:w-full">
          <div className="flex flex-col items-start">
            <div className="relative z-[5] ml-[262px] flex bg-blue_gray-900 p-1 md:ml-0">
              <Img src="images/img_user_blue_gray_200.svg" alt="User" className="h-[20px]" />
            </div>
            <div className="relative mt-[-14px] flex self-end border border-solid border-blue_gray-200 bg-blue_gray-900 p-[26px] sm:p-5">
              <Heading size="texts" as="h3" className="self-end text-[24px] font-medium text-white-a700 md:text-[22px]">
                Don&#39;t limit yourself to someone else&#39;s opinion
              </Heading>
            </div>
          </div>
          <div className="relative mt-[-14px] flex flex-col items-end">
            <div className="relative z-[6] mr-3.5 flex bg-blue_gray-900 p-1 md:mr-0">
              <Img src="images/img_user_blue_gray_200.svg" alt="User" className="h-[20px]" />
            </div>
            <div className="relative mt-[-12px] flex border border-solid border-blue_gray-200 p-3">
              <Heading size="texts" as="h4" className="text-[24px] font-normal text-white-a700 md:text-[22px]">
                - Steve Maraboli
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
