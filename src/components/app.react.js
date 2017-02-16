import React, { Component } from "react";

export default class App extends Component {
    render() {
        const { onClick } = this;

        return (
            <html>
                <head>
                    <title>Universal App with React</title>
                </head>
                <body>
                    <div id="container"></div>

                    <link rel="stylesheet" type="text/css" href="index.css" />
                    <script src="vendor.js"></script>
                    <script src="bundle.js"></script>
                </body>
            </html>
        );
    }
}
