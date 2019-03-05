import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

type RootType =
  | React.FunctionComponentElement<any>
  | React.FunctionComponentElement<any>[];
const appRoot: RootType = <App />;
const root: Element | null = document.getElementById("root");

ReactDOM.render(appRoot, root);
