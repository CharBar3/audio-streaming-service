import "./MediaPlayer.css";

import { useState } from "react";
import VolumeModal from "./VolumeModal";

const MediaPlayer = ({ artistPicture, songTitle, artistName, song }) => {
  const [playStateStyle, setPlayStateStyle] = useState({
    playButtonDisplay: "block",
    pauseButtonDisplay: "none",
  });

  const [sliderState, setSliderState] = useState(0);

  const playAudio = () => {
    song.play();
    setPlayStateStyle({
      playButtonDisplay: "none",
      pauseButtonDisplay: "block",
    });
  };
  const pauseAudio = () => {
    song.pause();
    setPlayStateStyle({
      playButtonDisplay: "block",
      pauseButtonDisplay: "none",
    });
  };

  const [sliderClickedStatus, setSliderClickedStatus] = useState(false);

  const handleSliderPress = (e) => {
    setSliderClickedStatus(true);
    setSliderState();
  };

  const handleSliderRelease = (e) => {
    song.currentTime = e.target.value;
    setSliderClickedStatus(false);
  };

  song.ontimeupdate = (e) => {
    if (sliderClickedStatus === false) {
      setSliderState(song.currentTime);
    }
    if (song.currentTime === song.duration) {
      setPlayStateStyle({
        playButtonDisplay: "block",
        pauseButtonDisplay: "none",
      });
    }
  };

  const [volumeModalStatus, setVolumeModalStatus] = useState({
    display: "none",
  });

  const openVolumeChangeModal = () => {
    if (volumeModalStatus.display === "none") {
      setVolumeModalStatus({ display: "flex" });
    } else {
      setVolumeModalStatus({ display: "none" });
    }
  };

  return (
    <div className="media-player">
      <div className="media-player-song-info">
        <img src={artistPicture} alt="placeholder alt text" />
        <div className="media-player-song-title-artist-name">
          <span>{songTitle}</span>
          <a href="placeholder">{artistName}</a>
        </div>
      </div>
      <div className="media-player-controls">
        <div className="media-player-back-play-forward">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-skip-back"
          >
            <polygon points="19 20 9 12 19 4 19 20"></polygon>
            <line x1="5" y1="19" x2="5" y2="5"></line>
          </svg>
          <svg
            style={{ display: playStateStyle.playButtonDisplay }}
            onClick={() => playAudio()}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-play"
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          <svg
            style={{ display: playStateStyle.pauseButtonDisplay }}
            onClick={() => pauseAudio()}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-pause"
          >
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-skip-forward"
          >
            <polygon points="5 4 15 12 5 20 5 4"></polygon>
            <line x1="19" y1="5" x2="19" y2="19"></line>
          </svg>
        </div>
        <div className="media-player-time-slider">
          <input
            type="range"
            min="0"
            max={song.duration}
            value={sliderState}
            step="0.001"
            onMouseDown={(e) => handleSliderPress(e)}
            onMouseUp={(e) => handleSliderRelease(e)}
          />
        </div>
        <div className="media-player-volume">
          <svg
            onClick={() => openVolumeChangeModal()}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-volume-2"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        </div>
      </div>
      <VolumeModal song={song} style={volumeModalStatus} />
    </div>
  );
};

export default MediaPlayer;
