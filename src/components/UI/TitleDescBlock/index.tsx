import React from "react";
import cs from "classNames";

//css
import styles from "./index.module.css";

//props validation
type Props = {
  alignment: string;
  title: string;
  desc: string;
};

const TitleDescBlock = ({ alignment, title, desc }: Props) => {
  return (
    <div
      className={cs(
        styles.titleBlock,
        alignment === "center" && styles.centerAlignTitleBlock
      )}
    >
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
};

export default TitleDescBlock;
