import React from "react";
import PrimaryBtn from "../UI/Button/PrimaryBtn/PrimaryBtn";
import SecondaryBtn from "../UI/Button/SecondaryBtn/SecondaryBtn";
import styles from "./HomepageTitleBlock.module.css";
import cs from "classNames";

type Props = {
  title: string;
  subTitle: string;
  primaryBtnName: string;
  secondaryBtnName: string;
  primaryBtn: {
    primaryBgColor: string;
    primaryColor: string;
  };
  secondaryBtn: {
    secondaryBgColor: string;
    secondaryColor: string;
  };
};

const HomepageTitleBlock = ({
  title,
  subTitle,
  primaryBtn,
  primaryBtnName,
  secondaryBtn,
  secondaryBtnName,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={cs(styles.titleBlockWrapper)}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subTitle}>{subTitle}</p>
      </div>
      <div className={cs(styles.btnWrapper)}>
        <PrimaryBtn {...primaryBtn} primaryBtnName={primaryBtnName} />
        <SecondaryBtn {...secondaryBtn} secondaryBtnName={secondaryBtnName} />
      </div>
    </div>
  );
};

export default HomepageTitleBlock;
