import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { H5, P } from '../../../../../../AbstractElements';
import { Contact, Hometxt, Profile, SimpleMaterialTab } from '../../../../../../Constant';

const SecondaryColorTab = () => {
  const [SecondarycolorLineTab, setSecondarycolorLineTab] = useState('1');
  return (
    <Col sm='12' xl='6' className='xl-100'>
      <Card>
        <CardHeader>
          <H5>{SimpleMaterialTab}</H5>
          <span>
            {'Add'} <code>{'.nav-secondary'}</code> {'class with nav class'}
          </span>
        </CardHeader>
        <CardBody>
          <TabContent activeTab={SecondarycolorLineTab}>
            <TabPane className='fade show' tabId='1'>
              <P>
                {
                  'Skull print sporty trendy t-shirt polo polished finishing touches cardigans tunics metallic jumper. Slimming removable contrast straps black waist band ultra-feminine floral print versatility of wear sun-soaked. Black knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Embroidered logo chest pocket locker loop button-flap breast pockets fastening jetted.'
                }
              </P>
            </TabPane>
            <TabPane tabId='2'>
              <P>
                {
                  'Trendy t-shirt polo polished finishing touches cardigans tunics metallic jumper. Slimming removable contrast straps black waist band ultra-feminine floral print versatility of wear sun-soaked. Black knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Embroidered logo chest pocket locker loop button-flap breast pockets fastening jetted.'
                }
              </P>
            </TabPane>
            <TabPane tabId='3'>
              <P>
                {
                  'Slimming removable contrast straps black waist band ultra-feminine floral print versatility of wear sun-soaked. Black knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Embroidered logo chest pocket locker loop button-flap breast pockets fastening jetted.'
                }
              </P>
            </TabPane>
            <TabPane tabId='4'>
              <P>
                {'Black waist band ultra-feminine floral print versatility of wear sun-soaked. Black knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Embroidered logo chest pocket locker loop button-flap breast pockets fastening jetted.'}
              </P>
            </TabPane>
          </TabContent>
          <Nav className='border-tab nav-secondary nav-pills' tabs>
            <NavItem>
              <NavLink href='#javascript' className={SecondarycolorLineTab === '1' ? 'active' : ''} onClick={() => setSecondarycolorLineTab('1')}>
                <i className='icofont icofont-ui-home'></i>
                {Hometxt}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#javascript' className={SecondarycolorLineTab === '2' ? 'active' : ''} onClick={() => setSecondarycolorLineTab('2')}>
                <i className='icofont icofont-man-in-glasses'></i>
                {Profile}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#javascript' className={SecondarycolorLineTab === '3' ? 'active' : ''} onClick={() => setSecondarycolorLineTab('3')}>
                <i className='icofont icofont-contacts'></i>
                {Contact}
              </NavLink>
            </NavItem>
          </Nav>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SecondaryColorTab;
