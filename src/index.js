import express from "express";
import { createServer } from "http";
import { json } from "body-parser";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./router";

const app = express();

mongoose.connect("mongodb://localhost:auth/auth");

const whitelist = ["http://localhost:8080"];
const corsOptions = {
  origin: (origin, callback) => {
    const originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  }
};

app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(json({ type: "*/*" }));
app.use("/", routes);

const port = process.env.PORT || 3000;
const server = createServer(app);
server.listen(port);
console.log(`Listening on ${port}`);
