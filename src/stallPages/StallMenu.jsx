import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderMenu from "../stallcompo/HeaderMenu";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import shoplogo from "../assets/shoplogo.png"
import {Dropdown} from 'react-bootstrap';
import rice from '../assets/rice.png'
import langIcon from '../assets/lang.png'
import editLogo from '../assets/edit.svg'
import arrow from '../assets/arrow-left.svg'
import menuName from '../assets/menuName.png';
import dollar from '../assets/dollar.png';
import cloud from '../assets/Cloud.png';
import "bootstrap-icons/font/bootstrap-icons.css";
import search from "../assets/search.svg"
import stallqr from '../assets/stallqr.png'



const StallMenu = () => {
    const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [isResVisible, setIsResVisible] = useState(false);
  const [isQrVisible, setIsQrVisible] = useState(false);
  const [addMenu, setAddMenu] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [query, setQuery] = useState("");
    
    
  useEffect(() => {
    const data = [
      {
        "restaurant_id": "12345",
        "restaurant_name": "Delicious Bites",
        "restaurant_image": shoplogo,
        "rating": 4.5,
        "categories": {
          "Main Dish": [
            {
              "_id": "abcd1234",
              "name": "ข้าวผัดกุ้ง",
              "name_en": "Fried Rice with Shrimp",
              "description": "ข้าวผัดหอมๆ กับกุ้งสด",
              "description_en": "Fragrant fried rice with fresh shrimp.",
              "price": 80,
              "imageUrl": rice
            },
            {
              "_id": "efgh5678",
              "name": "ผัดไทย",
              "name_en": "Pad Thai",
              "description": "ผัดไทยเส้นเล็กใส่ไข่",
              "description_en": "Stir-fried rice noodles with egg.",
              "price": 60,
              "imageUrl": rice
            }
          ],
          "Drinks": [
            {
              "_id": "ijkl9101",
              "name": "ชาไทย",
              "name_en": "Thai Tea",
              "description": "ชาไทยสูตรต้นตำรับ",
              "description_en": "Authentic Thai tea.",
              "price": 25,
              "imageUrl": rice
            },
            {
              "_id": "mnop1121",
              "name": "น้ำมะนาว",
              "name_en": "Lemonade",
              "description": "น้ำมะนาวสด ชื่นใจ",
              "description_en": "Refreshing fresh lemonade.",
              "price": 30,
              "imageUrl": rice
            }
          ]
        }
      }
    ];
    setTimeout(() => {
      setRestaurants(data);
      setLoading(false);
    }, 300);
  }, []);

  const selectedRestaurant = restaurants.find(
    (restaurant) => restaurant.restaurant_name === "Delicious Bites"
  );

  if (loading) {
    return <div className="text-center text white">Loading...</div>;
  }

const handleFoodClick = (item) => {
    console.log(item); 
    setSelectedMenu({ ...item});
};

const handleHeadBackBtn = () => {
  navigate(-1);
};

const handleSearchBtn = () => {
  setSearchVisible(!searchVisible);
};

const handleSearchSubmit = (e) => {
  e.preventDefault();
  console.log("Searching for:", query);
  setQuery("");
};

const handleBackQrBtn = () => {
  setIsQrVisible(!isQrVisible);
}

const handleEditRes = () => {
  setIsResVisible(!isResVisible);
}

const handleQr = () => {
  setIsQrVisible(!isQrVisible);
}

const handleSelectLanguage = (eventKey) => {
    if (eventKey === "1") {
        setSelectedLanguage("English");
    } else if (eventKey === "2") {
        setSelectedLanguage("Thai");
    }
};
//console.log(selectedMenu);


const handleFormChange = (e) => {
  setSelectedMenu(prev => ({
    ...prev,
    [e.target.name] : e.target.value,
  }));
}

const handleBackBtn = () => {
  setSelectedMenu(null);
}


const handleAddBtn = () => {
  setAddMenu(!addMenu);
}

  const handleFileChange = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      const fileUrl = URL.createObjectURL(file); 

      setSelectedMenu((prev) => ({
        ...prev,
        imageUrl: fileUrl, 
        
      }));
    }
  };

  const handleImageClick = () => {
    document.getElementById('fileInput').click(); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("selectedRestaurant:", selectedRestaurant);
    
    
    if (!selectedRestaurant || !selectedRestaurant.categories) {
      console.error("selectedRestaurant or its categories are undefined.");
      return;
    }
    
   
    const updatedCategories = { ...selectedRestaurant.categories };
  
    
    for (const category in updatedCategories) {
      updatedCategories[category] = updatedCategories[category].map((item) =>
        item._id === selectedMenu._id ? { ...selectedMenu } : item
      );
    }
  
    
    const updatedRestaurants = restaurants.map((restaurant) =>
      restaurant.restaurant_name === selectedRestaurant.restaurant_name
        ? { ...restaurant, categories: updatedCategories }
        : restaurant
    );
  
   
    const dataToSend = {
      restaurant_id: selectedRestaurant.restaurant_id,
      restaurant_name: selectedRestaurant.restaurant_name,
      categories: updatedCategories, 
    };
  
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend), 
    })
      .then(response => response.json())
      .then(data => {
        console.log("Data sent to fake API:", dataToSend);
        console.log("API Response:", data);
  
        setRestaurants(updatedRestaurants);
        setSelectedMenu(null);
      })
      .catch((error) => {
        console.error("Error sending data to the fake API:", error);
      });
  };
  
  
  
  
  
  
  
  
  

  return (
    <div className="container-fluid">
      {selectedRestaurant ? (
        selectedMenu ? (
          <div>
           
            <div className="container-fluid">
              <div
                className="container-fluid d-flex fixed-top justify-content-between align-items-center text-white"
                style={{ height: "20vw", background: "#191A1F", zIndex: 1000, padding:"4vw" }}
              >
                <img src={arrow} alt="" onClick={handleBackBtn} />
                <p className="display-5" style={{marginRight:"37vw", marginTop:"2vw"}}>Menu</p>
              </div>
            </div>
  
            
            <div className='row' style={{marginTop: "20vw", display: "flex", flexDirection: "column", alignItems: "center"}}>
              <img src={selectedMenu.imageUrl} alt="" style={{width:"60vw"}} />
              <form onSubmit={handleSubmit} className='d-flex flex-column justify-content-center align-items-center' style={{position: "relative"}}>
                <img 
                  src={editLogo} 
                  alt="Edit Logo" 
                  style={{width: "12vw", position: "absolute", left: "70vw", top: "-10vw", cursor: "pointer"}} 
                  onClick={handleImageClick} 
                />
                <input id="fileInput" type="file" accept="image/*" style={{display: "none"}} onChange={handleFileChange} />
               
                <div className="input-group d-flex justify-content-center align-items-center" style={{marginBottom:"3vw", marginTop:"6vw"}}>
                  <span className='d-flex justify-content-center align-items-center' style={{background:"#01040F", border:"none", height:"15vw", width:"15vw", marginTop:"-1vw", borderRadius: "2vw 0 0 2vw"}}>
                    <img src={menuName} alt="" style={{height:"8vw"}} />
                  </span>
                  <input 
                    className='text-white'
                    type="text"
                    onChange={handleFormChange}
                    name="name"
                    value={selectedMenu.name || ""}
                    style={{ width: "75vw", height: "15vw", marginBottom: "1vw", background: "#01040F", border: "none", fontSize:"4vw", borderRadius: "0 2vw 2vw 0" }}
                  />
                </div>
                <div className="input-group d-flex justify-content-center align-items-center" style={{marginBottom:"3vw"}}>
                  <span className='d-flex justify-content-center align-items-center' style={{background:"#01040F", border:"none", height:"15vw", width:"15vw", marginTop:"-1vw", borderRadius: "2vw 0 0 2vw"}}>
                    <img src={dollar} alt="" style={{height:"8vw"}} />
                  </span>
                  <input 
                    className='text-white'
                    type="text"
                    onChange={handleFormChange}
                    name="price"
                    value={selectedMenu.price || ""}
                    style={{ width: "75vw", height: "15vw", marginBottom: "1vw", background: "#01040F", border: "none", fontSize:"4vw", borderRadius: "0 2vw 2vw 0" }}
                  />
                </div>
                <div className="input-group d-flex justify-content-center align-items-center" style={{marginBottom:"3vw"}}>
                  <span className='d-flex justify-content-center align-items-center' style={{background:"#01040F", border:"none", height:"15vw", width:"15vw", marginTop:"-1vw", borderRadius: "2vw 0 0 2vw"}}>
                    <img src={cloud} alt="" style={{height:"8vw"}} />
                  </span>
                  <input 
                    className='text-white'
                    type="text"
                    onChange={handleFormChange}
                    name="description"
                    value={selectedMenu.description || ""}
                    style={{ width: "75vw", height: "15vw", marginBottom: "1vw", background: "#01040F", border: "none", fontSize:"4vw", borderRadius: "0 2vw 2vw 0" }}
                  />
                </div>
  
                
                <div className='d-flex justify-content-center align-items-center fixed-bottom' style={{marginBottom:"7vw"}}>
                  <button type='submit' className='d-flex justify-content-center align-items-center text-white' style={{ width:"95vw", height:"12vw", background:"#2B964F", fontSize:"3.5vw", borderRadius:"4vw"}}>
                    Finished
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          isResVisible ? (
            <div>
              <div className="container-fluid">
                <div
                  className="container-fluid d-flex fixed-top justify-content-between align-items-center text-white"
                  style={{ height: "20vw", background: "#191A1F", zIndex: 1000, padding:"4vw" }}
                >
                  <img src={arrow} alt="" onClick={handleEditRes} />
                  <p className="display-5" style={{marginRight:"37vw", marginTop:"2vw"}}>Stall</p>
                </div>
              </div>
            </div>
          ) : addMenu ? (
            <div>
              <div className="container-fluid">
                <div
                  className="container-fluid d-flex fixed-top justify-content-between align-items-center text-white"
                  style={{ height: "20vw", background: "#191A1F", zIndex: 1000, padding:"4vw" }}
                >
                  <img src={arrow} alt="" onClick={handleAddBtn} />
                  <p className="display-5" style={{marginRight:"37vw", marginTop:"2vw"}}>Add Menu</p>
                </div>
              </div>
            </div>
          ) :isQrVisible ? (
            <div>
              <div className="container-fluid">
                <div
                  className="container-fluid d-flex fixed-top justify-content-between align-items-center text-white"
                  style={{ height: "20vw", background: "#191A1F", zIndex: 1000, padding:"4vw" }}
                >
                  <img src={arrow} alt="" onClick={handleQr} />
                  <p className="display-5" style={{marginRight:"37vw", marginTop:"2vw"}}>QR code</p>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ marginTop: "20vw" }}>
            <div className="container-fluid">
            <div
                className="container-fluid d-flex fixed-top justify-content-between align-items-center text-white"
                style={{ height: "20vw", background: "#191A1F", zIndex: 1000, padding:"4vw" }}
            >
                <img
                    src={arrow}
                    alt=""
                    onClick={handleHeadBackBtn}
                />
                <div>
                    <img 
                        src={stallqr} 
                        alt="" 
                        onClick={handleQr}
                        style={{width:"7vw", marginRight:"5vw"}}
                    />
                    <img 
                        src={search} 
                        alt="" 
                        onClick={handleSearchBtn}
                    />
                </div>
            </div>
            {searchVisible && (
                <div 
                    className="container-fluid" 
                    style={{ 
                        width: '85vw', 
                        marginLeft: 'auto', 
                        marginRight: 'auto', 
                        marginTop: '18vw',  
                    }}
                >
                    <form onSubmit={handleSearchSubmit} className='w-100 d-flex justify-content-between'>
                        <div className="input-group">
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
                        </div>
                    </form>
                </div>
            )}
        
        </div>
            <div className="card text-white" style={{ marginBottom: "6vw", marginTop: "6vw", background: "#01040F", borderRadius: "5vw", padding: "1vw", marginRight: "1vw", marginLeft: "1vw" }}>
              <div className="row d-flex align-items-center justify-content-around" style={{ marginBottom: "3vw", marginTop: "2vw" }}>
                <div className="col">
                  <img src={selectedRestaurant.restaurant_image} className="image-fluid rounded" style={{ width: "43vw", height: "auto", marginTop: "3vw" }} alt="Restaurant" />
                </div>
                <div className="col">
                  <div className="row d-flex align-items-center justify-content-end">
                    <img src={editLogo} alt="" style={{ width: "9vw", marginRight: "6vw" }} onClick={handleEditRes} />
                    <h1 style={{ fontSize: "7vw", marginBottom: "2vw" }}>
                      {selectedRestaurant.restaurant_name}
                    </h1>
                  </div>
                  <p className="card-text text-white" style={{ fontSize: "4vw" }}>
                    <i className="bi bi-star" style={{ color: "yellow" }}></i> {selectedRestaurant.rating}
                  </p>
                  <Dropdown onSelect={handleSelectLanguage} style={{ marginTop: "2vw" }}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ fontSize: "3.5vw", color: "black", fontWeight: 600, background: "#4CF986" }}>
                      <img src={langIcon} alt="Language Icon" style={{ width: "5vw", height: "5vw", marginRight: "1vw" }} />
                      {selectedLanguage}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="1">English</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Thai</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <div className="container-fluid d-flex justify-content-end">
              <button style={{ fontSize: "3.5vw", fontWeight: 600, padding: "1.5vw", background: "#4CF986", borderRadius: "2vw" }} onClick={handleAddBtn}>
                Add New Menu
              </button>
            </div>
            <ul className="container-fluid" style={{ border: "none" }}>
              {Object.entries(selectedRestaurant.categories).map(([category, items]) => (
                <div key={category} className="col-12 text-white">
                  <div className="card-header" style={{ border: "none" }}>
                    <h3 style={{ fontSize: "6vw", color: "white", marginTop: "3vw", marginLeft: "1vw" }}>{category}</h3>
                  </div>
                  {items.map((item, index) => (
                    <li key={index} className="card d-flex justify-content-between align-items-start text-white" style={{ border: "none", marginBottom: "2vw", background: "none" }} onClick={() => handleFoodClick(item)}>
                      <hr className="my-4" style={{ borderTop: '2px solid grey', width: '90vw', position: 'relative', left: '50%', transform: 'translateX(-50%)' }} />
                      <div className="row">
                        <div className="col">
                          <img src={item.imageUrl} alt={item.name} style={{ width: "30vw", height: "auto" }} />
                        </div>
                        <div className="col" style={{ display: 'flex', flexDirection: 'column', marginTop: "4vw" }}>
                          <div className="row">
                            <p style={{ fontSize: "5vw", fontWeight: "600" }}>
                              {selectedLanguage === "English" ? item.name_en : item.name}
                            </p>
                            <div className="col" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: "4vw" }}>
                              <span className="badge bg-success rounded-pill" style={{ marginRight: "10vw", fontSize: "4vw" }}>
                                {item.price} THB
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </div>
              ))}
            </ul>
          </div>
          )
        )
      ) : null}
    </div>
  );
  
};


export default StallMenu;
