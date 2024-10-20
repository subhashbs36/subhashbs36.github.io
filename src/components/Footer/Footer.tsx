import { Text, Img, Heading } from "..";
import React from "react";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props} className={`${props.className} flex flex-col gap-[16px] py-4`}>
      <div className="h-px w-full self-stretch bg-blue_gray-200" />
      <div className="container-xs md:px-5">
        <div className="flex flex-col items-center gap-12">
          <div className="mr-1 flex items-start justify-between gap-5 self-stretch md:mr-0 sm:flex-col">
            <div className="flex w-[25%] flex-col items-start gap-4 sm:w-full">
                <div className="flex justify-between gap-5 self-stretch">
                <div className="flex items-center gap-2">
                  <Img src="images/img_thumbs_up.svg" alt="Thumbsup" className="h-[16px] w-[16px]" />
                  <Text as="p" className="text-[16px] font-medium text-white-a700">
                  Subhash
                  </Text>
                </div>
                <a href="mailto:subhashbs36@gmail.com" className="cursor-pointer text-[16px] font-normal text-purple-200 hover:font-semibold">
                  subhashbs36@gmail.com
                </a>
                </div>
              <Heading as="h6" className="text-[16px] font-bold text-white-a700">
                Software Developer
              </Heading>
            </div>
            <div className="flex w-[15%] flex-col items-start gap-2.5 self-center sm:w-full">
              <Heading size="texts" as="p" className="text-[24px] font-medium text-white-a700 md:text-[22px]">
                Media
              </Heading>
                <div className="flex gap-2.5 self-stretch sm:flex-wrap sm:justify-center sm:gap-1">
                  <a href="https://github.com/subhashbs36" target="_blank" rel="noreferrer">
                    <Img src="images/img_user.svg" alt="User" className="h-[32px] w-[32px] hover:opacity-75" />
                  </a>
                  <a href="https://www.linkedin.com/in/subhash-b-s/" target="_blank" rel="noreferrer">
                    <Img src="images/img_link.svg" alt="Link" className="h-[32px] w-[32px] self-end hover:opacity-75" />
                  </a>
                    <a href="mailto:subhashbs36@gmail.com" target="_blank" rel="noreferrer">
                    <Img src="images/img_lock.svg" alt="Lock" className="h-[32px] w-[32px] hover:opacity-75" />
                    </a>
                </div>
            </div>
          </div>
        </div>
        <br />
        <div className="flex justify-center items-center gap-1">
          <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
            Special thanks to&nbsp;
          </Text>
          <a
            href="https://www.linkedin.com/in/b-s-vivek/"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer text-[16px] font-normal text-purple-200 hover:font-semibold"
          >
            Vivek B S
          </a>
          <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
            &nbsp;for his invaluable support in bringing this website to life. 
          </Text>
        </div>
        <div className="flex justify-center items-center gap-1 mt-1">
          <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
            Connect with him on&nbsp;
          </Text>
          <a
            href="https://www.linkedin.com/in/b-s-vivek/"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer text-[16px] font-normal text-purple-200 hover:font-semibold"
          >
            LinkedIn
          </a>
          <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
            &nbsp;to explore more of his amazing work!
          </Text>
        </div>
        <div className="flex justify-center items-center gap-1 mt-4">
          <Text as="p" className="text-[14px] font-normal text-blue_gray-200">
            © {new Date().getFullYear()} SubhashBS. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  );
}
