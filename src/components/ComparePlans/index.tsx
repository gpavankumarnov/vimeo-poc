import React, { useState } from "react";
import classes from "./index.module.css";
import CompareText from "../UI/CompareText";

import GreenLine from "../../assets/images/ComparePlans/LineGreenLine";
import OrangeLine from "../../assets/images/ComparePlans/LineOrangeLine";
import BlueLine from "../../assets/images/ComparePlans/LineblueLine";
import VioletLine from "../../assets/images/ComparePlans/LinevioletLine";
import BlackLine from "../../assets/images/ComparePlans/Lineblack";
import ComparePlanCard from "../UI/comparePlanCard";
import TableCard from "../UI/TableCard";
import TableInSuffIcon from "../../assets/images/ComparePlans/TableinsuffIcon";
import TableinsuffIcon from "../../assets/images/ComparePlans/TableinsuffIcon";
import CheckTickIcon from "../../assets/images/ComparePlans/ChecktickroundImage";
import {
  TableCardPropsDataForFirst,
  TableCardPropsDataForSecondBtn,
  TableCardPropsDataForFifthBtn,
  TableCardPropsDataForFourthBtn,
  TableCardPropsDataForThirdBtn,
} from "./TableCardPropsData";

const ComparePlans = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [comparePlanStateValues, setComparePlanStateValues] = useState({
    FeaturesDefaultButtonStyle: "InActive",
    activeBtn: "Core Features",
  });

  const onDropdownTrigger = () => {
    console.log("triggered parent func");
    setIsDropdownOpen(!isDropdownOpen);
  };

  const CompareTextPropsData = {
    // const { WrapperStyles, headerStyles } = props;
    WrapperStyles: {
      justifyContent: "center",
      alignItems: "center",
    },
    headerStyles: { width: "45%", height: "40%" },
    subHeadingStyles: { width: "50%", textAlign: "justify" },
    isDropdownOpen: isDropdownOpen,
    dropdownTriggerFunc: onDropdownTrigger,
  };

  const comparePlanCardDetails = [
    {
      cardLine: <GreenLine />,
      planLevel: "Free",
      price: 0,
      perDescription: "per user",
      description: "Create and share your first video.",
      buttonName: "Sign Up",
    },
    {
      cardLine: <OrangeLine />,
      planLevel: "Starter",
      price: 9,
      perDescription: "per seat/month billed annually",
      description:
        "For individuals who need to customize videos and track engagement.",
      buttonName: "Get Starter",
    },
    {
      cardLine: <BlueLine />,
      planLevel: "Standard",
      price: 25,
      perDescription: "per seat/month billed annually",
      description:
        "For individuals and teams who need to brand videos and collaborate with review tools.",
      buttonName: "Get Standard",
    },
    {
      cardLine: <VioletLine />,
      planLevel: "Advanced",
      price: 65,
      perDescription: "per seat/month billed annually",
      description:
        "For individuals and teams who need to brand videos and collaborate with review tools.",
      buttonName: "Get Advanced",
    },
    {
      cardLine: <BlackLine />,
      planLevel: "Enterprise",
      price: 65,
      perDescription: "talk to our team for pricing",
      description:
        "Security, control, scalability and support — all tailored to your business..",
      buttonName: "Contact Sales",
    },
  ];

  const featuresBtnsList = [
    { btnName: "Core Features", width: "15rem", class: "active" },
    { btnName: "Video Player", width: "15rem" },
    { btnName: "Video Maker & Editor Tools" },
    { btnName: "Virtual Events and Webinars" },
    { btnName: "Virtual Events and Webinars" },
  ];

  // const TableCardPropsData = [
  //   {
  //     rowStartHeadValue: "Seats",
  //     icon: <TableinsuffIcon />,
  //     content1: "1 Seat",
  //     content2: "1 Seat",
  //     content3: "1 Seat",
  //     content4: "1 Seat",
  //     content5: "Custom",
  //   },
  //   {
  //     rowStartHeadValue: "Video creation and uploading",
  //     icon: <TableinsuffIcon />,
  //     content1: "2 videos / month",
  //     content2: "60 videos / seat / year",
  //     content3: "120 videos / seat / year",
  //     content4: "240 videos / seat / year",
  //     content5: "Unlimited",
  //   },
  //   {
  //     rowStartHeadValue: "Videos stored in account",
  //     icon: <TableinsuffIcon />,
  //     content1: "25 videos",
  //     content2: "Unlimited",
  //     content3: "Unlimited",
  //     content4: "Unlimited",
  //     content5: "Unlimited",
  //   },
  //   {
  //     rowStartHeadValue: "Virtual Events",
  //     icon: <TableinsuffIcon />,
  //     content1: " - ",
  //     content2: " - ",
  //     content3: " - ",
  //     content4: "Unlimited",
  //     content5: "Unlimited",
  //   },
  //   {
  //     rowStartHeadValue: "Screen recording",
  //     icon: <TableinsuffIcon />,
  //     content1: "25 videos",
  //     content2: "Unlimited",
  //     content3: "Unlimited",
  //     content4: "Unlimited",
  //     content5: "Unlimited",
  //   },
  //   {
  //     rowStartHeadValue: "Bandwidth",
  //     icon: <TableinsuffIcon />,
  //     content1: "2TB bandwidth/month",
  //     content2: "2TB bandwidth/month",
  //     content3: "2TB bandwidth/month",
  //     content4: "2TB bandwidth/month",
  //     content5: "Custom",
  //   },
  //   {
  //     rowStartHeadValue: "Interactive video",
  //     icon: <TableinsuffIcon />,
  //     content1: " - ",
  //     content2: "-",
  //     content3: "-",
  //     content4: "-",
  //     content5: <CheckTickIcon />,
  //   },
  //   {
  //     rowStartHeadValue: "Webinar API",
  //     icon: <TableinsuffIcon />,
  //     content1: " - ",
  //     content2: "-",
  //     content3: "-",
  //     content4: "-",
  //     content5: <CheckTickIcon />,
  //   },
  //   {
  //     rowStartHeadValue: "Version history",
  //     icon: <TableinsuffIcon />,
  //     content1: " - ",
  //     content2: "-",
  //     content3: <CheckTickIcon />,
  //     content4: <CheckTickIcon />,
  //     content5: <CheckTickIcon />,
  //   },
  //   {
  //     rowStartHeadValue: "Video library",
  //     icon: <TableinsuffIcon />,
  //     content1: " - ",
  //     content2: "-",
  //     content3: <CheckTickIcon />,
  //     content4: <CheckTickIcon />,
  //     content5: <CheckTickIcon />,
  //   },
  //   {
  //     rowStartHeadValue: "Training",
  //     icon: <TableinsuffIcon />,
  //     content1: " - ",
  //     content2: "-",
  //     content3: "-",
  //     content4: "-",
  //     content5: <CheckTickIcon />,
  //   },
  // ];

  const onButtonClick = (btnName: any) => {
    setComparePlanStateValues((prevState) => ({
      ...prevState,
      FeaturesDefaultButtonStyle: "active",
      activeBtn: btnName.target.innerText,
    }));
  };

  return (
    <div className={classes.wrapper}>
      <CompareText {...CompareTextPropsData} />
      {isDropdownOpen && (
        <>
          <div className={classes.eachPlanCard}>
            {comparePlanCardDetails.length > 0 &&
              comparePlanCardDetails.map((item) => (
                <ComparePlanCard {...item} />
              ))}
          </div>

          <div className={classes.featuresBtns}>
            <h3>Features</h3>
            <div className={classes.btnContainer}>
              {featuresBtnsList.length > 0 &&
                featuresBtnsList.map((btn, index) => (
                  <button
                    key={index}
                    className={classes.btnLists}
                    onClick={(btn) => onButtonClick(btn)}
                    style={
                      btn.btnName === "Core Features" &&
                      comparePlanStateValues.activeBtn === "Core Features"
                        ? { backgroundColor: "#000000", color: "#ffffff" }
                        : {}
                    }
                  >
                    {btn.btnName}
                  </button>
                ))}
            </div>
          </div>

          <div className={classes.tableCards}>
            {comparePlanStateValues.activeBtn === "Core Features"
              ? TableCardPropsDataForFirst &&
                TableCardPropsDataForFirst.length > 0 &&
                TableCardPropsDataForFirst.map((tableCardData, index) => (
                  <TableCard key={index} {...tableCardData} />
                ))
              : comparePlanStateValues.activeBtn === "Video Player"
              ? TableCardPropsDataForSecondBtn &&
                TableCardPropsDataForSecondBtn.length > 0 &&
                TableCardPropsDataForSecondBtn.map((tableCardData, index) => (
                  <TableCard key={index} {...tableCardData} />
                ))
              : comparePlanStateValues.activeBtn ===
                "Video Maker & Editor Tools"
              ? TableCardPropsDataForThirdBtn &&
                TableCardPropsDataForThirdBtn.length > 0 &&
                TableCardPropsDataForThirdBtn.map((tableCardData, index) => (
                  <TableCard key={index} {...tableCardData} />
                ))
              : comparePlanStateValues.activeBtn ===
                "Virtual Events and Webinars"
              ? TableCardPropsDataForFourthBtn &&
                TableCardPropsDataForFourthBtn.map(
                  (tableCardData, index) =>
                    TableCardPropsDataForFourthBtn.length > 0 && (
                      <TableCard key={index} {...tableCardData} />
                    )
                )
              : TableCardPropsDataForFifthBtn &&
                TableCardPropsDataForFifthBtn.length > 0 &&
                TableCardPropsDataForFifthBtn.map((tableCardData, index) => (
                  <TableCard key={index} {...tableCardData} />
                ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ComparePlans;
