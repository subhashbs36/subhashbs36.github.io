import { Button, Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  htmlSkill?: React.ReactNode;
  scssSkill?: React.ReactNode;
  pythonSkill?: React.ReactNode;
  flaskSkill?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  liveButtonLabel?: string;
  cachedButtonLabel?: string;
}

export default function UserProfile1({
  htmlSkill = "HTML",
  scssSkill = "SCSS",
  pythonSkill = "Python",
  flaskSkill = "Flask",
  title = "ChertNodes",
  subtitle = "Minecraft servers hosting ",
  liveButtonLabel = "Live &lt;~&gt;",
  cachedButtonLabel = "Cached &gt;=",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-[32%] md:w-full gap-2 border-blue_gray-200 border border-solid`}
    >
      <Img src="images/img_rectangle_22.png" alt="Html" className="h-[200px] w-full object-cover" />
      <div className="mx-2 flex flex-wrap self-stretch">
        <Heading as="h6" className="text-[16px] font-bold text-blue_gray-200">
          {htmlSkill}
        </Heading>
        <Heading as="h6" className="ml-2 text-[16px] font-bold text-blue_gray-200">
          {scssSkill}
        </Heading>
        <Heading as="h6" className="ml-2 text-[16px] font-bold text-blue_gray-200">
          {pythonSkill}
        </Heading>
        <Heading as="h6" className="ml-2 text-[16px] font-bold text-blue_gray-200">
          {flaskSkill}
        </Heading>
      </div>
      <div className="flex flex-col items-start justify-center gap-3.5 self-stretch border-t border-solid border-blue_gray-200 px-4 py-3">
        <Heading size="headingmd" as="h4" className="text-[24px] font-bold text-white-a700">
          {title}
        </Heading>
        <Heading as="h6" className="text-[16px] font-bold text-blue_gray-200">
          {subtitle}
        </Heading>
        <div className="flex gap-[17px] self-stretch">
          <Button className="flex h-[36px] min-w-[108px] flex-row items-center justify-center border border-solid border-purple-200 px-[15px] text-center text-[16px] font-bold text-white-a700">
            {liveButtonLabel}
          </Button>
          <Button className="flex h-[36px] min-w-[118px] flex-row items-center justify-center border border-solid border-blue_gray-200 px-[15px] text-center text-[16px] font-bold text-blue_gray-200">
            {cachedButtonLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
