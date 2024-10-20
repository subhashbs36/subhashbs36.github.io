import { Img, Button, Text, Heading } from "../../components";
import HomeColumnview from "../../components/HomeColumnview";
import UserProfile4 from "../../components/UserProfile4";
import React, { Suspense } from "react";

export default function About_me() {
  const handleReadMoreClick = () => {
    window.open("https://www.linkedin.com/in/subhash-b-s/", "_blank");
  };

  const handleResumeClick = () => {
    window.open("Subhash_Resume_September_2024_v3.pdf", "_blank");
  };

  return (
    <div className="flex items-center px-7 md:flex-col sm:px-5" id="about_me">
      <div className="flex-1 md:self-stretch">
        <div className="flex flex-col gap-[22px]">
          <div className="ml-[100px] mr-[100px] flex items-center justify-between gap-5 md:mx-0 sm:flex-col">
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
                About-me
              </Heading>
            </div>
            <div className="h-px flex-1 bg-purple-200 sm:self-stretch" />
          </div>
          <div className="flex items-start md:flex-col">
            <div className="flex flex-1 flex-col items-center gap-1.5 self-center px-[54px] md:self-stretch md:px-5">
              <Text as="p" className="w-[98%] text-[16px] font-normal leading-[26px] text-blue_gray-200 md:w-full">
                <>
                  👋 Hi, I’m a Backend Developer with a strong foundation in AWS, Django, and cloud technologies,
                  currently pursuing an M.S. in Computer Engineering at UC Riverside. With over two years of hands-on
                  experience, I’ve contributed to projects that span AI, ML, and innovative cloud solutions, including
                  enhancing sensor accuracy at Artpark and developing cutting-edge systems at Drozone.
                  <br />
                  <br />
                  💡 My expertise extends beyond traditional software development. I’m passionate about the intersection
                  of AI, ML, and robotics, constantly exploring new ways to harness their transformative potential. I
                  bring a problem-solving mindset and a genuine enthusiasm for tackling complex challenges in
                  technology.
                </>
              </Text>
                <div className="flex gap-[72px] self-stretch">
                <Button
                  className="flex h-[36px] min-w-[160px] flex-row items-center justify-center border border-solid border-purple-200 pl-[15px] pr-[29px] text-center text-[16px] font-medium text-white-a700 sm:pr-5 hover:bg-purple-200 hover:text-black"
                  onClick={handleReadMoreClick}
                >
                  Read more -&gt;
                </Button>
                <Button
                  className="flex h-[36px] min-w-[148px] flex-row items-center justify-center border border-solid border-purple-200 pl-[15px] pr-[33px] text-center text-[16px] font-medium text-white-a700 sm:pr-5 hover:bg-purple-200 hover:text-black"
                  onClick={handleResumeClick}
                >
                  Resume -&gt;{" "}
                </Button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[508px] w-[40%] px-[54px] md:w-full md:px-5">
        <Img
          src="images/img_image_506x338.png"
          alt="Image"
          className="absolute bottom-0 left-[10%] top-10 my-auto h-[506px] w-[75%] object-contain"
        />
      </div>
    </div>
  );
}