import React from "react";

interface Props {
  className?: string;
}

export default function HomeColumnview({ ...props }: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center gap-4 flex-1`}>
      <div className="flex gap-4 self-stretch">
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      </div>
      <div className="flex gap-4 self-stretch">
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      </div>
      <div className="flex gap-4 self-stretch">
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      </div>
      <div className="flex gap-4 self-stretch">
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      </div>
      <div className="flex gap-4 self-stretch">
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
      </div>
    </div>
  );
}
