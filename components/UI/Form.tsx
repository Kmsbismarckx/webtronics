import React, { FC } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { DefaultValues, SubmitHandler, useForm } from "react-hook-form";
import { feedbackSchema } from "../../utils/feedbackValidation";
import { Inputs } from "../../models/Inputs";
import Input from "./Input";
import inputStyles from "../../styles/Input.module.scss";
import formStyles from "../../styles/Form.module.scss";
import buttonStyles from "../../styles/Button.module.scss";
import Button from "./Button";
import styles from "../../styles/Form.module.scss";

const formDefaultValues: DefaultValues<Inputs> = {
  name: "",
  phone: "",
  email: "",
};

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: formDefaultValues,
    resolver: yupResolver(feedbackSchema),
  });
  const onSubmit: SubmitHandler<Inputs> = async (userData: Inputs) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3004/feedback",
        userData
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div id="form" className={formStyles.feedback__container}>
      <form
        className={formStyles.feedback__form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className={inputStyles.form__title}>Contact us</h2>
        <p>Do you have any kind of help please contact with us.</p>
        <div className={formStyles.inputs}>
          <Input
            {...register("name")}
            type="text"
            placeholder="Name"
            errors={errors}
            className={`${inputStyles.input} ${
              errors.name ? inputStyles.input__error : ""
            }`}
          />
          <Input
            {...register("phone")}
            type="tel"
            placeholder="Phone"
            errors={errors}
            className={`${inputStyles.input} ${
              errors.phone ? inputStyles.input__error : ""
            }`}
          />
          <Input
            {...register("email")}
            type="email"
            placeholder="E-mail"
            errors={errors}
            className={`${inputStyles.input} ${
              errors.email ? inputStyles.input__error : ""
            }`}
          />
        </div>
        <Button className={buttonStyles.form__button} type="submit">
          Send
        </Button>
      </form>
    </div>
  );
};

export default Form;
