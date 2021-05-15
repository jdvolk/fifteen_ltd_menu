import React, { useState, useEffect, useRef } from 'react';

export default function UseInterval() {

  const videos = [1,2,3,4,5]
  const randomVideo = videos[Math.floor(Math.random() * videos.length)]

  const [video, setVideo] = useState(0);
  // const countRef = useRef(count);
  // countRef.current = count;

  // useEffect(() => {
  //     setInterval(() => {
  //       setVideo(randomVideo);
  //     }, 2000);
  //     return video
  // }, [video])




  return (
    <div>
    Count: {video}
    <br />
  </div>
  )

}