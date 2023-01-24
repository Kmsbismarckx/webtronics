import React, { FC } from "react";
import reviewStyles from "../styles/Review.module.scss";
import Swiper from "./Swiper";

const Review: FC = () => {
  return (
    <section className={reviewStyles.review}>
      <h2 className={reviewStyles.title}>Review</h2>
      <div className={reviewStyles.content}>
        <div className={reviewStyles.info}>
          <h4 className={reviewStyles.info__title}>Best courses ever</h4>
          <p className={reviewStyles.description}>
            Good course, up to this point, still ongoing. The only downside, why
            I gave 4,5 stars, because the "teacher" sometimes feel like, he is
            lost, and takes up quite a time, to correct himself, and check back
            etc.
          </p>
        </div>
        <Swiper />
      </div>
    </section>
  );
};

export default Review;
