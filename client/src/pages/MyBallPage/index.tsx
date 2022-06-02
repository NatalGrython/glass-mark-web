import React, { FC } from "react";
import BallTable from "../../components/BallTable";
import classNames from "./index.module.scss";

interface MyBallsPageProps {}

const MyBallsPage: FC<MyBallsPageProps> = () => {
  return (
    <div className={classNames.my}>
      <div className="container">
        <BallTable isPersonal />
      </div>
    </div>
  );
};

export default MyBallsPage;
