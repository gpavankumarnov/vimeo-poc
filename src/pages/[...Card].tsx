import React from "react";
import {
  BuilderComponent,
  builder,
  useIsPreviewing,
  Builder,
} from "@builder.io/react";
import PlanCard from "../components/UI/Card";
import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import InDepthCard from "../components/UI/InDepthCard";

const YOUR_API_KEY = "f9ad4b8a7c2e452080570ad82a8db971";
// Initialize the Builder SDK with your organization's API Key
// Find the API Key on: https://builder.io/account/settings
builder.init(YOUR_API_KEY);

export async function getStaticProps({ params }) {
  // Fetch the first page from Builder that matches the current URL.
  // Use the `userAttributes` field for targeting content.
  // For more, see https://www.builder.io/c/docs/targeting-with-builder
  const page = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + (params?.page?.join("/") || ""),
      },
    })
    .toPromise();

  return {
    props: {
      page: page || null,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  //  Fetch all published pages for the current model.
  //  Using the `fields` option will limit the size of the response
  //  and only return the `data.url` field from the matching pages.
  const pages = await builder.getAll("page", {
    fields: "data.url", // only request the `data.url` field
    options: { noTargeting: true },
    limit: 0,
  });

  return {
    paths: pages.map((page) => `${page.data?.url}`),
    fallback: true,
  };
}

export default function Page({ page }) {
  const router = useRouter();
  console.log("router is", router);
  //  This flag indicates if you are viewing the page in the Builder editor.
  const isPreviewing = useIsPreviewing();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  //  Add your error page here to return if there are no matching
  //  content entries published in Builder.
  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        {/* Add any relevant SEO metadata or open graph tags here */}
        <title>{page?.data.title}</title>
        <meta name="description" content={page?.data.descripton} />
      </Head>
      <div style={{ padding: 50, textAlign: "center" }}>
        {/* Put your header or main layout here */}
        Your header
      </div>

      {/* Render the Builder page */}
      <BuilderComponent model="page" content={page} />

      <div style={{ padding: 50, textAlign: "center" }}>
        {/* Put your footer or main layout here */}
        Your footer
      </div>
    </>
  );
}

// //  This is an example of registering a custom component to be used in Builder.io.
// //  You would typically do this in the file where the component is defined.

//PlanCard custom component

Builder.registerComponent(PlanCard, {
  name: "PlanCard",
  inputs: [
    { name: "price", type: "number", defaultValue: 20 },
    { name: "planLevel", type: "string", defaultValue: "Standard" },
    { name: "planContent", type: "string", defaultValue: "Best for Creatives" },
    {
      name: "planYearContent",
      type: "string",
      defaultValue: "120 videos per seat / year",
    },
    { name: "buttonName", type: "string", defaultValue: "Get Pro" },
    {
      name: "lists",
      type: "list",
      defaultValue: [
        "Mp4 Creation",
        "Player Customization",
        "Privacy Controls",
        "Unlimited screen and webcam recording",
      ],
      subFields: [
        { name: "text", type: "string", defaultValue: "Mp4 Creation" },
      ],
    },
  ],
});

//InDepthCards Custom Component

Builder.registerComponent(InDepthCard, {
  name: "InDepthCard",
  inputs: [
    { name: "price", type: "number", defaultValue: 20 },
    {
      name: "mostPopularContent",
      type: "string",
      defaultValue: "Most Popular For Creative Professionals",
    },
    {
      name: "customizeContent",
      type: "string",
      defaultValue:
        "Additional security, control and support and control and support.",
    },
    {
      name: "planYearContent",
      type: "string",
      defaultValue: "120 videos per seat / year",
    },
    {
      name: "buttonName",
      type: "string",
      defaultValue: "Try 28 Day Free Trial",
    },
    { name: "starterText", type: "string", defaultValue: "starter" },
    {
      name: "bestForContent",
      type: "object",
      defaultValue: {
        videoMgmt: "Video Management & Collabortaion",
        subVideoMgmtContent:
          "Full Suite of Video Management & Collaboration Tools  3waz",
        Analytics: "Analytics ",
        subAnalyticContent: "Full Suite of Analytics Tools ",
      },
      subFields: [
        {
          name: "videoMgmt",
          type: "string",
          defaultValue: "Video Management & Collabortaion",
        },
        {
          name: "subVideoMgmtContent",
          type: "string",
          defaultValue:
            "Full Suite of Video Management & Collaboration Tools  3waz",
        },
        { name: "Analytics", type: "string", defaultValue: "Analytics" },
        {
          name: "subAnalyticContent",
          type: "string",
          defaultValue: "Full Suite of Analytics Tools ",
        },
      ],
    },
    {
      name: "listOfFeatures",
      type: "list",
      defaultValue: [
        "Integrate with industry-leading CRM and marketing platforms",
        "Host events for up to 100 people per event",
        "Send branded invites and reminder emails",
        "Engage your audience through chat, Q&A and polls",
        "Simulcast to multiple places, or stream two events at once",
      ],

      subFields: [
        {
          name: "value",
          type: "string",
          defaultValue:
            "Integrate with industry-leading CRM and marketing platforms",
        },
        // {
        //   name: "text",
        //   type: "string",
        //   defaultValue: "Host events for up to 100 people per event",
        // },
        // {
        //   name: "text",
        //   type: "string",
        //   defaultValue: "Send branded invites and reminder emails",
        // },
        // {
        //   name: "text",
        //   type: "string",
        //   defaultValue: "Engage your audience through chat, Q&A and polls",
        // },
        // {
        //   name: "text",
        //   type: "string",
        //   defaultValue:
        //     "Simulcast to multiple places, or stream two events at once",
        // },
      ],
    },
  ],
});
