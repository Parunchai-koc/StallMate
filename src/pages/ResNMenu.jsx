import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import CartItem from '../components/CartItem';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { addItem } from '../components/CartSlice';
import shoplogo from "../assets/shoplogo.png"
import {Dropdown} from 'react-bootstrap';
import rice from '../assets/rice.png'
import addCart from '../assets/addcart.png'
import arrow from "../assets/arrow-left.svg"
import search from "../assets/search.svg"

const ResNMenu = () => {
  const navigate = useNavigate();
  const { restaurantName } = useParams();
  const dispatch = useDispatch(); 
  const [selectedItem, setSelectedItem] = useState(null);
  const cartItems = useSelector((state) => state.cart.items); 
  const amount = useSelector(state => state.cart.amount);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedCat, setSelectedCat] = useState("All");

  useEffect(() => {
    const data = [
      {
        pic: shoplogo,
        name: "Siam Brasserie 1",
        res_type: "à la carte",
        rating: 4.7,
        menu: {
          Soup: [
            {
              item: "Chicken Suki",
              item_th: "สุกี้ไก่",
              price: 80,
              description: "Tender chicken served in a flavorful suki broth with vegetables.",
              description_th: "ไก่เนื้อนุ่มในน้ำซุปสุกี้พร้อมผัก",
              imageUrl: rice,
            },
            {
              item: "Spicy Soup",
              item_th: "ซุปเผ็ด",
              price: 70,
              description: "A hot and spicy soup to warm your taste buds.",
              description_th: "ซุปเผ็ดร้อนเพื่อเพิ่มความอร่อย",
              imageUrl: rice,
            },
            {
              item: "Tom Yum Suki",
              item_th: "สุกี้ต้มยำ",
              price: 85,
              description: "Suki with a spicy and sour Tom Yum flavor.",
              description_th: "สุกี้รสชาติต้มยำเผ็ดเปรี้ยว",
              imageUrl: rice,
            },
          ],
          Rice: [
            {
              item: "Vegetable Suki",
              item_th: "สุกี้ผัก",
              price: 75,
              description: "A healthy mix of vegetables in suki sauce.",
              description_th: "สุกี้ผักเพื่อสุขภาพ",
              imageUrl: rice,
            },
          ],
          Snack: [
            {
              item: "Pork Suki",
              item_th: "สุกี้หมู",
              price: 80,
              description: "Savory pork in a light suki broth.",
              description_th: "หมูในน้ำซุปสุกี้อร่อย",
              imageUrl: rice,
            },
          ],
        },
      },
      {
        pic: {shoplogo},
        name: "Siam Brasserie 2",
        res_type: "à la carte",
        rating: 4.5,
        menu: {
          Soup: [
            {
              item: "Pork Suki",
              item_th: "สุกี้หมู",
              price: 80,
              description: "Savory pork in a light suki broth.",
              description_th: "หมูในน้ำซุปสุกี้อร่อย",
              imageUrl: rice,
            },
            {
              item: "Seafood Suki",
              item_th: "สุกี้ทะเล",
              price: 90,
              description: "A suki dish with mixed seafood and fresh vegetables.",
              description_th: "สุกี้ทะเลพร้อมผักสด",
              imageUrl: rice,
            },
          ],
          Rice: [
            {
              item: "Chicken Noodle Soup",
              item_th: "ซุปก๋วยเตี๋ยวไก่",
              price: 70,
              description: "Comforting chicken noodle soup with herbs.",
              description_th: "ซุปก๋วยเตี๋ยวไก่ร้อนๆ พร้อมสมุนไพร",
              imageUrl: rice,
            },
          ],
          Snack: [
            {
              item: "Mixed Vegetable Suki",
              item_th: "สุกี้ผักรวม",
              price: 75,
              description: "A hearty suki with a variety of vegetables.",
              description_th: "สุกี้ที่เต็มไปด้วยผักหลายชนิด",
              imageUrl: rice,
            },
          ],
        },
      },
      {
        pic: {shoplogo},
        name: "Siam Brasserie 3",
        res_type: "à la carte",
        rating: 4.8,
        menu: {
          Soup: [
            {
              item: "Beef Suki",
              item_th: "สุกี้เนื้อ",
              price: 90,
              description: "Tender beef slices in a rich suki broth.",
              description_th: "เนื้อวัวนุ่มในน้ำซุปสุกี้",
              imageUrl: rice,
            },
            {
              item: "Herbal Soup",
              item_th: "ซุปสมุนไพร",
              price: 60,
              description: "A light soup with a mix of herbs for added flavor.",
              description_th: "ซุปเบาที่มีสมุนไพรเพิ่มรสชาติ",
              imageUrl: rice,
            },
          ],
          Rice: [
            {
              item: "Spicy Seafood Suki",
              item_th: "สุกี้ทะเลรสเผ็ด",
              price: 100,
              description: "Seafood suki with a spicy kick.",
              description_th: "สุกี้ทะเลรสเผ็ด",
              imageUrl: rice,
            },
          ],
          Snack: [
            {
              item: "Clear Broth Suki",
              item_th: "สุกี้น้ำใส",
              price: 65,
              description: "Suki in a clear, light broth.",
              description_th: "สุกี้ในน้ำใสเบา",
              imageUrl: rice,
            },
          ],
        },
      },
      {
        pic: {shoplogo},
        name: "Siam Brasserie 4",
        res_type: "à la carte",
        rating: 4.6,
        menu: {
          Soup: [
            {
              item: "Chicken Noodle Soup",
              item_th: "ซุปก๋วยเตี๋ยวไก่",
              price: 70,
              description: "Comforting chicken noodle soup with herbs.",
              description_th: "ซุปก๋วยเตี๋ยวไก่ร้อนๆ พร้อมสมุนไพร",
              imageUrl: rice,
            },
            {
              item: "Herbal Soup",
              item_th: "ซุปสมุนไพร",
              price: 60,
              description: "A light soup with a mix of herbs for added flavor.",
              description_th: "ซุปเบาที่มีสมุนไพรเพิ่มรสชาติ",
              imageUrl: rice,
            },
          ],
          Rice: [
            {
              item: "Vegetarian Suki",
              item_th: "สุกี้เจ",
              price: 65,
              description: "Vegetarian suki with a variety of vegetables.",
              description_th: "สุกี้ผักสำหรับคนกินเจ",
              imageUrl: rice,
            },
          ],
          Snack: [
            {
              item: "Fish Suki",
              item_th: "สุกี้ปลา",
              price: 90,
              description: "Fresh fish in suki broth with vegetables.",
              description_th: "ปลาสดในน้ำซุปสุกี้กับผัก",
              imageUrl: rice,
            },
          ],
        },
      },
      {
        pic: {shoplogo},
        name: "Siam Brasserie 5",
        res_type: "à la carte",
        rating: 4.9,
        menu: {
          Soup: [
            {
              item: "Hot Pot",
              item_th: "หม้อไฟ",
              price: 85,
              description: "A communal hot pot with a variety of ingredients.",
              description_th: "หม้อไฟที่มีส่วนผสมหลากหลาย",
              imageUrl: rice,
            },
          ],
          Rice: [
            {
              item: "Vegetarian Suki",
              item_th: "สุกี้เจ",
              price: 65,
              description: "Vegetarian suki with a variety of vegetables.",
              description_th: "สุกี้ผักสำหรับคนกินเจ",
              imageUrl: rice,
            },
          ],
          Snack: [
            {
              item: "Fish Suki",
              item_th: "สุกี้ปลา",
              price: 90,
              description: "Fresh fish in suki broth with vegetables.",
              description_th: "ปลาสดในน้ำซุปสุกี้กับผัก",
              imageUrl: rice,
            },
          ],
        },
      },
    ];
    setTimeout(() => {
      setRestaurants(data);
      setLoading(false);
    }, 300);
  });  


  const selectedRestaurant = restaurants.find(
    (restaurant) => restaurant.name === decodeURIComponent(restaurantName)
  );

  if (loading) {
    return <div className="text-center text white">Loading...</div>;
  }

  const handleFoodClick = (item) => {
    console.log(item); 
    setSelectedItem({ ...item, quantity: 1 });
  };
  const confirmAddToCart = () => {
    dispatch(addItem({
      ...selectedItem, 
      id: selectedItem.item, 
      note: selectedItem.note,
      price: selectedItem.price, 
      quantity: selectedItem.quantity
    }));
    setSelectedItem(null);
  };
  
  const handleQuantityChange = (newQuantity) => {
    setSelectedItem((prevItem) => ({
      ...prevItem,
      quantity: Math.max(1, newQuantity),
    }));
  };

  const handleCartClick = () => {
    setIsCartVisible(!isCartVisible);
  };
  
  const handleContinueShopping = () => {
    setIsCartVisible(false);
  };

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleSelectLanguage = (eventKey) => {
    if (eventKey === "1") {
      setSelectedLanguage("English");
    } else if (eventKey === "2") {
      setSelectedLanguage("Thai");
    }
  };
  const handleSelectCat = (eventKey) => {
    if (eventKey === "1") {
      setSelectedCat("Soup");
    } else if (eventKey === "2") {
      setSelectedCat("Rice");
    }
    else if (eventKey === "3"){
      setSelectedCat("Snack");
    }
    else if (eventKey === "4"){
      setSelectedCat("All");
    }
  };


  return (
      <div className="container-fluid">
      {selectedRestaurant ? (
        <div style={{marginTop:"20vw"}}>
          {isCartVisible ? (
            <div className="cart-modal">
              <div
                className="container-fluid d-flex fixed-top justify-content-between align-items-center text-white"
                style={{ height: "20vw", background: "#191A1F", zIndex: 1000, padding:"5vw" }}
            >
                <img
                    src={arrow}
                    alt=""
                    onClick={handleContinueShopping}
                />
            </div>
              <CartItem onContinueShopping={handleContinueShopping} cartItems={cartItems} />
            </div>
          ) : selectedItem ? (
            <div className="item-detail-modal">
              <div className="card text-white" style={{ marginBottom: '6vw', background:"#01040F", borderRadius:"5vw" , padding:"1vw"}}>
                <div className="row d-flex align-items-center justify-content-around" style={{marginBottom: '3vw', marginTop:"2vw"}}>
                  <div className="col">
                    <img src={selectedItem.imageUrl} className="image-fluid rounded" style={{ width: "50vw", height: "auto", marginTop:"3vw" }} />
                  </div>
                  <div className="col align-items-center">
                    <h2 className='text-white' style={{fontSize:"6vw"}}>{selectedLanguage == 'English'? selectedItem.item : selectedItem.item_th}</h2>
                    <Dropdown onSelect={handleSelectLanguage} style={{marginTop:"6vw"}}>
                      <Dropdown.Toggle variant="success" id="dropdown-basic" style={{fontSize:"3.5vw"}}>
                        {selectedLanguage}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="1">English</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Thai</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <span className="badge bg-success rounded-pill" style={{marginTop:"6vw", fontSize:"4vw"}}>${selectedItem.price}</span>
                  </div>
                </div>
              </div>
              <p className='text-white'>Description : {selectedLanguage == 'English'? selectedItem.description : selectedItem.description_th}</p>
              <div style={{ marginTop: "4vw" }}>
                <p className='text-white display-5'>Notes</p>
                <hr className="my-4" style={{
                            borderTop: '2px solid grey',
                            width: '90vw',
                            position: 'relative',
                            left: '50%',
                            transform: 'translateX(-50%)'
                          }} />
                <textarea
                  className="form-control table-form"
                  placeholder="Add a note for the seller"
                  rows="1"
                  value={selectedItem.note || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, note: e.target.value })}
                  style={{ backgroundColor: 'black', color: 'white', borderColor: 'gray' }}
                />
                <hr className="my-4" style={{
                            borderTop: '2px solid grey',
                            width: '90vw',
                            position: 'relative',
                            left: '50%',
                            transform: 'translateX(-50%)'
                          }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '40vw', justifyContent:"center" }}> 
                <button className='bg-success'
                  onClick={() => handleQuantityChange(selectedItem.quantity - 1)}
                  style={{
                    padding: '1vw',
                    width:"8vw",
                    height:"auto",
                    backgroundColor: '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    marginRight: '3vw'
                  }}
                  disabled={selectedItem.quantity <= 1}
                >
                  -
                </button>
                
                <span className='text-white' style={{ fontSize: '6vw', margin: '0 10px' }}>{selectedItem.quantity}</span>
                
                <button className='bg-success'
                  onClick={() => handleQuantityChange(selectedItem.quantity + 1)}
                  style={{
                    padding: '1vw',
                    width:"8vw",
                    height:"auto",
                    backgroundColor: '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    marginLeft: '3vw'  
                  }}
                >
                  +
                </button>
              </div>
              <div className="row align-items-center" style={{ marginTop: '4vw' }}>
              <button className='text-white bg-success' style={{marginBottom:"4vw"}} onClick={confirmAddToCart} >Add to Cart</button>
              <button className='text-white bg-danger' onClick={() => setSelectedItem(null) } >Cancel</button>
              </div>
            </div>
          ) : (
            <>
              <Header pageTitle={""} />
              <div className="card text-white" style={{ marginBottom: '6vw', marginTop: '6vw', background:"#01040F", borderRadius:"5vw" , padding:"1vw"}}>
                <div className="row d-flex align-items-center justify-content-around" style={{marginBottom: '3vw', marginTop:"2vw"}}>
                  <div className="col">
                    <img src={selectedRestaurant.pic} className="image-fluid rounded" style={{ width: "43vw", height: "auto", marginTop:"3vw" }} />
                  </div>
                  <div className="col">
                    <h1 className="mb-4" style={{ fontSize: '7vw' }}>{selectedRestaurant.name}</h1>
                    <p className="card-text text-white">
                      <i className="bi bi-star" style={{ color: 'yellow' }}></i> {selectedRestaurant.rating}
                    </p>
                    <Dropdown onSelect={handleSelectLanguage} style={{marginTop:"2vw"}}>
                      <Dropdown.Toggle variant="success" id="dropdown-basic" style={{fontSize:"3.5vw"}}>
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
              <div className="d-flex justify-content-end align-items-center" style={{marginTop:"2vw",  background:'black ', borderRadius:"2vw", padding:"1.5vw", marginBottom:"6vw"}}>
                <p className='text-white' style={{marginRight:"5vw", fontSize:"4vw", marginTop:"2.6vw", fontWeight:"500"}}>Category</p>
                <Dropdown onSelect={handleSelectCat} style={{marginRight:"3vw"}}>
                  <Dropdown.Toggle variant="success" style={{fontSize:"3.5vw"}}>
                    {selectedCat}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">Soup</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Rice</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Snack</Dropdown.Item>
                    <Dropdown.Item eventKey="4">All</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="row">
              
              {selectedCat === "All" ? (
                <ul className="container-fluid" style={{border: "none"}}>
                  {Object.entries(selectedRestaurant.menu).map(([category, items]) => (
                    <div key={category}>
                      <h3 style={{fontSize: "6vw", color: "white", marginTop: "3vw"}}>{category}</h3>
                      {items.map((item, index) => (
                        <li
                          key={index}
                          className="card d-flex justify-content-between align-items-start text-white"
                          style={{
                            border: "none",
                            marginBottom: "2vw",
                            background: "none"
                          }}
                          onClick={() => handleFoodClick(item)}
                        >
                          <hr className="my-4" style={{
                            borderTop: '2px solid grey',
                            width: '90vw',
                            position: 'relative',
                            left: '50%',
                            transform: 'translateX(-50%)'
                          }} />
                          <div className="row">
                                <div className="col">
                                  <img src={item.imageUrl} alt="" style={{ width: "30vw", height: "auto" }} />
                                </div>
                                <div className="col" style={{ display: 'flex', flexDirection: 'column', marginTop:"4vw" }}>
                                  <div className="row">
                                    <p style={{ fontSize: "5vw", fontWeight: "600" }}>{selectedLanguage === "English" ? item.item : item.item_th}</p>
                                    <div className="col" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop:"4vw" }}>
                                      <span className="badge bg-success rounded-pill" style={{marginRight:"10vw"}}>{item.price} THB</span> 
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </li>
                      ))}
                    </div>
                  ))}
                </ul>
              ) : (
                Object.entries(selectedRestaurant.menu).map(([category, items]) => {
                  if (selectedCat === category) {
                    return (
                      <div key={category} className="col-12 text-white">
                        <div className="card-header" style={{border:"none"}}>
                          <h3 style={{fontSize:"6vw"}}>{category}</h3>
                        </div>
                        <ul className="container-fluid" style={{border:"none"}}>
                          {items.map((item, index) => (
                            <li 
                              key={index} 
                              className="card d-flex justify-content-between align-items-start text-white"
                              style={{
                                border:"none",
                                marginBottom:"2vw",
                                background:"none"
                              }} 
                              onClick={() => handleFoodClick(item)}
                            >
                              <hr className="my-4" style={{
                                  borderTop: '2px solid grey', 
                                  width: '90vw', 
                                  position: 'relative', 
                                  left: '50%', 
                                  transform: 'translateX(-50%)' 
                              }} />
                              <div className="row">
                                <div className="col">
                                  <img src={item.imageUrl} alt="" style={{ width: "30vw", height: "auto" }} />
                                </div>
                                <div className="col" style={{ display: 'flex', flexDirection: 'column', marginTop:"4vw" }}>
                                  <div className="row">
                                    <p style={{ fontSize: "5vw", fontWeight: "600" }}>{selectedLanguage === "English" ? item.item : item.item_th}</p>
                                    <div className="col" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop:"4vw" }}>
                                      <span className="badge bg-success rounded-pill" style={{marginRight:"10vw"}}>{item.price} THB</span> 
                                    </div>
                                  </div>
                                </div>
                            </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  return null;
                })
              )}
            </div>
            <button 
              className="btn btn-success rounded-circle cart-btn" 
              style={{
                position: 'fixed',
                bottom: '5vw',
                right: '3vw',
                width: '15vw',
                height: '15vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '5vw',
              }}
              onClick={handleCartClick}
            >
              <div style={{ position: 'relative' }}>
                <i className="bi bi-cart" style={{ color: 'white', fontSize:'7vw' }}></i>
                <i className="rounded-circle" style={{
                  position: 'absolute',
                  top: '-0.8vw',
                  right: '-0.8vw',
                  color: 'white',
                  background: 'red',
                  width: '5vw',
                  height: '5vw',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '3vw',
                }}>
                  {calculateTotalQuantity()}
                </i>
              </div>
            </button>
          </>
        )}
      </div>
    ) : (
      <h2>Restaurant not found</h2>
    )}
  
  
    </div>
  );
  
};

export default ResNMenu;
