import React, { FC, Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { tablesSelector } from "../../store/table/selector";
import classNames from "./index.module.scss";

interface BallTableAllProps {
  text: string;
  transactions: any[];
  balance: number;
}

export const getItemReason = (tx: any, txs: any[]) => {
  if (typeof tx.sender !== "string") {
    return tx.reason;
  }

  const [_, hash] = tx.reason.split(" ");
  const cancelTx = txs.find((item) => item.hash === hash);

  return `Отмена (${cancelTx.sender.surname} ${cancelTx.sender.name} ${cancelTx.sender.patronymic}, ${cancelTx.reason})`;
};

const BallTableAll: FC<BallTableAllProps> = ({
  text,
  transactions,
  balance,
}) => {
  const [open, setOpen] = useState(false);

  const onChangeOpen = () => setOpen((prev) => !prev);

  return (
    <div className={classNames["ball-all-content"]}>
      <div
        style={{
          boxShadow: open ? undefined : "none",
          overflowY: open ? "auto" : "visible",
        }}
        className={classNames["ball-table-all"]}
      >
        <div className={classNames["ball-table-all__header"]}>
          <div className={classNames["ball-table-all__container"]}>
            <div className={classNames["ball-table-all__header__content"]}>
              <span className={classNames["ball-table-all__header__title"]}>
                Общее количество баллов: {balance}
              </span>
              <div
                className={
                  classNames["ball-table-all__header__button_container"]
                }
              >
                <span className={classNames["ball-table-all__header__title"]}>
                  Посмотреть детали
                </span>
                <button
                  onClick={onChangeOpen}
                  className={classNames["ball-table-all__header__button"]}
                >
                  <svg
                    width="13"
                    height="7"
                    viewBox="0 0 13 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0L6.5 7L13 0H0Z" fill="#A6AFBE" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames["ball-table-all__container"]}>
          <button className={classNames["ball-table-all__big_ball_button"]}>
            <span>{text}</span>
          </button>
          {open && (
            <div className={classNames["ball-table-all__table"]}>
              <span className={classNames["ball-table-all__title"]}>
                Преподаватель
              </span>
              <span className={classNames["ball-table-all__title"]}>
                Форма контроля
              </span>
              <span className={classNames["ball-table-all__title"]}>
                Количество баллов
              </span>
              {transactions.map((item) => (
                <Fragment key={item.hash}>
                  <span
                    className={
                      typeof item.sender !== "string"
                        ? classNames["ball-table-all__text"]
                        : classNames["ball-table-all__danger_text"]
                    }
                  >
                    {typeof item.sender === "string"
                      ? "Администратор"
                      : `${item.sender.surname} ${item.sender.name} ${item.sender.patronymic}`}
                  </span>
                  <span
                    className={
                      typeof item.sender !== "string"
                        ? classNames["ball-table-all__text"]
                        : classNames["ball-table-all__danger_text"]
                    }
                  >
                    {getItemReason(item, transactions)}
                  </span>
                  <span
                    className={
                      typeof item.sender !== "string"
                        ? classNames["ball-table-all__text"]
                        : classNames["ball-table-all__danger_text"]
                    }
                  >
                    {item.value}
                  </span>
                </Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BallTableAll;
