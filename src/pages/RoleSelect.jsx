
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import loadingIcon from '../assets/checkingout.png';
import stall from '../assets/stall.png';
import person from '../assets/persoan.png';

const RoleSelect = () => {
    const navigate = useNavigate();
    const handleCustClick = () => {
        navigate('/login');
    }
    const handleStallClick = () => {
        navigate('/loginStall');
    }

  return (
    <div 
      className="d-flex flex-column justify-content-center align-items-center vh-100"
    >
      <img 
        src={loadingIcon} 
        alt="Loading Icon" 
        style={{ width: '40vw', height: 'auto', marginBottom: '5vw' }}
      />
      <h1 
        className="text-center"
        style={{ fontSize: '10vw', color: 'white', fontWeight: '400', marginBottom:"18vw" }}
      >
        Stall<span style={{ color: '#2B964F' }}>Mate</span>
      </h1>
      <button className="row d-flex justify-content-center align-items-center" style={{background:'#01040F', width:"90vw", height:"14vw"}} onClick={handleCustClick}>
            <div className='col d-flex justify-content-center align-items-center'>
                <img src={person} alt="" style={{width:'10vw', marginRight: '3vw'}}/>
                <p className='text-white' style={{ fontSize:"3vw", margin: 0 }}>
                Login as user
                </p>
            </div>
        </button>
      <div className="d-flex align-items-center text-center text-white">
        <hr style={{
            borderTop: '0.8vw solid grey',
            width: '40vw',
            margin: '0 1vw' 
        }} />
        <p className='text-white' style={{ margin: '2vw', fontSize: '3vw' }}>or</p>
        <hr style={{
            borderTop: '0.8vw solid grey',
            width: '40vw',
            margin: '0 1vw' 
        }} />
        </div>

        <button className="row d-flex justify-content-center align-items-center" style={{background:'#01040F', width:"90vw", height:"14vw"}} onClick={handleStallClick}>
            <div className='col d-flex justify-content-center align-items-center'>
                <img src={stall} alt="" style={{width:'10vw', marginRight: '3vw'}}/>
                <p className='text-white' style={{ fontSize:"3vw", margin: 0 }}>
                Login as stall owner
                </p>
            </div>
        </button>
    </div>
  )
}
export default RoleSelect
