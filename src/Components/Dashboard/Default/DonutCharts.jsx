import React, { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import Chart from "react-apexcharts";
import { allDonutCharts } from "./AllDonutCharts";
import HeaderCard from "../../Common/Component/HeaderCard";

import { Doughnut } from "react-chartjs-2";
// import { Col, Card, CardBody } from "reactstrap";
import { DoughnutChart } from "../../../Constant";
import { doughnutData, doughnutOption } from "../../../Data/Chart/chartjs";
import configDB from "../../../Config/ThemeConfig";

const primary =
  localStorage.getItem("default_color") || configDB.data.color.primary_color;
const secondary =
  localStorage.getItem("secondary_color") ||
  configDB.data.color.secondary_color;



const DonutCharts = () => {
 const combinedDoughnutOptions = {
   doughnutData: {
     labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales","Mail-Order Sales","Mail-Order Sales"],
     datasets: [
       {
         data: [350, 450, 100,150,250],
         backgroundColor: [primary, secondary, "#51bb25"],
       },
     ],
   },
   doughnutOption: {
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
   },
 };
  return (
    <>
      {Object.keys(allDonutCharts).map((chartKey, i) => (
        //  {Object.keys(allDonutCharts).map((chartKey, i) => (
        <Fragment key={i}>
          <Col xl="6" md="12" key={i}>
            <Card>
              <HeaderCard title={allDonutCharts[chartKey].heading} />
              <CardBody
                className="chart-block"
                // style={{ maxHeight: '300px' }}
              >
                <Doughnut
                  data={allDonutCharts[chartKey].doughnutData}
                  options={allDonutCharts[chartKey].doughnutOption}
                  width={717}
                  height={358}
                />
              </CardBody>
            </Card>
          </Col>
          
        </Fragment>

        // ))}
      ))}
    </>
  );
};

export default DonutCharts;
