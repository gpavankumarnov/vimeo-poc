import React from "react";
import classes from "./index.module.css";
import EnterpriseLine from "../../../assets/images/SimplePlanSocialValidation/EnterpriseLine";
import BestForLine from "../../../assets/images/SimplePlanSocialValidation/BestForLine";
import Analytics from "../../../assets/images/InDepthPlans/AnalyticLogo";
import VideoMgmtLogo from "../../../assets/images/InDepthPlans/SettingLogo";
import TickImage from "../../../assets/images/InDepthPlans/TickImage";
import VideoBox from "../../../assets/images/SimplePlanSocialValidation/VideoBox";
import Profile from "../../../assets/images/SimplePlanSocialValidation/Profile";
import ForwardIcon from "../../../assets/images/SimplePlanSocialValidation/ForwardIcon";

const SinglePlanSocialValidation = () => {
  const listOfPlanHighlights = [
    "Integrate with industry-leading CRM and marketing platforms",
    "Host events for up to 100 people per event",
    "Send branded invites and reminder emails",
  ];

  const listOfPlanHighlightsRight = [
    "Engage your audience through chat, Q&A and polls",
    "Simulcast to multiple places, or stream two events at once",
  ];

  return (
    <div className={classes.viewPage}>
      <div className={classes.wrapper}>
        <div className={classes.box}>
          <div className={classes.head}>
            <p>Most Popular For Large Businesses</p>
          </div>
          <div className={classes.contentWrapper}>
            <div className={classes.sectionLeft}>
              <div className={classes.enterpriseContent}>
                <div className={classes.enterprise}>
                  <h2>Enterprise</h2>
                </div>
                <div className={classes.EnterpriseLineImage}>
                  <EnterpriseLine />
                  <div className={classes.content}>
                    <p>
                      For individuals who need to <br></br>customize, edit and
                      manage videos.
                    </p>
                    <p>60 Videos per seat /year</p>
                    <button className={classes.btn}>Contact Sales</button>
                  </div>
                </div>
              </div>

              <div className={classes.sectionRight}>
                <div className={classes.bestPlan}>
                  <h4>Best For</h4>
                  <BestForLine />
                </div>
                <div className={classes.bestForContent}>
                  <div className={classes.analytics}>
                    <div className={classes.analyticHead}>
                      <Analytics />
                      <div className={classes.analyticPara}>
                        <h4>Analytics</h4>
                        <p style={{ color: "#414141" }}>
                          Full Suite of Analytics Tools{" "}
                        </p>
                        <a style={{ color: "#414141" }} href="#">
                          See All Details
                        </a>
                      </div>
                    </div>

                    <div className={classes.videoMgmtHead}>
                      <VideoMgmtLogo />
                      <div className={classes.videoMgmtPara}>
                        <h4>Video Management & Collabortaion</h4>
                        <p style={{ color: "#414141", width: "70%" }}>
                          Full Suite of Video Management & Collaboration Tools{" "}
                        </p>
                        <a style={{ color: "#414141" }} href="#">
                          See All Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={classes.planHighlights}>
                  <div className={classes.planHighlightsHead}>
                    <h4 style={{ width: " 17%" }}>Plan Highlights</h4>
                    <BestForLine />
                  </div>
                  <div className={classes.planHighContent}>
                    <div className={classes.planContent}>
                      {listOfPlanHighlights.length > 0 &&
                        listOfPlanHighlights.map((item: string) => (
                          <div className={classes.featureContent}>
                            <div>
                              <TickImage />
                            </div>
                            <p
                              style={{
                                color: "#414141",
                                fontSize: "0.85rem",
                              }}
                            >
                              {item}
                            </p>
                          </div>
                        ))}
                    </div>

                    <div className={classes.planContentRight}>
                      {listOfPlanHighlightsRight.length > 0 &&
                        listOfPlanHighlightsRight.map((item: string) => (
                          <div className={classes.featureContent}>
                            <div>
                              <TickImage />
                            </div>
                            <p
                              style={{
                                color: "#414141",
                                fontSize: "0.85rem",
                              }}
                            >
                              {item}
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.videoBox}>
              <VideoBox />
            </div>
          </div>
        </div>
      </div>
      <footer className={classes.footer}>
        <div className={classes.footerLeft}>
          <h3>Tarform on the Starter Plan</h3>
          <button className={classes.LeftLogoBtn}>Company Logo</button>
        </div>

        <div className={classes.footerRight}>
          <h4 style={{ color: "#000000" }}>
            “If our video evokes an emotion, people will remember the brand, and
            want to be part of it,"
          </h4>

          <div className={classes.profile}>
            <div className={classes.profileText}>
              <div className={classes.profileImage}>
                <Profile />
              </div>
              <h5 style={{ color: "#101010", fontWeight: "400" }}>
                Taras Kravtchouk, Tarform founder
              </h5>
            </div>
          </div>
          <div className={classes.viewStory}>
            <p style={{ color: "#000000", fontWeight: "bold" }}>
              View Customer Story
            </p>

            <ForwardIcon />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SinglePlanSocialValidation;
