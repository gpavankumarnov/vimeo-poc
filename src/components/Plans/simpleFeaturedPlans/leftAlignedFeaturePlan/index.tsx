import React from "react";
import PlanText from "../../../UI/PlanText__Buttons";
import ChoosingPlan from "../../../UI/PlanText__Buttons";
import { HeadSubHeadButtonStyle } from "../Interfaces/HeadSubHeadButtonStyles";
import classes from "./index.module.css";

const LeftAlignedFeaturePlan = () => {
  const ChoosingPlanPropsData: HeadSubHeadButtonStyle = {
    contentStyle: {
      width: "100%",
      // display: "flex",
      // justifyContent: "flex-start",
      // alignItems: "flex-start",
    },
    mainContentStyle: { display: "flex", flexDirection: "column", gap: "4rem" },
    heading: "Choose a Plan to Get Started",
    subHeading:
      "Short description, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    subHeadingStyle: { width: "90%", color: "#7C7C7C", lineHeight: "1.8rem" },
    buttons: true,
    buttonsStyleDiv: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: "100%",
      gap: "1rem",
    },
    button1: {
      name: "Help Me Choose a Plan",
      style: {
        backgroundColor: "#000000",
        color: "white",
        padding: "1rem 2rem",
        border: "none",
        borderRadius: "5px",
        fontWeight: "700",
      },

      padding: "1rem",
    },
    button2: {
      name: "Secondary CTA",
      style: {
        backgroundColor: "#878787",
        color: "white",
        borderRadius: "5px",
        padding: "1rem 2rem",
        fontWeight: "700",
        border: "none",
      },
    },
  };

  return (
    <div className={classes.wrapper}>
      <ChoosingPlan {...ChoosingPlanPropsData} />
    </div>
  );
};

export default LeftAlignedFeaturePlan;
