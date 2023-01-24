import React, { FC, useEffect, useState } from "react";
import questionStyles from "../styles/Question.module.scss";

export interface QuestionProps {
  id: number;
  name: string;
  description: string;
}

const Question: FC<QuestionProps> = ({ id, name, description }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (id === 1) {
      setActive(true);
    }
  }, []);

  const onToggle = () => setActive(!active);

  return (
    <li
      className={`${questionStyles.question} ${
        active ? questionStyles.active : ""
      }`}
    >
      <div className={questionStyles.cross__container} onClick={onToggle}>
        <div className={questionStyles.cross} />
      </div>
      <h4 className={questionStyles.title} onClick={onToggle}>
        {name}
      </h4>
      {active && (
        <p className={questionStyles.description}>
          Front-end engineers work closely with designers to make websites
          beautiful, functional, and fast. This Career Path will teach you not
          only the necessary languages and technologies, but how to think like a
          front-end engineer, too.
        </p>
      )}
    </li>
  );
};

export default Question;
