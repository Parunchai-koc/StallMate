import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
const Header = ({ pageTitle }) => {
    const navigate = useNavigate();
    const [searchVisible, setSearchVisible] = useState(false);
    const [query, setQuery] = useState("");

    const handleBackBtn = () => {
        navigate('/home');
    };

    const handleSearchBtn = () => {
        setSearchVisible(!searchVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Searching for:", query);
        setQuery("");
    };

    return (
        <div className="container-fluid">
            <div
                className="container-fluid d-flex fixed-top justify-content-between align-items-center text-light w-100"
                style={{ height: "20vw", background: "#191A1F" }}
            >
                <img
                    className="ms-2"
                    src="src/assets/arrow-left.svg"
                    alt="arrow-left-icon"
                    onClick={handleBackBtn}
                />
                <h2 className="mx-1">{pageTitle}</h2>
                <img 
                    className="me-2" 
                    src="src/assets/search.svg" 
                    alt="search-icon" 
                    onClick={handleSearchBtn}
                />
            </div>
            {searchVisible && (
                <div 
                    className="container-fluid" 
                    style={{ 
                        width: '85vw', 
                        marginLeft: 'auto', 
                        marginRight: 'auto', 
                        marginTop: '15vw',  
                    }}
                >
                    <form onSubmit={handleSubmit} className='w-100 d-flex justify-content-between'>
                        <div className="input-group w-100">
                            <span className="input-group-text" style={{ background: '#0E162C', border: 'none' }}>
                                <i className="bi bi-search" style={{ color: 'white' }}></i>
                            </span>
                            <input
                                type="text"
                                className="form-control custom-placeholder"
                                placeholder="Search your interesting foods or restaurants..."
                                aria-label="Search"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                required
                                style={{ background: '#0E162C', height: '9vw', border: 'none' }} 
                            />
                            <div style={{ marginRight: "65vw", marginTop:"2vw"}}>
                                <button
                                className="btn btn-success btn-sm rounded-pill"
                                style={{ color: "black", width: "20vw" }}
                                >
                                Sort By
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Header;
