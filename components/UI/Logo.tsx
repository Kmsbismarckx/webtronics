import React, { FC } from "react";
import headerStyles from "../../styles/Header.module.scss";

export interface LogoProps {
  className: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <img className={className} src="/media/header/logo.svg" alt="Webtronics" />
  );
};

export default Logo;
