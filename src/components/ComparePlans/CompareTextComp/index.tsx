import React from "react";
import ComparePageText from "../../UI/CompareText/index";
import DropdownArrowDown from "@/assets/images/ComparePlans/DropdownArrowDown";

const CompareTextComp = () => {
  const CompareTextPropsData = {
    // const { WrapperStyles, headerStyles } = props;
    WrapperStyles: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    headerStyles: { width: "45%", height: "40%" },
    subHeadingStyles: { width: "47%", textAlign: "justify" },
    DropdownIcon: <DropdownArrowDown />,
  };

  return <ComparePageText {...CompareTextPropsData} />;
};

export default CompareTextComp;
