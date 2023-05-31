import React from "react";
import { Link } from "react-router-dom";
import { H6, P } from "../AbstractElements";
import GoogleIcon from "@mui/icons-material/Google";
const OtherWay = () => {
  return (
    <>
      <div className="login-social-title">
        <H6 attrH6={{ className: "text-muted or mt-4" }}>Or Sign up with</H6>
      </div>
      <div className="social my-4 ">
        <div className="btn-showcase">
          <Link
            to={"http://localhost:3071/auth/google"}
            className="btn btn-light"
          >
            <GoogleIcon className="txt-linkedin" />
          </Link>
        </div>
      </div>
      <P attrPara={{ className: "text-center mb-0 " }}>
        Don't have account?
        <Link className="ms-2" to={`${process.env.PUBLIC_URL}/register`}>
          Create Account
        </Link>
      </P>
    </>
  );
};

export default OtherWay;
