import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Exit } from "../../icons";
import { logout } from "../../store/auth/actions";
import { userSelector } from "../../store/user/selectors";
import Button from "../UI/Button";
import classNames from "./index.module.scss";
import Logo from "./Logo";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const onExit = () => {
    dispatch(logout());
  };
  return (
    <>
      <div className={classNames.header}>
        <div className="container">
          <div className={classNames.header__content}>
            <Logo />
            <span className={classNames.header__name}>
              {user?.surname} {user?.name} {user?.patronymic}
            </span>
            <div className={classNames.header__button_container}>
              <Button onClick={onExit} textSize="big" icon={Exit}>
                Выйти
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
