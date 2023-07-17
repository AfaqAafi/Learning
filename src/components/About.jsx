import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super();
    console.log("Constructing About");
  }

  componentDidMount() {
    console.log("componentDidMount about");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate about");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount about");
  }

  render() {
    return (
      <div className="body_container">
        <h1>About Page Food App</h1>
        <UserClass
          name={"Muhammad Afaq"}
          location={"Lahore"}
          email={"mafaq3615@gmail.com"}
        />
      </div>
    );
  }
}
export default About;

//* Life Cycle
//* About instant created when its loaded or mounted
//* About Constructor called
//* Render the dom
//* child class component loaded instant created
//* constructor called
//* render method called to update UI
//* componentdidmount called
//* parent component did mount called
