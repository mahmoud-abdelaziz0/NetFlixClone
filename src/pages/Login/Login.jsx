import './Login.css'

import logo from '../../assets/logo.png';

const Login = () => {
  return (
    <>
      <div className='login'>
        <img src={logo} alt="Netflix Logo" className='login-logo'/>
        <div className="login-form">
          <h1>Sign Up</h1>
          <form action="">
            <input type="text" placeholder='Your Name' className='inp'/>
            <input type="email" placeholder='Email' className='inp'/>
            <input type="password" placeholder='Password' className='inp'/>
            <button>Sign In</button>
            <div className="form-help">
              <div className="remember">
                <input id='remember' type="checkbox"/>
                <label htmlFor="remember">Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
