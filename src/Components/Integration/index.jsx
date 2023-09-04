import React, { Fragment, useContext, useState } from "react";
import { Container, Row, Col, Card } from "reactstrap";
import H3 from "../../CommonElements/Headings/H3Element";
// import CustomizerContext from "../../../_helper/Customizer";
// import SvgIcon from "../../../Components/Common/Component/SvgIcon";
// import { Divider } from "@mui/material";
import Integration from "./Integrations";

const Integrations = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <div className="page-title">
          <Row>
            <Col xs="6">
              <H3>Integrate Platforms</H3>
            </Col>
          </Row>
        </div>
        <Col md="12" className="project-list" style={{ margin: "5px" }}>
          <Card>
            <Row className="widget-grid">
              <Integration />
            </Row>
          </Card>
        </Col>
      </Container>
    </Fragment>
  );
};

export default Integrations;
