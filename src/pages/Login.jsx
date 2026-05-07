import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  return (

    <div className="login-page">

      <div className="login-box">

        <h1>Welcome Back</h1>

        <p>
          Login to continue building your
          professional resume.
        </p>

        <form
          onSubmit={(e) => {
               e.preventDefault();
              navigate("/dashboard")
            }}
        >

          <input
            type="email"
            placeholder="Enter your email"
          />

          <input
            type="password"
            placeholder="Enter your password"
          />

          <button type="submit">
            Login
          </button>

        </form>

        <div className="bottom-text">

          Don’t have an account?

          <span
            onClick={() => navigate("/register")}
          >
            {" "}Register
          </span>

        </div>

      </div>

    </div>
  );
}

export default Login;