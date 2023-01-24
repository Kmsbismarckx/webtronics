import React, { FC } from "react";
import socialStyles from "../../styles/Footer.module.scss";

const Social: FC = () => {
  const socialUrl = ["facebook.svg", "fox.svg", "twitter.svg", "linkedin.svg"];
  return (
    <ul className={socialStyles.social}>
      {socialUrl.map((url) => (
        <li className={socialStyles.social__item}>
          <a href={`https://${url.split(".")[0]}.com`}>
            <img src={`/media/social/${url}`} alt={url} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
