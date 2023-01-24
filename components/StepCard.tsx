import React, { FC } from "react";
import stepStyles from "../styles/StepCard.module.scss";

export interface StepCardProps {
  stepNumber: string;
  title: string;
  description: string;
}

const StepCard: FC<StepCardProps> = ({ stepNumber, title, description }) => {
  return (
    <div className={stepStyles.container}>
      <div className={stepStyles.card}>
        <h4 className={stepStyles.number}>{stepNumber}</h4>
        <h3 className={stepStyles.title}>{title}</h3>
        <p className={stepStyles.description}>{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
