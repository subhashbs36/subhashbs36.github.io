import React from "react";

const sizes = {
  texts: "text-[24px] font-medium md:text-[22px] sm:text-[20px]",
  textmd: "text-[32px] font-medium md:text-[30px] sm:text-[27px]",
  headingxs: "text-[16px] font-bold sm:text-[13px]",
  headings: "text-[20px] font-semibold sm:text-[17px]",
  headingmd: "text-[24px] font-bold md:text-[22px] sm:text-[20px]",
  headinglg: "text-[32px] font-bold md:text-[30px] sm:text-[27px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "headingxs",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-a700 font-firacode ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
