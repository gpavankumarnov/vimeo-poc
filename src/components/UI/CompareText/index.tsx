import React, { useState } from "react";
import classes from "./index.module.css";
import DropdownIconUP from "../../../assets/images/ComparePlans/DropdownUp";
import DropdownIconDown from "../../../assets/images/ComparePlans/DropdownArrowDown";

const CompareText = (props: any) => {
  const {
    WrapperStyles,
    headerStyles,
    subHeadingStyles,
    isDropdownOpen,
    dropdownTriggerFunc,
  } = props;

  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={classes.wrapper} style={WrapperStyles}>
      <div className={classes.heading}>
        <h2 style={headerStyles}>
          Let’s Compare the Plans to Find <br></br> Whats Right For You
        </h2>
        <p className={classes.subHeading} style={subHeadingStyles}>
          Short description, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation.
        </p>
        <button className={classes.dropdown} onClick={dropdownTriggerFunc}>
          <p style={{ fontSize: "0.85rem", fontWeight: "bold" }}>
            Compare All Plan Details
          </p>
          {isDropdownOpen ? (
            <div>{<DropdownIconUP />}</div>
          ) : (
            <div>{<DropdownIconDown />}</div>
          )}
        </button>
      </div>
    </div>
  );
};

export default CompareText;
