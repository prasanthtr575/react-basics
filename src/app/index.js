import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
  constructor() {
    super();
    this.title = "React - Hello World";
  }

  render() {
    return (
      <div>
          <h1>{this.title}</h1>
      </div>
      );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
