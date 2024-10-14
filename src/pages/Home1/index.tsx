import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import Footer from "../../components/Footer";
import GrayViewContainer from "../../components/GrayViewContainer";
import Header from "../../components/Header";
import Home1RowEleven from "./Home1RowEleven";
import Home1RowFour from "./Home1RowFour";
import Home1RowSeven from "./Home1RowSeven";
import Home1RowTen from "./Home1RowTen";
import Home1RowTwo from "./Home1RowTwo";
import Home1RowhtmlOne from "./Home1RowhtmlOne";
import React, { Suspense } from "react";

export default function Home1Page() {
  return (
    <>
      <Helmet>
        <title>Home 5</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-blue_gray-900">
        <div className="mb-1 overflow-auto">
          <div className="flex flex-col gap-[98px] md:gap-[73px] sm:gap-[49px]">
            <div className="relative mr-5 h-[546px] content-center md:mr-0 md:h-auto">
              <div className="mx-auto flex flex-1 items-start justify-center md:flex-col">
                <div className="relative z-[3] mt-[190px] flex flex-col gap-2 md:px-5">
                  <Img src="images/img_user.svg" alt="User" className="h-[32px]" />
                  <Img src="images/img_link.svg" alt="Link" className="h-[32px]" />
                  <Img src="images/img_lock.svg" alt="Lock" className="h-[32px]" />
                </div>
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
                                <span>Subhash B S</span>
                                <span>
                                  <>
                                    &nbsp;
                                    <br />
                                  </>
                                </span>
                              </Heading>
                              <Heading size="headings" as="h2" className="text-[20px] font-semibold text-purple-200">
                                - Backend Developer
                              </Heading>
                            </div>
                            <Button className="ml-1 flex h-[36px] min-w-[148px] flex-row items-center justify-center border border-solid border-purple-200 pl-[15px] pr-[19px] text-center text-[16px] font-medium text-white-a700 md:ml-0">
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
                                src="images/img_image.png"
                                alt="Image"
                                className="mx-auto h-[386px] w-full flex-1 object-cover"
                              />
                              <div className="absolute bottom-[15%] right-[15px] m-auto flex w-[18%] flex-col gap-4 md:flex-row sm:relative sm:flex-col">
                                <Suspense fallback={<div>Loading feed...</div>}>
                                  {[...Array(5)].map((d, index) => (
                                    <GrayViewContainer key={"dots" + index} />
                                  ))}
                                </Suspense>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mr-9 flex w-[42%] items-center gap-2.5 border border-solid border-blue_gray-200 bg-blue_gray-900 p-2 md:mr-0 md:w-full">
                          <div className="h-[16px] w-[16px] border border-solid border-purple-200 bg-purple-200" />
                          <Text as="p" className="text-[16px] font-medium text-blue_gray-200">
                            <span className="text-blue_gray-200">Looking forward to&nbsp;</span>
                            <span className="text-white-a700">connecting!</span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 right-0 top-[16%] z-[4] mx-1 my-auto flex flex-1 flex-col md:mx-0">
                <Img src="images/img_thumbs_up.svg" alt="Thumbsup" className="ml-2 h-[52px] w-[52px] md:ml-0" />
                <div className="relative mr-[1250px] mt-[-36px] flex flex-col gap-4 md:mr-0">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {[...Array(3)].map((d, index) => (
                      <GrayViewContainer key={"listview" + index} className="md:px-5" />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
            <Home1RowTwo />
          </div>
          <div className="mt-[62px] flex flex-col gap-12 px-3.5">
            <Home1RowFour />
            <Home1RowhtmlOne />
            <Home1RowSeven />
          </div>
          <div className="mt-[98px] flex flex-col gap-[134px] md:gap-[100px] sm:gap-[67px]">
            <Home1RowTen />
            <Home1RowEleven />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
