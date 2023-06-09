import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";

class App extends Component {
   render() {
      return (
         <div className="App">
            <Navbar></Navbar>
            <section className="main">
               <Sidebar/>
               <main>
                  <Header/>
               </main>
            </section>
            <Footer></Footer>
         </div>
      );
   }
}

export default App;
