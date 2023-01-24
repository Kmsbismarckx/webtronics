import React from "react";
import { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { selectMentorById } from "../store/reducers/mentors/mentorsSlice";
import mentorStyles from "../styles/Mentor.module.scss";
import { EntityId } from "@reduxjs/toolkit";

interface MentorProps {
  id: EntityId;
}

const Mentor: FC<MentorProps> = ({ id }) => {
  const mentor = useTypedSelector((state) => selectMentorById(state, id));

  return (
    <li className={mentorStyles.mentor}>
      <div className={mentorStyles.img__wrapper}>
        <img
          className={mentorStyles.img}
          src={`../media/mentors/${mentor?.imgUrl}`}
          alt={mentor?.name}
        />
      </div>

      <h4 className={mentorStyles.name}>{mentor?.name}</h4>
      <p className={mentorStyles.description}>{mentor?.description}</p>
    </li>
  );
};

export default Mentor;
