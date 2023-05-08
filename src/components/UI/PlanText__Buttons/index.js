import React from "react";
import Button from "../Button/index";
import classes from "./index.module.css";

const ChoosingPlan = (props) => {
  const {
    heading,
    subHeading,
    buttonsStyleDiv,
    headingStyle,
    subHeadingStyle,
    contentStyle,
    mainContentStyle,
    button1,
    button2,
    buttons,
  } = props;

  return (
    <div className={classes.section} style={mainContentStyle}>
      <div className={classes.content} style={contentStyle}>
        <h2 style={headingStyle}>{heading}</h2>
        <p style={subHeadingStyle}>{subHeading}</p>
      </div>
      {buttons && (
        <div className={classes.buttonWrapper} style={buttonsStyleDiv}>
          <button style={button1.style}>{button1.name}</button>
          <button style={button2.style}>{button2.name}</button>
        </div>
      )}
    </div>
  );
};

export default ChoosingPlan;
