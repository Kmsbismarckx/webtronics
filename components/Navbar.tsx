import React, { FC } from "react";

import navbarStyles from "../styles/Navbar.module.scss";

const Navbar: FC = () => {
  return (
    <ul className={navbarStyles.navbar}>
      <li className={navbarStyles.link__container}>
        <a className={navbarStyles.link} href="/">
          About
        </a>
      </li>
      <li className={navbarStyles.link__container}>
        <a className={navbarStyles.link} href="/">
          Programs
        </a>
      </li>
      <li className={navbarStyles.link__container}>
        <a className={navbarStyles.link} href="/">
          Steps
        </a>
      </li>
      <li className={navbarStyles.link__container}>
        <a className={navbarStyles.link} href="/">
          Questions
        </a>
      </li>
      <li className={navbarStyles.link__container}>
        <a className={navbarStyles.link} href="/">
          Get in touch
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
