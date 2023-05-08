import React, { useState } from "react";
import classes from "./index.module.css";
import AllSolutionsDDBox from "../../../assets/images/InDepthPlans/AllSolutionsDDBox";
import AllSolutionsText from "../../../assets/images/InDepthPlans/AllSolutionsText";
import DropDownLogo from "../../../assets/images/InDepthPlans/dropdownLogo";
import ToggleButton from "../../../assets/images/InDepthPlans/toggleButton";
import InDepthCard from "../../UI/InDepthCard";
import { InDepthPlansInterface } from "./Interfaces/InDepthPlanCardsData";
import ToggleOn from "../../../assets/images/InDepthPlans/toggleOn";
import {
  InDepthCardsDataStarter,
  InDepthCardsDataForAdvanced,
  InDepthCardsDataForStandard,
} from "./InDepthCardsData";

const InDepthPlans = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isToggleBtnOpen, setIsToggleBtnOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");

  /** 
  const InDepthCardsData: InDepthPlansInterface[] = [
    {
      mostPopularContent: "Most Popular For Creative Professionals",
      price: 9,
      customizeContent:
        "For individuals who need to customize, edit and manage videos.",
      planYearContent: "60 Videos per seat /year",
      buttonName: "Try 7 Day Free Trial",
      starterText: "Starter",
      bestForContent: {
        videoMgmt: "Video Management & Collabortaion",
        subVideoMgmtContent:
          "Full Suite of Video Management & Collaboration Tools  3waz",
        Analytics: "Analytics ",
        subAnalyticContent: "Full Suite of Analytics Tools ",
      },
      listOfFeatures: [
        "Integrate with industry-leading CRM and marketing platforms",
        "Host events for up to 100 people per event",
        "Send branded invites and reminder emails",
        "Engage your audience through chat, Q&A and polls",
        "Simulcast to multiple places, or stream two events at once",
      ],
    },
    {
      mostPopularContent: "Most Popular For Small Businesses",
      price: 25,
      customizeContent:
        "For individuals who need to customize, edit and manage videos.",
      planYearContent: "60 Videos per seat /year",
      buttonName: "Try 7 Day Free Trial",
      starterText: "Standard",
      bestForContent: {
        videoMgmt: "Video Management & Collabortaion",
        subVideoMgmtContent:
          "Full Suite of Video Management & Collaboration Tools  3waz",
        Analytics: "Analytics ",
        subAnalyticContent: "Full Suite of Analytics Tools ",
      },
      listOfFeatures: [
        "Integrate with industry-leading CRM and marketing platforms",
        "Host events for up to 100 people per event",
        "Send branded invites and reminder emails",
        "Engage your audience through chat, Q&A and polls",
        "Simulcast to multiple places, or stream two events at once",
      ],
    },
    {
      mostPopularContent: "Most Popular For Small to Large Businesses",
      price: 65,
      customizeContent:
        "For individuals who need to customize, edit and manage videos.",
      planYearContent: "60 Videos per seat /year",
      buttonName: "Try 7 Day Free Trial",
      starterText: "Advanced",
      bestForContent: {
        videoMgmt: "Video Management & Collabortaion",
        subVideoMgmtContent:
          "Full Suite of Video Management & Collaboration Tools  3waz",
        Analytics: "Analytics ",
        subAnalyticContent: "Full Suite of Analytics Tools ",
      },
      listOfFeatures: [
        "Integrate with industry-leading CRM and marketing platforms",
        "Host events for up to 100 people per event",
        "Send branded invites and reminder emails",
        "Engage your audience through chat, Q&A and polls",
        "Simulcast to multiple places, or stream two events at once",
      ],
    },
  ];
  */

  const handleDropdownItemClick = (event: any) => {
    event.preventDefault();

    setActiveDropdown(event.currentTarget.innerText);
    setIsDropdownOpen(!isDropdownOpen);
  };

  const triggerDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onToggleBtnClick = () => {
    setIsToggleBtnOpen((prevState) => !prevState);
    setActiveDropdown((prevState) =>
      prevState === "Starter"
        ? (prevState = "Advanced")
        : (prevState = "Starter")
    );
  };

  return (
    <div className={classes.wrapper}>
      <section className={classes.section}>
        <div className={classes.heading}>
          <h2>Browse Our Plans</h2>
        </div>
        <div className={classes.content}>
          <div className={classes.left}>
            <p>See how the plans can flex to specific solution types:</p>
            <div className={classes.allSols}>
              <div className={classes.dropdownMenu}>
                <button className={classes.dropdown} onClick={triggerDropdown}>
                  <div className={classes.solutions}>
                    <AllSolutionsText />
                  </div>
                  <div
                    style={
                      isDropdownOpen ? { transform: "rotate(180deg)" } : {}
                    }
                  >
                    <DropDownLogo />
                  </div>
                </button>
                <div>
                  {isDropdownOpen && (
                    <ul
                      className={classes.dropdownItems}
                      // style={activeDropdown && { display: "none" }}
                    >
                      <a
                        href="./inDepthPlans"
                        onClick={(event) => handleDropdownItemClick(event)}
                      >
                        <li
                          style={
                            activeDropdown === "Starter"
                              ? { backgroundColor: "lightblue" }
                              : {}
                          }
                        >
                          Starter
                        </li>
                      </a>
                      <a
                        href="./inDepthPlans"
                        onClick={(event) => handleDropdownItemClick(event)}
                      >
                        <li
                          style={
                            activeDropdown === "Standard"
                              ? { backgroundColor: "lightblue" }
                              : {}
                          }
                        >
                          Standard
                        </li>
                      </a>
                      <a
                        href="./inDepthPlans"
                        onClick={(event) => handleDropdownItemClick(event)}
                      >
                        <li
                          style={
                            activeDropdown === "Advanced"
                              ? { backgroundColor: "lightblue" }
                              : {}
                          }
                        >
                          Advanced
                        </li>
                      </a>
                    </ul>
                  )}
                </div>
              </div>
              <div>
                <div className={classes.right}>
                  <span>Monthly</span>
                  <button
                    className={classes.toggleBtn}
                    onClick={onToggleBtnClick}
                  >
                    <span className={classes.toggleBtn}>
                      {!isToggleBtnOpen ? <ToggleButton /> : <ToggleOn />}
                    </span>
                  </button>
                  <div className={classes.rightSubText}>
                    <p>Pay Yearly</p>
                  </div>
                </div>
                <p
                  style={{
                    fontStyle: "italic",
                    color: "#A5A5A5",
                    fontSize: "0.85rem",
                    textAlign: "right",
                    marginRight: "2rem",
                  }}
                >
                  Save 10%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={classes.cardsWrapper}>
        {activeDropdown === "Starter"
          ? InDepthCardsDataStarter.map((cardItem: {}) => (
              <InDepthCard {...cardItem} />
            ))
          : activeDropdown === "Standard"
          ? InDepthCardsDataForStandard.map((cardItem: {}) => (
              <InDepthCard {...cardItem} />
            ))
          : InDepthCardsDataForAdvanced.map((cardItem: {}) => (
              <InDepthCard {...cardItem} />
            ))}
      </div>
    </div>
  );
};

export default InDepthPlans;
