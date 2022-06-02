import React, { ChangeEvent, FC, useState } from "react";
import classNames from "./index.module.scss";

interface SelectProps {
  options: { value: string; text: string }[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<SelectProps> = ({ options, value, onChange }) => {
  return (
    <select className={classNames.select} value={value} onChange={onChange}>
      {options.map((item) => (
        <option
          className={classNames.option}
          value={item.value}
          key={item.value}
        >
          {item.text}
        </option>
      ))}
    </select>
  );
};

export default Select;
