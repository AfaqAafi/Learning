import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super();
    console.log("Constructor called user class");
    this.state = {
      count: 1,
      data: [],
    };
  }

  componentDidMount() {
    console.log("Componendidmounted user class");
    this.getData();
  }

  async getData() {
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts/5");
      const data = await resp.json();
      this.setState({
        data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate() {
    console.log("componentDidUpdate about");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount user class");
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="about_card">
        <h2>{this.props.name}</h2>
        <p>Locations: {this.props.location}</p>
        <p>Contact: {this.props.email}</p>
        {/*//* Gotcha */}
        <p>Api call: {this.state.data.title}</p>
        <div>{this.state.count}</div>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Counter
        </button>
      </div>
    );
  }
}

export default UserClass;
