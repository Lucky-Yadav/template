import React, { Fragment } from 'react';
import { Col, Card, Table } from 'reactstrap';
import { H5 } from '../../../AbstractElements';
// import { classname, DashedBorder, Hours, Id, Spots, Trainer, Type } from '../../../Constant';
// import { dashedborderdata } from '../../../Data/Table/bootstraptabledata';

const DashedBorderClass = () => {
 const dashedborderdata = [
   {
     id: "Active",
     CustomColor: "#a8dba3",
     name: "Search-Campaign Name 1",
     Budget: `${9786}`,
     Impression: "21456",
     Clicks: "1512796",
     CTR: "23.14",
     Conversion: "312",
     AvgCPC: "2.34",
     cost: "18874",
     OptScore: "51",
   },
   {
     id: "Active",
     CustomColor: "#a8dba3",
     name: "Display-Campaign Name 1",
     Budget: `${19709}`,
     Impression: "21456",
     Clicks: "1512796",
     CTR: "23.14",
     Conversion: "296",
     AvgCPC: "1.27",
     cost: "36547",
     OptScore: "37",
   },
   {
     id: "Paused",
     CustomColor: "#fca09a",
     name: "Search-Campaign Name 2",
     Budget: `${90986}`,
     Impression: "21456",
     Clicks: "1512796",
     CTR: "23.14",
     Conversion: "27654",
     AvgCPC: "0.21",
     cost: "86475",
     OptScore: "86",
   },
   {
     id: "Draft",
     CustomColor: "#aadbf9",
     name: "Video-Campaign Name 1",
     Budget: "23654",
     Impression: "21456",
     Clicks: "1512796",
     CTR: "23.14",
     Conversion: "27654",
     AvgCPC: "0.21",
     cost: "86475",
     OptScore: "43",
   },
   {
     id: "Expired",
     CustomColor: "#fca09a",
     name: "Display-Campaign Name 1",
     Budget: `${12796}`,
     Impression: "6578954",
     Clicks: "1512796",
     CTR: "23.14",
     Conversion: "27654",
     AvgCPC: "0.21",
     cost: "86475",
     OptScore: "96",
   },
 ];

    return (
      <Fragment>
        <Col sm="12">
          <Card>
            <div className="table_card_headera">
              <H5>Ad Groups</H5>
            </div>
            <div className="table-responsiv">
              <Table className="table-dashed">
                <thead>
                  <tr className="dashed">
                    <th scope="col">Status</th>
                    <th scope="col">Ad Group Name</th>
                    <th scope="col">Budget</th>
                    <th scope="col">Impressions</th>
                    <th scope="col">Clicks</th>
                    <th scope="col">CTR</th>
                    <th scope="col">Conversion</th>
                    <th scope="col">Avg. CPC</th>
                    <th scope="col">Cost</th>
                    <th scope="col">Opt. Score</th>
                  </tr>
                </thead>
                <tbody className="table_body">
                  {dashedborderdata.map((item) => (
                    <tr className="dashed" key={item.id}>
                      <td>
                        <div
                          className="rounded-cell"
                          style={{ backgroundColor: item.CustomColor }}
                        >
                          {item.id}
                        </div>
                      </td>
                      <td>{item.name}</td>
                      <td>${Number(item.Budget).toLocaleString("en-US")}</td>
                      <td>{Number(item.Impression).toLocaleString("en-US")}</td>
                      <td>{Number(item.Clicks).toLocaleString("en-US")}</td>
                      <td>{item.CTR}%</td>
                      <td>{Number(item.Conversion).toLocaleString("en-US")}</td>
                      <td>${item.AvgCPC}</td>
                      <td>{Number(item.cost).toLocaleString("en-US")}</td>
                      <td>{item.OptScore}%</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card>
        </Col>
      </Fragment>
    );
};

export default DashedBorderClass;