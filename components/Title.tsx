import React, { FC } from "react";
import titleStyles from "../styles/Title.module.scss";
import buttonStyles from "../styles/Button.module.scss";
import Button from "./UI/Button";

const Title: FC = () => {
  return (
    <section className={titleStyles.title}>
      <h1 className={titleStyles.item}>Front-End</h1>
      <p className={titleStyles.item}>
        Make UIs and websites beautiful, functional, and fast. Cover all the
        topics that expensive bootcamps teach (and more).
      </p>
      <Button className={titleStyles.item + " " + buttonStyles.form__button}>
        <a href="#form">Start my career change</a>
      </Button>
      <h1 className={titleStyles.item}>Developer</h1>
      <h3 className={titleStyles.item}>Courses</h3>
    </section>
  );
};

export default Title;
