import React from "react";
import World from "./World";
var Hello = React.createClass({
  render: function() {
    return (
      <div>
        Hello, webpack123!
        <World/>
      </div>
    );
  }
});
module.exports = Hello;