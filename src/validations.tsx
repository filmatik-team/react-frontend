import * as yup from "yup";

export const schemaLogin = yup
  .object({
    email: yup.string().required("Заполните это поле").email("Введите действительный e-mail"),
    password: yup
      .string()
      .required("Заполните это поле")
      .min(8, "Пароль слишком короткий, минимум 8 символов")
      .max(30, "Пароль слишком длинный, максимум 30 символов"),
  })
  .required();

export const schemaRegister = yup
  .object({
    email: yup.string().required("Заполните это поле").email("Введите действительный e-mail"),
    name: yup.string().required("Заполните это поле").max(30, "Имя может содержать максимум 30 символов"),
    password: yup
      .string()
      .required("Заполните это поле")
      .min(8, "Пароль слишком короткий, минимум 8 символов")
      .max(30, "Пароль слишком длинный, максимум 30 символов"),
    passwordConfirmation: yup.string().oneOf([yup.ref("password"), null], "Пароли не совпадают"),
    checkbox: yup.boolean().oneOf([true]),
  })
  .required();

export const schemaFeedback = yup
  .object({
    email: yup.string().required("Заполните это поле").email("Введите действительный e-mail"),
    name: yup.string().required("Заполните это поле").max(30, "Имя может содержать максимум 30 символов"),
    text: yup
      .string()
      .required("Введите текст сообщения для отправки")
      .max(500, "Сообщение может содержать максимум 500 символов"),
    recaptcha: yup.string().notOneOf(["false", "", null]),
  })
  .required();
