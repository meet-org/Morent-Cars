import React, { Component } from "react";
import "./darkmode.scss";

class Darkmode extends Component {
   constructor(props) {
      super(props);
      this.state = {
         theme: localStorage.getItem("theme"),
      };
   }

   darkModeToggler = () => {
      document.body.classList.toggle("dark");

      if (document.body.className.includes("dark")) {
         localStorage.setItem("theme", "dark");
      } else {
         localStorage.setItem("theme", "light");
      }
   };

   render() {
      if (this.state.theme === "dark") {
         document.body.classList.add("dark");
      }
      return (
         <div className="switch" onClick={this.darkModeToggler}>
            <div className="flicker"></div>
            <div className="moon"></div>
         </div>
      );
   }
}
export default Darkmode;
