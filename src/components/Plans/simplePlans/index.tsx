import React from "react";
import classes from "./index.module.css";
import HeaderComponent from "./header/index";
import Cards from "./cards/index";
import HelpCard from "./footerCard";
import ChoosingPlan from "../../UI/PlanText__Buttons";
import { SimplePlanHeadingText } from "./Interfaces/HeadSubHeadButtonStyles";
import TitleDescBlock from "@/components/UI/TitleDescBlock";

const SimplePlan = () => {
  const titleDescPropsData: any = {
    title: "Choose a Plan to Get Started",
    desc: `
     
         Short description, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      `,
    alignment: "center",
  };

  return (
    <div className={classes.wrapper}>
      <TitleDescBlock {...titleDescPropsData} />
      <Cards />
      <HelpCard />
    </div>
  );
};

export default SimplePlan;
