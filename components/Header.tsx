import React, { FC } from "react";
import Navbar from "./Navbar";
import headerStyles from "../styles/Header.module.scss";
import Logo from "./UI/Logo";

const Header: FC = () => {
  return (
    <header className={headerStyles.header}>
      <Logo className={headerStyles.logo} />
      <Navbar />
    </header>
  );
};

export default Header;
