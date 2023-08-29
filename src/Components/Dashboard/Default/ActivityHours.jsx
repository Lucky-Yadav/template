import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { H5 } from '../../../AbstractElements';
import {  DailyDropdown } from '../../../Constant';
// import { LightCardBoxData } from '../../../Data/OnlineCourse';
// import { ActivityHoursChartData } from '../../../Data/OnlineCourse/ChartData';
import DropdownCommon from '../../Common/Dropdown';
// import LightCardBox from './LightCardBox';

const ActivityHours = () => {
   const ActivityHoursChartData = {
     series: [
       {
         name: "Activity",
         data: [400, 800, 500, 300, 900, 1100, 1000, 500],
       },
     ],
     options: {
       chart: {
         height: 350,
         type: "bar",
         toolbar: {
           show: false,
         },
         dropShadow: {
           enabled: false,
           // enabledOnSeries: undefined,
           top: 10,
           left: 0,
           blur: 5,
           color: "#7064F5",
           opacity: 0.35,
         },
       },
       plotOptions: {
         bar: {
           borderRadius: 5,
           columnWidth: "15%",
         },
       },
       dataLabels: {
         enabled: false,
       },
       xaxis: {
         categories: [
           "Purchase",
           ["Add to", "Basket"],
           ["Begin", "Checkout"],
           "Subscribe",
           "Contact",
           ["Submit lead", "form"],
           "SignUp",
           ["Request", "Quote"],
         ],
         labels: {
           style: {
             fontSize: "10px",
              fontWeight: "500",
             fontFamily: "Rubik, sans-serif",
             colors: "var(--chart-text-color)",
           },
         },
         axisBorder: {
           show: false,
         },
         axisTicks: {
           show: false,
         },
         tooltip: {
           enabled: false,
         },
       },
       yaxis: {
         axisBorder: {
           show: false,
         },
         axisTicks: {
           show: false,
         },
         labels: {
           formatter: function (val) {
             return val;
           },
           style: {
             //  fontSize: "10px",
             fontFamily: "Rubik, sans-serif",
             colors: "var(--chart-text-color)",
           },
         },
       },
       grid: {
         borderColor: "var(--chart-dashed-border)",
         strokeDashArray: 8,
       },
       colors: ["#7064F5", "#8D83FF"],
       fill: {
         type: "gradient",
         gradient: {
           shade: "light",
           type: "vertical",
           gradientToColors: ["#7064F5", "#8D83FF"],
           opacityFrom: 0.98,
           opacityTo: 0.85,
           stops: [0, 100],
         },
       },
       responsive: [
         {
           breakpoint: 1200,
           options: {
             chart: {
               height: 200,
             },
           },
         },
       ],
     },
   };
  return (
    <Card>
      <CardHeader className='card-no-border'>
        <div className='header-top'>
          <H5>Conversions by Goal Category</H5>
          <DropdownCommon dropdownMain={{ className: 'icon-dropdown', direction: 'start' }} options={DailyDropdown} iconName='icon-more-alt' btn={{ tag: 'span' }} />
        </div>
      </CardHeader>
      <CardBody className='pt-0'>
        <Row className='m-0 overall-card'>
            <div className='chart-right'>
              <Row>
                <Col xl='12' className='col-xl-12'>
                  <CardBody className='p-0'>
                    <div className='activity-wrap'>
                      <ReactApexChart type='bar' height={200} options={ActivityHoursChartData.options} series={ActivityHoursChartData.series} />
                    </div>
                  </CardBody>
                </Col>
              </Row>
            </div>
        </Row>
      </CardBody>
    </Card>
  );
};

export default ActivityHours;
