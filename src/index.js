import React from "react";
import ReactDOM from "react-dom";

//hello world is a jsx expression
const element = <h1> Hello World</h1>;
// Babel will compile down the above to a call to React.createElement;

console.log(element);

//first arg is the element to be rendered, second arg is where in the real dom it's located
ReactDOM.render(element, document.getElementById("root"));
