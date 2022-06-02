import { useSelector } from "react-redux";
import { tablesSelector } from "../../../store/table/selector";
import { userSelector } from "../../../store/user/selectors";

export const useMyBalls = () => {
  const table = useSelector(tablesSelector);
  const user = useSelector(userSelector);

  return table.find((item) => item.login === user?.login);
};
