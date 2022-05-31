import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { object, string, ref } from "yup";
import { registrationAction } from "../../../store/auth/actions";

export const useRegistration = () => {
  const dispatch = useDispatch();
  return useFormik({
    initialValues: {
      login: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit(values, formikHelpers) {
      dispatch(registrationAction(values));
      formikHelpers.resetForm();
    },
    validationSchema: object({
      login: string().required("Обязательное поле"),
      password: string().required("Обязательное поле"),
      confirmPassword: string()
        .required("Обязательное поле")
        .equals([ref("password")], "Дожен совпадать с паролем"),
    }),
  });
};
