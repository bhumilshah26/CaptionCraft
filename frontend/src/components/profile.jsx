import React, { useState } from 'react'
import styles from './Profile.module.css'
import { useAuth } from './AuthContext';
import { IoIosSettings } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { BsGrid3X3 } from "react-icons/bs";
import { CgPentagonDown } from "react-icons/cg";
import { LiaUserTagSolid } from "react-icons/lia";
import { IoCameraOutline } from "react-icons/io5";
import people1 from '../images/people2.jpg'
import  Dashboard from './sidebar'
const Profile = () => {
    const { userid } = useAuth()
    const { username } = useAuth()
    const [postno, setPostno] = useState(0)
    const [follower, setFollower] = useState(100)
    const [following, setFollowing] = useState(124)

  return (
    <div className={styles.profilesection}>
        <Dashboard />
        <div className={styles.infouser}>
            <img src={people1} alt="" />
            <div className={styles.details}>
                <div className={styles.userdetails}>
                    <p>{userid}</p>
                    <input type="button" value="Edit Profile" />
                    <input type="button" value="View archive" />
                    <IoIosSettings size={"30px"}/>
                </div>
                <div className={styles.pff}>
                    <pre>{postno} posts</pre>
                    <p>{follower} followers</p>
                    <p>{following} following</p>
                </div>
                <div className={styles.ub}>
                    <pre>{username}</pre>
                    <pre>Everyone should be self obsessed 🙂😁</pre>
                </div>
            </div>  
        </div>
        <div className={styles.highlights}>
            <FaPlus size={"30px"} overlineThickness={"1px"} underlineThickness={"1px"} className={styles.plus}/>
            {/* <img src="" alt="" /> */}
            <p>New</p>
        </div>
        <div className={styles.pst}>
            <div className={styles.p}>
                <BsGrid3X3 />
                <pre>  POSTS</pre>
            </div>
            <div className={styles.s}>
            <CgPentagonDown size={"30px"} overlineThickness={"1px"} underlineThickness={"1px"} />
            <pre> SAVED</pre>
            </div>
            <div className={styles.t}>
                <LiaUserTagSolid />
                <pre>  TAGGED</pre>
            </div>
        </div>
        <div className={styles.userposted}>
            <IoCameraOutline color='grey'  size={"70px"} className={styles.camera}/>
            <pre>Share your first photo</pre>
            <pre>When photos shared, they appear here.</pre>
            <a href="">Share from computer</a>
        </div>
      
    </div>
  )
}

export default Profile
