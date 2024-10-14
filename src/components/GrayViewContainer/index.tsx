import React from "react";

interface Props {
  className?: string;
}

export default function GrayViewContainer({ ...props }: Props) {
  return (
    <div {...props} className={`${props.className} flex items-center gap-4 flex-1`}>
      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
    </div>
  );
}
