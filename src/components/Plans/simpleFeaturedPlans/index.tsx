import React from "react";
import classes from "./index.module.css";
import LeftAlignedFeaturePlan from "./leftAlignedFeaturePlan";
import RightAlignedFeaturePlan from "./rightAlignedFeaturePlan/index";

const SimpleFeaturedPlan = () => {
  return (
    <div className={classes.wrapper}>
      <LeftAlignedFeaturePlan />
      <RightAlignedFeaturePlan />
    </div>
  );
};

export default SimpleFeaturedPlan;
