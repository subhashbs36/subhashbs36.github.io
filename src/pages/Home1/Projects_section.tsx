import { Heading } from "../../components";
import UserProfile from "../../components/UserProfile";
import UserProfile1 from "../../components/UserProfile1";
import UserProfile2 from "../../components/UserProfile2";
import React, { Suspense } from "react";
import "../../styles/ProjectsSection.css"; // Import the CSS file

const data = [
  {
    htmlSkill: "Movenet_Pose_Estimation",
    scssSkill: "OpenCV",
    pythonSkill: "Django",
    flaskSkill: "ReactJS",
    title: "Nayan_Nirikshan",
    subtitle: "Violence Detection Using Surveillance Cameras",
    Github: "https://github.com/subhashbs36/Nayan_Nirikshan",   
    Live: "Live >=",
    imageSrc: "public/gifs/fight.gif", // Add custom image source here
    liveTitle: "Feature Coming soon", // Add title for Live button
  },
  {
    htmlSkill: "TensorFlow.js",
    scssSkill: "PoseNet",
    pythonSkill: "React",
    flaskSkill: "OpenCV", 
    title: "Yoga AI Assistant",
    subtitle: "Real-time corrections and guidance for yoga poses",
    Github: "https://github.com/subhashbs36/Yoga-AI-Assistant",
    Live: "Live >=",
    imageSrc: "public/gifs/yogaAi.gif", // Add custom image source here
    liveTitle: "Feature coming soon", // Add title for Live button
  },
  {
    htmlSkill: "GDAL",
    scssSkill: "YOLOv5",
    pythonSkill: "OpenCV",
    flaskSkill: "TSP algorithm",
    title: "PomDrone",
    subtitle: "Autonomous Drone Path Optimization for Pomegranate Tree Pesticide Spraying",
    Github: "https://github.com/subhashbs36/Autonomous-Drone-Path-Optimization-for-Pomegranate-Tree-Pesticide-Spraying",
    Live: "Live >=",
    imageSrc: "public/gifs/drone_path.gif", // Add custom image source here
    liveTitle: "Feature coming soon", // Add title for Live button
  },
];

export default function Projects() {
  return (
    <div id="projects">
      <div className="flex items-start justify-between gap-5 md:flex-col">
        <div className="flex w-[6%] flex-col gap-4 md:w-full md:flex-row sm:flex-col">
          <Suspense fallback={<div>Loading feed...</div>}>
            {[...Array(5)].map((_, index) => (
              <UserProfile key={"listview" + index} className="project-item" />
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
            <Heading as="h4" className="text-[16px] font-bold text-white-a700 cursor-pointer">
              <a href="https://github.com/subhashbs36" target="_blank" rel="noopener noreferrer">
              View all ~~&gt;
              </a>
            </Heading>
          </div>
          <div className="flex gap-4 md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <UserProfile1
                  {...d}
                  key={"listhtmlone" + index}
                  className="project-item mb-9 md:mb-0"
                />
              ))}
            </Suspense>
          </div>
        </div>
        <div className="mb-40 flex w-[6%] flex-col gap-4 self-end md:w-full md:flex-row md:self-auto sm:flex-col">
          <Suspense fallback={<div>Loading feed...</div>}>
            {[...Array(5)].map((_, index) => (
              <UserProfile2 key={"listview1" + index} className="project-item" />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}