import React, { Fragment, useContext, useState} from "react";
import { Breadcrumbs } from "../../../AbstractElements";
import Overview from "./Overview";
import Audience from "./Audience";
import { Route, Routes } from "react-router-dom";
import { Container, Row, Col, Card } from "reactstrap";
import { Link } from "react-router-dom";
// import H3 from "../../Headings/H3Element";
import H3 from "../../../CommonElements/Headings/H3Element";
import CustomizerContext from "../../../_helper/Customizer";
import SvgIcon from "../../../Components/Common/Component/SvgIcon";
import { Divider } from "@mui/material";

const Dashboard = () => {
  
  const { layoutURL } = useContext(CustomizerContext);
  const [DashboardType, setDashboardType] = useState("Overview");

  return (
    <Fragment>
      <Container fluid={true}>
        <div className="page-title">
          <Row>
            <Col xs="6">
              <H3>Google Ads Dashboard</H3>
            </Col>
            <Col xs="6">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link
                    to={`${process.env.PUBLIC_URL}/dashboard/default/${layoutURL}`}
                  >
                    <SvgIcon iconId="stroke-home" />
                  </Link>
                </li>
                <li className="breadcrumb-item">Dashboard</li>

                <li className="breadcrumb-item active">Default</li>
              </ol>
            </Col>
          </Row>
          <Divider
            variant="middle"
            style={{
              padding: "10px",
              borderBottomWidth: "2px",
              borderColor: "#b3b3b3",
            }}
          />
          <Row>
            <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
              <h3
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  verticalAlign: "middle",
                  cursor: "pointer",
                }}
                onClick={() => setDashboardType("Overview")}
              >
                Overview
              </h3>

              <div
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  verticalAlign: "middle",
                  width: "2px",
                  height: "18px",
                  borderRight: " 2px solid #b3b3b3",
                }}
              />
              <h6
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  verticalAlign: "middle",
                  cursor: "pointer",
                }}
                onClick={() => setDashboardType("Audience")}
              >
                Audience
              </h6>
            </div>
            <div></div>
          </Row>
        </div>
      </Container>
      
      {DashboardType === "Overview" ? <Overview /> : <Audience />}
    </Fragment>
  );
};

export default Dashboard;
