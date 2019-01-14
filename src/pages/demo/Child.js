import React from "react";

export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    render() {
        return <div>{this.props.name}</div>
    }
}