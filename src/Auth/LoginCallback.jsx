import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function LoginCallback() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userData = JSON.parse(searchParams.get("user"));

  // Access the user data as needed
  console.log(userData);

  // Redirect to the dashboard page programmatically
  useEffect(() => {
    toast.success("Successfully logged in!..");
    navigate("/dashboard/default");
  }, [navigate]);

  return (
    <div>
      <p>Logging in...</p>
      <ToastContainer />
    </div>
  );
}

export default LoginCallback;
