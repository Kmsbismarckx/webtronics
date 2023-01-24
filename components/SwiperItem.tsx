import React, { FC } from "react";
import swiperStyles from "../styles/Swiper.module.scss";

export interface SwiperItemProps {
  url: string;
  className: string;
}

const SwiperItem: FC<SwiperItemProps> = ({ url, className }) => {
  return (
    <li className={`${swiperStyles.item} ${className}`}>
      <img className={swiperStyles.img} src={`/media/swiper/${url}`} alt="" />
    </li>
  );
};

export default SwiperItem;
