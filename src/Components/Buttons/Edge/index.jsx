import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { CustomStateButtons } from '../../../Constant';
import { Breadcrumbs, Btn, H5 } from '../../../AbstractElements';
import { EdgeButtonData } from '../../Common/Data/Buttons';

const EdgeButton = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Edge Buttons" parent="Buttons" title="Edge Buttons" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        {EdgeButtonData.map((item, i) =>
                            <Card key={i}>
                                <CardHeader>
                                    <H5>{item.title}</H5>
                                    <span>{item.span} <code>{item.code}</code> {item.detail}</span>
                                </CardHeader>
                                <CardBody>
                                    <div className="btn-showcase edge-button">
                                    {
                                        item.btnSub.map((btnItem, i) =>
                                            <Fragment key={i}>
                                                <Btn attrBtn={{
                                                    color: btnItem.colorClass, size: btnItem.size ? btnItem.size : '',
                                                    active: btnItem.active ? true : false,
                                                    disabled: btnItem.disabled ? true : false,
                                                    outline: btnItem.outline ? true : false
                                                }}
                                                >
                                                    {btnItem.title}
                                                </Btn>
                                            </Fragment>
                                        )
                                    }
                                    </div>
                                </CardBody>
                            </Card>
                        )}
                        <Card>
                            <CardHeader>
                                <H5>{CustomStateButtons}</H5>
                                <span>{'The'} <code>{'.btn'}</code> {'class used with'} <code>&lt;{'button'}&gt;</code>, <code>&lt;{'a'}&gt;</code> {'and'} <code>&lt;{'input'}&gt;</code> {'elements.'}</span>
                            </CardHeader>
                            <CardBody className="btn-showcase">
                                <Btn attrBtn={{ className: 'btn btn-square btn-primary btn-pill', color: 'primary' }} >{'Link'}</Btn>
                                <input className="btn btn-square btn-secondary btn-pill" type="button" value="Input" data-toggle="tooltip" title="btn btn-secondary" />
                                <input className="btn btn-square btn-success btn-pill" type="submit" value="Submit" data-toggle="tooltip" title="btn btn-success" />
                                <Btn attrBtn={{ className: 'btn btn-square btn-info btn-pill', type: 'submit' }} >{'Button'}</Btn>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default EdgeButton;