/**
 * In this example, the button toggles a state variable to switch between a playing and a paused state. However,
 * in order to actually play or pause the video, toggling state is not enough.
 * You also need to call play() and pause() on the DOM element for the <video>.
 * Add a ref to it, and make the button work.
 */
import { useState, useRef } from "react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    console.log(videoRef.current);
    nextIsPlaying ? videoRef.current.play() : videoRef.current.pause();
  }

  return (
    <>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <video width="250" ref={videoRef}>
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
