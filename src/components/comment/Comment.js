import React, { Component } from "react";
import "./comment.scss";
import Stars from "../stars/Stars";

class Comment extends Component {
   render() {
      const { profile, job, date, comment, stars } = this.props;
      return (
         <div className="comment-container">
            <div className="profile">
               <img src={profile.avatar} alt="" />
               <div className="informations">
                  <div className="information">
                     <div className="name">
                        {profile.first_name + profile.last_name}
                     </div>
                     <div className="job">{job}</div>
                  </div>
                  <div className="details">
                     <div className="date">{date}</div>
                     <Stars stars={stars} />
                  </div>
               </div>
            </div>
            <div className="comment">{comment}</div>
         </div>
      );
   }
}

export default Comment;
