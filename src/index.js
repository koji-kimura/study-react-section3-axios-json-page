import React from "react";
import ReactDOM from "react-dom";

import axios from "axios";

const url = "https://api.myjson.com/bins/13iv72";

axios.get(url).then(res => {
  console.log(res.data);
});

class App() extends React.Component{
  
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
