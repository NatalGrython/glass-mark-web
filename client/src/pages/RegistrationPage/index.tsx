import React, { FC } from "react";
import Tabs from "../../components/Tab";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import { useRegistration } from "./hooks/useRegistration";
import classNames from "./index.module.scss";

interface RegistrationPageProps {}

const RegistrationPage: FC<RegistrationPageProps> = () => {
  const { values, handleChange, handleSubmit, errors } = useRegistration();
  return (
    <div className={classNames["registration-page"]}>
      <div className="container">
        <div className={classNames["registration-page__content"]}>
          <div className={classNames["registration-page__input_container"]}>
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
            <Input
              value={values.confirmPassword}
              name="confirmPassword"
              error={errors.confirmPassword}
              onChange={handleChange}
              label="Подтвердите пароль"
              type="password"
            />
          </div>
          <div className={classNames["registration-page__button_container"]}>
            <div className={classNames.button}>
              <Button onClick={() => handleSubmit()}>Зарегистрироваться</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
