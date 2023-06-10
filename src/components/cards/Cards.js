import React, { Component } from "react";
import "./cards.scss";
import Card from "../card/Card";

class Cards extends Component {
   constructor(props) {
      super(props);
      this.state = {
         recent: [
            {
               name: "Koenigsegg",
               cs: "sport",
               img: "./images/car1.png",
               gasLimit: "90L",
               space: "2People",
               price: 99,
            },
            {
               name: "Nissan GT-R",
               cs: "sport",
               img: "./images/car2.png",
               gasLimit: "80L",
               space: "2People",
               price: 80,
               discount: 100,
            },
            {
               name: "Rolls-Royce",
               cs: "sport",
               img: "./images/car3.png",
               gasLimit: "70L",
               space: "4People",
               price: 96,
            },
         ],
         recommendation: [
            {
               name: "All New Rush",
               cs: "SUV",
               img: "./images/car4.png",
               gasLimit: "70L",
               space: "6People",
               price: 72,
               discount: 80,
            },
            {
               name: "CR-V",
               cs: "SUV",
               img: "./images/car5.png",
               gasLimit: "80L",
               space: "6People",
               price: 80,
            },
            {
               name: "All New Terios",
               cs: "SUV",
               img: "./images/car6.png",
               gasLimit: "90L",
               space: "6People",
               price: 74,
               discount: 90,
            },
         ],
      };
   }

   render() {
      const { title } = this.props;
      return (
         <>
            <section className="cards-section">
               <div className="top">
                  <h4 className="title">{title}</h4>
                  <a href="#">View All</a>
               </div>
               <div className="cards-container">
                  {title.includes("Recent")
                     ? this.state.recent.map((car, index) => {
                          return (
                             <Card car={car} key={index}/>
                          );
                       })
                     : this.state.recommendation.map((car, index) => {
                          return (
                             <Card car={car} key={index}/>
                          );
                       })}
               </div>
            </section>
         </>
      );
   }
}

export default Cards;
