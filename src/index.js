import React from "react";
import ReactDOM from "react-dom/client";

let ele = document.querySelector("[id='root']");
let name = "Tom";
let year = "1928";

ReactDOM.createRoot(ele).render(
  <div>
    <h1>React tut by techgiddion</h1>
    <p>2023</p>
    <button>Click Here</button>
    <h1>{name}</h1>
    <p>{year}</p>
    <p>The year is {new Date().getFullYear()}</p>
  </div>
);
