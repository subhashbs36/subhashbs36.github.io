import { Heading } from "../../components";
import UserProfile1 from "../../components/UserProfile1";
import React, { Suspense } from "react";

const data = [
  {
    htmlSkill: "HTML",
    scssSkill: "SCSS",
    pythonSkill: "Python",
    flaskSkill: "Flask",
    title: "ChertNodes",
    subtitle: "Minecraft servers hosting ",
    liveButtonLabel: "Live &lt;~&gt;",
    cachedButtonLabel: "Cached &gt;=",
  },
  {
    htmlSkill: "React",
    scssSkill: "Express",
    pythonSkill: "Discord.js",
    flaskSkill: "Node.js",
    title: "ProtectX",
    subtitle: "Discord anti-crash bot",
    liveButtonLabel: "Live &lt;~&gt;",
    cachedButtonLabel: "Cached &gt;=",
  },
  {
    htmlSkill: "CSS",
    scssSkill: "Express",
    pythonSkill: "Node.js",
    flaskSkill: "Flask",
    title: "Kahoot Answers Viewer",
    subtitle: "Get answers to your kahoot quiz",
    liveButtonLabel: "Live &lt;~&gt;",
    cachedButtonLabel: "Cached &gt;=",
  },
];

export default function Home1RowhtmlOne() {
  return (
    <div className="flex items-start justify-end gap-[26px] md:flex-col">
      <div className="container-xs flex flex-col gap-12 self-center md:px-5">
        <div className="flex items-center justify-center md:flex-col">
          <div className="flex flex-1 items-center gap-[17px] md:flex-col md:self-stretch">
            <div className="flex flex-wrap">
              <Heading
                size="headinglg"
                as="h5"
                className="text-[32px] font-bold text-purple-200 md:text-[30px] sm:text-[28px]"
              >
                #
              </Heading>
              <Heading
                size="headinglg"
                as="h6"
                className="text-[32px] font-bold text-white-a700 md:text-[30px] sm:text-[28px]"
              >
                Publications
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
              <UserProfile1 {...d} key={"listhtmlone" + index} className="mb-9 md:mb-0" />
            ))}
          </Suspense>
        </div>
      </div>
      <div className="mt-[130px] h-[154px] w-[10%] border border-solid border-blue_gray-200 md:mt-0" />
    </div>
  );
}
