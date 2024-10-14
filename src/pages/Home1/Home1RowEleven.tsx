import { Text, Img, Heading } from "../../components";
import React from "react";

export default function Home1RowEleven() {
  return (
    <div className="flex justify-center px-14 md:px-5">
      <div className="flex w-[86%] flex-col gap-11 md:w-full">
        <div className="container-xs md:px-5">
          <div className="flex items-center gap-4">
            <div className="flex flex-wrap">
              <Heading
                size="headinglg"
                as="h4"
                className="text-[32px] font-bold text-purple-200 md:text-[30px] sm:text-[28px]"
              >
                #
              </Heading>
              <Heading
                size="headinglg"
                as="h5"
                className="text-[32px] font-bold text-white-a700 md:text-[30px] sm:text-[28px]"
              >
                contacts
              </Heading>
            </div>
            <div className="h-px w-[12%] bg-purple-200" />
          </div>
        </div>
        <div className="flex items-start justify-between gap-5 md:flex-col">
          <Text as="p" className="w-[46%] text-[16px] font-medium leading-5 text-blue_gray-200 md:w-full">
            I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to
            contact me
          </Text>
          <div className="flex w-[24%] flex-col items-start gap-3 self-center border border-solid border-blue_gray-200 p-4 md:w-full">
            <Heading as="h6" className="text-[16px] font-semibold text-white-a700">
              Message me here
            </Heading>
            <div className="flex items-center self-stretch">
              <Img src="images/img_link.svg" alt="Link" className="h-[32px] w-[32px]" />
              <Text as="p" className="ml-1 self-end text-[16px] font-normal text-blue_gray-200">
                subhash-b-s
              </Text>
            </div>
            <div className="flex items-center gap-1 self-stretch">
              <Img src="images/img_lock.svg" alt="Lock" className="h-[32px] w-[32px]" />
              <a href="mailto:subhashbs36@gmail.com" target="_blank" rel="noreferrer">
                <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                  subhashbs36@gmail.com
                </Text>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
