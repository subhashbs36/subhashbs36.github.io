import { Img, Heading, Text } from "./..";
import React from "react";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {

  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const easterEgg = () => {
    const element = document.getElementById('easter-egg');
    if (element) {
      element.style.display = 'none';
      localStorage.setItem('easterEggHidden', 'true');
      setTimeout(() => {
        localStorage.removeItem('easterEggHidden');
      }, 0.3 * 60 * 1000); // 5 minutes
    }
  };

  return (
    <header {...props} className={`${props.className} flex flex-col self-stretch gap-1`}>
      <div className="flex w-full justify-end self-end px-4 sm:px-2 ">
        <div className="flex w-full items-end justify-between gap-5 bg-blue_gray-900 py-2 flex-wrap">
          <a href="#" target="_blank" rel="noreferrer">
            <Img src="images/img_header_logo.png" alt="Headerlogo" className="mt-6 h-[20px] w-[92px] object-contain" />
          </a>
          <div className="relative h-[20px] w-[38%] sm:w-full  sm:px-5">
            <ul className="absolute bottom-0 right-[-10px] top-0 !my-auto !ml-10 flex items-center gap-4 md:ml-0 sm:relative sm:flex-col sm:items-start">
              <li>
                <a onClick={() => handleScroll('home')}>
                  <div className="flex items-center gap-1" id="home">
                    <Text as="p" className="cursor-pointer text-[16px] font-normal text-purple-200 hover:font-semibold">
                      #
                    </Text>
                    <Text as="p" className="text-[16px] font-medium text-white-a700">
                      home
                    </Text>
                  </div>
                </a>
              </li>
              <li>
                <a onClick={() => handleScroll('projects')}>
                  <div className="flex items-center gap-1">
                    <Text as="p" className="cursor-pointer text-[16px] font-normal text-purple-200 hover:font-semibold">
                      #
                    </Text>
                    <Text as="p" className="cursor-pointer text-[16px] font-normal text-blue_gray-200 hover:font-semibold hover:text-purple-200">
                      works
                    </Text>
                  </div>
                </a>
              </li>
              <li>
                <a onClick={() => handleScroll('about_me')}>
                  <div className="flex items-center gap-1">
                    <Text as="p" className="cursor-pointer text-[16px] font-normal text-purple-200 hover:font-semibold">
                      #
                    </Text>
                    <Text as="p" className="cursor-pointer text-[16px] font-normal text-blue_gray-200 hover:font-semibold hover:text-purple-200">
                      about-me
                    </Text>
                  </div>
                </a>
              </li>
              <li>
                <a onClick={() => handleScroll('contacts')}>
                  <div className="flex items-center gap-1">
                    <Text as="p" className="cursor-pointer text-[16px] font-normal text-purple-200 hover:font-semibold">
                      #
                    </Text>
                    <Text as="p" className="cursor-pointer text-[16px] font-normal text-blue_gray-200 hover:font-semibold hover:text-purple-200">
                      contacts
                    </Text>
                  </div>
                </a>
              </li>
              <li>
                <a onClick={easterEgg}>
                  <div className="flex items-center gap-1" id="easter-egg">
                  <Heading as="h6" className="cursor-pointer text-[16px] font-semibold text-blue_gray-200 hover:text-purple-200">
                    EN
                  </Heading>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
