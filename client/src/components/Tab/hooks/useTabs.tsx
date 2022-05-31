import { useLocation, useNavigate } from "react-router-dom";

export const useTabs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const splitedLocation = location.pathname.split("/");
  const activeTab = splitedLocation[splitedLocation.length - 1];

  const onChangeTab = (tab: "login" | "registration") => () => {
    navigate(`/${tab}`);
  };

  return { activeTab, onChangeTab };
};
