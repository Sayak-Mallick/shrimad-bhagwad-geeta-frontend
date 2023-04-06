import React, { useState } from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer({ videoUrl }) {
    const [playing, setPlaying] = useState(false);

    const handlePlay = () => {
        setPlaying(true);
    };

    const handleStop = () => {
        setPlaying(false);
    };

    return (
        <div className="video-player-wrapper">
            <ReactPlayer
                className="react-player"
                url={videoUrl}
                width="100%"
                height="100%"
                playing={playing}
                controls={false}
            />
            <div className="controls">
                {!playing && (
                    <button onClick={handlePlay}>
                        <i className="fa fa-play">play</i>
                    </button>
                )}
                {playing && (
                    <button onClick={handleStop}>
                        <i className="fa fa-stop">stop</i>
                    </button>
                )}
            </div>
        </div>
    );
}

export default VideoPlayer;
