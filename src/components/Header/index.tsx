import MegaMenu1 from "../MegaMenu1";
import { Img, Heading, Text } from "./..";
import React from "react";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header {...props} className={`${props.className} flex flex-col self-stretch gap-1`}>
      <div className="flex w-[88%] justify-end self-end">
        <div className="flex w-full items-end justify-between gap-5 bg-blue_gray-900 py-2 sm:flex-col">
          <Img src="images/img_header_logo.png" alt="Headerlogo" className="mt-6 h-[20px] w-[92px] object-contain" />
          <div className="relative h-[20px] w-[38%] sm:w-full sm:px-5">
            <div className="absolute bottom-0 left-0 top-0 my-auto mr-[66px] flex h-max flex-1 md:mr-0">
              <div className="flex flex-wrap">
                <Text as="p" className="text-[16px] font-medium text-purple-200">
                  #
                </Text>
                <Text as="p" className="text-[16px] font-medium text-white-a700">
                  home
                </Text>
              </div>
            </div>
            <ul className="absolute bottom-0 right-[-1px] top-0 !my-auto !ml-20 flex h-max gap-4 md:ml-0 sm:relative sm:flex-col">
              <li>
                <a href="#">
                  <div className="flex flex-wrap">
                    <Text as="p" className="cursor-pointer text-[16px] font-normal text-purple-200 hover:font-semibold">
                      #
                    </Text>
                    <Text
                      as="p"
                      className="cursor-pointer text-[16px] font-normal text-blue_gray-200 hover:font-semibold hover:text-purple-200"
                    >
                      works
                    </Text>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="flex flex-wrap">
                    <Text as="p" className="cursor-pointer text-[16px] font-normal text-purple-200 hover:font-semibold">
                      #
                    </Text>
                    <Text
                      as="p"
                      className="cursor-pointer text-[16px] font-normal text-blue_gray-200 hover:font-semibold hover:text-purple-200"
                    >
                      about-me
                    </Text>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="flex flex-wrap">
                    <Text as="p" className="cursor-pointer text-[16px] font-normal text-purple-200 hover:font-semibold">
                      #
                    </Text>
                    <Text
                      as="p"
                      className="cursor-pointer text-[16px] font-normal text-blue_gray-200 hover:font-semibold hover:text-purple-200"
                    >
                      contacts
                    </Text>
                  </div>
                </a>
              </li>
              <li
                onMouseLeave={() => {
                  setMenuOpen(false);
                }}
                onMouseEnter={() => {
                  setMenuOpen(true);
                }}
              >
                <div className="flex cursor-pointer items-center gap-1">
                  <Heading
                    as="h6"
                    className="cursor-pointer text-[16px] font-semibold text-blue_gray-200 hover:text-purple-200"
                  >
                    EN
                  </Heading>
                  <Img src="images/img_group_58.svg" alt="Image" className="h-[5px] w-[10px]" />
                </div>
                {menuOpen ? <MegaMenu1 /> : null}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mr-[1254px] flex flex-col gap-4 self-stretch md:mr-0">
        <div className="flex flex-1 gap-4">
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        </div>
        <div className="flex flex-1 gap-4">
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        </div>
      </div>
    </header>
  );
}
