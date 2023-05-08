import React from "react";
import classes from "./index.module.css";
import LineBreak from "../../../assets/images/ComparePlans/LinelineBreakOfComparePlanCard";
import EnterprisePrice from "../../../assets/images/ComparePlans/EnterprisePrice";

const ComparePlanCard = (props: any) => {
  const {
    cardLine,
    planLevel,
    price,
    perDescription,
    description,
    buttonName,
  } = props;

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div>{cardLine}</div>
        <h4>{planLevel}</h4>
        <div className={classes.pricing}>
          {planLevel !== "Enterprise" ? (
            <h2>{`$${price}`}</h2>
          ) : (
            <EnterprisePrice />
          )}
          <span style={{ fontSize: "10px", width: "4rem" }}>
            {perDescription}
          </span>
        </div>
        <div>
          <LineBreak />
        </div>
        <p style={{ fontSize: "10px", width: "7rem" }}>{description}</p>
      </div>
      <div>
        <button
          className={classes.btn}
          style={
            planLevel !== "Enterprise"
              ? { backgroundColor: "#00ADEF", color: "#FFFFFF" }
              : { backgroundColor: "#000000", color: "#FFFFFF" }
          }
        >
          {buttonName}
        </button>
      </div>
    </div>
  );
};

export default ComparePlanCard;
