import React, { FC } from "react";

export interface LogoProps {
  className: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
  return (
      <a href="/"><img className={className} src="/media/header/logo.svg" alt="Webtronics" /></a>
  );
};

export default Logo;
