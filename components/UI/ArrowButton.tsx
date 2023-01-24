import React, { FC } from "react";

export interface ArrowButtonProps {
  className: string;
  onClick: () => void;
}

const ArrowButton: FC<ArrowButtonProps> = ({ className, onClick }) => {
  return <button className={className} onClick={onClick}></button>;
};

export default ArrowButton;
