import React, { FC } from "react";
import classNames from "./index.module.scss";

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => {
  return (
    <div className={classNames.block}>
      <div className={classNames.loader}></div>
      <span className={classNames.text}>Mining</span>
    </div>
  );
};

export default Loader;
