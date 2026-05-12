import React, {
  useState
} from "react";

import "./Auth.css";

import axios from "axios";

import {
  useNavigate,
  Link
} from "react-router-dom";

function Login() {

  const navigate =
    useNavigate();

  const [formData, setFormData] =
    useState({

      email:"",
      password:""

    });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value

    });

  };

  const handleSubmit =
    async (e) => {

    e.preventDefault();

    try {

      const response =
        await axios.post(

          "http://localhost:1234/api/users/login",

          formData

        );

      if(response.data) {

        localStorage.setItem(

          "user",

          JSON.stringify(
            response.data
          )

        );

        alert(
          "Login Successful!"
        );

        navigate(
          "/dashboard"
        );

      }

      else {

        alert(
          "Invalid Credentials"
        );

      }

    }

    catch(error) {

      console.log(error);

      alert(
        "Login Failed"
      );

    }

  };

  return (

    <div className="auth-page">

      <div className="auth-card">

        <h1>
          Welcome Back
        </h1>

        <p>
          Login to continue
        </p>

        <form
          onSubmit={handleSubmit}
        >

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">

            Login

          </button>

        </form>

        <p className="switch-auth">

          Don't have an account?

          <Link to="/register">

            Register

          </Link>

        </p>

      </div>

    </div>

  );

}

export default Login;