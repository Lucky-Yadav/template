import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { sucessLogin } from "../store/auth/action";

function LoginCallback() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userData = JSON.parse(searchParams.get("user"));
  const dispatch = useDispatch();
  const history = useNavigate();

  // Access the user data as needed
  // console.log(userData);
  dispatch(sucessLogin(userData));
        let token = userData.Token;
        let profile = userData.Picture
        console.log(profile)
        localStorage.setItem("Profile", JSON.stringify(profile));
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("login", JSON.stringify(true));

  // Redirect to the dashboard page programmatically
  useEffect(() => {
    toast.success("Successfully logged in!..");
    // navigate("/dashboard/default");
        history(`${process.env.PUBLIC_URL}/dashboard/default/Seoul`);
  }, [navigate]);

  return (
    <div>
      <p>Logging in...</p>
      <ToastContainer />
    </div>
  );
}

export default LoginCallback;
