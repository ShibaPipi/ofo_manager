import React from "react";
import Child from "./Child";
import { Button } from "antd";
import "./index.less";
import "antd/dist/antd.css";

export default class Life extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  handleClick2 = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div className="content">
        <p>react 生命周期介绍</p>
        <Button onClick={this.handleClick.bind(this)}>antd click</Button>
        <button onClick={this.handleClick2}>click2</button>
        <div>{this.state.count}</div>
        <Child name={this.state.count}>child count</Child>
      </div>
    );
  }
}
