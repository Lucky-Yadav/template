import React, { Fragment, useState, useEffect } from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Btn, H4, P } from "../AbstractElements";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
import { useDispatch } from "react-redux";
import { loginloading, sucessLogin } from "../store/auth/action";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import OtherWay from "./OtherWay";
import api from "../Apis";

const Signin = () => {
  const history = useNavigate();
  // const token = JSON.parse(localStorage.getItem("token"));

  const [togglePassword, setTogglePassword] = useState(false);
  //Allows the component to use the Redux Dispatch function
  const dispatch = useDispatch();
  //State hook to manage the loginData object
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
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
    const verifyuser = {
      email: loginData.email,
      password: loginData.password,
    };
    axios({
      method: "post",
      url: "http://localhost:3071/users/signin",
      data: verifyuser,
    })
      .then((res) => {
        dispatch(sucessLogin(res.data.user));
        let token = res.data.Token;
        //store the login data in localstorage
        // console.log(res.data);
        let profile = res.data.user.Picture
        console.log(profile)
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("login", JSON.stringify(true));
        localStorage.setItem("profile", JSON.stringify(true));
        history(`${process.env.PUBLIC_URL}/dashboard/default/Seoul`);
        // <Navigate to={"/dashboard/default/Seoul"} />;

        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        // alert(err.response.data.message);
        toast.error("Wrong password or username!..");
      });
  };

  useEffect(() => {
    api
      .post("/users/verify/token")
      .then((res) => {
        // Handle the response and redirect to the dashboard
        // console.log(res);
        dispatch(sucessLogin(res.data.user));
        console.log(res);
        localStorage.setItem("login", JSON.stringify(true));
        // <Navigate to={"/dashboard/default/Seoul"} />;
        history(`${process.env.PUBLIC_URL}/dashboard/default/Seoul`);
        // history.push('/dashboard');
      })
      .catch((error) => {
        // Handle the error
        console.log(error);
      });
  }, []);

  return (
    <Fragment>
      <Container fluid={true} className="p-0 login-page">
        <Row>
          <Col xs="12">
            <div className="login-card">
              <div className="login-main login-tab">
                <Form className="theme-form">
                  <>
                    <H4>Sign In</H4>
                    <P>{"Enter your email & password to login"}</P>
                    <FormGroup>
                      <Label className="col-form-label">Email Address</Label>
                      <Input
                        className="form-control"
                        placeholder="user@gmail.com"
                        value={loginData["email"]}
                        onChange={handlechange}
                        name={"email"}
                        required
                      />
                    </FormGroup>

                    <FormGroup className="position-relative">
                      <Label className="col-form-label">Password</Label>
                      <div className="position-relative">
                        <Input
                          placeholder="**********"
                          onChange={handlechange}
                          value={loginData.password}
                          name="password"
                          required
                          className="form-control"
                          type={togglePassword ? "text" : "password"}
                        />
                        <div
                          className="show-hide"
                          onClick={() => setTogglePassword(!togglePassword)}
                        >
                          <span className={togglePassword ? "" : "show"}></span>
                        </div>
                      </div>
                    </FormGroup>
                  </>
                  <div className="position-relative form-group mb-0">
                    <>
                      <div className="checkbox">
                        <Input id="checkbox1" type="checkbox" />
                        <Label className="text-muted" for="checkbox1">
                          RememberPassword
                        </Label>
                      </div>
                      <Link
                        className="link"
                        to={"/cuba-context/forgot_password"}
                      >
                        ForgotPassword
                      </Link>
                      <Btn
                        attrBtn={{
                          color: "primary",
                          className: "d-block w-100 mt-2",
                          onClick: (e) => handlelogin(e),
                        }}
                      >
                        SignIn
                      </Btn>
                    </>
                  </div>
                  <OtherWay />
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

export default Signin;
