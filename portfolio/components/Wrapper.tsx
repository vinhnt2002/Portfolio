import React from "react";

interface WrapperProps{
    children:React.ReactNode
}

const Wrapper:React.FC<WrapperProps> = ({children}) => {
  return <div className="lg:max-w-[1024px] w-[1024px]">{children}</div>;
};

export default Wrapper;

