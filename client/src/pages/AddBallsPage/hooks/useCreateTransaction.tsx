import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createTransactionAction } from "../../../store/transaction/action";

export const useCreateTransaction = () => {
  const dispatch = useDispatch();
  return useFormik({
    initialValues: {
      hard: false,
      receiver: "",
      reason: "",
      value: 0,
    },
    onSubmit(values, formikHelpers) {
      //@ts-ignore
      dispatch(createTransactionAction(values));
      formikHelpers.resetForm();
    },
  });
};
