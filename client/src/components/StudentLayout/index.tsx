import React, { FC } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import classNames from "./index.module.scss";

interface StudentLayoutProps {}

const StudentLayout: FC<StudentLayoutProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const splitedLocation = location.pathname.split("/");
  const currentLocation = splitedLocation[splitedLocation.length - 1];
  const onChangeLocation = (location: "my" | "all") => () => {
    navigate(`/student/${location}`);
  };
  return (
    <>
      <div className={classNames["student-layout"]}>
        <div className="container">
          <div className={classNames["student-layout__links"]}>
            <div className={classNames.link__container_left}>
              <button
                onClick={onChangeLocation("my")}
                className={
                  currentLocation === "my"
                    ? classNames["student-layout__link__active"]
                    : classNames["student-layout__link"]
                }
              >
                <span>Мои баллы</span>
              </button>
            </div>
            <div className={classNames.link__container}>
              <button
                onClick={onChangeLocation("all")}
                className={
                  currentLocation === "all"
                    ? classNames["student-layout__link__active"]
                    : classNames["student-layout__link"]
                }
              >
                <span>Общий рейтинг</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      ;
      <Outlet />
    </>
  );
};

export default StudentLayout;
