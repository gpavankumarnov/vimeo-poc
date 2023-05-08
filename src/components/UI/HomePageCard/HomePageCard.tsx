import React from "react";
import styles from "./HomePageCard.module.css";
import cs from "classNames";

type Props = {
  card: {
    cardTitle: string;
    cardDescription: string;
    cardImage: string;
  };
};

const HomePageCard = ({ card }: Props) => {
  const cardBg = {
    backgroundImage: `url(${card.cardImage})`,
  };

  return (
    <div className={cs(styles.homePageCard)} style={cardBg}>
      <h3 className={styles.cardTitle}>{card.cardTitle}</h3>
      <p className={styles.cardDescription}>{card.cardDescription}</p>
    </div>
  );
};

export default HomePageCard;
