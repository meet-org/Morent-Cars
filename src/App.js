import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import Comments from "./components/comments/Comments";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         activeSidebar: false,
         width: window.innerWidth >= 992,
      };
   }

   activeSidebarHandler = () => {
      this.setState({ activeSidebar: !this.state.activeSidebar });
   };

   render() {
      return (
         <div className="App">
            <Navbar active={this.state.activeSidebar} activeSidebarHandler={this.activeSidebarHandler}></Navbar>
            <section className="main">
               <Sidebar active={this.state.activeSidebar || this.state.width}/>
               <main>
                  <Header />
                  <Comments/>
               </main>
            </section>
            <Footer></Footer>
         </div>
      );
   }
}

export default App;
