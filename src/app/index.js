import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
          <h1>React - Hello World</h1>
      </div>
      );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<App/>, app);
