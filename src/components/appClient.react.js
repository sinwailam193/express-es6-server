import React, { Component } from "react";

export default class AppClient extends Component {
    onClick = () => {
        alert("clicked");
    };

    render() {
        const { onClick } = this;

        return (
            <div>
                <h1>Hello World from server</h1>
                <button onClick={onClick}>Click!</button>
            </div>
        );
    }
}
