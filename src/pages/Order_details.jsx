import './Order_details.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import cakeLogo from '../assets/siam.png'

const Order_details = () => {

    const orderlist = [
        {quantity: 1, menu_name: 'Tom-Yum Kung', note: 'No vegetable', price: 70},
        {quantity: 1, menu_name: 'Fried rice', note: 'No vegetable', price: 70},
        {quantity: 1, menu_name: 'Rice', price: 10}
    ]

    const totalPrice = orderlist.reduce((sum, order) => sum + order.price, 0);

    return(
        <div>
            <div className='back-but'>
                <Link to = '/history'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                </Link>
            </div>
            <div className="top-container">
                <h1>Order Details</h1>
                <p>29 October 2024 11:56</p>
            </div>
            <div className="stall-container">
                <img src= {cakeLogo}></img>
                <p>Siam Brasserie</p>
            </div>
            <p id='menu'>Menu</p>
            {orderlist.map((order,index) => (
            <div className="menu-container">
                <div className="menu-quantity">
                    {order.quantity && <p>{order.quantity}</p>}
                </div>
                <div className="menu-name">
                    {order.menu_name && <p>{order.menu_name}</p>}
                    {order.note && <p id='note'>Note: {order.note}</p>}
                </div>
                <div className="menu-price">
                    {order.price && <p>{order.price} Baht</p>}
                </div>
            </div>
            ))}
            <hr></hr>
            <div className="total-price">
                <p>Total</p>
                <p>{totalPrice} Baht</p>
            </div>
            <div className="payment">
                <p>Payment Method</p>
                <p>Cash</p>
            </div>
        </div>
    )
}

export default Order_details;
