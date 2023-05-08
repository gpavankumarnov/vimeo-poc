import React from "react";
import styles from "./Card.module.css";
import cs from "classNames";

type Props = {
  card: {
    title: string;
    description: string;
    urlTitle: string;
    urlLink: string;
    mediaUrl: string;
  };
  alignment: string;
  handleCardClick: Function;
  index: number;
};

const MediaCard = ({ card, handleCardClick, index, alignment }: Props) => {
  return (
    <div onClick={() => handleCardClick(index)} className={cs(styles.card)}>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <a href={card.urlTitle}></a>
    </div>
  );
};

export default MediaCard;
