import React from "react";
import { v4 as uuidv4 } from "uuid";
import classes from "./index.module.css";
import CardItem from "../../../UI/Card";
import { ListOfCards } from "../../simplePlans/Interfaces/ListOfCards";

const RightAlignedFeaturePlan = () => {
  const cards: ListOfCards[] = [
    {
      id: uuidv4(),
      price: 65,
      planLevel: "Advanced",
      planContent: "Best for Small Businesss",
      planYearContent: "240 videos per seat / year",
      buttonName: "Get Business",
      lists: [
        { text: "Video Creation" },
        { text: "Player Customization" },
        { text: "Privacy Controls" },
        { text: "Unlimited screen and webcam recording" },
      ],
    },
    {
      id: uuidv4(),
      price: 0,
      planLevel: "Enterprise",
      planContent: "Additional security, control and support",
      planYearContent: "",
      buttonName: "Contact Sales",
      lists: [
        { text: "Video Creation" },
        { text: "Player Customization" },
        { text: "Privacy Controls" },
        { text: "Unlimited screen and webcam recording" },
      ],
    },
  ];

  return (
    <div className={classes.cardWrapper}>
      {cards.length > 0 &&
        cards.map((listItem) => <CardItem key={listItem.id} {...listItem} />)}
    </div>
  );
};

export default RightAlignedFeaturePlan;
