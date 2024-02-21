import { object, string } from "yup";

export const loginSchema = object({
  email: string()
    .required("email is required!")
    .email("please enter a valid email"),
  study: string(),
  password: string().required("password is required!"),
}).required();
