import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { useTabs } from "./hooks/useTabs";
import classNames from "./index.module.scss";

interface TabsProps {}

const Tabs: FC<TabsProps> = () => {
  const { activeTab, onChangeTab } = useTabs();

  return (
    <>
      <div className={classNames.tabs}>
        <div className="container">
          <div className="content">
            <div className={classNames.button_container}>
              <button
                className={
                  activeTab === "login"
                    ? classNames["button-left__active"]
                    : classNames["button-left"]
                }
                onClick={onChangeTab("login")}
              >
                <span>Вход</span>
              </button>
              <button
                className={
                  activeTab === "registration"
                    ? classNames["button-right__active"]
                    : classNames["button-right"]
                }
                onClick={onChangeTab("registration")}
              >
                <span>Регистрация</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Tabs;
