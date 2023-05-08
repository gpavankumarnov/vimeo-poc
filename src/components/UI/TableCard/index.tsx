import React from "react";

import classes from "./index.module.css";

const TableCard = (props: any) => {
  const {
    rowStartHeadValue,
    icon,
    content1,
    content2,
    content3,
    content4,
    content5,
  } = props;

  return (
    <div className={classes.container}>
      <div className={classes.context}>
        {rowStartHeadValue}
        <div>{icon}</div>
      </div>

      <div className={classes.rows}>{content1}</div>
      <div className={classes.rows}>{content2}</div>
      <div className={classes.rows}>{content3}</div>
      <div className={classes.rows}>{content4}</div>
      <div className={classes.rows}>{content5}</div>
    </div>
  );
};

export default TableCard;
