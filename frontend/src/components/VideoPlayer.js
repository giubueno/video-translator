import React from 'react';

function VideoPlayer() {
  return (
    <div className="video-player">
      <video width="600" controls>
        <source src="your-video-source.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
