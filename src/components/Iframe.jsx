import React from "react";

function VideoLink(props) {
  // console.log(props);
  return <iframe src={props.link} title={props.title}></iframe>;
}

export default VideoLink;
