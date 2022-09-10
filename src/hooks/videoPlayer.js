import { useState, useEffect } from 'react';

const useVideoPlayer = (video) => {
 const [pause, setPause] = useState(true);
 const [progress, setProgress] = useState(0);

 const togglePause = () => {
  setPause(!pause);
 };
 useEffect(() => {
  pause ? video.current.pause() : video.current.play();
 }, [pause, video]);

 const handleOnTimeUpdate = () => {
  const progress = (video.current.currentTime / video.current.duration) * 100;
  console.log(video.current.currentTime);
  setProgress(progress);
 };
 const handleVideoProgress = (event) => {
  const manualChange = Number(event.target.value);
  video.current.currentTime = (video.current.duration / 100) * manualChange;
  setProgress(manualChange);
 };
 return {
  pause,
  progress,
  togglePause,
  handleOnTimeUpdate,
  handleVideoProgress,
 };
};

export default useVideoPlayer;
