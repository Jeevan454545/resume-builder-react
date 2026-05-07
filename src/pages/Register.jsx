import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  return (

    <div className="register-page">

      <div className="register-box">

        <h1>Create Account</h1>

        <p>
          Join ResumeAI and build professional
          resumes with modern templates.
        </p>

        <form
           onSubmit={(e) => {
            e.preventDefault();
            navigate("/dashboard")
            }}
        >

          <input
            type="text"
            placeholder="Enter your full name"
          />

          <input
            type="email"
            placeholder="Enter your email"
          />

          <input
            type="password"
            placeholder="Create password"
          />

          <input
            type="password"
            placeholder="Confirm password"
          />

          <button type="submit">
            Create Account
          </button>

        </form>

        <div className="bottom-text">

          Already have an account?

          <span
            onClick={() => navigate("/login")}
          >
            {" "}Login
          </span>

        </div>

      </div>

    </div>
  );
}

export default Register;