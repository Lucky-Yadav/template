import React from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { H5, } from '../../../AbstractElements';
// import { Impressions, Clicks, OrderOverviewTitle, Conversion } from '../../../Constant';
// import { OptionsOverView,  } from '../../../Data/Ecommerce/Chart';
import ReactApexChart from 'react-apexcharts';

const OrderOverview = () => {

  const OptionsOverView = {
    series: [
      {
        name: "Impressions",
        type: "area",
        data: [44, 55, 35, 50, 67, 50, 55, 45, 32, 38, 45, 12],
      },
      {
        name: "Clicks",
        type: "area",
        data: [35, 30, 23, 40, 50, 35, 40, 52, 67, 50, 55, 35],
      },
      {
        name: "CTR",
        type: "area",
        data: [25, 20, 15, 25, 32, 20, 30, 35, 23, 30, 20, 42],
      },
      {
        name: "Conversion",
        type: "area",
        data: [10, 28, 35, 18, 48, 12, 22, 38, 45, 16, 29, 11]
      },
    ],
    options: {
      chart: {
        height: 300,
        type: "line",
        stacked: false,
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          blur: 4,
          color: "#000",
          opacity: 0.08,
        },
      },
      stroke: {
        width: [1, 1, 1],
        curve: "smooth",
      },
      grid: {
        show: true,
        borderColor: "var(--chart-border)",
        strokeDashArray: 0,
        position: "back",
        yaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
        },
      },
      colors: ["#7064F5", "#54BA4A", "#FF3364", "#FFC000"],
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          opacityFrom: 0.4,
          opacityTo: 0,
          stops: [0, 0],
        },
      },
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      markers: {
        discrete: [
          {
            seriesIndex: 0,
            dataPointIndex: 2,
            fillColor: "#7064F5",
            strokeColor: "var(--white)",
            size: 5,
            sizeOffset: 3,
          },
          {
            seriesIndex: 1,
            dataPointIndex: 2,
            fillColor: "#54BA4A",
            strokeColor: "var(--white)",
            size: 5,
          },
          {
            seriesIndex: 2,
            dataPointIndex: 2,
            fillColor: "#FF3364",
            strokeColor: "var(--white)",
            size: 5,
          },
          {
            seriesIndex: 0,
            dataPointIndex: 5,
            fillColor: "#7064F5",
            strokeColor: "var(--white)",
            size: 5,
            sizeOffset: 3,
          },
          {
            seriesIndex: 1,
            dataPointIndex: 5,
            fillColor: "#54BA4A",
            strokeColor: "var(--white)",
            size: 5,
          },
          {
            seriesIndex: 2,
            dataPointIndex: 5,
            fillColor: "#FF3364",
            strokeColor: "var(--white)",
            size: 5,
          },
          {
            seriesIndex: 0,
            dataPointIndex: 9,
            fillColor: "#7064F5",
            strokeColor: "var(--white)",
            size: 5,
            sizeOffset: 3,
          },
          {
            seriesIndex: 1,
            dataPointIndex: 9,
            fillColor: "#54BA4A",
            strokeColor: "var(--white)",
            size: 5,
          },
          {
            seriesIndex: 2,
            dataPointIndex: 9,
            fillColor: "#FF3364",
            strokeColor: "var(--white)",
            size: 5,
          },
        ],
        hover: {
          size: 10,
          sizeOffset: 0,
        },
      },
      xaxis: {
        type: "category",
        tickAmount: 8,
        tickPlacement: "between",
        tooltip: {
          enabled: true,
        },
        axisBorder: {
          color: "var(--chart-border)",
        },
        axisTicks: {
          show: false,
        },
      },
      legend: {
        show: true,
        position: 'top',
        padding: '10px',
      },
      yaxis: {
        min: 0,
        tickAmount: 5,
        tickPlacement: "between",
      },
      tooltip: {
        shared: false,
        intersect: false,
      },
      responsive: [
        {
          breakpoint: 1200,
          options: {
            chart: {
              height: 250,
            },
          },
        },
      ],
    },
  };
  return (
    <Card>
      <CardHeader className='card-no-border'>
        <H5>Overview</H5>
      </CardHeader>
      <CardBody className='pt-0'>
        <Row className='m-0 overall-card'>
            <div className='chart-right'>
              <Row>
                <Col xl='12'>
                  <CardBody className='p-0'>
                    {/* <UL attrUL={{ horizontal: true, className: 'd-flex balance-data' }}>
                      <LI>
                        <span className='circle bg-secondary' />
                      <span className='f-light ms-1'>{Impressions}</span>
                      </LI>
                      <LI>
                        <span className='circle bg-primary'> </span>
                        <span className='f-light ms-1'>Clicks</span>
                      </LI>
                      <LI>
                        <span className='circle bg-success'> </span>
                        <span className='f-light ms-1'>Conversion</span>
                      </LI>
                    </UL> */}
                    <div className='current-sale-container order-container'>
                      <ReactApexChart className='overview-wrapper' type='line' height={250} options={OptionsOverView.options} series={OptionsOverView.series} />
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

export default OrderOverview;
