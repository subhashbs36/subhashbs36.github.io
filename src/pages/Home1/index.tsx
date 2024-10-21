import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import Footer from "../../components/Footer/Footer";
// import GrayViewContainer from "../../components/GrayViewContainer";
import Header from "../../components/Header";
import Contacts from "./Contact_section";
import Projects from "./Projects_section";
import About_me from "./About_me_page";
import React, { Suspense } from "react";
import Hero_section from "./Hero_section";
import Skills from "./Skills_section";
import Publications from "./Publication_section";

export default function Home1Page() {
  return (
    <>
      <Helmet>
        <title>Subhash</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-blue_gray-900">
        <div className="mb-1 overflow-auto">
          <div className="flex flex-col gap-[98px] md:gap-[73px] sm:gap-[49px]">
            <div className="relative mr-5 h-[546px] content-center md:mr-0 md:h-auto">
              <div className="mx-auto flex flex-1 items-start justify-center md:flex-col">
                {/* <div className="relative mt-[0px] flex flex-col gap-3 md:px-5">
                  <a href="https://github.com/subhashbs36" target="_blank" rel="noreferrer">
                      <Img src="images/img_user.svg" alt="User" className="h-[32px] w-[32px] hover:opacity-75" />
                    </a>
                    <a href="https://www.linkedin.com/in/subhash-b-s/" target="_blank" rel="noreferrer">
                      <Img src="images/img_link.svg" alt="Link" className="h-[32px] w-[32px] self-end hover:opacity-75" />
                    </a>
                      <a href="mailto:subhashbs36@gmail.com" target="_blank" rel="noreferrer">
                      <Img src="images/img_lock.svg" alt="Lock" className="h-[32px] w-[32px] hover:opacity-75" />
                      </a>
                </div> */}
                <div className="relative ml-[-26px] flex flex-1 flex-col items-center self-center md:ml-0 md:self-stretch md:px-5">
                  <div className="relative z-[1] flex flex-col items-start self-stretch">
                    <Header />
                    <div className="relative z-[2] ml-2.5 mt-[-90px] w-px bg-blue_gray-900 md:ml-0">
                      <div className="h-[190px] w-px bg-blue_gray-200" />
                    </div>
                  </div>
                  <div className="container-xs relative mt-[-68px]">
                    <div className="ml-10 md:ml-0">
                      <div className="flex flex-col items-end">
                        <div className="flex items-center justify-end gap-[18px] self-stretch md:flex-col">
                          <div className="mb-[38px] flex w-full flex-col items-start gap-[84px] self-end md:gap-[63px] md:self-auto sm:gap-[42px]">
                            <div className="flex flex-col items-center self-stretch">
                              <Heading
                                size="textmd"
                                as="h1"
                                className="font-fingerpaint text-[64px] font-normal leading-[41px] text-white-a700 md:text-[30px] sm:text-[28px]"
                              >
                                <span className="font-fingerpaint">Subhash B S</span>
                                <span>
                                  <>
                                    &nbsp;
                                    <br />
                                  </>
                                </span>
                              </Heading>
                                <Heading size="headings" as="h2" className="text-[20px] font-semibold" style={{ color: '#a067b2' }}>
                                - Software developer
                                </Heading>
                            </div>
                            <Button
                              className="ml-1 flex h-[36px] min-w-[148px] flex-row items-center justify-center border border-solid border-purple-200 pl-[15px] pr-[19px] text-center text-[16px] font-medium text-white-a700 hover:bg-purple-200 hover:text-blue_gray-900 md:ml-0"
                              onClick={() => window.open("https://www.linkedin.com/in/subhash-b-s/", "_blank")}
                            >
                              Contact me!!
                            </Button>
                          </div>
                          <div className="flex w-full items-start justify-end sm:flex-col">
                            <Img
                              src="images/img_logo.svg"
                              alt="Logo"
                              className="mt-[84px] h-[154px] w-[154px] sm:w-full"
                            />
                            <div className="relative ml-[-142px] h-[386px] flex-1 content-center self-center md:h-auto sm:ml-0 sm:w-full sm:flex-none sm:self-stretch">
                              <Img
                                src="images/subhash_img.png"
                                alt="Image"
                                className="mx-auto h-[386px] w-full flex-1 object-cover"
                              />

                            </div>
                          </div>
                        </div>
                        <div className="mr-9 flex w-[42%] items-center gap-2.5 border border-solid border-blue_gray-200 bg-blue_gray-900 p-2 md:mr-0 md:w-full">
                          <div className="h-[16px] w-[16px] border border-solid border-purple-200 bg-purple-200" />
                          <Text as="p" className="text-[16px] font-medium text-blue_gray-200">
                            <span className="text-blue_gray-200">Lifelong </span>
                            <span className="text-purple-200">learner, innovator, </span>
                            <span className="text-blue_gray-200">and night-time</span>
                            <span className="text-purple-200"> debugger.</span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Hero_section />
          </div>
          <div className="mt-[62px] flex flex-col gap-12 px-3.5">
            <Projects />
            <Publications />
            <Skills />
          </div>
          <div className="mt-[98px] flex flex-col gap-[134px] md:gap-[100px] sm:gap-[67px]">
            <About_me />
            <Contacts />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
