import React from "react";

interface Props {
  className?: string;
}

export default function ComplexGridLayout({ ...props }: Props) {
  return (
    <div {...props} className={`${props.className} flex items-start flex-1`}>
      <div className="flex flex-1 flex-col gap-2.5 self-end">
        <div className="flex gap-2.5">
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        </div>
        <div className="flex gap-2.5">
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        </div>
        <div className="flex gap-2.5">
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        </div>
        <div className="flex gap-2.5">
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        </div>
        <div className="flex gap-2.5">
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
          <div className="h-[4px] w-[4px] rounded-sm bg-blue_gray-200" />
        </div>
      </div>
      <div className="mb-3.5 h-[86px] w-[86px] border border-solid border-blue_gray-200" />
    </div>
  );
}
