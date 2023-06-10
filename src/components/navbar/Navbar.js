import React, { Component } from 'react';
import './navbar.scss';

class Navbar extends Component {
    constructor(props) {
        super(props);
     }

    render() { 
        return (
            <>
                <nav>
                    <div className="profile-box">
                    {this.props.active ? (<i className='fa fa-close' onClick={this.props.activeSidebarHandler}></i>) : (<i className='fa fa-bars' onClick={this.props.activeSidebarHandler}></i>)}
                        <img className='profile-details' src="./images/icons/notification-bing.svg" alt="" />
                        <img className='profile-details' src="./images/icons/like.svg" alt="" />
                        <img className='profile-details' src="./images/icons/setting.svg" alt="" />
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