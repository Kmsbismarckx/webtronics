import React, { FC, useEffect } from "react";
import Mentor from "./Mentor";
import { useTypedSelector } from "../hooks/useTypedSelector";
import {
  fetchMentors,
  selectMentorsIds,
} from "../store/reducers/mentors/mentorsSlice";
import aboutStiles from "../styles/About.module.scss";
import { useAppDispatch } from "../store";

const About: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMentors());
  }, []);
  const mentorsIds = useTypedSelector(selectMentorsIds);
  return (
    <section id='about' className={aboutStiles.about}>
      <h2 className={aboutStiles.about__title}>About us</h2>
      <div className={aboutStiles.container}>
        <div className={aboutStiles.mentors}>
          <h3 className={aboutStiles.mentors__title}>Mentors</h3>
          <ul className={aboutStiles.mentors__list}>
            {mentorsIds.map((id) => (
              <Mentor key={id} id={id}></Mentor>
            ))}
          </ul>
        </div>
        <div className={aboutStiles.description__container}>
          <p className={aboutStiles.description}>
            Front-end engineers work closely with designers to make websites
            beautiful, functional, and fast. This Career Path will teach you not
            only the necessary languages and technologies, but how to think like
            a front-end engineer, too.
          </p>
          <img
            className={aboutStiles.frontend}
            src="/media/about/Front-End.svg"
            alt="Front-end"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
