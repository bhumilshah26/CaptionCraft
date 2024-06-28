import React from 'react';
import styles from './Sidebar.module.css'
// import ccnamelogo from '../images/ccnamelogo.png'
import { MdHomeFilled } from "react-icons/md";
import { CiSearch, CiHeart} from "react-icons/ci";
import { FaClapperboard } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate()
  const handleItemClick = (to) => {
    navigate(to)
  }
  return (
    
    <div className={styles.sidebar}>
        <p className={styles.namelogo}>Caption Curate <sub>AI enforced</sub></p>
      <ul className={styles.menu}>
        <li onClick={() => {handleItemClick('/home')}}><MdHomeFilled size={25}/><pre>   Home</pre></li>
        <li><CiSearch size={25}/> <pre>   Search</pre></li>
        {/* <li><HiOutlineChatBubbleOvalLeftEllipsis size={25}/> <pre>   Messages</pre></li> */}
        <li><CiHeart size={25}/><pre>   Notifications</pre></li>
        <li onClick={() => {handleItemClick('/create')}}><FaClapperboard size={25} /> <pre>   Create</pre></li>
        <li onClick={() => {handleItemClick('/profile')}}><IoMdContact size={25}/> <pre>   Profile</pre></li>
        <li><FaBars size={25}/><pre>   More</pre></li>
      </ul>
    </div>
  );
};

export default Dashboard;
