import React from "react";
import Button from "../../../UI/Button";
import classes from "./index.module.css";

const HelpCard = () => {
  return (
    <div className={classes.helpForPlanChoose}>
      <div className={classes.helpText}>
        <h3> Need help choosing a plan?</h3>
        <p>
          Answer a few questions about your needs and we can help you<br></br>{" "}
          choose the right plan for you.
        </p>
      </div>
      <div className={classes.button}>
        <Button
          name="Help Me Choose a Plan"
          style={{
            padding: "1rem",
            backgroundColor: "#2B2B2B",
            color: "white",
            borderRadius: "5px",
            border: "none",
          }}
        />
        <Button
          style={{
            padding: "1rem",
            backgroundColor: "#EAEAEA",
            color: "#000000",
            borderRadius: "5px",
            outline: "1px thin",
          }}
          name="Request Demo"
        />
      </div>
    </div>
  );
};

export default HelpCard;
