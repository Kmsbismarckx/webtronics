import React, { FC } from "react";

import navbarStyles from "../styles/Navbar.module.scss";

const Navbar: FC = () => {
  return (
    <ul className={navbarStyles.navbar}>
      <li className={navbarStyles.link__container}>
        <a className={navbarStyles.link} href={"#about"}>
          About
        </a>
      </li>
      <li className={navbarStyles.link__container}>
        <a className={navbarStyles.link} href={"#programs"}>
          Programs
        </a>
      </li>
      <li className={navbarStyles.link__container}>
        <a className={navbarStyles.link} href={"#steps"}>
          Steps
        </a>
      </li>
      <li className={navbarStyles.link__container}>
        <a className={navbarStyles.link} href={"#questions"}>
          Questions
        </a>
      </li>
      <li className={navbarStyles.link__container}>
        <a className={navbarStyles.link} href={"#get-in-touch"}>
          Get in touch
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
