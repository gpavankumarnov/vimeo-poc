import React from "react";
import classes from "./index.module.css";
import AddOnCardIcon from "../../../assets/images/PlanAddOnGrid/AddOnIcon";
import { PlanAddOnCard } from "@/Interfaces/Interface";

const AddOnCard = (props: PlanAddOnCard) => {
  const {
    priceDetailsStartText,
    priceDetailsPerYear,
    contentHeading,
    contentPara,
    button2Name,
    button1Name,
  } = props;

  return (
    <div className={classes.cardWrapper}>
      <header className={classes.header}>
        <div className={classes.imageWrapper}>
          <AddOnCardIcon />
        </div>
        <div className={classes.priceDetails}>
          <p>{priceDetailsStartText}</p>
          <h2>{priceDetailsPerYear}</h2>
        </div>
      </header>

      <main className={classes.main}>
        <h2>{contentHeading}</h2>
        <p>{contentPara}</p>
      </main>
      <footer className={classes.footer}>
        <button>{button1Name}</button>
        <button>{button2Name}</button>
      </footer>
    </div>
  );
};

export default AddOnCard;
