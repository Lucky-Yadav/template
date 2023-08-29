import React, { Fragment } from "react";
import { Col, Card, Table } from "reactstrap";
import { H5 } from "../../../AbstractElements";
// import { classname, DashedBorder, Hours, Id, Spots, Trainer, Type } from '../../../Constant';
// import { dashedborderdata } from '../../../Data/Table/bootstraptabledata';

const Keywords = () => {
  const dashedborderdata = [
    {
      id: "1",
      Status: "Active",
      CustomColor: "#a8dba3",
      Keyword: "marketing software in india",
      MatchType: `Phrase Match`,
      Impression: "21456",
      CTR: "2.96",
      Conversion: "312",
      ConversionRate: "45.02",
      CostConversion: "173",
      cost: "18874",
      QualityScore: "7",
      SearchImpressionShare: "51",
    },
    {
      id: "2",
      Status: "Active",
      CustomColor: "#a8dba3",
      Keyword: "reporting software",
      MatchType: `Phrase Match`,
      Impression: "21456",
      CTR: "37.23",
      Conversion: "296",
      ConversionRate: "67.76",
      CostConversion: "18.23",
      cost: "36547",
      QualityScore: "8",
      SearchImpressionShare: "37",
    },
    {
      id: "3",
      Status: "Paused",
      CustomColor: "#fca09a",
      Keyword: "analytics",
      MatchType: `Broad Match`,
      Impression: "21456",
      CTR: "0.96",
      Conversion: "27654",
      ConversionRate: "67.24",
      CostConversion: "234.21",
      cost: "86475",
      QualityScore: "5",
      SearchImpressionShare: "86",
    },
    {
      id: "4",
      Status: "Draft",
      CustomColor: "#aadbf9",
      Keyword: "reporting tool",
      MatchType: `Exact Match`,
      Impression: "21456",
      CTR: "43.21",
      Conversion: "27654",
      ConversionRate: "85.35",
      CostConversion: "65.23",
      cost: "86475",
      QualityScore: "9",
      SearchImpressionShare: "43",
    },
    {
      id: "5",
      Status: "Removed",
      CustomColor: "#fca09a",
      Keyword: "marketing services",
      MatchType: `Phrase Match`,
      Impression: "6578954",
      CTR: "23.14",
      Conversion: "27654",
      ConversionRate: "56.24",
      CostConversion: "12.36",
      cost: "86475",
      QualityScore: "10",
      SearchImpressionShare: "96",
    },
    {
      id: "6",
      Status: "Removed",
      CustomColor: "#fca09a",
      Keyword: "marketing services",
      MatchType: `Phrase Match`,
      Impression: "6578954",
      CTR: "23.14",
      Conversion: "27654",
      ConversionRate: "56.24",
      CostConversion: "12.36",
      cost: "86475",
      QualityScore: "10",
      SearchImpressionShare: "96",
    },
    {
      id: "7",
      Status: "Removed",
      CustomColor: "#fca09a",
      Keyword: "marketing services",
      MatchType: `Phrase Match`,
      Impression: "6578954",
      CTR: "23.14",
      Conversion: "27654",
      ConversionRate: "56.24",
      CostConversion: "12.36",
      cost: "86475",
      QualityScore: "10",
      SearchImpressionShare: "96",
    },
  ];

  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <div className="table_card_headera">
            <H5>Keywords</H5>
          </div>
          <div className="table-responsiv">
            <div className="table-scroll-container">
              <Table className="table-dashed">
                <thead>
                  <tr className="dashed">
                    <th scope="col" className="sticky-header sticky-keyword">
                      Keyword
                    </th>
                    <th scope="col" className="sticky-header">
                      Status
                    </th>
                    <th scope="col" className="sticky-header">
                      Match Type
                    </th>
                    <th scope="col" className="sticky-header">
                      Impressions
                    </th>
                    <th scope="col" className="sticky-header">
                      CTR
                    </th>
                    <th scope="col" className="sticky-header">
                      Conversion
                    </th>
                    <th scope="col" className="sticky-header">
                      Conv.Rate
                    </th>
                    <th scope="col" className="sticky-header">
                      Cost/Conv.
                    </th>
                    <th scope="col" className="sticky-header">
                      Cost
                    </th>
                    <th scope="col" className="sticky-header">
                      Qs
                    </th>
                    <th scope="col" className="sticky-header">
                      Search Imp. Share
                    </th>
                  </tr>
                </thead>
                <tbody className="table_body">
                  {dashedborderdata.map((item) => (
                    <tr className="dashed" key={item.id}>
                      <td className="sticky-cell">{item.Keyword}</td>
                      <td>
                        <div
                          className="rounded-cell"
                          style={{ color: item.CustomColor }}
                        >
                          {item.Status}
                        </div>
                      </td>
                      <td>{item.MatchType}</td>
                      <td>{Number(item.Impression).toLocaleString("en-US")}</td>
                      <td>{item.CTR}%</td>
                      <td>{Number(item.Conversion).toLocaleString("en-US")}</td>
                      <td>{item.ConversionRate}%</td>
                      <td>
                        ${Number(item.CostConversion).toLocaleString("en-US")}
                      </td>
                      <td>${Number(item.cost).toLocaleString("en-US")}</td>
                      <td>{item.QualityScore}</td>
                      <td>{item.SearchImpressionShare}%</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              
            </div>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Keywords;