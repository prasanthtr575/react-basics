import React from "react";

export default class Title extends React.Component {
  constructor() {
    super();
    this.title = "Welcome React";
  }

  render() {
    return (
      <div>
          <h1>{this.title}</h1>
      </div>
      );
  }
}
