import React, { Component } from 'react';
import './footer.scss';
import FooterItem from './FooterItem';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <footer>
                    <div className="logo-box">
                        <h2 className='logo'>MORENT</h2>
                        <p className='description'>
                            Our vision is to provide convenience
                            and help increase your sales business.
                        </p>
                    </div>
                    <div className="item-container">
                        <FooterItem title='About' item1='how it works' item2='Featured' item3='Partnership' item4='bussiness relation'></FooterItem>
                        <FooterItem title='Social' item1='discord' item2='instagram' item3='twitter' item4='facebook'></FooterItem>
                        <FooterItem title='Community' item1='events' item2='blog' item3='podcast' item4='invite a friend'></FooterItem>
                    </div>
                    <div className="copy-section">
                        <div className="policy-section">
                            <h6>Privacy & Policy</h6>
                            <h6>Terms & Condition</h6>
                        </div>
                        <h6>&copy;2022 MORENT.All rights reserved</h6>
                    </div>
                </footer>
            </>
        );
    }
}
 
export default Footer;