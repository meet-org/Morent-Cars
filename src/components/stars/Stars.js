import React, { Component } from "react";
import "./stars.scss";

class Stars extends Component {
   constructor(props) {
      super(props);
      this.state = {
         classNames: Array(5).fill("far fa-star"),
      };
   }

   render() {
      for (let i = 0; i < this.props.stars; i++) {
         this.state.classNames.splice(i, 1, "fas fa-star");
      }

      return (
         <div className="stars">
            {this.state.classNames.map((name, index) => (
               <i className={name} key={index}></i>
            ))}
            {/* result(exp):
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i> */}
         </div>
      );
   }
}

export default Stars;
