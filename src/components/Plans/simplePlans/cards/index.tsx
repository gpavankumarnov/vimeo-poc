import React from "react";
import CardItem from "../../../UI/Card";
import classes from "./index.module.css";
import { v4 as uuidv4 } from "uuid";
import { ListOfCards } from "../Interfaces/ListOfCards";

const Cards = () => {
  const listOfCards: ListOfCards[] = [
    {
      id: uuidv4(),
      price: 12,
      planLevel: "Starter",
      planContent: "Best for students",
      planYearContent: "60 videos per seat / year",
      buttonName: "Get Plus",
      lists: [
        { text: "Player Embedding " },
        { text: "Password Protection" },
        { text: "Screen Recording" },
        { text: "Basic Templates for video creation" },
      ],
    },
    {
      id: uuidv4(),
      price: 20,
      planLevel: "Standard",
      planContent: "Best for Creatives",
      planYearContent: "120 videos per seat / year",
      buttonName: "Get Pro",
      lists: [
        { text: "Video Creation" },
        { text: "Player Customization" },
        { text: "Privacy Controls" },
        { text: "Unlimited screen and webcam recording" },
      ],
    },
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
      {listOfCards.length > 0 &&
        listOfCards.map((listItem) => (
          <CardItem key={listItem.id} {...listItem} />
        ))}
    </div>
  );
};

export default Cards;
