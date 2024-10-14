import { Img } from "./..";
import React from "react";

interface Props {
  className?: string;
}

export default function UserProfile({ ...props }: Props) {
  return (
    <div {...props} className={`${props.className} flex justify-center items-center w-full mr-3.5 gap-4 md:mr-0`}>
      <Img src="images/img_ellipse_23.svg" alt="Circleimage" className="h-[4px] w-[4px] rounded-[50%]" />
      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
    </div>
  );
}
