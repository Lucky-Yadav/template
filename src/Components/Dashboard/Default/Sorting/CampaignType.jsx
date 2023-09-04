import { LI, P, UL } from "../../../../AbstractElements";
import FilterContext from "../../../../_helper/Ecommerce/Filter";
import React, { Fragment, useContext } from "react";
import { Col, Input } from "reactstrap";

const CamaignType = () => {
  const { filterSortBy } = useContext(FilterContext);
  const filterSortFunc = (event) => {
    filterSortBy(event);
  };
  return (
    <Fragment>
      <Col>
        <div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              padding: "5px 15px",
              background: "#f4f4f4",
              borderRadius: "15px",
              width: "max-content",
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
              Camaign Type
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
                    All  <i className="middle fa fa-angle-down"></i>
                  </p>
                  <UL
                    attrUL={{
                      className:
                        "simple-list profile-dropdown onhover-show-div",
                    }}
                  >
                    <LI>
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
                      <span>Billing</span>
                    </LI>
                    <LI>
                      <span>LogOut</span>
                    </LI>
                  </UL>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Fragment>
  );
};
export default CamaignType;
