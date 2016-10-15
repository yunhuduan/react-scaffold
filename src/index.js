import React, {Component}    from "react";
import ReactDOM              from "react-dom";
import World              from "./components/World";
console.log(new Date().getTime())
ReactDOM.render(
  <World/>,
  document.getElementById('app')
);