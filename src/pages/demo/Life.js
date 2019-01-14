import React from "react";
import Child from "./Child";

export default class Life extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    handleClick() {
        this.setState({
            count: this.state.count + 1,
        })
    }

    handleClick2 = () => {
        this.setState({
            count: this.state.count + 1,
        })
    };

    render() {
        return <div>
            <p>react 生命周期介绍</p>
            <button onClick={this.handleClick.bind(this)}>click</button>
            <button onClick={this.handleClick2}>click2</button>
            <div>{this.state.count}</div>
            <Child name={this.state.count}>child count</Child>
        </div>
    }
}