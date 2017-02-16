import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./components/app.react";

const PORT = 4000;
const app = express();

app.use(express.static("public"));
app.get("/", (req, res) => {
    const html = ReactDOMServer.renderToString(React.createElement(App));
    res.send(html);
});

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});
