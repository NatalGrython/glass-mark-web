import React, { FC, Fragment } from "react";
import { getItemReason } from "../BallTableAll";
import { useMyBalls } from "./hooks/useMyBalls";
import classNames from "./index.module.scss";

interface BallTableProps {
  isPersonal: boolean;
}

const BallTable: FC<BallTableProps> = () => {
  const my = useMyBalls();
  return (
    <div className={classNames["ball-content"]}>
      <div className={classNames["ball-table"]}>
        <div className={classNames["ball-table__container"]}>
          <button className={classNames["ball-table__big_ball_button"]}>
            <span>Общее количество баллов: {my?.balance ?? 0}</span>
          </button>
          <div className={classNames["ball-table__table"]}>
            <span className={classNames["ball-table__title"]}>
              Преподаватель
            </span>
            <span className={classNames["ball-table__title"]}>
              Форма контроля
            </span>
            <span className={classNames["ball-table__title"]}>
              Количество баллов
            </span>
            {my ? (
              my.transactions.map((item: any) => (
                <Fragment key={item.hash}>
                  <span
                    className={
                      typeof item.sender !== "string"
                        ? classNames["ball-table__text"]
                        : classNames["ball-table__danger_text"]
                    }
                  >
                    {typeof item.sender === "string"
                      ? "Администратор"
                      : `${item.sender.surname} ${item.sender.name} ${item.sender.patronymic}`}
                  </span>
                  <span
                    className={
                      typeof item.sender !== "string"
                        ? classNames["ball-table__text"]
                        : classNames["ball-table__danger_text"]
                    }
                  >
                    {getItemReason(item, my.transactions)}
                  </span>
                  <span
                    className={
                      typeof item.sender !== "string"
                        ? classNames["ball-table__text"]
                        : classNames["ball-table__danger_text"]
                    }
                  >
                    {item.value}
                  </span>
                </Fragment>
              ))
            ) : (
              <Fragment>
                <span className={classNames["ball-table__text"]}>
                  Нет выставленных баллов
                </span>
                <span className={classNames["ball-table__text"]}></span>
                <span className={classNames["ball-table__text"]}></span>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BallTable;
