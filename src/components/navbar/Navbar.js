import React, { Component } from 'react';
import './navbar.scss';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <nav>
                    <div className="profile-box">
                        <i className='fa fa-bars'></i>
                        <span className='notif'><img className='profile-details' src="./images/icons/notification-bing.svg" alt="" /></span>
                        <span><img className='profile-details' src="./images/icons/like.svg" alt="" /></span>
                        <span><img className='profile-details' src="./images/icons/setting.svg" alt="" /></span>
                        <img className='profile-img' src="./images/profile.jpg" alt="profile" />
                    </div>
                    <div className="logo-box">
                        <h1 className='logo'>MORENT</h1>
                    </div>
                    <div className="serch-filter">
                        <div className="search-box">
                            <img className='icon' src="./images/icons/search-normal.svg" alt="" />
                            <input type="search" placeholder='Search something here' name="" id="" />
                        </div>
                        <span className='filter-icon'><img className='icon' src="./images/icons/filter.svg" alt="" /></span>
                    </div>
                </nav>
            </>
        );
    }
}
 
export default Navbar;