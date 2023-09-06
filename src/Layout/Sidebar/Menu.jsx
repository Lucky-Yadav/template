export const MENUITEMS = [
  {
    menucontent: "Dashboards,Widgets",
    Items: [
      {
        title: "Dashboards",
        icon: "home",
        type: "sub",
        badge: "badge badge-light-primary",
        badgetxt: "5",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/dashboard/default`,
            title: "Google Ads",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/dashboard/default`,
            title: "Twitter (Coming Soon)",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/dashboard/default`,
            title: "Facebook Ads (Coming Soon)",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/dashboard/default`,
            title: "Instagram Ads (Coming Soon)",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/dashboard/default`,
            title: "LinkedIn Ads (Coming Soon)",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/dashboard/e-commerce`,
            title: "E-commerce",
            type: "link",
          },
        ],
      },

      {
        title: "Integrations",
        icon: "widget",
        type: "link",
        active: false,
        path: `${process.env.PUBLIC_URL}/integrations`,
        // children: [
        //   {
        //     path: `${process.env.PUBLIC_URL}/widgets/general`,
        //     title: "General",
        //     type: "link",
        //   },
        //   {
        //     path: `${process.env.PUBLIC_URL}/widgets/chart`,
        //     title: "Chart",
        //     type: "link",
        //   },
        // ],
      },
      {
        title: "Billing",
        icon: "profit",
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/widgets/general`,
            title: "General",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/widgets/chart`,
            title: "Chart",
            type: "link",
          },
        ],
      },
      {
        title: "Goals",
        icon: "project",
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/widgets/general`,
            title: "General",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/widgets/chart`,
            title: "Chart",
            type: "link",
          },
        ],
      },
      {
        title: "Users",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/widgets/general`,
            title: "General",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/widgets/chart`,
            title: "Chart",
            type: "link",
          },
        ],
      },
      {
        title: "Settings",
        icon: "gear",
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/widgets/general`,
            title: "General",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/widgets/chart`,
            title: "Chart",
            type: "link",
          },
        ],
      },
      {
        title: "Knowledge Base",
        icon: "job-search",
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/widgets/general`,
            title: "General",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/widgets/chart`,
            title: "Chart",
            type: "link",
          },
        ],
      },
      {
        title: "Need Help?",
        icon: "chat",
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/widgets/general`,
            title: "General",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/widgets/chart`,
            title: "Chart",
            type: "link",
          },
        ],
      },
    ],
  },
];
