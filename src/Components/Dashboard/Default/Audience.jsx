import React, { Fragment } from "react";
import { Card, Col, Container, Row } from "reactstrap";
import ActivityHours from "./ActivityHours";
import ConversionForm from "./ConversionForm";
import AllCampaigns from "./AllCampaigns";
import DonutCharts from "./DonutCharts";

const Audience = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col md="12" className="project-list" style={{ margin: "5px" }}>
            <Card>
              <Row style={{ margin: "5px" }}>
                <Col sm="12">
                  <div className="text-center">
                    <h5>Conversions</h5>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xl="5">
            <AllCampaigns />
          </Col>
          <Col xxl="4" xl="7" md="12" className="col-ed-7 box-col-7">
            <ActivityHours />
          </Col>
          <Col md="12" className="project-list" style={{ margin: "5px" }}>
            <Card>
              <Row style={{ margin: "5px" }}>
                <Col sm="12">
                  <div className="text-center">
                    <h6>Audience Breakdown by</h6>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xxl="4" xl="7" md="6" className="col-ed-7 box-col-7">
            <ActivityHours />
          </Col>
          <Col xxl="3" xl="5" md="6" className="col-ed-5 box-col-5">
            <AllCampaigns />
          </Col>
          <DonutCharts />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Audience;
