// import React from "react";
// import { useState } from "react";
// import Button from "@mui/material/Button";
// // import SendIcon from "@mui/icons-material/Send";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { loginloading, sucessLogin } from "../store/auth/action";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// // import "./Auth.css";

// const Signup = () => {
//   // import the token from the redux store
//   const token = useSelector((state) => state.auth.token);
//   // import the useDispatch hook
//   const dispatch = useDispatch();
//   // useState hook to keep track of the login form data
//   const [loginData, setloginData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   // function to handle changes on the input fields
//   const handlechange = (e) => {
//     const { name, value } = e.target;
//     setloginData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // function to handle login
//   const handlelogin = () => {
//     // call the loginloading action
//     dispatch(loginloading());
//     // make a post request to the server
//     axios({
//       method: "post",
//       url: "http://localhost:3071/users/signup",
//       data: loginData,
//     })
//       .then((res) => {
//         // call the sucessLogin action and pass the token as an argument
//         dispatch(sucessLogin(res.data));
//         let token = res.data.token;
//         console.log(res, token);
//       })
//       .catch((err) => {
//         console.log(err.response.data.message);
//         alert(err.response.data.message);
//       });
//   };
//   // if the token exists, navigate to the homepage
//   if (token) {
//     return <Navigate to={"/"} />;
//   }
//   // render the login form and the login button
//   return (
//     <div>
//       <div className="login_body">
//         <div className="boxb">
//           <span className="borderLineB"></span>
//           <form action="">
//             <h2>Sign Up</h2>
//             {Object.keys(loginData).map((el) => (
//               <div className="inputBox" key={el}>
//                 <input
//                   value={loginData[el]}
//                   onChange={handlechange}
//                   name={el}
//                   id={el}
//                   required
//                 />
//                 <span>{el.toLocaleUpperCase()}</span>
//                 <i></i>
//               </div>
//             ))}
//             <div className="links">
//               <Link></Link>
//               <Link to={"/login"}>Log in</Link>
//             </div>
//             {/* <input type="submit" value="login" /> */}
//             <div className="button">
//               <Button onClick={handlelogin} variant="outlined">
//                 {token ? "log out" : "Sign up"}
//               </Button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { Fragment, useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { Btn, H4, P } from "../AbstractElements";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginloading, sucessLogin } from "../store/auth/action";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RegisterFrom = () => {  
  const history = useNavigate();

  const [otp_sent, setotp_sent] = useState(false);
  const token = useSelector((state) => state.auth.token);

  const [togglePassword, setTogglePassword] = useState(false);
  //Allows the component to use the Redux Dispatch function
  const dispatch = useDispatch();
  //State hook to manage the loginData object
  const [loginData, setloginData] = useState({
    username: "",
    email: "",
    password: "",
    otp: "",
  });

  //Function handlechange, to update the loginData state object
  const handlechange = (e) => {
    const { name, value } = e.target;
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
      url: "http://localhost:3071/users/signup",
      data: loginData,
    })
      .then((res) => {
        setotp_sent(true);
        setloginData((prev) => ({
          ...prev,
          // eslint-disable-line
          ["email"]: res.data.email,
        }));
        toast.success(res.data.message);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        // alert(err.response.data.message);
        toast.error(err.response.data.message);
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
        dispatch(sucessLogin(res.data.user));
        let token = res.data.token;
        //store the login data in localstorage
        // console.log(res.data);
        let profile = res.data.user.Picture
        console.log(profile)
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("login", JSON.stringify(true));
        localStorage.setItem("profile", JSON.stringify(true));
        history(`${process.env.PUBLIC_URL}/dashboard/default/Seoul`);

        toast.success("Account Successfully Created...");
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
      <div className="login-card">
        <div>
          <div></div>
          <div className="login-main">
            <Form className="theme-form login-form">
              {otp_sent !== true ? (
                <>
                  <H4>Create your account</H4>
                  <P>Enter your personal details to create account</P>
                  <FormGroup>
                    <Label className="col-form-label m-0 pt-0">Your Name</Label>
                    <Input
                      className="form-control"
                      placeholder="test"
                      value={loginData["username"]}
                      onChange={handlechange}
                      name={"username"}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label m-0 pt-0">
                      Email Address
                    </Label>
                    <Input
                      className="form-control"
                      placeholder="test@gmail.com"
                      value={loginData["email"]}
                      onChange={handlechange}
                      name={"email"}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="position-relative">
                    <Label className="col-form-label m-0 pt-0">Password</Label>
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
                  <FormGroup className="m-0">
                    <div className="checkbox">
                      <Input id="checkbox1" type="checkbox" />
                      <Label className="text-muted" for="checkbox1">
                        Agree with <span>Privacy Policy</span>
                      </Label>
                    </div>
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
                  <FormGroup>
                    <Btn
                      attrBtn={{
                        color: "primary",
                        className: "d-block w-100 mt-2",
                        onClick: (e) => handlelogin(e),
                      }}
                    >
                      Create Account
                    </Btn>
                  </FormGroup>
                </>
              )}

              <P attrPara={{ className: "mb-0 text-start" }}>
                Already have an account?
                <Link className="ms-2" to={`/cuba-context/login`}>
                  Sign in
                </Link>
              </P>
            </Form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default RegisterFrom;
