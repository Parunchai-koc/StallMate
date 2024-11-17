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


const StallMenu = () => {
    const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  useEffect(() => {
    const data = [
      {
        pic: shoplogo,
        name: "Siam Brasserie 1",
        res_type: "à la carte",
        rating: 4.7,
        items: [
          {
            category: "Soup",
            item: "Chicken Suki",
            item_th: "สุกี้ไก่",
            price: 80,
            description: "Tender chicken served in a flavorful suki broth with vegetables.",
            description_th: "ไก่เนื้อนุ่มในน้ำซุปสุกี้พร้อมผัก",
            imageUrl: rice,
          },
          {
            category: "Soup",
            item: "Spicy Soup",
            item_th: "ซุปเผ็ด",
            price: 70,
            description: "A hot and spicy soup to warm your taste buds.",
            description_th: "ซุปเผ็ดร้อนเพื่อเพิ่มความอร่อย",
            imageUrl: rice,
          },
          {
            category: "Soup",
            item: "Tom Yum Suki",
            item_th: "สุกี้ต้มยำ",
            price: 85,
            description: "Suki with a spicy and sour Tom Yum flavor.",
            description_th: "สุกี้รสชาติต้มยำเผ็ดเปรี้ยว",
            imageUrl: rice,
          },
          {
            category: "Rice",
            item: "Vegetable Suki",
            item_th: "สุกี้ผัก",
            price: 75,
            description: "A healthy mix of vegetables in suki sauce.",
            description_th: "สุกี้ผักเพื่อสุขภาพ",
            imageUrl: rice,
          },
          {
            category: "Snack",
            item: "Pork Suki",
            item_th: "สุกี้หมู",
            price: 80,
            description: "Savory pork in a light suki broth.",
            description_th: "หมูในน้ำซุปสุกี้อร่อย",
            imageUrl: rice,
          },
        ],
      },
      {
        pic: shoplogo,
        name: "Siam Brasserie 2",
        res_type: "à la carte",
        rating: 4.5,
        items: [
          {
            category: "Soup",
            item: "Pork Suki",
            item_th: "สุกี้หมู",
            price: 80,
            description: "Savory pork in a light suki broth.",
            description_th: "หมูในน้ำซุปสุกี้อร่อย",
            imageUrl: rice,
          },
          {
            category: "Soup",
            item: "Seafood Suki",
            item_th: "สุกี้ทะเล",
            price: 90,
            description: "A suki dish with mixed seafood and fresh vegetables.",
            description_th: "สุกี้ทะเลพร้อมผักสด",
            imageUrl: rice,
          },
          {
            category: "Rice",
            item: "Chicken Noodle Soup",
            item_th: "ซุปก๋วยเตี๋ยวไก่",
            price: 70,
            description: "Comforting chicken noodle soup with herbs.",
            description_th: "ซุปก๋วยเตี๋ยวไก่ร้อนๆ พร้อมสมุนไพร",
            imageUrl: rice,
          },
          {
            category: "Snack",
            item: "Mixed Vegetable Suki",
            item_th: "สุกี้ผักรวม",
            price: 75,
            description: "A hearty suki with a variety of vegetables.",
            description_th: "สุกี้ที่เต็มไปด้วยผักหลายชนิด",
            imageUrl: rice,
          },
        ],
      },
    ];    
    setTimeout(() => {
      setRestaurants(data);
      setLoading(false);
    }, 300);
  },[restaurants]); 

  const selectedRestaurant = restaurants.find(
    (restaurant) => restaurant.name === "Siam Brasserie 1"
  );

  if (loading) {
    return <div className="text-center text white">Loading...</div>;
  }

const handleFoodClick = (item) => {
    console.log(item); 
    setSelectedMenu({ ...item});
};

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
  
    if (!selectedRestaurant || !selectedRestaurant.items) {
      console.error("selectedRestaurant or its items are undefined.");
      return;
    }
  
    const updatedItems = selectedRestaurant.items.map((item) =>
      item.item === selectedMenu.item ? { ...selectedMenu } : item
    );
  
    const updatedRestaurants = restaurants.map((restaurant) =>
      restaurant.name === selectedRestaurant.name
        ? { ...restaurant, items: updatedItems }
        : restaurant
    );
  
    setRestaurants(updatedRestaurants);
    setSelectedMenu(null);
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
                <img
                    src={arrow}
                    alt=""
                    onClick={handleBackBtn}
                />
                <p className='display-5' style={{marginRight:"37vw", marginTop:"2vw"}}>Menu</p>
            </div>
            
        </div>
              <div className='row'  style={{
                  marginTop: "20vw",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
              }}>
                {<img src={selectedMenu.imageUrl} alt=""  style={{width:"60vw"}}/>}
                
                <form onSubmit={handleSubmit} className='d-flex flex-column justify-content-center align-items-center' style={{position: "relative"}}>

                  <img 
                    src={editLogo} 
                    alt="Edit Logo" 
                    style={{
                      width: "12vw", 
                      position: "absolute", 
                      left: "70vw", 
                      top: "-10vw", 
                      cursor: "pointer" 
                    }} 
                    onClick={handleImageClick} 
                  />
                  <input 
                    id="fileInput"
                    type="file" 
                    accept="image/*" 
                    style={{ display: "none" }}
                    onChange={handleFileChange} 
                  />

                  <div className="input-group d-flex justify-content-center align-items-center" style={{marginBottom:"3vw", marginTop:"6vw"}}>
                    <span 
                      className='d-flex justify-content-center align-items-center' 
                      style={{background:"#01040F", border:"none", height:"15vw", width:"15vw", marginTop:"-1vw", borderRadius: "2vw 0 0 2vw"}}
                    >
                      <img src={menuName} alt="" style={{height:"8vw"}}/>
                    </span>
                    <input 
                      className='text-white'
                      type="text"
                      onChange={handleFormChange}
                      name="item"
                      value={selectedMenu.item || ""}
                      style={{
                        width: "75vw",
                        height: "15vw",
                        marginBottom: "1vw",
                        background: "#01040F", 
                        border: "none",
                        fontSize:"4vw",
                        borderRadius: "0 2vw 2vw 0"
                      }}
                    />
                  </div>

                  <div className="input-group d-flex justify-content-center align-items-center" style={{marginBottom:"3vw"}}>
                    <span 
                      className='d-flex justify-content-center align-items-center' 
                      style={{background:"#01040F", border:"none", height:"15vw", width:"15vw", marginTop:"-1vw", borderRadius: "2vw 0 0 2vw"}}
                    >
                      <img src={dollar} alt="" style={{height:"8vw"}}/>
                    </span>
                    <input 
                      className='text-white'
                      type="text"
                      onChange={handleFormChange}
                      name="price"
                      value={selectedMenu.price || ""}
                      style={{
                        width: "75vw",
                        height: "15vw",
                        marginBottom: "1vw",
                        background: "#01040F", 
                        border: "none",
                        fontSize:"4vw",
                        borderRadius: "0 2vw 2vw 0"
                      }}
                    />
                  </div>

                  <div className="input-group d-flex justify-content-center align-items-center">
                    <span 
                      className='d-flex justify-content-center align-items-center' 
                      style={{background:"#01040F", border:"none", height:"15vw", width:"15vw", marginTop:"-1vw", borderRadius: "2vw 0 0 2vw"}}
                    >
                      <img src={cloud} alt="" style={{height:"8vw"}}/>
                    </span>
                    <input 
                      className='text-white'
                      type="text"
                      onChange={handleFormChange}
                      name="description"
                      value={selectedMenu.description || ""}
                      style={{
                        width: "75vw",
                        height: "15vw",
                        marginBottom: "1vw",
                        background: "#01040F", 
                        border: "none",
                        fontSize:"4vw",
                        borderRadius: "0 2vw 2vw 0"
                      }}
                    />
                  </div>
                  <div className='d-flex justify-content-center align-items-center fixed-bottom' style={{marginBottom:"7vw"}}>
                    <button type='submit' className='d-flex justify-content-center align-items-center text-white' style={{
                      width:"95vw", height:"12vw", 
                      background:"#2B964F", 
                      fontSize:"3.5vw",
                      borderRadius:"4vw"}}>
                      Finished
                    </button>
                  </div>
                </form>

              </div>
              
          </div>
      ) : (
        <div style={{ marginTop: "20vw" }}>
        <HeaderMenu />
        <div
          className="card text-white"
          style={{
            marginBottom: "6vw",
            marginTop: "6vw",
            background: "#01040F",
            borderRadius: "5vw",
            padding: "1vw",
            marginRight: "1vw",
            marginLeft: "1vw",
          }}
        >
          <div
            className="row d-flex align-items-center justify-content-around"
            style={{ marginBottom: "3vw", marginTop: "2vw" }}
          >
            <div className="col">
              <img
                src={selectedRestaurant.pic}
                className="image-fluid rounded"
                style={{ width: "43vw", height: "auto", marginTop: "3vw" }}
                alt="Restaurant"
              />
            </div>
            <div className="col">
              <div className="row d-flex align-items-center justify-content-end">
                <img src={editLogo} alt="" style={{ width: "9vw", marginRight: "6vw" }} />
                <h1 style={{ fontSize: "7vw", marginBottom: "2vw" }}>
                  {selectedRestaurant.name}
                </h1>
              </div>
              <p className="card-text text-white" style={{ fontSize: "4vw" }}>
                <i className="bi bi-star" style={{ color: "yellow" }}></i>{" "}
                {selectedRestaurant.rating}
              </p>
              <Dropdown onSelect={handleSelectLanguage} style={{ marginTop: "2vw" }}>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  style={{
                    fontSize: "3.5vw",
                    color: "black",
                    fontWeight: 600,
                    background: "#4CF986",
                  }}
                >
                  <img
                    src={langIcon}
                    alt="Language Icon"
                    style={{
                      width: "5vw",
                      height: "5vw",
                      marginRight: "1vw",
                    }}
                  />
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
          <button
            style={{
              fontSize: "3.5vw",
              fontWeight: 600,
              padding: "1.5vw",
              background: "#4CF986",
              borderRadius: "2vw",
            }}
          >
            Add New Menu
          </button>
        </div>
      
        <ul className="container-fluid" style={{ border: "none" }}>
          {/* Group items by category */}
          {["Soup", "Rice", "Snack"].map((category) => {
            const categoryItems = selectedRestaurant.items.filter(
              (item) => item.category === category
            );
            if (categoryItems.length === 0) return null; // Skip category if no items
      
            return (
              <div key={category} className="col-12 text-white">
                <div className="card-header" style={{ border: "none" }}>
                  <h3
                    style={{
                      fontSize: "6vw",
                      color: "white",
                      marginTop: "3vw",
                      marginLeft: "1vw",
                    }}
                  >
                    {category}
                  </h3>
                </div>
                {categoryItems.map((item, index) => (
                  <li
                    key={index}
                    className="card d-flex justify-content-between align-items-start text-white"
                    style={{
                      border: "none",
                      marginBottom: "2vw",
                      background: "none",
                    }}
                  >
                    <hr
                      className="my-4"
                      style={{
                        borderTop: "2px solid grey",
                        width: "90vw",
                        position: "relative",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    />
                    <div className="row" style={{ marginBottom: "5vw" }}>
                      <div className="col">
                        <img
                          src={item.imageUrl}
                          alt=""
                          style={{ width: "30vw", height: "auto" }}
                        />
                      </div>
                      <div
                        className="col"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginTop: "4vw",
                        }}
                      >
                        <div className="row">
                          <p
                            style={{
                              fontSize: "5vw",
                              fontWeight: "600",
                            }}
                          >
                            {selectedLanguage === "English" ? item.item : item.item_th}
                          </p>
                          <div
                            className="col"
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              marginTop: "4vw",
                            }}
                          >
                            <span
                              className="badge bg-success rounded-pill"
                              style={{
                                marginRight: "10vw",
                                fontSize: "4vw",
                              }}
                            >
                              {item.price} THB
                            </span>
                            <img
                              src={editLogo}
                              alt=""
                              style={{ width: "6vw", marginRight: "6vw" }}
                              onClick={() => handleFoodClick(item)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </div>
            );
          })}
        </ul>
      </div>      
      )
  ) : null}
</div>

    );
};


export default StallMenu;
