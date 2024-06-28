import Login from './components/login.jsx';
import Signup from './components/signup.jsx';
import Home from './components/home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/profile.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { AuthProvider } from './components/AuthContext.jsx';
import Create from './components/create.jsx';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/home' element={
              <ProtectedRoute>
              <Home/>
              </ProtectedRoute>
              }/>
              <Route path='/create' element={
                <ProtectedRoute>
                <Create/>
                </ProtectedRoute>
                }/>
            <Route path='/profile' element={
              <ProtectedRoute>
              <Profile/>
              </ProtectedRoute>}/>
          </Routes>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
