import React, { Fragment, useState } from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginloading, sucessLogin } from "../store/auth/action";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import OtherWay from "./OtherWay";
import { ToastContainer, toast } from "react-toastify";
import { Btn, H4, P } from "../AbstractElements";

const ForgotPassword = () => {
  //Retrieve the auth token from the store
  const token = useSelector((state) => state.auth.token);
  const [otp_sent, setotp_sent] = useState(false);

  // const [togglePassword, setTogglePassword] = useState(false);
  //Allows the component to use the Redux Dispatch function
  const dispatch = useDispatch();
  //State hook to manage the loginData object
  const [loginData, setloginData] = useState({
    email: "",
    otp: "",
  });
  // console.log(loginData);

  //Function handlechange, to update the loginData state object
  const handlechange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target.name, e.target.value);
    setloginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlelogin = () => {
    // console.log(1);
    //dispatch an action to change the loading state of the component
    toast.success("Please wait...");
    dispatch(loginloading());
    // console.log(loginData);
    axios({
      method: "post",
      url: "http://localhost:3071/users/signin",
      data: loginData,
    })
      .then((res) => {
        setotp_sent(true);
        setloginData((prev) => ({
          ...prev,
          ["email"]: res.data.email,
        }));
        toast.success(res.data.message);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        // alert(err.response.data.message);
        toast.error("You entered wrong password or username!..");
      });
  };
  const verifyotp = () => {
    // console.log(2);
    //dispatch an action to change the loading state of the component
    dispatch(loginloading());
    // console.log(loginData);
    const verifyotp = {
      email: loginData.email,
      otp: loginData.otp,
    };
    axios({
      method: "post",
      url: "http://localhost:3071/users/verify_otp",
      data: verifyotp,
    })
      .then((res) => {
        //dispatch an action to change the login state after a successful login
        dispatch(sucessLogin(res.data));
        // let token = res.data.token;
        //store the login data in localstorage
        localStorage.setItem("logindata", JSON.stringify(loginData));

        toast.success("Successfully logged In!...");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        // alert(err.response.data.message);
        toast.error(err.response.data.message);
      });
  };
  if (token) {
    return <Navigate to={"/"} />;
  }
  return (
    <Fragment>
      <Container fluid={true} className="p-0 login-page">
        <Row>
          <Col xs="12">
            <div className="login-card">
              <div className="login-main login-tab">
                <Form className="theme-form">
                  {otp_sent !== true ? (
                    <>
                      <H4>Forgot Password</H4>
                      <P>{"Enter your email for verification"}</P>
                      <FormGroup>
                        <Label className="col-form-label">Email Address</Label>
                        <Input
                          className="form-control"
                          placeholder="test@gmail.com"
                          value={loginData["email"]}
                          onChange={handlechange}
                          name={"email"}
                          required
                        />
                      </FormGroup>
                    </>
                  ) : (
                    <FormGroup className="position-relative">
                      <Label className="col-form-label">Enter OTP</Label>
                      <div className="position-relative">
                        <Input
                          // placeholder="1****6"
                          onChange={handlechange}
                          value={loginData.otp}
                          name="otp"
                          required
                          className="form-control"
                        />
                      </div>
                    </FormGroup>
                  )}

                  <div className="position-relative form-group mb-0">
                    {otp_sent === true ? (
                      <Btn
                        attrBtn={{
                          color: "primary",
                          className: "d-block w-100 mt-2",
                          onClick: (e) => verifyotp(e),
                        }}
                      >
                        Verify OTP
                      </Btn>
                    ) : (
                      <>
                        <Btn
                          attrBtn={{
                            color: "primary",
                            className: "d-block w-100 mt-2",
                            onClick: (e) => handlelogin(e),
                          }}
                        >
                          Verify mail
                        </Btn>
                      </>
                    )}
                  </div>
                  {otp_sent === true ? "" : <OtherWay />}
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </Fragment>
  );
};

export default ForgotPassword;
