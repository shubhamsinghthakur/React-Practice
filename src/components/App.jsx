import React from "react";
import Heading1 from "./Heading";
import Heading2 from "./Heading2";
import VideoLink from "./Iframe";

let l1 =
  "https://www.youtube.com/embed/videoseries?si=_3eYUJKBbtKa39oq&amp;list=PL7tE2k4DDpoc5vmfLq5hU5ajLzuXtqZiD";

let l2 = "https://www.youtube.com/embed/oUCLsrnF8G4?si=QvDNiCJF5qGR7wUp";

function App() {
  return (
    <div>
      <Heading1 />
      <Heading2 />

      <p style={{ color: "grey" }}>2023</p>
      <button>Click Here</button>

      <p>The year is {new Date().getFullYear()}</p>

      <VideoLink link={l1} title="REact" />
      <VideoLink link={l2} title="silva" />
    </div>
  );
}

export default App;
