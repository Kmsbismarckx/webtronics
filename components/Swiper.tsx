import React, { FC, useState } from "react";
import swiperStyles from "../styles/Swiper.module.scss";
import SwiperItem from "./SwiperItem";
import ArrowButton from "./UI/ArrowButton";

const Swiper: FC = () => {
  const photosUrl = ["man 1.png", "man 2.png", "man 3.png"];
  const photosUrlSmall = [
    "man 1 small.png",
    "man 2 small.png",
    "man 3 small.png",
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const onLeftClick = () =>
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : currentIndex);
  const onRightClick = () =>
    setCurrentIndex(
      currentIndex < photosUrl.length - 1 ? currentIndex + 1 : currentIndex
    );

  return (
    <div className={swiperStyles.swiper}>
      <div className={swiperStyles.header}>
        <div className={swiperStyles.page}>
          <span className={swiperStyles.current__index}>
            {currentIndex + 1}/
          </span>
          <span>
            <sup className={swiperStyles.total}>{photosUrl.length}</sup>
          </span>
        </div>
        <div className={swiperStyles.buttons}>
          <ArrowButton className={swiperStyles.button} onClick={onLeftClick} />
          <ArrowButton className={swiperStyles.button} onClick={onRightClick} />
        </div>
      </div>
      <ul className={swiperStyles.swiper__list}>
        {photosUrl.map((url, index) => (
          <SwiperItem
            key={url}
            className={index === currentIndex ? swiperStyles.active : ""}
            url={index === currentIndex ? url : photosUrlSmall[index]}
          />
        ))}
      </ul>
    </div>
  );
};

export default Swiper;
