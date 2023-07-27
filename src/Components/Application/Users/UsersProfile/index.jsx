import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
// import { Breadcrumbs } from '../../../../AbstractElements';
// import UserProfile from '../../../Bonus-Ui/Tour/UserProfile';
// import UserDetails from './UserDetail';
// import UserDetails2 from './UserDetail2';
// import UserDetails3 from './UserDetails3';
// import UserDetails4 from './UserDetail4';
import UsersEditContain from '../UsersEdit';

const UsersProfileContain = () => {
    return (
        <Fragment>
            <Container fluid={true}>
                <div className="user-profile">
                    <Row>
                        {/* <UserProfile /> */}
                        <UsersEditContain />
                    </Row>
                </div>
            </Container>
        </Fragment>
    );
};
export default UsersProfileContain;