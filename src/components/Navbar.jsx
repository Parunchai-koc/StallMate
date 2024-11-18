import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import homeImg from "../assets/icons8-home.svg";
import qrImg from "../assets/qr-code-scan-svgrepo-com.svg";
import personImg from "../assets/person-svgrepo-com.svg";
import setImg from "../assets/setting-2-svgrepo-com.svg";
import walletImg from "../assets/wallet-svgrepo-com.svg";

const Navbar = ({ activeIcon, onIconClick }) => {
  return (
    <nav className='navbar position-fixed bottom-0 start-0 text-white' style={{width:'100vw',background:'rgba(0, 0, 0, 0.9)', borderRadius:'2vw', backdropFilter:'blur(60%)', height:"18vw"}} >
      <div className='container-fluid d-flex justify-content-center align-items-center'>
        <ul className="navbar-nav d-flex flex-row align-items-center">
          <li className="nav-item mx-4-nav-cus">
            <Link to="/home" onClick={() => onIconClick("home")}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                style={{ fill: activeIcon === "home" ? "#32CD32" : "white" }}
              >
                <path d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z" />
              </svg>
            </Link>
          </li>
          <li className='nav-item mx-4-nav-cus'>
            <Link to="/profile" onClick={() => onIconClick('profile')}>
              <svg 
                width="30" 
                height="30" 
                viewBox="0 0 512 512" 
                style={{ fill: activeIcon === 'profile' ? '#32CD32' : 'white' }}
              >
                <path
                  d="M256,265.308c73.252,0,132.644-59.391,132.644-132.654C388.644,59.412,329.252,0,256,0
              c-73.262,0-132.643,59.412-132.643,132.654C123.357,205.917,182.738,265.308,256,265.308z"
                />
                <path
                  d="M425.874,393.104c-5.922-35.474-36-84.509-57.552-107.465c-5.829-6.212-15.948-3.628-19.504-1.427
              c-27.04,16.672-58.782,26.399-92.819,26.399c-34.036,0-65.778-9.727-92.818-26.399c-3.555-2.201-13.675-4.785-19.505,1.427
              c-21.55,22.956-51.628,71.991-57.551,107.465C71.573,480.444,164.877,512,256,512C347.123,512,440.427,480.444,425.874,393.104z"
                />
              </svg>
            </Link>
          </li>
          <li className="nav-item mx-4-nav-cus">
            <Link to="/setting" onClick={() => onIconClick("setting")}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                style={{ fill: activeIcon === "setting" ? "#32CD32" : "white" }}
              >
                <path d="M19.9,12.66a1,1,0,0,1,0-1.32L21.18,9.9a1,1,0,0,0,.12-1.17l-2-3.46a1,1,0,0,0-1.07-.48l-1.88.38a1,1,0,0,1-1.15-.66l-.61-1.83A1,1,0,0,0,13.64,2h-4a1,1,0,0,0-1,.68L8.08,4.51a1,1,0,0,1-1.15.66L5,4.79A1,1,0,0,0,4,5.27L2,8.73A1,1,0,0,0,2.1,9.9l1.27,1.44a1,1,0,0,1,0,1.32L2.1,14.1A1,1,0,0,0,2,15.27l2,3.46a1,1,0,0,0,1.07.48l1.88-.38a1,1,0,0,1,1.15.66l.61,1.83a1,1,0,0,0,1,.68h4a1,1,0,0,0,.95-.68l.61-1.83a1,1,0,0,1,1.15-.66l1.88.38a1,1,0,0,0,1.07-.48l2-3.46a1,1,0,0,0-.12-1.17ZM18.41,14l.8.9-1.28,2.22-1.18-.24a3,3,0,0,0-3.45,2L12.92,20H10.36L10,18.86a3,3,0,0,0-3.45-2l-1.18.24L4.07,14.89l.8-.9a3,3,0,0,0,0-4l-.8-.9L5.35,6.89l1.18.24a3,3,0,0,0,3.45-2L10.36,4h2.56l.38,1.14a3,3,0,0,0,3.45,2l1.18-.24,1.28,2.22-.8.9A3,3,0,0,0,18.41,14ZM11.64,8a4,4,0,1,0,4,4A4,4,0,0,0,11.64,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,11.64,14Z" />
              </svg>
            </Link>
          </li>
          <li className="nav-item mx-4-nav-cus">
            <Link to="/wallet" onClick={() => onIconClick("wallet")}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                style={{ fill: activeIcon === "wallet" ? "#32CD32" : "white" }}
              >
                <path d="M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6H2V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM5,5H15a1,1,0,0,1,1,1V7H5A1,1,0,0,1,5,5ZM20,15H19a1,1,0,0,1,0-2h1Zm0-4H19a3,3,0,0,0,0,6h1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.83A3,3,0,0,0,5,9H19a1,1,0,0,1,1,1Z" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
