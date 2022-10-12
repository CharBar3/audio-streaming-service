import "./MediaPlayer.css";

import { useState } from "react";
import VolumeModal from "./VolumeModal";

import { ReactComponent as SkipBackIcon } from "../Icons/skip-back.svg";
import { ReactComponent as PlayIcon } from "../Icons/play.svg";
import { ReactComponent as PauseIcon } from "../Icons/pause.svg";
import { ReactComponent as SkipForwardIcon } from "../Icons/skip-forward.svg";
import { ReactComponent as VolumeTwoIcon } from "../Icons/volume-2.svg";

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
          <SkipBackIcon />
          <PlayIcon
            style={{ display: playStateStyle.playButtonDisplay }}
            onClick={() => playAudio()}
          />
          <PauseIcon
            style={{ display: playStateStyle.pauseButtonDisplay }}
            onClick={() => pauseAudio()}
          />
          <SkipForwardIcon />
        </div>
        <div className="media-player-time-slider">
          <input
            type="range"
            min="0"
            max={song.duration}
            value={sliderState}
            // added onchange event to remove react warning will adjust later
            onChange={() => console.log("change")}
            step="0.001"
            onMouseDown={(e) => handleSliderPress(e)}
            onMouseUp={(e) => handleSliderRelease(e)}
          />
        </div>
        <div className="media-player-volume">
          <VolumeTwoIcon onClick={() => openVolumeChangeModal()} />
        </div>
      </div>
      <VolumeModal song={song} style={volumeModalStatus} />
    </div>
  );
};

export default MediaPlayer;
