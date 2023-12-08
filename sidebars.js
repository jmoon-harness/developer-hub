// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  allcontent: [
    // Tutorial Link from Docs
    {
      type: "link",
      label: "Tutorials",
      href: "/tutorials",
    },
    // Documentation Parent
    {
      type: "category",
      label: "Documentation",
      link: {
        // type: "generated-index",
        type: "doc",
        id: "index",
      },
      collapsed: true,
      items: [
        {
          // Custom Get started with Harness landing page
          /* Uncomment this block while we have a generated-index page for module docs
          type: "category",
          label: "Get started with Harness",
          link: {
            type: "generated-index",
            slug: "/get-started",
          },
          */
          type: "category",
          label: "Get Started",
          link: {
            type: "doc",
            id: "get-started",
          },
          customProps: {
            description: "Learn Harness fundamentals and key concepts.",
          },
          collapsed: true,
          items: [{ type: "autogenerated", dirName: "get-started" }],
        },
        // Custom Continuous Integration landing page
        {
          /* Uncomment this block while we have a generated-index page for module docs
          type: "category",
          label: "Continuous Integration",
          link: {
            type: "generated-index",
            slug: "/continuous-integration",
          },
          */
          type: "category",
          label: "Continuous Integration",
          link: {
            type: "doc",
            id: "continuous-integration",
          },
          customProps: {
            description:
              "Learn how you can build faster and be more productive.",
          },
          collapsed: true,
          items: [{ type: "autogenerated", dirName: "continuous-integration" }],
        },
        // Custom Continuous Delivery Landing Page
        {
          /* Uncomment this block while we have a generated-index page for module docs
          type: "category",
          label: "Continuous Delivery & GitOps",
          link: {
            type: "generated-index",
            slug: "/continuous-delivery",
          },
          */
          type: "category",
          label: "Continuous Delivery & GitOps",
          link: {
            type: "doc",
            id: "continuous-delivery",
          },
          customProps: {
            description:
              "Learn how to make your software releases more efficient and reliable.",
          },
          collapsed: true,
          items: [{ type: "autogenerated", dirName: "continuous-delivery" }],
        },
        // Custom Feature Flags Landing Page
        {
          /* Uncomment this block while we have a generated-index page for module docs
          type: "category",
          label: "Feature Flags",
          link: {
            type: "generated-index",
            slug: "/feature-flags",
          },
          */
          type: "category",
          label: "Feature Flags",
          link: {
            type: "doc",
            id: "feature-flags",
          },
          customProps: {
            description:
              "Learn how to change your software's functionality without deploying new code.",
          },
          collapsed: true,
          items: [{ type: "autogenerated", dirName: "feature-flags" }],
        },
        // Custom Cloud Cost ManagementLanding Page
        {
          /* Uncomment this block while we have a generated-index page for module docs
          type: "category",
          label: "Cloud Cost Management",
          link: {
            type: "generated-index",
            slug: "/cloud-cost-management",
          },
          */
          type: "category",
          label: "Cloud Cost Management",
          link: {
            type: "doc",
            id: "cloud-cost-management",
          },
          customProps: {
            description: "Learn how to manage and optimize cloud costs.",
          },
          collapsed: true,
          items: [{ type: "autogenerated", dirName: "cloud-cost-management" }],
        },
        //Custom Service Reliability Management Page
        {
          /* Uncomment this block while we have a generated-index page for module docs
          type: "category",
          label: "Service Reliability Management",
          link: {
            type: "generated-index",
            slug: "/service-reliability-management",
          },
          */
          type: "category",
          label: "Service Reliability Management",
          link: {
            type: "doc",
            id: "service-reliability-management",
          },
          customProps: {
            description:
              "Learn how to use real-time insights to improve the reliability of applications and services.",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "service-reliability-management",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Security Testing Orchestration",
          id: "security-testing-orchestration",
          */
          type: "category",
          label: "Security Testing Orchestration",
          link: {
            type: "doc",
            id: "security-testing-orchestration",
            // type: "doc",
            // id: "security-testing-orchestration",
          },
          customProps: {
            description: "Learn how to left shift your security testing.",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "security-testing-orchestration",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Infrastructure as Code Management docs",
          id: "infrastructure-as-code-management",
          */
          type: "category",
          label: "Infrastructure as Code Management",
          link: {
            type: "doc",
            id: "infrastructure-as-code-management",
          },
          customProps: {
            description:
              "Get started with Harness Infrastructure as Code Management",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "infra-as-code-management",
            },
          ],
        },
        {
          type: "category",
          label: "Chaos Engineering",
          link: {
            type: "doc",
            id: "chaos-engineering",
          },
          customProps: {
            description: "Learn how to build and validate resilience.",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "chaos-engineering",
            },
          ],
        },
        // SEI
        {
          type: "link",
          label: "Software Engineering Insights",
          href: "https://docs.propelo.ai/welcome-to-propelo/",
          customProps: {
            description: "Learn how to increase engineering team productivity and efficiency.",
          },
        },
        // SSCA
        {
          type: "category",
          label: "Software Supply Chain Assurance",
          link: {
            type: "doc",
            id: "software-supply-chain-assurance",
          },
          customProps: {
            description:
              "Learn how to secure your software supply chain.",
          },
          collapsed: true,
          items: [{ type: "autogenerated", dirName: "software-supply-chain-assurance" }],
        },
        // Custom Continuous Error Tracking landing page
        {
          /* Uncomment this block while we have a generated-index page for module docs
          type: "category",
          label: "Continuous Error Tracking",
          link: {
            type: "generated-index",
            slug: "/continuous-error-tracking",
          },
          */
          type: "category",
          label: "Continuous Error Tracking",
          link: {
            type: "doc",
            id: "continuous-error-tracking",
          },
          customProps: {
            description:
              "Learn how you can identify, triage, and resolve errors in applications.",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "continuous-error-tracking",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Internal Developer Portal docs",
          id: "internal-developer-portal",
          */
          type: "category",
          label: "Internal Developer Portal",
          link: {
            type: "doc",
            id: "internal-developer-portal",
          },
          customProps: {
            description:
              "Get started with Harness Internal Developer Portal (Beta)",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "internal-developer-portal",
            },
          ],
        },


        // Custom Code Repository Landing Page
        {
          /* Uncomment this block while we have a generated-index page for module docs
          type: "category",
          label: "Code Repository",
          link: {
            type: "generated-index",
            slug: "/code-repository",
          },
          */
          type: "category",
          label: "Code Repository",
          link: {
            type: "doc",
            id: "code-repository",
          },
          customProps: {
            description: "Manage code in Harness, and accelerate development with security at scale. (Beta)",
          },
          collapsed: true,
          items: [{ type: "autogenerated", dirName: "code-repository" }],
        },
        // Custom Platform Landing Page
        {
          /* Uncomment this block while we have a generated-index page for module docs
          type: "category",
          label: "Platform",
          link: {
            type: "generated-index",
            slug: "/platform",
          },
          */
          type: "category",
          label: "Platform",
          link: {
            type: "doc",
            id: "platform",
          },
          customProps: {
            description:
              "Learn how to manage Harness features that integrate with all modules.",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "platform",
            },
          ],
        },
        // Custom SMP landing page
        {
          /*
          type: "doc",
          label: "Self-Managed Enterprise Edition",
          link: {
            type: "generated-index",
            slug: "/self-managed-enterprise-edition",
          },
          id: "self-managed-enterprise-edition",
          */
          type: "category",
          label: "Self-Managed Enterprise Edition",
          link: {
            type: "doc",
            id: "self-managed-enterprise-edition",
          },
          customProps: {
            description:
              "Learn how to use this end-to-end solution for continuous, self-managed delivery.",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "self-managed-enterprise-edition",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "FirstGen docs",
          id: "first-gen",
          */
          type: "category",
          label: "Harness FirstGen",
          link: {
            type: "generated-index",
            slug: "/first-gen",
            /* Uncomment this block while we have a landing page for module docs
            type: "doc",
            id: "first-gen",
          },
          */
          },
          customProps: {
            description: "Learn how to use Harness FirstGen modules.",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "first-gen",
            },
          ],
        },
        // Release Notes
        {
          type: "link",
          label: "Release Notes",
          href: "/release-notes",
          customProps: {
            description: "Learn about recent changes to Harness products.",
          },
        },
        {
          /*
          type: "doc",
          label: "FAQs",
          id: "faqs",
          */
          type: "category",
          label: "FAQs",
          link: {
            type: "generated-index",
            slug: "/faqs",
            /* Uncomment this block while we have a landing page for module docs
            type: "doc",
            id: "faqs",
          },
          */
          },
          customProps: {
            description: "Find answers to frequently asked questions.",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "faqs",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Troubleshooting",
          id: "troubleshooting",
          */
          type: "category",
          label: "Troubleshooting",
          link: {
            type: "generated-index",
            slug: "/troubleshooting",
            /* Uncomment this block while we have a landing page for module docs
            type: "doc",
            id: "troubleshooting",
          },
            */
          },
          customProps: {
            description:
              "Find details about common error messages, what causes them, and solutions.",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "troubleshooting",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Harness Cloud Operations docs",
          id: "harness-cloud-operations",
          */
          type: "category",
          label: "Harness Cloud Operations",
          link: {
            type: "generated-index",
            slug: "/harness-cloud-operations",
            /* Uncomment this block while we have a landing page for module docs
            type: "doc",
            id: "first-gen",
          },
          */
          },
          customProps: {
            description: "Information on how the Harness SaaS is managed",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "harness-cloud-operations",
            },
          ],
        },
      ],
    },
    // Cert Link from Docs
    {
      type: "link",
      label: "Certifications",
      href: "/certifications",
    },
    // KB Link from Docs
    {
      type: "link",
      label: "Knowledge Base",
      href: "/kb",
    },
    // Community Link from Docs
    {
      type: "link",
      label: "Community",
      href: "/community",
    },
  ],

};

module.exports = sidebars;
