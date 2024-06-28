import React, { useState } from 'react'
import styles from './Postsection.module.css'
import { PiDotsThreeBold } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa6";
import { PiShareFatThin } from "react-icons/pi";
import { CgPentagonDown } from "react-icons/cg";
import profile1 from '../images/people1.png'
import profile2 from '../images/people2.jpg'

const Postsection = () => {

  const [likecount, setLikecount] = useState(1232)
  const [likestate, setLikestate] = useState(false)
  const [col, setCol] = useState('white')

  const handleLike = () => {
    if(likestate){
      setLikecount(likecount - 1)
      setCol('white')    
    }
    
    else{
      setLikecount(likecount + 1)
      setCol('red')
    }
    setLikestate(!likestate)
    
  }

  return (
    <div className={styles.postsection}>
      <div className={styles.post}>
        <div className={styles.userinfo}>
          <img src={profile1} alt="" />
          <p>audi.pictureislive</p> {/* try dynamic */}
          <p> •1w</p>
          <PiDotsThreeBold size={"25px"}/>
        </div>
        <img src={profile2} alt="" onDoubleClick={handleLike}/>
        <div className={styles.lcss}>
          <CiHeart size={"30px"} onClick={handleLike} fill={col}/>
          <FaRegComment size={"24px"} overlineThickness={"1px"} underlineThickness={"1px"} className={styles.com}/>
          <PiShareFatThin size={"30px"} />
          <CgPentagonDown size={"30px"} overlineThickness={"1px"} underlineThickness={"1px"} className={styles.share}/>
        </div>
        <p>{likecount} likes</p>
        <p className={styles.caps}>

        </p>
        <p>View all comments</p>
        <input type="text" name='comment' placeholder='Add a comment...'/>
      </div>
    </div>
  )
}

export default Postsection
