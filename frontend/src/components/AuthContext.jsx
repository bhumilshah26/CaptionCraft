import { createContext, useContext, useState , useEffect} from "react";
import axios from 'axios'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [userid, setUserid] = useState('')
    const [username, setUsername] = useState('')
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const savedToken = localStorage.getItem('token')
        if(savedToken != null){
            setToken(savedToken)
        }
    }, [])

    const login = async (username, password) => {

        try {
            const response = await axios.post("http://localhost:5000/users", {username, password})
            setUserid(username)
            setUsername(response.data.fullName)
            setToken(response.data.token)
        }
        catch(error){
            setToken(null)
            //  learnt this
            if(error.response.status === 400) {
            alert('Incorrect Password')
            }

            if(error.response.status === 404){
                alert('User not found')
            }
            if(error.response.status === 500){
                alert("Server Error")
            }
        }
    }

    const signup = async (mobileemail, fullname, username, password) => {
    try {
        if(!mobileemail || !fullname || !username || !password){
            setToken(null)
            return alert('Enter all fields')
        }
      const response = await axios.post("http://localhost:5000/users/signup", {
        mobileemail,
        fullname,
        username,
        password
      })
      setToken(response.data.token)
      localStorage.setItem('token', response.data.token)
      setUserid(username)
      setUsername(fullname)

        } catch (error) {console.log(error)}
    }

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token')
    };
    return (
        <AuthContext.Provider value={{ token, login, signup, logout, userid, username, loading, setLoading}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext)
}
