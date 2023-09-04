import { LI, P, UL } from "../../../AbstractElements";
import {
  Featured,
  HighestPrices,
  LowestPrices,
  ShowingProducts,
} from "../../../Constant";
import FilterContext from "../../../_helper/Ecommerce/Filter";
import React, { Fragment, useContext } from "react";
import { Col, Input } from "reactstrap";

const Sorting = () => {
  const { filterSortBy } = useContext(FilterContext);
  const filterSortFunc = (event) => {
    filterSortBy(event);
  };
  return (
    <Fragment>
      <Col md="7" className="text-sm-end">
        <div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              padding: "10px",
              background: "#f4f4f4",
              borderRadius: "15px",
            }}
          >
            <h6
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                verticalAlign: "middle",
                cursor: "pointer",
              }}
            >
              Campaign Name
            </h6>

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
            <div className="onhover-dropdown ">
              <div className="media profile-media">
                <div className="media-body">
                  <p style={{ marginBottom: "0" }}>
                    Select Your Campaign{" "}
                    <i className="middle fa fa-angle-down"></i>
                  </p>
                </div>
              </div>
              <UL
                attrUL={{
                  className: "simple-list profile-dropdown onhover-show-div",
                }}
              >
                <LI
                  attrLI={
                    {
                      // onClick: () =>
                      //   UserMenuRedirect(
                      //     `${process.env.PUBLIC_URL}/app/users/Profile/${layoutURL}`
                      //   ),
                    }
                  }
                >
                  {/* <User /> */}
                  <span>Profile</span>
                </LI>
                <LI
                  attrLI={
                    {
                      // onClick: () =>
                      //   UserMenuRedirect(
                      //     `${process.env.PUBLIC_URL}/app/email-app/${layoutURL}`
                      //   ),
                    }
                  }
                >
                  {/* <DollarSign /> */}
                  <span>Billing</span>
                </LI>
                <LI>
                  {/* <LogIn /> */}
                  <span>LogOut</span>
                </LI>
              </UL>
              {/* <ToastContainer /> */}
            </div>

            {/* <div
              className="select2-drpdwn-product select-options d-inline-block"
              onChange={(e) => filterSortFunc(e.target.value)}
            >
              <Input
                className="form-control btn-square"
                type="select"
                name="select"
              >
                <option value="Featured">{Featured}</option>
                <option value="LowestPrices">{LowestPrices}</option>
                <option value="HighestPrices">{HighestPrices}</option>
              </Input>
            </div> */}
          </div>
        </div>
      </Col>
    </Fragment>
  );
};
export default Sorting;
