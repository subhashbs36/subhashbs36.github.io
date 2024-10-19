import { Heading } from "../../components";
import UserProfile1 from "../../components/UserProfile1";
import React, { Suspense } from "react";

const data = [
  {
    title: "Bowling action recognition using computer vision",
    subtitle: "IEEE",
    Github: "https://ieeexplore.ieee.org/document/10467949",
    Live: "Blog >=",
    imageSrc: "public/gifs/bowling_action.gif", // Add custom image source here
    liveTitle: "Feature coming soon", // Add title for Live button
  },
  {
    title: " Efficient Patch-Wise Crop Detection Algorithm for UAV-Generated Orthomosaic ",
    subtitle: "Springer[Chapter]",
    Github: "https://link.springer.com/chapter/10.1007/978-981-99-8684-2_14",   
    Live: "Blog >=",
    imageSrc: "public/images/subhash_springer.png", // Add custom image source here
    liveTitle: "Feature coming soon", // Add title for Live button
  },
  {
    title: "NAYAN NIRIKSHAN - Violence Detection Using Surveillance Camera",
    subtitle: "IEEE",
    Github: "https://github.com/subhashbs36/Autonomous-Drone-Path-Optimization-for-Pomegranate-Tree-Pesticide-Spraying",
    Live: "Blog >=",
    imageSrc: "public/images/CCTV-from-Liverpool.jpg", // Add custom image source here
    liveTitle: "Feature coming soon", // Add title for Live button
  },
];

export default function Publications() {
  return (
    <div >
      <div className="flex items-start justify-end gap-[26px] md:flex-col">
        <div className="container-xs mt-2 flex flex-col gap-12 self-center md:px-5">
          <div className="flex items-center justify-center md:flex-col">
            <div className="flex flex-1 items-center gap-[17px] md:flex-col md:self-stretch">
              {/* Add padding-left to move this content to the right */}
              <div className="flex flex-wrap pl-[20px]"> 
                <Heading
                  size="headinglg"
                  as="h6"
                  className="text-[32px] font-bold text-white-a700 md:text-[30px] sm:text-[28px] ml-[-20px]"
                >
                  #Publications
                </Heading>
              </div>
              <div className="h-px w-[48%] bg-purple-200" />
            </div>
            <Heading as="h6" className="text-[16px] font-bold text-white-a700">
              View all ~~&gt;
            </Heading>
          </div>
          <div className="flex gap-4 md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <UserProfile1 {...d} key={"listhtmlone" + index} className="mb-9 md:mb-0 publication" />
              ))}
            </Suspense>
          </div>
        </div>

        {/* Add margin-right to shift the left elements slightly */}
        <div className="mt-[130px] h-[154px] w-[6%] border border-solid border-blue_gray-200 md:mt-0 ml-[-7.7%] "  />
      </div>
      <div className="flex-grow" />
    </div>
  );
}
