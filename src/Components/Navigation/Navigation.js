import React from 'react'
import './Navigation.css'
import { NavLink } from 'react-router-dom'
import { RiMenu2Fill, RiHome3Fill, RiShoppingCart2Fill, RiUser3Line, RiPhoneFill } from 'react-icons/ri'
const Navigation = () => {

    // document.querySelectorAll('.item').forEach(li => {
    //     li.addEventListener('click', function () {
    //         document.querySelectorAll('.item').forEach(otherItem => {
    //             otherItem.classList.remove('active');
    //         });
    //         this.classList.add('active');
    //     });
    // });

    return (
        <div className='Navigation'>
            <ul>
                <li className='item'>
                    <NavLink to="/Menu" >
                        <RiMenu2Fill />
                        <span>القائمة</span>
                    </NavLink>
                </li>
                <li className='item'>
                    <NavLink to="/Profile" >
                        <RiUser3Line />
                        <span>العروض</span>
                    </NavLink>
                </li>
                <li className='item active'>
                    <NavLink to="/" >
                        <RiHome3Fill />
                        <span>الرئيسية</span>
                    </NavLink>
                </li>
                <li className='item'>
                    <NavLink to="/Contact" >
                        <RiPhoneFill />
                        <span>تواصل معنا</span>
                    </NavLink>
                </li>
                <li className='Cart_Navigate item'>
                    <NavLink to="/Cart" >
                        <em>22</em>
                        <RiShoppingCart2Fill />
                        <span>السلة</span>

                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navigation
