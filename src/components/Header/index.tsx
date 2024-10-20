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
    <header {...props} className={`${props.className} flex flex-col self-stretch`}>
      <div className="flex w-full justify-end px-6 sm:px-2">
        <div className="flex w-full items-center justify-between gap-5 bg-blue_gray-900 py-4 sm:flex-col sm:gap-3 sm:py-2">
            <a href="#" target="_blank" rel="noreferrer" className="pl-4">
            <Img
              src="images/img_header_logo.png"
              alt="Headerlogo"
              className="h-[20px] w-[92px] object-contain sm:h-[16px] sm:w-[72px]"
            />
            </a>
          {/* Menu */}
          <div className="relative flex-1 sm:w-full">
            <ul className="flex justify-end items-center gap-6 sm:flex-row sm:items-start sm:gap-4">
              <li>
                <a onClick={() => handleScroll('home')}>
                  <div className="flex items-center gap-1">
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
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
