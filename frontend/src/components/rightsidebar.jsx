import React from 'react'
import people3 from '../images/people3.jpg'
import styles from './Rightsidebar.module.css'
import { useAuth } from './AuthContext'

// idhar se maine direct destructuring kiya
const Rightsidebar = ({ users }) => {
  const {userid, username} = useAuth()
  return (
    <div className={styles.rightsidebar}>
      <div className={styles.currentuserid}>
        <img src={people3} alt=""/>
        <div><p>{userid}</p><p>{username}</p></div>
        <a href="/">Switch</a>
     </div>

      <div className={styles.suggestions}>
        <p>Suggested for you</p><a href="">See all</a>
      </div>

      <div>
        {users.map(user => (
          <div className={styles.userid} key={user.userName}>
          <img src={people3} alt=""/>
          <div><p>{user.userName}</p><pre>Suggested for you</pre></div>
          <a href="">Follow</a>
        </div>
        ))} 
      </div>
    </div>
  )
}

export default Rightsidebar
