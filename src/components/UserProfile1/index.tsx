import { Button, Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  htmlSkill?: string;
  scssSkill?: string;
  pythonSkill?: string;
  flaskSkill?: string;
  title: string;
  subtitle: string;
  Github: string;
  Live: string;
  imageSrc: string; // Add imageSrc property here
  liveTitle: string; // Add liveTitle property here
}

export default function UserProfile1({
  htmlSkill = "",
  scssSkill = "",
  pythonSkill = "",
  flaskSkill = "",
  title = "",
  subtitle = " ",
  Github = "https://github.com", // Default GitHub URL
  Live = "Cached &gt;=",
  imageSrc, // Destructure imageSrc here
  liveTitle = "Feature coming soon", // Default liveTitle
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-[32%] md:w-full gap-2 border-blue_gray-200 border border-solid`}
    >
      <Img src={imageSrc} alt={title} className="h-[200px] w-full object-cover" /> {/* Use imageSrc here */}
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
          <Button
            className="flex h-[36px] min-w-[108px] flex-row items-center justify-center border border-solid border-purple-200 px-[15px] text-center text-[16px] font-bold text-white-a700 hover:bg-purple-200 hover:text-white" // Add hover effect here
            onClick={() => window.open(Github, "_blank")}
          >
            {props.className?.includes("publication") ? "Access Paper" : "Github"}
          </Button>
          <Button
            className="flex h-[36px] min-w-[118px] flex-row items-center justify-center border border-solid border-blue_gray-200 px-[15px] text-center text-[16px] font-bold text-blue_gray-200 tooltip" 
          >
            <div >
              {Live}
              <span className="tooltiptext">{liveTitle}</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}