import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import LoginSignup from './pages/LoginSignup';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Setting from './pages/Setting';
import Wallet from './pages/Wallet';
import Navbar from './components/Navbar';
import NearMe from './pages/NearMe';
import ResNMenu from './pages/ResNMenu';
import CartItem from './components/CartItem';
import RoleSelect from './pages/RoleSelect';
import LoginStall from './stallPages/LoginStall';
import StallMenu from './stallPages/StallMenu';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './components/Loading'
import EditProfile from './pages/EditProfile';
import StallHome from './stallPages/StallHome';
import EditStall from './stallPages/EditStall';
import Favourite from './pages/Favourite';
import History from './pages/History';

function App() {
  const { username } = useParams();
  //const isLoggedIn = useMemo(() => Boolean(username, [username]));
  const isLoggedIn = true;
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoleSelect />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/loginStall" element={<LoginStall />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/home"
          element={
            isLoggedIn ? (
              <HomeWithNavbar component={<Home />} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route 
          path="/stallMenu" 
          element={isLoggedIn ? <StallMenu /> : <Navigate to="/login" />} 
        />
        <Route
          path="/profile"
          element={
            isLoggedIn ? (
              <HomeWithNavbar component={<Profile />} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/setting"
          element={
            isLoggedIn ? (
              <HomeWithNavbar component={<Setting />} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/wallet"
          element={
            isLoggedIn ? (
              <HomeWithNavbar component={<Wallet />} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/nearme"
          element={isLoggedIn ? <NearMe /> : <Navigate to="/login" />}
        />
        <Route
          path="/resnmenu/:restaurantName"
          element={isLoggedIn ? <ResNMenu /> : <Navigate to="/login" />}
        />
        <Route 
          path="/cartitem" 
          element={isLoggedIn ? <CartItem /> : <Navigate to='/login' />} 
        />
        <Route 
          path="/checkingout" 
          element={isLoggedIn ? <Loading /> : <Navigate to='/login' />} 
        />
        <Route 
          path='/editprofile'
          element={isLoggedIn ? <EditProfile /> : <Navigate to='/login' />}
        />
        <Route 
          path='/StallHome'
          element={isLoggedIn ? <StallHome /> : <Navigate to='/login' />}
        />
        <Route 
          path='/EditStall'
          element={isLoggedIn ? <EditStall /> : <Navigate to='/login' />}
        />
        <Route 
          path='/favourite'
          element={isLoggedIn ? <Favourite /> : <Navigate to='/login' />}
        />
        <Route 
          path='/history'
          element={isLoggedIn ? <History /> : <Navigate to='/login' />}
        />  
        
      </Routes>
    </Router>
  );
}

function HomeWithNavbar({ component }) {
  const [activeIcon, setActiveIcon] = useState("home");

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <>
      {component}
      <Navbar activeIcon={activeIcon} onIconClick={handleIconClick} />
    </>
  );
}

export default App;