import React, { FC } from "react";
import technologiesStyles from "../styles/Technologies.module.scss";
import ProgramCard from "./ProgramCard";

const Technologies: FC = () => {
  const programsUrls = ["angular", "react", "vue", "js"];
  return (
    <section id='programs' className={technologiesStyles.technologies}>
      <div className={technologiesStyles.header}>
        <h2 className={technologiesStyles.title}>
          Programming <br /> technologies
        </h2>
        <p className={technologiesStyles.description}>
          By the end, you’ll have the portfolio and interview skills <br /> you
          need to start your new career.
        </p>
      </div>
      <ul className={technologiesStyles.list}>
        {programsUrls.map((url) => (
          <ProgramCard key={url} url={url} />
        ))}
      </ul>
    </section>
  );
};

export default Technologies;
