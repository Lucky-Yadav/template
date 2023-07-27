import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn, User, DollarSign } from "react-feather";

import { LI, UL, P } from "../../../AbstractElements";
import CustomizerContext from "../../../_helper/Customizer";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { logoutsuccess } from "../../../store/auth/action";
import { ToastContainer, toast } from "react-toastify";

const UserHeader = () => {
  // const token = useSelector((state) => state.auth.token);
  const token = JSON.parse(localStorage.getItem("token"));
  const profile = JSON.parse(localStorage.getItem("Profile"));
  const username = useSelector((state) => state.auth.UserName);
  // const profile = useSelector((state) => state.auth.Picture);
  const dispatch = useDispatch();

  const history = useNavigate();
  const { layoutURL } = useContext(CustomizerContext);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (!token) {
      history(`${process.env.PUBLIC_URL}/login`);
    }
  }, []);

  const handlelogout = () => {
    toast.success("Please wait...");
    // setisprocessing(true);
    localStorage.removeItem("profileURL");
    localStorage.removeItem("auth0_profile");
    localStorage.removeItem("Name");
    localStorage.setItem("authenticated", false);
    localStorage.removeItem("logindata");
    localStorage.removeItem("token");
    dispatch(logoutsuccess());
    setAuthenticated(false);
    toast.success("Logged out!");
    history(`${process.env.PUBLIC_URL}/login`);
    // setisprocessing(false);
  };
  const UserMenuRedirect = (redirect) => {
    history(redirect);
  };
  useEffect(() => {
     if (!token) {
    history(`${process.env.PUBLIC_URL}/login`);
  }
  }, [token])
  console.log(profile)
  
 
  return (
    <li className="profile-nav onhover-dropdown pe-0 py-0">
      <div className="media profile-media">
        <img 
            className= {"b-r-10 m-0 profile_p1"}
            src={authenticated ? profile : profile}
            alt= ""
        />
        <div className="media-body">
          <span>{authenticated ? username : username}</span>
          <P attrPara={{ className: "mb-0 font-roboto" }}>
            Admin <i className="middle fa fa-angle-down"></i>
          </P>
        </div>
      </div>
      <UL
        attrUL={{ className: "simple-list profile-dropdown onhover-show-div" }}
      >
        <LI
          attrLI={{
            onClick: () =>
              UserMenuRedirect(
                `${process.env.PUBLIC_URL}/app/users/Profile/${layoutURL}`
              ),
          }}
        >
          <User />
          <span>Profile</span>
        </LI>
        <LI
          attrLI={{
            onClick: () =>
              UserMenuRedirect(
                `${process.env.PUBLIC_URL}/app/email-app/${layoutURL}`
              ),
          }}
        >
          <DollarSign />
          <span>Billing</span>
        </LI>
        <LI attrLI={{ onClick: handlelogout }}>
          <LogIn />
          <span>LogOut</span>
        </LI>
      </UL>
      <ToastContainer />
    </li>
  );
};

export default UserHeader;
