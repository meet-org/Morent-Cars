import React, { Component } from "react";
import axios from "axios";
import "./comments.scss";
import Comment from "../comment/Comment";

class Comments extends Component {
   constructor(props) {
      super(props);
      this.state = {
         showAll: false,
         profiles: [],
         comments: [],
         jobs: [
            "CEO at Bukalapak",
            "CEO at Amazon",
            "Front-End Developer",
            "Back-End Developer",
            "HR at Digikala",
            "Full Stack Developer",
         ],
         dates: [
            "21 July 2022",
            "20 July 2022",
            "13 May 2022",
            "30 Jun 2022",
            "01 Feb 2022",
            "09 Sep 2022",
         ],
      };
   }

   fetchProfiles = () => {
      axios
         .get("https://reqres.in/api/users?page=1")
         .then((response) => this.setState({ profiles: response.data.data }))
         .catch((err) => console.log(err));
   };

   fetchComments = () => {
      axios
         .get("https://jsonplaceholder.typicode.com/comments")
         .then((response) => this.setState({ comments: response.data }))
         .catch((err) => console.log(err));
   };

   componentDidMount = () => {
      this.fetchProfiles();
      this.fetchComments();
   };

   showAllHandler = () => {
      this.setState({ showAll: !this.state.showAll });
   };

   render() {
      const { showAll, profiles, jobs, dates, comments } = this.state;
      return (
         <>
            {showAll ? (
               <section className="comments">
                  <h2>
                     Reviews <span>{profiles.length}</span>
                  </h2>
                  {comments.length &&
                     profiles.map((profile, index) => {
                        return (
                           <Comment
                              profile={profile}
                              job={jobs[index]}
                              date={dates[index]}
                              comment={comments[index].body}
                              stars={3}
                              key={index}
                           />
                        );
                     })}
                  <h2 id="show" onClick={this.showAllHandler}>
                     Hide All <i className="fas fa-chevron-up"></i>
                  </h2>
               </section>
            ) : (
               <section className="comments">
                  <h2>
                     Reviews <span>{profiles.length}</span>
                  </h2>
                  {comments.length &&
                     profiles.map((profile, index) => {
                        if (index < 2) {
                           return (
                              <Comment
                                 profile={profile}
                                 job={jobs[index]}
                                 date={dates[index]}
                                 comment={comments[index].body}
                                 stars={3}
                                 key={index}
                              />
                           );
                        }
                     })}
                  <h2 id="show" onClick={this.showAllHandler}>
                     Show All <i className="fas fa-chevron-down"></i>
                  </h2>
               </section>
            )}
         </>
      );
   }
}

export default Comments;
