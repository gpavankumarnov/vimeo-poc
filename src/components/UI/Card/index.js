import React from "react";
import classes from "./index.module.css";
import GroupTick from "../../../assets/images/Grouptick";

const CardItem = (props) => {
  console.log("card props are", props);

  const { price, planLevel, planContent, planYearContent, buttonName, lists } =
    props;

  console.log(
    price,
    planLevel,
    planContent,
    planYearContent,
    buttonName,
    lists
  );

  console.log("the list data is", lists);

  return (
    <div className={classes.card}>
      {props?.price ? (
        <div className={classes.pricing}>
          <h2 className="price">{`$${price}`}</h2>
          <p>per seat / month</p>
        </div>
      ) : (
        <div className={classes.priceNA}>
          <h2 className="price">{`$${price}`}</h2>
          <p>per seat / month</p>
        </div>
      )}

      <div className={classes.level}>
        <h3>{planLevel}</h3>
        <p>{planContent}</p>
      </div>
      <div className={classes.planYearContent}>
        {planYearContent ? (
          <li>{planYearContent}</li>
        ) : (
          <div className={classes.emptyPlanYear}></div>
        )}
      </div>
      <button className={classes.btn}>{buttonName}</button>

      <div className={classes.list}>
        {Array.isArray(lists)
          ? lists.map((listItem) => (
              <div className={classes.listItem}>
                <div>
                  <GroupTick />
                </div>

                <p>{listItem.text}</p>
              </div>
            ))
          : lists && (
              <div className={classes.listItem}>
                <div>
                  <GroupTick />
                </div>

                <p>{lists.text}</p>
              </div>
            )}
      </div>
    </div>
  );
};

export default CardItem;
