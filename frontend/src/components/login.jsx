import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import styles from './Login.module.css'; 
import ccnamelogo from '../images/ccnamelogo.png';
import mobileinitial from '../images/mobileinitial.png';
import facebooklogo from '../images/facebook.png';
import gettheapp from '../images/gettheapp.jpg'

const Login = () => {

// username var cannot be changed idk y
const navigate = useNavigate();
const { login } = useAuth();
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')


// idk y try catch isnt used
async function handleLogin(e) {
  e.preventDefault();
  await login(username, password)
  navigate('/home')
}

  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <img src={mobileinitial} alt="" className={styles.mobileinitial} height="600px" />
      </div>
      <div>
        <div className={styles.box1}>
          <div className={styles.namel}>
            <img src={ccnamelogo} alt="" height="50px" className={styles.namelogo}/>
          </div>
          <br />

          <form action="POST" onSubmit={handleLogin}>
            
          <input type="text" name="userinfo" id={styles.userinfo} placeholder="Username" onChange={e => {setUsername(e.target.value)}}/>
          <br />
          <input type="password" name="password" id={styles.password} placeholder="Password" onChange={e => {setPassword(e.target.value)}} />
          <br />
          <div className={styles.logindiv}>
            <input type="submit" value="Log in" className={styles.login}  /> 
          </div>

          </form>
          <br />
          <div className={styles.otheroptions}>
            OR
            <div className={styles.facebook}>
              <img src={facebooklogo} alt="" height="15px" />
              <a href="https://www.facebook.com/" target="blank" className={styles.facebooklogin}>
                Log in with Facebook
              </a>
            </div>
            <a href="forgotpassword" className={styles.forgotpassword}>
              Forgotten your password?
            </a>
          </div>
        </div>
        <br />
        <div className={styles.box2}>
          <pre>Don't have an account? </pre>
          <a href="signup">Sign up</a>
        </div>
        <div className={styles.box3}>
          <pre>Get the app. </pre>
          <a href="https://www.google.com">
            <img src={gettheapp} alt="" height="60px" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
