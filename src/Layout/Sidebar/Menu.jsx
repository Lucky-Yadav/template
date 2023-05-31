export const MENUITEMS = [
  {
    menutitle: "General",
    menucontent: "Dashboards,Widgets",
    Items: [
      {
        title: "Dashboard",
        icon: "home",
        type: "sub",
        badge: "badge badge-light-primary",
        badgetxt: "5",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/dashboard/default`,
            title: "Default",
            type: "link",
          },
        ],
      },

      {
        title: "Widgets",
        icon: "widget",
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

  {
    menutitle: "Applications",
    menucontent: "Ready to use Apps",
    Items: [
      {
        title: "Project",
        icon: "project",
        type: "sub",
        badge: "badge badge-light-secondary",
        badgetxt: "New",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/app/project/project-list`,
            type: "link",
            title: "Project-List",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/project/new-project`,
            type: "link",
            title: "Create New",
          },
        ],
      },
      {
        title: "Account",
        icon: "user",
        path: `${process.env.PUBLIC_URL}/app/users/profile`,
        type: "sub",
        bookmark: true,
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/app/users/profile`,
            type: "link",
            title: "Profile",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/users/edit`,
            type: "link",
            title: "Company Details",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/users/cards`,
            type: "link",
            title: "Linked Accounts",
          },
        ],
      },
    ],
  },

  {
    menutitle: "Components",
    menucontent: "UI Components & Elements",
    Items: [
      {
        title: "Charts",
        icon: "charts",
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/charts/apex`,
            type: "link",
            title: "Apex",
          },
          {
            path: `${process.env.PUBLIC_URL}/charts/google`,
            type: "link",
            title: "Google",
          },
          {
            path: `${process.env.PUBLIC_URL}/charts/chartjs`,
            type: "link",
            title: "Chartjs",
          },
        ],
      },
    ],
  },
  {
    menutitle: "Integrations",
    menucontent: "UI Components & Elements",
    Items: [
      {
        title: "Featured",
        icon: "charts",
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/charts/apex`,
            type: "link",
            title: "All Collections",
          },
          {
            path: `${process.env.PUBLIC_URL}/charts/google`,
            type: "link",
            title: "Most Popular",
          },
          {
            path: `${process.env.PUBLIC_URL}/charts/chartjs`,
            type: "link",
            title: "New",
          },
          {
            path: `${process.env.PUBLIC_URL}/charts/chartjs`,
            type: "link",
            title: "My Integrations",
          },
        ],
      },
      {
        title: "Categories",
        icon: "charts",
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/charts/apex`,
            type: "link",
            title: "Analytics",
          },
          {
            path: `${process.env.PUBLIC_URL}/charts/google`,
            type: "link",
            title: "Tracking",
          },
          {
            path: `${process.env.PUBLIC_URL}/charts/chartjs`,
            type: "link",
            title: "SEO",
          },
          {
            path: `${process.env.PUBLIC_URL}/charts/chartjs`,
            type: "link",
            title: "Social",
          },
        ],
      },
    ],
  },
];
