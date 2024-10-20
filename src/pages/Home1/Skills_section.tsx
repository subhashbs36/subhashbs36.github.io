import { Text, Heading } from "../../components";
import ComplexGridLayout from "../../components/ComplexGridLayout";
import UserProfile3 from "../../components/UserProfile3";
import React, { Suspense } from "react";

export default function Skills() {
  return (
    <div className="flex items-center px-1 md:flex-col" id="skills">
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
              <div className="h-px w-[54%] bg-purple-200" />
            </div>
            <div className="ml-8 flex items-start md:ml-0 md:flex-col">
              <div className="flex flex-1 items-start md:self-stretch sm:flex-col">
                <div className="flex w-[28%] flex-col gap-1.5 border border-solid border-blue_gray-200 py-2 sm:w-full">
                  <h2 className="flex h-[65px] items-center justify-center border-b border-solid border-blue_gray-200 px-2 text-[16px] font-semibold text-white-a700 bg-transparent">
                    Programming Languages & Frameworks
                  </h2>
                  <div className="flex flex-col gap-2 px-2">
                    <div className="flex flex-wrap gap-[9px]">
                      <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                        Python
                      </Text>
                      <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                        JavaScript (ES6+)
                      </Text>
                      <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                        TypeScript
                      </Text>
                      <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                        SQL
                      </Text>
                      <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                        Flask
                      </Text>
                      <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                        Django
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-end gap-4 sm:self-stretch">
                  <div className="flex w-[92%] flex-col gap-1.5 border border-solid border-blue_gray-200 py-2 md:w-full">
                    <h2 className="flex h-[45px] items-center justify-center border-b border-solid border-blue_gray-200 px-2 text-[16px] font-semibold text-white-a700 bg-transparent">
                      Web & API Development
                    </h2>
                    <div className="flex flex-col items-start gap-2 px-2">
                      <div className="flex flex-wrap gap-2 self-stretch">
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          HTML
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          CSS
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          REST APIs
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          GraphQL
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          TensorFlow
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          PyTorch
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          Keras
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          MERN
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          Express
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          React
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          Node
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[92%] flex-col gap-1.5 border border-solid border-blue_gray-200 py-2 md:w-full">
                    <h2 className="flex h-[45px] items-center justify-center border-b border-solid border-blue_gray-200 px-2 text-[16px] font-semibold text-white-a700 bg-transparent">
                      Cloud & DevOps
                    </h2>
                    <div className="flex flex-col gap-2 px-2">
                      <div className="flex flex-wrap justify-center gap-2">
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          AWS
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          GCP
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          Docker
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          Kubernetes
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          Jenkins
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          Terraform
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          CI/CD
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          Git
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          Microservices
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-2 flex flex-1 flex-col gap-4 self-center sm:ml-0 sm:self-stretch">
                  <div className="ml-2 flex flex-col gap-1.5 border border-solid border-blue_gray-200 py-2 md:ml-0">
                    <h2 className="flex h-[45px] items-center justify-center border-b border-solid border-blue_gray-200 px-2 text-[16px] font-semibold text-white-a700 bg-transparent">
                      Databases & Systems
                    </h2>
                    <div className="flex flex-col gap-2 px-2">
                      <div className="flex flex-wrap justify-center gap-2">
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          MySQL
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          PostgreSQL
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          MongoDB
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          Redis
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          Firebase
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          Linux
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          Distributed Systems
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          Caching
                        </Text>
                        <Text as="p" className="text-[16px] font-normal text-blue_gray-200">
                          Message Queues
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}