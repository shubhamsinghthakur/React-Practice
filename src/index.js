import React from "react";
import ReactDOM from "react-dom/client";

let ele = document.querySelector("[id='root']");
let name = "Tom";
let year = "1928";
let l1 =
  "https://www.youtube.com/embed/videoseries?si=_3eYUJKBbtKa39oq&amp;list=PL7tE2k4DDpoc5vmfLq5hU5ajLzuXtqZiD";

ReactDOM.createRoot(ele).render(
  <div>
    <h1 className="heading">React tut by techgiddion</h1>
    <p style={{ color: "grey" }}>2023</p>
    <button>Click Here</button>
    <h1>{name}</h1>
    <p>{year}</p>
    <p>The year is {new Date().getFullYear()}</p>

    <iframe src={l1} title="React Playlist"></iframe>
  </div>
);
