import React from 'react';
import { Card, CardBody, Table } from 'reactstrap';
// import { H5 } from '../../../AbstractElements';
// import DropdownCommon from '../../Common/Dropdown';

const AllCampaigns = () => {
 
  const AllCampaignsTable = {
    header: ["Conversion Name", "Conversions"],
    body: [
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
    ],
  };
  return (
    <Card>
      <CardBody className="pt-0 campaign-table">
        <div className="recent-table table-responsive currency-table">
          <Table>
            <thead>
              <tr>
                <th style={{ padding: "10px 8px" }}>
                  <h5 style={{ margin: 0, color: "#2f2f3b" }}>
                    Conversion Name
                  </h5>
                </th>
                <th className="text-center" style={{ padding: "10px 8px" }}>
                  <h5 style={{ margin: 0, color: "#2f2f3b" }}>Conversions</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              {AllCampaignsTable.body.map((item, i) => (
                <tr key={i}>
                  <td>
                    <div
                      style={{
                        paddingLeft: "10px",
                        color: "#2F2F3B",
                        fontWeight: 450,
                      }}
                    >
                      {item.FormName}
                    </div>
                  </td>
                  <td
                    className="text-center"
                    style={{
                      color: "#2F2F3B",
                      fontWeight: 450,
                    }}
                  >
                    {item.Conversions}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};

export default AllCampaigns;
