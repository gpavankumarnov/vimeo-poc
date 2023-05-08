import React from "react";
import HomePageCard from "../HomePageCard/HomePageCard";
import cs from "classNames";
import styles from "./HomepageContent.module.css";
import HomepageTitleBlock from "@/components/HomepageTitleBlock/HomepageTitleBlock";
import { btnStyles } from "../../../styles/customStyles/themes";

const HomepageContent = () => {
  const cardsData = [
    {
      cardTitle: "Easy and Attainable",
      cardDescription:
        "Short description, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      cardImage:
        "https://images.unsplash.com/photo-1528460033278-a6ba57020470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
    //2
    {
      cardTitle: "Highest Quality",
      cardDescription:
        "Short description, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      cardImage:
        "https://images.unsplash.com/photo-1528460033278-a6ba57020470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
    //3
    {
      cardTitle: "Complete Control",
      cardDescription:
        "Short description, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      cardImage:
        "https://images.unsplash.com/photo-1528460033278-a6ba57020470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
    //4
    {
      cardTitle: "Maximize Impact",
      cardDescription:
        "Short description, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      cardImage:
        "https://images.unsplash.com/photo-1528460033278-a6ba57020470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
  ];

  const homepageBg = {
    backgroundImage: `url('https://i.gifer.com/origin/ce/ce6973c771ee07f16fd0c5b7125986f0_w200.webp')`,
  };

  return (
    <main className={cs(styles.container)}>
      <div className={cs(styles.contentWrap)} style={homepageBg}>
        <HomepageTitleBlock
          title="Everything video."
          subTitle="[intro video about the platform ]"
          primaryBtnName="Get Started"
          secondaryBtnName="See How It Works"
          primaryBtn={btnStyles.primaryBtn}
          secondaryBtn={btnStyles.secondaryBtn}
        />
      </div>
      <div className={cs(styles.cardsWrapper)}>
        {cardsData &&
          cardsData.map((card, index) => (
            <HomePageCard card={card} key={index} />
          ))}
      </div>
    </main>
  );
};

export default HomepageContent;
