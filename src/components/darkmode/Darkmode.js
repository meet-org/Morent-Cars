import React, { Component } from "react";
import "./darkmode.scss";

class Darkmode extends Component {
   constructor(props) {
      super(props);
      this.state = {
         theme: "light",
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

   setThemeInLocalStorage = () => {
      let localStorageTheme = localStorage.getItem("theme");

      if (localStorageTheme === "dark") {
         document.body.classList.add("dark");
      }
   };

   render() {
      return (
         <div className="switch" onClick={this.darkModeToggler}>
            <div className="flicker"></div>
            <div className="moon"></div>
         </div>
      );
   }
}
export default Darkmode;
