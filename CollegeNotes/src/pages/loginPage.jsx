import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/authHeader.jsx";
import Login from "../components/login.jsx";

export default function LoginPage() {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      toast.success(`Hello! ${user.name}, you are successfully logged in`);
    }
  }, [isAuthenticated, user]);

  return (
    <div className="mt-20 select-none">
      <ToastContainer />
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <Login />
      {isAuthenticated && (
        <h3 className="text-center">
          Hello! {user.name} you are successfully logged in
        </h3>
      )}
      {isAuthenticated ? (
        <button
          onClick={() => navigate("/")}
          className="group relative w-5/12 mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-emerald-800 mt-3 transform transition-transform duration-300 ease-in-out hover:scale-110"
        >
          Go to Home
        </button>
      ) : (
        <button
          onClick={() => loginWithRedirect()}
          className="group relative w-5/12 mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-emerald-800 mt-3 transform transition-transform duration-300 ease-in-out hover:scale-110"
        >
          Login with Redirect
        </button>
      )}
    </div>
  );
}
