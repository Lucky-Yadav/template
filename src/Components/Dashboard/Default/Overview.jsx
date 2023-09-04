import React from 'react'
import Ads from "./Ads";
import AdGroup from "./Ad Group";
import Keywords from "./Keywords";
import CurrencyWidget from "../../Common/CommonWidgets/CurrencyWidget";
import OrderOverview from "./OrderOverview";
import ActivityHours from "./ActivityHours";
import { Col, Container, Row } from "reactstrap";

const Overview = () => {
    const CurrenciesWidgets = [
     {
       title: "Impressions",
       average: "70k",
       color: "warning",
       price: "21,43",
       gros: 50,
       chart: {
         color: ["#FFA941"],
         label: [
           "jan",
           "feb",
           "mar",
           "apr",
           "may",
           "jun",
           "jul",
           "aug",
           "sep",
           "oct",
           "nov",
         ],
         series: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
       },
     },
     {
       title: "Clicks",
       color: "primary",
       price: "7,450",
       gros: 35,
       chart: {
         color: ["var(--theme-deafult)"],
         label: [
           "jan",
           "feb",
           "mar",
           "apr",
           "may",
           "jun",
           "jul",
           "aug",
           "sep",
           "oct",
           "nov",
         ],
         series: [30, 25, 30, 25, 64, 40, 59, 52, 64],
       },
     },
     {
       title: "CTR",
       color: "success",
       price: "2,198",
       gros: 73,
       chart: {
         color: ["#54BA4A"],
         label: [
           "jan",
           "feb",
           "mar",
           "apr",
           "may",
           "jun",
           "jul",
           "aug",
           "sep",
           "oct",
           "nov",
         ],
         series: [30, 25, 36, 30, 64, 50, 45, 62, 60, 64],
       },
     },
     {
       title: "Conversions",
       color: "success",
       price: "2,198",
       gros: 73,
       chart: {
         color: ["#54BA4A"],
         label: [
           "jan",
           "feb",
           "mar",
           "apr",
           "may",
           "jun",
           "jul",
           "aug",
           "sep",
           "oct",
           "nov",
         ],
         series: [30, 25, 36, 30, 64, 50, 45, 62, 60, 64],
       },
     },
     {
       title: "Conversions",
       color: "success",
       price: "2,198",
       gros: 73,
       chart: {
         color: ["#54BA4A"],
         label: [
           "jan",
           "feb",
           "mar",
           "apr",
           "may",
           "jun",
           "jul",
           "aug",
           "sep",
           "oct",
           "nov",
         ],
         series: [30, 25, 36, 30, 64, 50, 45, 62, 60, 64],
       },
     },
   ];
  return (
    <Container fluid={true}>
      <div className="row_widgets">
        {CurrenciesWidgets.map((item, i) => (
          <Col
            key={i}
            lg="12"
            xl="12"
            xxl="12"
            sm="12"
            md="12"
            xs="12"
            className="custom-col"
          >
            <CurrencyWidget data={item} />
          </Col>
        ))}
      </div>
      <Row className="widget-grid">
        {/* <Col xxl='9' className='box-col-12'> */}

        <OrderOverview />
        <AdGroup />
        <Ads />
        <Keywords />
      </Row>
    </Container>
  );
}

export default Overview