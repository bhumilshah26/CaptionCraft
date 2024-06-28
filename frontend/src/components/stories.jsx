import React from 'react'
import styles from './Stories.module.css'
import profilelogo1 from '../images/people1.png'
import profilelogo2 from '../images/people2.jpg'
import profilelogo3 from '../images/people3.jpg'
import profilelogo4 from '../images/people4.jpg'
import profilelogo5 from '../images/people5.jpg'
import car1 from '../images/car1.jpg'
const StoriesComponent = () => {
  return (
    <div className={styles.stories}>
      <div className={styles.userprofile}><img src={profilelogo1} alt=""  className={styles.storiesitems}/><pre>  ayushi_</pre></div>
      <div className={styles.userprofile}><img src={profilelogo2} alt=""  className={styles.storiesitems}/><pre>  ayushman..</pre></div>
      <div className={styles.userprofile}><img src={profilelogo3} alt=""  className={styles.storiesitems}/><pre>  ezsnippet</pre></div>
      <div className={styles.userprofile}><img src={profilelogo4} alt=""  className={styles.storiesitems}/><pre>  worldofivo</pre></div>
      <div className={styles.userprofile}><img src={car1} alt=""  className={styles.storiesitems}/><pre>  audi.pictu...</pre></div>
      <div className={styles.userprofile}><img src={profilelogo2} alt=""  className={styles.storiesitems}/><pre>  superkicks...</pre></div>
      <div className={styles.userprofile}><img src={profilelogo5} alt=""  className={styles.storiesitems}/><pre>  xx7lucy</pre></div>
      <div className={styles.userprofile}><img src={profilelogo4} alt=""  className={styles.storiesitems}/><pre>  sartaj</pre></div>
    </div>
  )
}

export default StoriesComponent
