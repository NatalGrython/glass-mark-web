import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { object, string } from "yup";
import { loginAction } from "../../../store/auth/actions";

export const useLogin = () => {
  const dispatch = useDispatch();
  return useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    onSubmit(values, formikHelpers) {
      dispatch(loginAction(values));
      formikHelpers.resetForm();
    },
    validationSchema: object({
      login: string().required("Обязательное поле"),
      password: string().required("Обязательное поле"),
    }),
  });
};
