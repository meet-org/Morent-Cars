import React, { Component } from 'react';

class FooterItem extends Component {
    state = {  } 
    render() { 
        const {title,item1, item2, item3, item4} = this.props;
        return (
            <>
                <div className="footer-list-item">
                    <h2 className="title">{title}</h2>
                    <ul>
                        <li>{item1}</li>
                        <li>{item2}</li>
                        <li>{item3}</li>
                        <li>{item4}</li>
                    </ul>
                </div>
            </>
        );
    }
}
 
export default FooterItem;