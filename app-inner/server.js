import express from "express";
import React from "react";

import * as ReactDOMServer from "react-dom/server";
import App from "./frontend/app.jsx";

import path from "path";

const cors = require("cors");
const app = express();

app.use(express.static(path.resolve(__dirname, "./frontend/dist/assets")));
app.use(cors());

const PORT = 3001;
app.listen(PORT, () => {
  console.log("SSR server start at ", PORT);
});
