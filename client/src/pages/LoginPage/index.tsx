import React, { FC } from "react";
import Tabs from "../../components/Tab";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import { useLogin } from "./hooks/useLogin";
import classNames from "./index.module.scss";

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
  const { handleChange, values, errors, handleSubmit } = useLogin();
  return (
    <div className={classNames["login-page"]}>
      <div className="container">
        <div className={classNames["login-page__content"]}>
          <div className={classNames["login-page__input_container"]}>
            <Input
              value={values.login}
              name="login"
              error={errors.login}
              onChange={handleChange}
              label="Логин"
            />
            <Input
              value={values.password}
              name="password"
              error={errors.password}
              onChange={handleChange}
              label="Пароль"
              type="password"
            />
          </div>
          <div className={classNames["login-page__button_container"]}>
            <div className={classNames.button}>
              <Button onClick={() => handleSubmit()}>Войти</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
