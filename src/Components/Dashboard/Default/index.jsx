import React, { Fragment, useContext, useState} from "react";
import { Breadcrumbs, LI, UL } from "../../../AbstractElements";
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
import Sorting from "./Sorting";
import CamaignName from "./Sorting/CamaignName";
import Account from "./Sorting/Account";
import TimePeriod from "./Sorting/TimePeriod";
import CamaignType from "./Sorting/CampaignType";
import Status from "./Sorting/Status";

const Dashboard = () => {
  
  const { layoutURL } = useContext(CustomizerContext);
  const [DashboardType, setDashboardType] = useState("Overview");

  return (
    <Fragment>
      <Container fluid={true}>
        <div className="page-title">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <H3>Google Ads Dashboard</H3>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "20px",
                paddingRight: "20px",
              }}
            >
              <Account />
              <TimePeriod />
            </div>
          </div>
          <Divider
            variant="middle"
            style={{
              padding: "10px",
              borderBottomWidth: "2px",
              borderColor: "#b3b3b3",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
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
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "20px",
                paddingRight: "20px",
              }}
            >
              <h6
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  verticalAlign: "middle",
                  marginRight: "10px",
                }}
              >
                Filters
              </h6>
              <CamaignName />
              <CamaignType />
              <Status />
            </div>
          </div>
        </div>
      </Container>

      {DashboardType === "Overview" ? <Overview /> : <Audience />}
    </Fragment>
  );
};

export default Dashboard;
