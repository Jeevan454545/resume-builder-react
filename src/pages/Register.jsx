import React, {
  useState
} from "react";

import "./Auth.css";

import axios from "axios";

import {
  useNavigate,
  Link
} from "react-router-dom";

function Register() {

  const navigate =
    useNavigate();

  const [formData, setFormData] =
    useState({

      name:"",
      email:"",
      password:"",
      confirmPassword:""

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

    if(

      formData.password !==
      formData.confirmPassword

    ) {

      alert(
        "Passwords Do Not Match"
      );

      return;

    }

    try {

      await axios.post(

        "http://localhost:1234/api/users/register",

        {

          name:
            formData.name,

          email:
            formData.email,

          password:
            formData.password

        }

      );

      alert(
        "Registration Successful!"
      );

      navigate(
        "/login"
      );

    }

    catch(error) {

      console.log(error);

      alert(
        "Registration Failed"
      );

    }

  };

  return (

    <div className="auth-page">

      <div className="auth-card">

        <h1>
          Create Account
        </h1>

        <p>
          Register to start building resumes
        </p>

        <form
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

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
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit">

            Register

          </button>

        </form>

        <p className="switch-auth">

          Already have an account?

          <Link to="/login">

            Login

          </Link>

        </p>

      </div>

    </div>

  );

}

export default Register;