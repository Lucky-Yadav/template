import React, { Fragment } from "react";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, Col } from "reactstrap";
import { H5 } from "../../AbstractElements";
// import { PaperNoteTitle, ViewProject } from "../../Constant";
import { AllIntegrationData } from "./AllIntegrationData";
// import ReactSVG from "react-svg";

const Integration = () => {
  return (
    <Fragment>
      {Object.keys(AllIntegrationData).map((integrationKey, index) => (
        <Col
          key={index}
          xxl="3"
          xl="4"
          lg="6"
          md="6"
          className="box-col-6 col-ed-3"
        >
          <Card className="papernote-wrap">
            <CardHeader className="card-no-border">
              <div className="header-top" style={{ padding: "5px" }}>
                <H5>{AllIntegrationData[integrationKey].heading}</H5>
              </div>
              {AllIntegrationData[integrationKey].connected ? (
                <div className="remove-button">
                  <Button className="remove-btn">Remove</Button>
                </div>
              ) : (
                <Link
                  className="f-light d-flex align-items-center"
                  to={AllIntegrationData[integrationKey].redirectUrl}
                >
                  <Button className="w-100">Connect</Button>
                </Link>
              )}
            </CardHeader>
            <CardBody className="pt-0">
              <img
                className="banner-img img-fluid center"
                src={AllIntegrationData[integrationKey].image.default}
                alt={AllIntegrationData[integrationKey].heading}
                style={{ maxWidth: "150px" }}
              />
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default Integration;
