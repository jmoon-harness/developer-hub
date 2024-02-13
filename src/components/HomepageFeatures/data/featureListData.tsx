import React from "react";
import { CardItem, docType } from "../../LandingPage/TutorialCard";
import { MODULES } from "../../../constants";

export const featureList: CardItem[] = [
  {
    title: "Set up CI Pipelines",
    module: MODULES.ci,
    icon: "img/icon_ci.svg",
    description: "Automate builds, tests, and publishing of artifacts.",
    type: [docType.Documentation],
    //type: [docType.Documentation, docType.Interactive, docType.Video],
    link: "docs/continuous-delivery",
  },
  {
    title: "Set up CD Pipelines",
    module: MODULES.cd,
    icon: "img/icon_cd.svg",
    description:
      "Automate deployment of application services to your infrastructure.",
    type: [docType.Documentation],
    link: "tutorials/cd-pipelines",
  },
  {
    title: "Manage Feature Flags",
    module: MODULES.ff,
    icon: "img/icon_ff.svg",
    description: <>Roll out new features progressively.</>,
    type: [docType.Documentation],
    link: "docs/feature-flags",
  },
  {
    title: "Manage Cloud Costs",
    module: MODULES.ccm,
    icon: "img/icon_ccm.svg",
    description: <>Achieve cost transparency and cut costs.</>,
    type: [docType.Documentation],
    link: "tutorials/cloud-costs",
  },
  {
    title: "Manage Service Reliability",
    module: MODULES.srm,
    icon: "img/icon_srm.svg",
    description: <>Monitor SLOs, track error budgets, and analyze impact of changes.</>,
    type: [docType.Documentation],
    link: "tutorials/service-reliability",
  },
  {
    title: "Orchestrate Security Tests",
    module: MODULES.sto,
    icon: "img/icon_sto.svg",
    description: <>Scan code, containers, and live applications.</>,
    type: [docType.Documentation],
    link: "tutorials/security-tests",
  },
  {
    title: "Run Chaos Experiments",
    module: MODULES.ce,
    icon: "img/icon_ce.svg",
    description: <>Ensure application and infrastructure resilience.</>,
    type: [docType.Documentation],
    link: "tutorials/chaos-experiments",
  },
  {
    title: "Secure Supply Chain",
    module: MODULES.ssca,
    icon: "img/icon_ssca.svg",
    description: (
      <>Set up your pipelines to secure your software supply chain.</>
    ),
    type: [docType.Documentation],
    link: "tutorials/secure-supply-chain",
  },
  {
    title: "Track Errors in Code",
    module: MODULES.cet,
    icon: "img/icon_cet.svg",
    description: (
      <>Find & fix issues in minutes with deep visibility into code.</>
    ),
    type: [docType.Documentation, docType.Interactive, docType.Video],
    link: "tutorials/error-tracking",
  },
  {
    title: "Improve Developer Productivity",
    module: MODULES.idp,
    icon: "img/icon_idp.svg",
    description: (
      <>
        Streamline software development and knowledge sharing with a
        developer-focused portal.
      </>
    ),
    type: [docType.Documentation],
    link: "tutorials/internal-developer-portal",
  },
  {
    title: "Measure Developer Efficiency",
    module: MODULES.sei,
    icon: "img/icon_sei.svg",
    description: (
      <>
        Make data-driven decisions that improve engineering productivity, efficiency, 
        alignment, planning, and execution.
      </>
    ),
    type: [docType.Documentation],
    link: "tutorials/software-engineering-insights",
  },
  {
    title: "Administer Harness Platform",
    module: MODULES.platform,
    icon: "img/logo.svg",
    description: (
      <>
        Install a Kubernetes or Docker delegate, Onboard with Terraform
        Provider, and more.
      </>
    ),
    type: [docType.Documentation],
    link: "tutorials/platform",
  },
];
