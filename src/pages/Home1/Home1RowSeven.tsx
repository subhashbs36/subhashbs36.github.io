import { Text, Input, Heading } from "../../components";
import ComplexGridLayout from "../../components/ComplexGridLayout";
import UserProfile3 from "../../components/UserProfile3";
import React, { Suspense } from "react";

export default function Home1RowSeven() {
  return (
    <div className="flex items-center px-1 md:flex-col">
      <div className="h-[154px] w-[10%] border border-solid border-blue_gray-200" />
      <div className="flex flex-1 items-center justify-center gap-[15px] md:flex-col md:self-stretch">
        <div className="container-xs mb-2.5 flex justify-center md:mb-0 md:px-5">
          <div className="flex w-full flex-col gap-3">
            <div className="flex items-center gap-4 sm:flex-col">
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
                  as="h2"
                  className="text-[32px] font-bold text-white-a700 md:text-[30px] sm:text-[28px]"
                >
                  skills
                </Heading>
              </div>
              <div className="h-px w-[24%] bg-purple-200" />
            </div>
            <div className="ml-8 flex items-start md:ml-0 md:flex-col">
              <div className="mb-7 flex w-[38%] justify-center md:w-full">
                <div className="mr-7 flex w-full flex-col gap-[42px] md:mr-0">
                  <ComplexGridLayout className="mr-9 md:mr-0" />
                  <ComplexGridLayout className="ml-3.5 md:ml-0" />
                </div>
              </div>
              <div className="flex flex-1 items-start md:self-stretch sm:flex-col">
                <div className="flex w-[28%] flex-col gap-1.5 border border-solid border-blue_gray-200 py-2 sm:w-full">
                  <Input
                    name="languages"
                    placeholder={`Languages`}
                    className="flex h-[30px] items-center justify-center border-b border-solid border-blue_gray-200 px-2 text-[16px] font-semibold text-white-a700"
                  />
                  <div className="flex flex-col gap-2 px-2">
                    <div className="flex flex-wrap gap-[9px]">
                      <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                        TypeScript
                      </Text>
                      <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                        Lua
                      </Text>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                        Python
                      </Text>
                      <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                        JavaScript
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-end gap-4 sm:self-stretch">
                  <div className="flex w-[92%] flex-col gap-1.5 border border-solid border-blue_gray-200 py-2 md:w-full">
                    <Input
                      name="languages_one"
                      placeholder={`Databases`}
                      className="flex h-[30px] items-center justify-center border-b border-solid border-blue_gray-200 px-2 text-[16px] font-semibold text-white-a700"
                    />
                    <div className="flex flex-col items-start gap-2 px-2">
                      <div className="flex flex-wrap gap-2 self-stretch">
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          SQLite
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          PostgreSQL
                        </Text>
                      </div>
                      <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                        Mongo
                      </Text>
                    </div>
                  </div>
                  <div className="flex w-[92%] flex-col gap-1.5 border border-solid border-blue_gray-200 py-2 md:w-full">
                    <Input
                      name="languages_two"
                      placeholder={`Other`}
                      className="flex h-[30px] items-center justify-center border-b border-solid border-blue_gray-200 px-2 text-[16px] font-semibold text-white-a700"
                    />
                    <div className="flex flex-col gap-2 px-2">
                      <div className="flex flex-wrap justify-center gap-2">
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          HTML
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          CSS
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          EJS
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          SCSS
                        </Text>
                      </div>
                      <div className="flex flex-wrap gap-[9px]">
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          REST
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          Jinja
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-2 flex flex-1 flex-col gap-4 self-center sm:ml-0 sm:self-stretch">
                  <div className="ml-2 flex flex-col gap-1.5 border border-solid border-blue_gray-200 py-2 md:ml-0">
                    <Input
                      name="languages_three"
                      placeholder={`Tools`}
                      className="flex h-[30px] items-center justify-center border-b border-solid border-blue_gray-200 px-2 text-[16px] font-semibold text-white-a700"
                    />
                    <div className="flex flex-col gap-2 px-2">
                      <div className="flex flex-wrap justify-center gap-2">
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          VSCode
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          Neovim
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          Linux
                        </Text>
                      </div>
                      <div className="flex flex-wrap">
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          Figma
                        </Text>
                        <Text as="p" className="ml-2 text-[16px] font-normal text-blue_gray-200">
                          XFCE
                        </Text>
                        <Text as="p" className="ml-2 text-[16px] font-normal text-blue_gray-200">
                          Arch
                        </Text>
                      </div>
                      <div className="flex flex-wrap gap-[13px]">
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          Git
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          Font Awesome
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="ml-2 flex flex-col gap-1.5 border border-solid border-blue_gray-200 py-2 md:ml-0">
                    <Input
                      name="languages_four"
                      placeholder={`Frameworks`}
                      className="flex h-[30px] items-center justify-center border-b border-solid border-blue_gray-200 px-2 text-[16px] font-semibold text-white-a700"
                    />
                    <div className="mr-2 flex flex-col gap-2 px-2 md:mr-0">
                      <div className="flex flex-wrap gap-2">
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          React
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          Vue
                        </Text>
                      </div>
                      <div className="flex flex-wrap justify-center gap-2">
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          Disnake
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          Discord.js
                        </Text>
                      </div>
                      <div className="flex flex-wrap justify-center gap-[11px]">
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          Flask
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          Express.js
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[6%] flex-col gap-5 self-end md:w-full md:flex-row md:self-auto sm:flex-col">
          <Suspense fallback={<div>Loading feed...</div>}>
            {[...Array(5)].map((d, index) => (
              <UserProfile3 key={"listview" + index} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
