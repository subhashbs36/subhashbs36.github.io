import { Img } from "./..";
import React from "react";

interface Props {
  className?: string;
}

export default function UserProfile3({ ...props }: Props) {
  return (
    <div {...props} className={`${props.className} flex justify-center items-center gap-4 flex-1`}>
      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      <Img src="images/img_ellipse_36.png" alt="Image" className="h-[4px] w-[3px] object-cover" />
    </div>
  );
}
