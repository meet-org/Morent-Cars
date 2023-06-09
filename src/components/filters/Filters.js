import React, { Component } from "react";
import './filters.scss';

class Filters extends Component {
   render() {
      const { title, filters } = this.props;
      return (
         <div className="filters">
            <h5 className="title">{title}</h5>
            {filters.map((filter, index) => {
               return (
                  <div className="filter" key={index}>
                     <input type="checkbox" name={filter[0]} id={filter[0]} />
                     <label htmlFor={filter[0]}>
                        {filter[0]} <span>({filter[1]})</span>
                     </label>
                  </div>
               );
            })}
         </div>
      );
   }
}

export default Filters;
