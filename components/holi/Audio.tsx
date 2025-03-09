'use client'

import React, { useRef, useState, useEffect } from "react";

export default function Audio() {
  const audioRef = useRef<HTMLAudioElement | null>(null); // Define type as HTMLAudioElement or null
  const progressRef = useRef<HTMLInputElement | null>(null); // Define type for progressRef
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Toggle Play/Pause
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Update progress bar
// Update progress bar
// Update progress bar
const updateProgress = () => {
    if (audioRef.current) {
      const duration = (audioRef.current as HTMLAudioElement).duration; // Type assertion
      const currentTime = (audioRef.current as HTMLAudioElement).currentTime; // Type assertion
      
      if (typeof duration === 'number' && typeof currentTime === 'number') {
        const progressValue = (currentTime / duration) * 100;
        setProgress(progressValue);
      }
    }
  };
  
  

  // Format Time (MM:SS)
  const formatTime = (seconds: number): string => { // Explicit type for seconds
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateProgress);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, []);

  return (
    <div className="sigma_box">
      <span className="subtitle">Latest Holis</span>
      <h4 className="title mb-0">
        <a href="#">Holi- The Colour Festival</a>
      </h4>
      <ul className="sigma_sermon-info mb-0">
        <li>
          <i className="far fa-user" />
          Message From
          <a href="#" className="ms-2">
            <u>Yeshvant Parsad</u>
          </a>
        </li>
        <li className="mt-0 ms-4">
          <i className="far fa-calendar-check" />
          Aug 12, 2024
        </li>
      </ul>
      <ul className="sigma_sm square">
        <li>
          <a href="#">
            <i className="fab fa-youtube" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="far fa-file-pdf" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-share-alt" />
          </a>
        </li>
      </ul>

      {/* Audio Player */}
      <div className="sigma_audio-player">
        <button onClick={togglePlayPause} className="play-btn">
          {isPlaying ? <i className="fa fa-pause" /> : <i className="fa fa-play" />}
        </button>

        <div className="audio-wrapper">
          <audio ref={audioRef}>
            <source src="assets/audio/1.wav" type="audio/wav" />
          </audio>
        </div>

        {/* Progress Bar */}
        <div className="player-controls scrubber">
  <small className="current-time">
    {audioRef.current ? formatTime(audioRef.current.currentTime) : "0:00"}
  </small>
  <input
    type="range"
    ref={progressRef}
    value={progress}
    max="100"
    onChange={(e) => {
      if (audioRef.current) {
        // Ensure type safety by casting to number
        const seekTime = (parseFloat(e.target.value) / 100) * (audioRef.current as HTMLAudioElement).duration;
        (audioRef.current as HTMLAudioElement).currentTime = seekTime;
      }
      // Convert string value to number before setting state
      setProgress(parseFloat(e.target.value));
    }}
  />
  <small className="end-time">
    {audioRef.current ? formatTime(audioRef.current.duration) : "5:44"}
  </small>
  <i className="fa fa-volume-up" />
</div>


        {/* Next & Previous Buttons */}
        <div className="next_prev">
          <i className="fa fa-angle-left" />
          <i className="fa fa-angle-right" />
        </div>
      </div>
    </div>
  );
}
