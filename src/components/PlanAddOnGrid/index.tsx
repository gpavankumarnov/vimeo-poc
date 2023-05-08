import React from "react";
import TitleDescBlock from "../UI/TitleDescBlock";
import AddOnCard from "./AddOnCard";
import { PlanAddOnCard } from "../../Interfaces/Interface";

//css
import classes from "./index.module.css";

const PlanAddOnGrid = () => {
  const cardPropsData: PlanAddOnCard[] = [
    {
      priceDetailsStartText: "Starting at",
      priceDetailsPerYear: "1200 / year",
      contentHeading: "New Plan Add-On",
      contentPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      button1Name: "See Details",
      button2Name: "Buy Now",
    },
    {
      priceDetailsStartText: "Starting at",
      priceDetailsPerYear: "1200 / year",
      contentHeading: "New Plan Add-On",
      contentPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      button1Name: "See Details",
      button2Name: "Buy Now",
    },
    {
      priceDetailsStartText: "Starting at",
      priceDetailsPerYear: "1200 / year",
      contentHeading: "New Plan Add-On",
      contentPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      button1Name: "See Details",
      button2Name: "Buy Now",
    },
    {
      priceDetailsStartText: "Starting at",
      priceDetailsPerYear: "1200 / year",
      contentHeading: "New Plan Add-On",
      contentPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      button1Name: "See Details",
      button2Name: "Buy Now",
    },
    {
      priceDetailsStartText: "Starting at",
      priceDetailsPerYear: "1200 / year",
      contentHeading: "New Plan Add-On",
      contentPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      button1Name: "See Details",
      button2Name: "Buy Now",
    },
    {
      priceDetailsStartText: "Starting at",
      priceDetailsPerYear: "1200 / year",
      contentHeading: "New Plan Add-On",
      contentPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      button1Name: "See Details",
      button2Name: "Buy Now",
    },
  ];

  return (
    <div className={classes.wrapper}>
      <TitleDescBlock
        alignment="center"
        title="Make Your Plan Entirely Yours With Plan Add-Ons"
        desc="  Short description, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua."
      />

      <div className={classes.content}>
        {Array.isArray(cardPropsData) &&
          cardPropsData.map((item: PlanAddOnCard) => <AddOnCard {...item} />)}
      </div>
    </div>
  );
};

export default PlanAddOnGrid;
