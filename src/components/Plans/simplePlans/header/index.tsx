import React from "react";
import classes from "./index.module.css";
import PlanText from "../../../UI/PlanText__Buttons";
import { HeadSubHead } from "../Interfaces/HeadSubHead";

type Props = {
  title: string;
  desc: string;
};

const HeaderComponent = ({ title, desc }: Props) => {
  const propsData: any = {
    title: "Choose a Plan to Get Started",
    desc: `
     
         Short description, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut <br></br> labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      `,
    subHeadingStyle: {
      width: "65%",
    },
    mainContentStyle: {
      width: "75%",
    },
    contentStyle: {
      width: "100%",
    },
  };

  return (
    <>
      <div className={classes.section}>
        <div className={classes.content}>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
