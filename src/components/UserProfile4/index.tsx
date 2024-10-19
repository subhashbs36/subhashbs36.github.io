import { Img } from "./..";
import React from "react";

interface Props {
  className?: string;
}

export default function UserProfile4({ ...props }: Props) {
  return (
    <div {...props} className={`${props.className} flex items-center gap-4 flex-1`}>
      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      <Img src="images/img_ellipse_36_blue_gray_200.svg" alt="Circleimage" className="h-[4px] w-[4px] rounded-[50%]" />
    </div>
  );
}
