import React from "react";
import cs from "classNames";
import styles from "./PrimaryBtn.module.css";
type Props = {
  primaryBtnName: string;
  primaryBgColor: string;
  primaryColor: string;
};

const PrimaryBtn = ({
  primaryBtnName,
  primaryBgColor,
  primaryColor,
}: Props) => {
  return (
    <div className={styles.btnContainer}>
      <button
        className={styles.btn}
        style={{ backgroundColor: primaryBgColor, color: primaryColor }}
      >
        {primaryBtnName}
      </button>
    </div>
  );
};

export default PrimaryBtn;
