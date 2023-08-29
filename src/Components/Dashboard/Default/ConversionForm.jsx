import React, { Fragment } from "react";
import { Col, Card,  } from "reactstrap";
import { H5 } from "../../../AbstractElements";
// import { classname, DashedBorder, Hours, Id, Spots, Trainer, Type } from '../../../Constant';
// import { dashedborderdata } from '../../../Data/Table/bootstraptabledata';

const ConversionForm = () => {
  const dashedborderdata = [
    {
      id: "1",
      FormName: "Signup Form",
      Conversions: "247",
    },
    {
      id: "2",
      FormName: "Submit Lead Form",
      Conversions: "120",
    },
    {
      id: "3",
      FormName: "Click to Call",
      Conversions: "654",
    },
    {
      id: "4",
      FormName: "Add to Cart",
      Conversions: "345",
    },
    {
      id: "5",
      FormName: "Login Form",
      Conversions: "845",
    },
  ];

  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <div className="conversion_table">
            <div className="table_card_headera">
              <H5>Conversion Name</H5>
            </div>
            <div className="table_card_headera">
              <H5>Conversions</H5>
            </div>
          </div>

          <div className="table-responsiv">
            <div className="table-scroll-container">
              <div className="table-dashed">
                <div className="table_body">
                  {dashedborderdata.map((item) => (
                    <tr className="dashed conversion_table_columns" key={item.id}>
                      <div>{item.FormName}</div>
                      <div className="conversions">{item.Conversions}</div>
                    </tr>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
};

export default ConversionForm;
