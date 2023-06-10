import React, { Component } from "react";
import "./rent.scss";

class Rent extends Component {
   render() {
      const { price, discount } = this.props;
      return (
         <>
            <div className="rent-details">
               <div className="lt">
                  <h2>${price}.00 / </h2>days
                  <br />
                  {discount ? <del>$100</del> : undefined}
                  <del>$100</del>
               </div>
               <div className="rt">
                  <a href="#">Rent Now</a>
               </div>
            </div>
         </>
      );
   }
}

export default Rent;
