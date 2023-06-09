import React, { Component } from "react";
import "./header.scss";

class Header extends Component {
   constructor(props) {
      super(props);
      this.state = {
         src: "./images/porsche.png",
      };
   }

   changeImageHandler = (event) => {
      this.setState({ src: event.target.src });
      document
         .querySelectorAll(".picture")
         .forEach((picture) => picture.classList.remove("active"));
      event.currentTarget.classList.add("active");
   };

   render() {
      return (
         <header>
            <div className="left">
               <div className="picture picture_1">
                  <img src={this.state.src} alt="" />
               </div>
               <div
                  className="picture picture_2 active"
                  onClick={this.changeImageHandler}
               >
                  <img src="./images/porsche.png" alt="" />
               </div>
               <div
                  className="picture picture_3"
                  onClick={this.changeImageHandler}
               >
                  <img src="./images/inside-car-1.png" alt="" />
               </div>
               <div
                  className="picture picture_4"
                  onClick={this.changeImageHandler}
               >
                  <img src="./images/inside-car-2.png" alt="" />
               </div>
            </div>
            <div class="right">
               <div class="top">
                  <div class="right-title">
                     <h2>Nissan GT-R</h2>
                     <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                     </div>
                  </div>
                  <svg
                     width="20"
                     height="18"
                     viewBox="0 0 20 18"
                     fill="#f00"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M14.4399 0.0999756C12.6299 0.0999756 11.01 0.979979 10 2.32998C8.99 0.979979 7.37006 0.0999756 5.56006 0.0999756C2.49006 0.0999756 0 2.59998 0 5.68998C0 6.87998 0.19002 7.97998 0.52002 8.99998C2.10002 14 6.97 16.99 9.38 17.81C9.72 17.93 10.28 17.93 10.62 17.81C13.03 16.99 17.9 14 19.48 8.99998C19.81 7.97998 20 6.87998 20 5.68998C20 2.59998 17.5099 0.0999756 14.4399 0.0999756Z"
                        fill="#f00"
                     />
                  </svg>
               </div>

               <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Iusto placeat, modi temporibus neque explicabo asperiores
                  consequuntur incidunt provident optio magni.
               </p>

               <div class="details">
                  <span class="detail">TypeCar</span>
                  <span class="detail">Sport</span>
                  <span class="detail">Capacity</span>
                  <span class="detail">2Person</span>
                  <span class="detail">Steering</span>
                  <span class="detail">Manual</span>
                  <span class="detail">Gasoline</span>
                  <span class="detail">7OL</span>
               </div>

               <div class="bm">
                  <div class="lt">
                     <h2>$80.00 / </h2>days
                     <br />
                     <del>$100</del>
                  </div>
                  <div class="rt">
                     <a href="#">Rent Now</a>
                  </div>
               </div>
            </div>
         </header>
      );
   }
}

export default Header;
