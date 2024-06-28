import React, { useState } from 'react';
import styles from './Signup.module.css'; // Import as a module
import ccnamelogo from '../images/ccnamelogo.png';
import { useAuth } from './AuthContext';
import gettheapp from '../images/gettheapp.jpg';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {

  const { signup } = useAuth()
  const [mobileemail, setMobileemail] = useState('');
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    await signup(mobileemail, fullname, username, password)
    navigate('/home')
  }

  return (
    <div>
      <form action="POST" onSubmit={handleSubmit}>
        <div className={styles.box1}>
          <div className={styles.namel}>
            <img src={ccnamelogo} alt="" height="60px" className={styles.namelogo} />
          </div>
          <br />
          <p className={styles.line}>
            Sign up to see photos and videos <br />
            from your friends
          </p>

          <div className={styles.loginfbdiv}>
            <input type="button" value="Log in with Facebook" className={styles.loginusingfacebook} />
          </div>
          <br />
          <div className={styles.otheroptions}> OR </div>
          <input type="text" name="emailOrMobile" id={styles.mobileemail} placeholder="Mobile number or email" onChange={e => setMobileemail(e.target.value)} />
          <br />
          <input type="text" name="fullName" id={styles.fullname} placeholder="Full name" onChange={e => setFullname(e.target.value)} />
          <br />
          <input type="text" name="username" id={styles.username} placeholder="Username" onChange={e => setUsername(e.target.value)} />
          <br />
          <input type="password" name="password" id={styles.password} placeholder="Password" onChange={e => setPassword(e.target.value)} />
          <br />
          <div className={styles.logindiv}>
            <input type="submit" value="Sign Up" className={styles.signup}/>
          </div>
          <br />
        </div>
      </form>
      <div className={styles.box2}>
        <pre>Have an account? </pre>
        <Link to="/">Log in</Link>
      </div>
      <div className={styles.box3}>
        <pre>Get the app. </pre>
        <a href="https://www.google.com">
          <img src={gettheapp} alt="" height="60px" />
        </a>
      </div>
    </div>
  );
};

export default Signup;
