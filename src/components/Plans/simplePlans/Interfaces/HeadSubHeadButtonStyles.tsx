import React from "react";

export interface SimplePlanHeadingText {
  heading: string;
  subHeading: string;
  contentWidth: string;
  subHeadingStyle: React.CSSProperties;
  mainContentStyle: React.CSSProperties;
  buttons: boolean;
  contentStyle: React.CSSProperties;
}
