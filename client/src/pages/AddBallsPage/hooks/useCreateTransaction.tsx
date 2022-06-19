import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createTransactionAction } from "../../../store/transaction/action";
import { User } from "../../../types/shared/user";

export const useCreateTransaction = (students: User[]) => {
  const dispatch = useDispatch();
  return useFormik({
    initialValues: {
      hard: false,
      receiver: students[0]?.id ?? 1,
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
