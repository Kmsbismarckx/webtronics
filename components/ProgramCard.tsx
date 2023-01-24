import React, { FC } from "react";
import programStyles from "../styles/ProgramCard.module.scss";

export interface ProgramCardProps {
  url: string;
}

const ProgramCard: FC<ProgramCardProps> = ({ url }) => {
  const capitalize = (str: string): string =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <li className={programStyles.container}>
      <div className={programStyles.card}>
        <img
          className={programStyles.img}
          src={`../media/programs/${url}.svg`}
          alt={url}
        />
        <h4 className={programStyles.title}>{capitalize(url)}</h4>
      </div>
    </li>
  );
};

export default ProgramCard;
