import React, { Component } from "react";
import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";

class App extends Component {
   render() {
      return (
         <div className="App">
            <section className="main">
               <Sidebar/>
               <main>
                  <Header/>
               </main>
            </section>
         </div>
      );
   }
}

export default App;
