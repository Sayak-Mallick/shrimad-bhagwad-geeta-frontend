import React, { useState, useEffect } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import ReactPlayer from "react-player/youtube";
import { Row, Col, Image } from "react-bootstrap";

export default function Slider({ videos }) {
  const [slideIndex, setSlideIndex] = useState(1);
  const [currentUrl, setCurrentUrl] = useState(
    videos?.length > 0 ? videos[0]?.url : null
  );
  const [isPlaying, setIsPlaying] = useState(false);

  const nextSlide = () => {
    if (slideIndex !== videos?.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === videos?.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(videos?.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    if (videos && slideIndex > 0 && slideIndex <= videos.length) {
      setCurrentUrl(videos[slideIndex - 1]?.url);
    }
  }, [slideIndex, videos]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    let interval;
    if (!isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [slideIndex, isPlaying]);

  return (
    <div className="container-slider">
      {/* <ReactPlayer url={currentUrl} onPlay={handlePlay} onPause={handlePause} /> */}
      <div className="player-wrapper">
        <ReactPlayer
          url={currentUrl}
          className="react-player"
          // playing
          width="100%"
          height="100%"
          onPlay={handlePlay}
          onPause={handlePause}
        />
      </div>

      {videos?.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          ></div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: videos?.length }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
