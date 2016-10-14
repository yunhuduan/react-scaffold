import React, {Component}    from "react";
import ReactDOM              from "react-dom";
import Hello              from "./components/Hello";
console.log(new Date().getTime())
ReactDOM.render(
  <Hello/>,
  document.getElementById('app')
);
