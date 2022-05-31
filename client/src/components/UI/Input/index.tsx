import React, { FC, ChangeEvent, HTMLInputTypeAttribute } from "react";
import classNames from "./index.module.scss";

interface InputProps {
  label?: string;
  value: string | number;
  error?: string;
  name?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
}

const Input: FC<InputProps> = ({
  label,
  value,
  onChange,
  error,
  name,
  type = "text",
}) => {
  return (
    <div className={classNames.input}>
      {label && <span className={classNames.input__label}>{label}</span>}
      <input
        className={classNames.input__field}
        onChange={onChange}
        value={value}
        type={type}
        name={name}
      />
      {error && <span className={classNames.input__error}>{error}</span>}
    </div>
  );
};

export default Input;
