import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { useTabs } from "./hooks/useTabs";
import classNames from "./index.module.scss";

interface TabsProps {}

const Tabs: FC<TabsProps> = () => {
  return (
    <>
      <div className={classNames.tabs}>
        <div className="container">
          <div className="content">
            <div className={classNames.button_container}>
              {/* <button className={classNames["button-left__active"]}>
                <span>Вход</span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Tabs;
