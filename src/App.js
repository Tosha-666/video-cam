import { useState, useEffect, useRef } from 'react';
import useVideoPlayer from './hooks/videoPlayer';
import './App.css';

function App() {
 const videoPlayer = useRef(null);
 const { pause, progress, togglePause, handleOnTimeUpdate } =
  useVideoPlayer(videoPlayer);

 useEffect(() => {
  console.log(videoPlayer.current.currentTime);
 });

 return (
  <div className='app'>
   <p>Video</p>
   <video
    ref={videoPlayer}
    src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    // controls
   ></video>
   <button onClick={togglePause}></button>
  </div>
 );
}

export default App;
