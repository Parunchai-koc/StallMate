import './History.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import SiamBrasserielogo from '../assets/siam.png'
import fourman_noodle from '../assets/fourman_noodle.png'


const History = () => {

    const order_history =[
        {img: SiamBrasserielogo, date_time:'29 Oct 24, 11:56', stall:'Siam Brasserie', order_status: true, price: 150},
        {img: fourman_noodle, date_time: '31 Oct 24, 18:48', stall: 'Siam Brasserie', order_status: true, price: 75 }]

    return(
        <div>
            <div className='back-but'>
                <Link to = '/Home'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                </Link>
            </div>
            <div className='Fav-Head'>
                <p>Order History</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </div>
            <div className='history_card'>
                {order_history.map((history,index) => (
                    <div className='card_content'>
                        <div className="history_card_image">
                            {history.img && <img src={history.img} />} 
                        </div>
                        <div className="history_card_date">
                            {history.date_time && <p>{history.date_time}</p>}
                        </div>
                        <div className='history_card_stall'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ec221f" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                            {history.stall && <p>{history.stall}</p>}
                        </div>
                        <div className='history_card_status'>
                            {history.order_status && <p>Order completed</p>}
                        </div>
                        <div className="history_card_price">
                            {history.price && <p>{history.price} Baht</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default History;