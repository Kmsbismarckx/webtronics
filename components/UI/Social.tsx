import React, { FC } from "react";
import socialStyles from "../../styles/Footer.module.scss";

const Social: FC = () => {
  const socialUrl = ["facebook.svg", "fox.svg", "twitter.svg", "linkedin.svg"];
  return (
    <ul className={socialStyles.social}>
      {socialUrl.map((url) => (
        <li className={socialStyles.social__item}>
          <img src={`/media/social/${url}`} alt={url} />
        </li>
      ))}
    </ul>
  );
};

export default Social;
