import * as yup from "yup";

export const feedbackSchema = yup.object().shape({
  name: yup
    .string()
    .required("This field is required")
    .min(2, "Minimal length is 2 symbols")
    .matches(
      /^[а-яА-ЯёЁa-zA-Z]+ ?[а-яА-ЯёЁa-zA-Z]+ ?[а-яА-ЯёЁa-zA-Z]+$/,
      "Wrong name format"
    )
    .max(50, "Too much symbols"),
  phone: yup
    .string()
    .required("This field is required")
    .matches(
      /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
      "Wrong number"
    ),
  email: yup.string().required("This field is required").email("Wrong E-mail!"),
});
