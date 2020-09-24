import React from "react";
import "./styles.css";

import Card from "./Card";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  inputClickHandler = (e) => {
    let s = e.target.value.split("");
    this.setState({ data: s });
  };

  handleClick(index) {
    let a = this.state.data;
    a.splice(index, 1);
    this.setState({ data: a });
  }

  checkCondition() {
    if (this.state.data.length === 0) return <p></p>;
    else if (this.state.data.length < 3) {
      return <p>too short!</p>;
    } else {
      return <p>right size!</p>;
    }
  }

  splitDivs = () => {
    if (this.state.data.length > 0) {
      let obj = this.state.data;
      console.log(obj);
      return obj.map((item, index) => (
        <Card key={index} item={item} click={() => this.handleClick(index)} />
      ));
    }
  };

  render() {
    let divs = this.splitDivs();
    let condition = this.checkCondition();

    return (
      <div className="App">
        <input
          id="inputData"
          value={this.state.data.join("")}
          onChange={this.inputClickHandler}
        />
        <div>{divs}</div>
        <div>{condition}</div>
      </div>
    );
  }
}
