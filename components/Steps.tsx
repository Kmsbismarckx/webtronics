import React, { FC } from "react";
import stepsStyles from "../styles/Steps.module.scss";
import StepCard from "./StepCard";

const Steps: FC = () => {
  const steps = [
    {
      stepNumber: "Step 1",
      title: "Introduction to Front-End",
      description:
        "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
    },
    {
      stepNumber: "Step 2",
      title: "Overview of Development",
      description:
        "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
    },
    {
      stepNumber: "Step 3",
      title: "Introduction to Front-End",
      description:
        "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
    },
    {
      stepNumber: "Step 4",
      title: "Overview of Development",
      description:
        "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
    },
    {
      stepNumber: "Step 5",
      title: "Introduction to Front-End",
      description:
        "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
    },
    {
      stepNumber: "Step 6",
      title: "Overview of Development",
      description:
        "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
    },
  ];
  return (
    <section className={stepsStyles.steps}>
      <h2 className={stepsStyles.title}>Steps</h2>
      <div className={stepsStyles.list}>
        {steps.map((step) => (
          <StepCard
            key={step.stepNumber}
            stepNumber={step.stepNumber}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Steps;
