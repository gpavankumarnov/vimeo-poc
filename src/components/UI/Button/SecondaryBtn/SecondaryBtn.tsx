import React from "react";
import styles from "./SecondaryBtn.module.css";
import cs from "classNames";

type Props = {
  secondaryBgColor: string;
  secondaryColor: string;
  secondaryBtnName: string;
};

const SecondaryBtn = ({
  secondaryBtnName,
  secondaryBgColor,
  secondaryColor,
}: Props) => {
  return (
    <div className={cs(styles.btnContainer)}>
      <button
        className={styles.btn}
        style={{ backgroundColor: secondaryBgColor, color: secondaryColor }}
      >
        {secondaryBtnName}
      </button>
    </div>
  );
};

export default SecondaryBtn;
