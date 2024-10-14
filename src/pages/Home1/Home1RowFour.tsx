import { Heading } from "../../components";
import UserProfile from "../../components/UserProfile";
import UserProfile1 from "../../components/UserProfile1";
import UserProfile2 from "../../components/UserProfile2";
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

export default function Home1RowFour() {
  return (
    <div>
      <div className="flex items-start justify-between gap-5 md:flex-col">
        <div className="flex w-[6%] flex-col gap-4 md:w-full md:flex-row sm:flex-col">
          <Suspense fallback={<div>Loading feed...</div>}>
            {[...Array(5)].map((d, index) => (
              <UserProfile key={"listview" + index} />
            ))}
          </Suspense>
        </div>
        <div className="container-xs mt-2.5 flex flex-col gap-12 self-center md:px-5">
          <div className="flex items-center justify-center md:flex-col">
            <div className="flex flex-1 items-center gap-4 md:flex-col md:self-stretch">
              <div className="flex flex-wrap">
                <Heading
                  size="headinglg"
                  as="h2"
                  className="text-[32px] font-bold text-purple-200 md:text-[30px] sm:text-[28px]"
                >
                  #
                </Heading>
                <Heading
                  size="headinglg"
                  as="h3"
                  className="text-[32px] font-bold text-white-a700 md:text-[30px] sm:text-[28px]"
                >
                  projects
                </Heading>
              </div>
              <div className="h-px w-[56%] bg-purple-200" />
            </div>
            <Heading as="h4" className="text-[16px] font-bold text-white-a700">
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
        <div className="mb-40 flex w-[6%] flex-col gap-4 self-end md:w-full md:flex-row md:self-auto sm:flex-col">
          <Suspense fallback={<div>Loading feed...</div>}>
            {[...Array(5)].map((d, index) => (
              <UserProfile2 key={"listview1" + index} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
