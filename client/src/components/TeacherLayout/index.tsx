import React, { FC } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import classNames from "./index.module.scss";

interface TeacherLayoutProps {}

const TeacherLayout: FC<TeacherLayoutProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const splitedLocation = location.pathname.split("/");
  const currentLocation = splitedLocation[splitedLocation.length - 1];
  const onChangeLocation = (location: "mark" | "all") => () => {
    navigate(`/teacher/${location}`);
  };
  return (
    <>
      <div className={classNames["teacher-layout"]}>
        <div className="container">
          <div className={classNames["teacher-layout__links"]}>
            <div className={classNames.link__container_left}>
              <button
                onClick={onChangeLocation("mark")}
                className={
                  currentLocation === "mark"
                    ? classNames["teacher-layout__link__active"]
                    : classNames["teacher-layout__link"]
                }
              >
                <span>Добавить баллы</span>
              </button>
            </div>
            <div className={classNames.link__container}>
              <button
                onClick={onChangeLocation("all")}
                className={
                  currentLocation === "all"
                    ? classNames["teacher-layout__link__active"]
                    : classNames["teacher-layout__link"]
                }
              >
                <span>Рейтинг студентов</span>
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

export default TeacherLayout;
