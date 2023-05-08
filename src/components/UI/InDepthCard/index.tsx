import React from "react";
import classes from "./index.module.css";
import SettingLogo from "../../../assets/images/InDepthPlans/SettingLogo";
import AnalyticLogo from "../../../assets/images/InDepthPlans/AnalyticLogo";
import TickImage from "../../../assets/images/InDepthPlans/TickImage";

const InDepthCard = (props: any) => {
  // const InDepthCardsData = [
  //   {
  //     mostPopularContent: "Most Popular For Creative Professionals",
  //   },
  // ];

  const {
    price,
    mostPopularContent,
    customizeContent,
    planYearContent,
    buttonName,
    starterText,
    bestForContent,
    listOfFeatures,
  } = props;

  return (
    <div className={classes.cardWrapper}>
      <div className={classes.head}>
        <p style={{ color: "#000000" }}>{mostPopularContent}</p>
      </div>
      <div className={classes.card}>
        <div className={classes.starterWithPrice}>
          <div className={classes.starterText}>
            <h3>{starterText}</h3>
            {props?.price ? (
              <div className={classes.pricing}>
                <h2 className="price">{`$${price}`}</h2>
              </div>
            ) : (
              <div className={classes.priceNA}>
                <h2 className="price">{`$${price}`}</h2>
              </div>
            )}
          </div>
          <div className={classes.perSeat}>
            <p>per seat / month</p>
          </div>
        </div>
        <p className={classes.contentData}>{customizeContent}</p>
        <div className={classes.planYearContent}>
          {planYearContent ? (
            <li style={{ listStyleType: "none" }}>{planYearContent}</li>
          ) : (
            <div className={classes.emptyPlanYear}></div>
          )}
          <button className={classes.btn}>{buttonName}</button>
        </div>

        <div className={classes.content}>
          <h5>Best For</h5>

          <div className={classes.videoMgmtContent}>
            <div className={classes.bestForContent}>
              <SettingLogo />

              <h4>{bestForContent.videoMgmt}</h4>
            </div>
            <p
              style={{
                marginLeft: "2.5rem",
                color: "#414141",
                fontSize: "0.75rem",
                fontWeight: "400",
              }}
            >
              {bestForContent.subVideoMgmtContent}
            </p>
          </div>
          <div className={classes.analyticsContent}>
            <div className={classes.bestForAnalytics}>
              <AnalyticLogo />

              <h4>{bestForContent.Analytics}</h4>
            </div>

            <p
              style={{
                marginLeft: "2.5rem",
                color: "#414141",
                fontSize: "0.75rem",
                fontWeight: "400",
              }}
            >
              {bestForContent.subAnalyticContent}
            </p>
          </div>
        </div>
        <div className={classes.features}>
          <h5>Features You’ll Love</h5>
          {Array.isArray(listOfFeatures) ? (
            listOfFeatures.length > 0 &&
            listOfFeatures.map((item: string) => (
              <div className={classes.featureContent}>
                <div>
                  <TickImage />
                </div>
                <p
                  style={{
                    color: "#414141",
                    fontSize: "0.85rem",
                    fontWeight: "400",
                  }}
                >
                  {item}
                </p>
              </div>
            ))
          ) : (
            <div className={classes.featureContent}>
              <div>
                <TickImage />
              </div>
              <p
                style={{
                  color: "#414141",
                  fontSize: "0.85rem",
                  fontWeight: "400",
                }}
              >
                {listOfFeatures.text}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InDepthCard;
