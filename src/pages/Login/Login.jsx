import "./Login.css";

import logo from "../../assets/logo.png";
import { useState } from "react";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  return (
    <>
      <div className="login">
        <img src={logo} alt="Netflix Logo" className="login-logo" />
        <div className="login-form">
          <h1>{signState}</h1>
          <form action="">
            {signState === "Sign Up" ? (
              <input type="text" placeholder="Your Name" className="inp" />
            ) : (
              <></>
            )}
            <input type="email" placeholder="Email" className="inp" />
            <input type="password" placeholder="Password" className="inp" />
            <button>{signState}</button>
            <div className="form-help">
              <div className="remember">
                <input id="remember" type="checkbox" />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
          <div className="form-switch">
            {signState === "Sign In" ? (
              <p>
                New to Netflix? <span onClick={()=> setSignState("Sign Up")}>Sign Up Now</span>
              </p>
            ) : (
              <p>
                Already have an account? <span onClick={()=> setSignState("Sign In")}>Sign In Now</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
