import React, { FC } from "react";
import { useSelector } from "react-redux";
import BallTableAll from "../../components/BallTableAll";
import { tablesSelector } from "../../store/table/selector";
import classNames from "./index.module.scss";

interface AllBallsPageProps {}

const AllBallsPage: FC<AllBallsPageProps> = () => {
  const table = useSelector(tablesSelector);
  return (
    <div className={classNames.all}>
      <div className="container">
        <div className={classNames.all__content}>
          {table.map((item) => (
            <BallTableAll
              balance={item.balance}
              text={`${item.surname} ${item.name} ${item.patronymic}`}
              transactions={item.transactions}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBallsPage;
