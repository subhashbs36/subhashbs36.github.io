import { Text, Img, Heading } from "./..";
import React from "react";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props} className={`${props.className} flex flex-col gap-[26px]`}>
      <div className="h-px w-full self-stretch bg-blue_gray-200" />
      <div className="container-xs md:px-5">
        <div className="flex flex-col items-center gap-12">
          <div className="mr-1 flex items-start justify-between gap-5 self-stretch md:mr-0 sm:flex-col">
            <div className="flex w-[30%] flex-col items-start gap-4 sm:w-full">
              <div className="flex justify-between gap-5 self-stretch">
                <div className="flex items-center gap-2">
                  <Img src="images/img_thumbs_up.svg" alt="Thumbsup" className="h-[16px] w-[16px]" />
                  <Text as="p" className="text-[16px] font-medium text-white-a700">
                    Subhash
                  </Text>
                </div>
                <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                  subhashbs36@gmail.com
                </Text>
              </div>
              <Heading as="h6" className="text-[16px] font-bold text-white-a700">
                Backend Developer
              </Heading>
            </div>
            <div className="flex w-[10%] flex-col items-start gap-2.5 self-center sm:w-full">
              <Heading size="texts" as="p" className="text-[24px] font-medium text-white-a700 md:text-[22px]">
                Media
              </Heading>
              <div className="flex gap-2.5 self-stretch">
                <Img src="images/img_user.svg" alt="User" className="h-[32px] w-[32px]" />
                <Img src="images/img_link.svg" alt="Link" className="h-[32px] w-[32px] self-end" />
                <Img src="images/img_lock.svg" alt="Lock" className="h-[32px] w-[32px]" />
              </div>
            </div>
          </div>
          <a
            href="https://unstop.com/hackathons/imobilothon-40-volkswagen-group-technology-solutions-india-1172855?lb=5srtB4E"
            target="_blank"
            rel="noreferrer"
          >
            <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
              © Copyright 2024. Made by Vivek B S
            </Text>
          </a>
        </div>
      </div>
    </footer>
  );
}
