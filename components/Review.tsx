import React, { FC, useState } from "react";
import reviewStyles from "../styles/Review.module.scss";
import Swiper from "./Swiper";

const Review: FC = () => {
  const information = [
    {
      title: "Best courses ever",
      description:
        "Good course, up to this point, still ongoing. The only downside,\n" +
        'why I gave 4,5 stars, because the "teacher" sometimes feel like,\n' +
        "he is lost, and takes up quite a time, to correct himself, and\n" +
        "check back etc.",
    },
    {
      title: "Amazing teaching",
      description:
        "The explanation is crazy it really doesn't have a structure to go from point A to point B. " +
        "He starts to explain something then he change his mind and start with another thing an so on. " +
        "If you try to learn pro active by doing the same thing with him all along you will get confused and " +
        "start to loose interest.",
    },
    {
      title: "Simple and easy",
      description:
        "I am really enjoying the experience of learning a new skill I used to believe that web design was way " +
        "too complicated for me to learn but so far in this course I have been keeping up and having fun.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <section id="review" className={reviewStyles.review}>
      <h2 className={reviewStyles.title}>Review</h2>
      <div className={reviewStyles.content}>
        <div className={reviewStyles.info}>
          <h4 className={reviewStyles.info__title}>
            {information[currentIndex].title}
          </h4>
          <p className={reviewStyles.description}>
            {information[currentIndex].description}
          </p>
        </div>
        <Swiper currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      </div>
    </section>
  );
};

export default Review;
