import React, { useState, useEffect } from 'react'
import Dashboard from './sidebar'
import Stories from './stories'
import Rightsidebar from './rightsidebar'
import Postsection from './postsection'
import styles from './Home.module.css'
import axios from 'axios'
import { useAuth } from './AuthContext'
import Loader from './loader'
const Home = () => {
  const { userid } = useAuth()
  const { loading, setLoading } = useAuth()
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async (userid) => {
      try {
        const response = await axios.get('http://localhost:5000/getusers', { 
          params: {
            userid
          }
         })

        setTimeout(() => {
          setLoading(false)
        }, 500)
        
        setUsers(response.data.users)
      }
      catch(e) {
        setError(e.message)
      }
    }
    fetchUsers(userid)
  },[])

  if(loading){
    return <Loader />
  }

  if(error){
    return <div>Error: {error}</div>
  }

  return (
    <div className={styles.home}>
      <Dashboard/>
      <Stories/>
      <Rightsidebar users = {users}/>
      <Postsection/>
    </div>
  )
}

export default Home
