import React, { Component } from "react";
import "./header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: "./images/porsche.png",
    }
  }

  changeImageHandler = (event) => {
    this.setState({src: event.target.src});
    document.querySelectorAll(".picture").forEach((picture)=>picture.classList.remove("active"));
    event.currentTarget.classList.add("active");
  }

   render() {
      return (
         <header>
            <div className="left">
               <div className="picture picture_1">
                  <img src={this.state.src} alt="" />
               </div>
               <div className="picture picture_2 active" onClick={this.changeImageHandler}>
                  <img src="./images/porsche.png" alt=""/>
               </div>
               <div className="picture picture_3" onClick={this.changeImageHandler}>
                  <img src="./images/inside-car-1.png" alt=""/>
               </div>
               <div className="picture picture_4" onClick={this.changeImageHandler}>
                  <img src="./images/inside-car-2.png" alt=""/>
               </div>
            </div>
            <div className="right"></div>
         </header>
      );
   }
}

export default Header;
