import React, { FC } from "react";
import questionsStyle from "../styles/Questions.module.scss";
import Question from "./Question";

const Questions: FC = () => {
  const questions = [
    {
      id: 1,
      question: "What is the price?",
      description:
        "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
    },
    {
      id: 2,
      question: "What is the price?",
      description:
        "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
    },
    {
      id: 3,
      question: "What is the price?",
      description:
        "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
    },
    {
      id: 4,
      question: "What is the price?",
      description:
        "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
    },
    {
      id: 5,
      question: "What is the price?",
      description:
        "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
    },
  ];

  return (
    <section className={questionsStyle.questions}>
      <h2 className={questionsStyle.title}>
        Frequently Asked <br /> Questions
      </h2>
      <div className={questionsStyle.content}>
        <div className={questionsStyle.main}>
          <p className={questionsStyle.description}>
            Do you have any kind of questions? <br /> We are here to help.
          </p>
          <img
            className={questionsStyle.question__mark}
            src="/media/questions/questions_mark.svg"
            alt="?"
          />
        </div>
        <ul className={questionsStyle.list}>
          {questions.map((question) => (
            <Question
              key={question.id}
              id={question.id}
              name={question.question}
              description={question.description}
            ></Question>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Questions;
