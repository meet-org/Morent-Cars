import React, { Component } from "react";
import "./card.scss";
import Rent from "../rent/Rent";

class Card extends Component {
   constructor() {
      super();
      this.state = {
         like: false,
      };
   }

   likeToggler = () => {
      this.setState({ like: !this.state.like });
   };

   render() {
      const { name, cs, img, gasLimit, space, price, discount } = this.props.car;
      return (
         <>
            <div className="card">
               <div className="information">
                  <div className="name">
                     <h2>{name}</h2>{cs}
                  </div>
                  {this.state.like ? (
                     <i className="fa fa-heart" onClick={this.likeToggler}></i>
                  ) : (
                     <i
                        className="fa fa-heart-o"
                        onClick={this.likeToggler}
                     ></i>
                  )}
               </div>
               <div className="img-container">
                  <img src={img} alt="" />
               </div>
               <div className="features">
                  <div className="feature gasLimit">
                     <img src="./images/icons/gas station.svg" alt="" />
                     <span>{gasLimit}</span>
                  </div>
                  <div className="feature Manual">
                     <img src="./images/icons/car.svg" alt="" />
                     <span>Manual</span>
                  </div>
                  <div className="feature space">
                     <img src="./images/icons/profile-2user.svg" alt="" />
                     <span>{space}</span>
                  </div>
               </div>
               <Rent price={price} discount={discount} />
            </div>
         </>
      );
   }
}

export default Card;
