import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/Footer.js";

class App extends Component {
   render() {
      return (
         <div className="App">
            <Navbar></Navbar>
            <br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br />
            <Footer></Footer>
         </div>
      );
   }
}

export default App;
