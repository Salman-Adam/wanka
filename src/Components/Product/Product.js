import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'
const Product = ({ singleItem }) => {
    return (

        <div className=' mb-4'>
            <div className='cart-card'>
                <div className={`discount ${singleItem.discountValue === 0 ? "hidden" : "active"}`}>
                    <span className={singleItem.discountValue === 0 ? "hidden" : "active"}>{singleItem.discountValue}%</span>
                </div>
                <div className='c-img'>
                    <Link to={`/product/${singleItem._id}`}><img src={singleItem.image} alt='' /></Link>
                </div>
                <div className='c-name'><Link to={`/product/${singleItem._id}`}>{singleItem.name}</Link></div>
                <div className='c-price'>
                    <span className={singleItem.discountValue === 0 ? "static" : "old"}>{singleItem.price}$</span> 
                    <span className={singleItem.discountValue === 0 ? "hidden" : "active new"}>{Math.round(singleItem.discountValue/singleItem.price*100)}$</span>
                </div>
                <div className='c-btn'>
                    <button type='button' className=''><Link to={`/product/${singleItem._id}`}>الشراء</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Product