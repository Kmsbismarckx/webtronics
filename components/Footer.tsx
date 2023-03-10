import React, { FC } from "react";
import footerStyles from "../styles/Footer.module.scss";
import Logo from "./UI/Logo";
import Social from "./UI/Social";

const Footer: FC = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className="container">
        <div className={footerStyles.footer__container}>
          <div className={footerStyles.item}>
            <Logo className={footerStyles.logo}></Logo>
            <p>
              Wisconsin Ave, Suite 700 <br /> Chevy Chase, Maryland 20815
            </p>
          </div>
          <div className={footerStyles.item}>
            <p className={footerStyles.title}>Company</p>
            <ul className={footerStyles.links}>
              <li>
                <a className={footerStyles.link} href={"#about"}>
                  About Us
                </a>
              </li>
              <li>
                <a className={footerStyles.link} href={"#steps"}>
                  Steps
                </a>
              </li>
              <li>
                <a className={footerStyles.link} href={"#questions"}>
                  FAQs
                </a>
              </li>
              <li>
                <a className={footerStyles.link} href={"#review"}>
                  Review
                </a>
              </li>
              <li>
                <a className={footerStyles.link} href={"#gallery"}>
                  Gallery
                </a>
              </li>
            </ul>
          </div>
          <div className={footerStyles.item}>
            <p className={footerStyles.title}>Social media</p>
            <Social />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
