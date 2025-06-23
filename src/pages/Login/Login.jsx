import "./Login.css";

import logo from "../../assets/logo.png";
import { useState } from "react";
import { login, signup } from "../../firebase";

import netflix_spinner from "../../assets/netflix_spinner.gif";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  }

  return (
    loading ? <div className="login-spinner">
      <img src={netflix_spinner} alt="Loading..." />
    </div> :
    <>
      <div className="login">
        <img src={logo} alt="Netflix Logo" className="login-logo" />
        <div className="login-form">
          <h1>{signState}</h1>
          <form action="">
            {signState === "Sign Up" ? (
              <input type="text" placeholder="Your Name" className="inp" value={name} onChange={(e) => setName(e.target.value)} />
            ) : (
              <></>
            )}
            <input type="email" placeholder="Email" className="inp" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" className="inp" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" onClick={user_auth}>{signState}</button>
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
