import configDB from "../../../Config/ThemeConfig";

const primary =
  localStorage.getItem("default_color") || configDB.data.color.primary_color;
const secondary =
  localStorage.getItem("secondary_color") ||
  configDB.data.color.secondary_color;

// Common options to be applied to all charts
const commonOptions = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  plugins: {
    datalabels: {
      display: false,
      color: "white",
    },
  },
};
 
export const allDonutCharts = {
  LocationCharts: {
    heading: "Location Breakdown",
    doughnutData: {
      labels: [
        "Telangana",
        "Maharastra",
        "Karnatka",
        "Utter Pradesh",
        "Andhra Pradesh",
        "Tamil Nadu",
        "Delhi",
      ],
      datasets: [
        {
          data: [44, 55, 41, 17, 15, 11, 21],
          backgroundColor: [
            primary,
            secondary,
            "#51bb25",
            "#544fff",
            "#fb740d",
          ],
        },
      ],
    },
    doughnutOption: {
      ...commonOptions,
    },
  },
  DeviceChart: {
    heading: "Device Breakdown",
    doughnutData: {
      labels: ["tablets", "compters", "mobile devices"],
      datasets: [
        {
          data: [270, 27, 3],
          backgroundColor: [primary, secondary, "#51bb25"],
        },
      ],
    },
    doughnutOption: {
      ...commonOptions,
    },
  },
  GenderChart: {
    heading: "Gender Breakdown",
    doughnutData: {
      labels: ["Female", "Undetermined", "Male"],
      datasets: [
        {
          data: [44, 55, 401],
          backgroundColor: [primary, secondary, "#51bb25"],
        },
      ],
    },
    doughnutOption: {
      ...commonOptions,
    },
  },
  HourChart: {
    heading: "Hour of the Day Breakdown",
    doughnutData: {
      labels: ["04", "03", "02", "05", "01", "06", "23", "07"],
      datasets: [
        {
          data: [44, 55, 41, 17, 15, 11, 32, 501],
          backgroundColor: [primary, secondary, "#51bb25"],
        },
      ],
    },
    doughnutOption: {
      ...commonOptions,
    },
  },
};
