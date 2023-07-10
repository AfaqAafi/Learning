{/* <div className="parent">
  <div id="child">
    <h1></h1>
    <h2></h2>
  </div>
</div> */}



{/* <div className="parent">
  <div id="child">
    <h1></h1>
    <h2></h2>
  </div>
  <div id="child2">
    <h1></h1>
    <h2></h2>
  </div>
</div> */}

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "h1"),
    React.createElement("h2", {}, "he"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "h1"),
    React.createElement("h2", {}, "he"),
  ]),
]);

// TODO: its object after rendering to the DOM its convert to HTML
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);