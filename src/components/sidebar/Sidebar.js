import React, { Component } from "react";
import "./sidebar.scss";
import Filters from "../filters/Filters";

class Sidebar extends Component {
   render() {
      return (
         <>
            {this.props.active ? (
               <aside>
                  <Filters
                     title="type"
                     filters={[
                        ["Sport", 10],
                        ["SUV", 12],
                        ["MPV", 16],
                        ["Sedan", 20],
                        ["Coupe", 14],
                        ["Hatchback", 14],
                     ]}
                  />
                  <Filters
                     title="capacity"
                     filters={[
                        ["2 Person", 10],
                        ["4 Person", 12],
                        ["6 Person", 16],
                        ["8 or More", 20],
                     ]}
                  />
                  <div className="range-filter">
                     <p className="title">price</p>
                     <input
                        type="range"
                        name="price"
                        id="price"
                        min={0}
                        max={100}
                     />
                     <label htmlFor="price">Max.$100.00</label>
                  </div>
               </aside>
            ) : undefined}
         </>
      );
   }
}

export default Sidebar;
