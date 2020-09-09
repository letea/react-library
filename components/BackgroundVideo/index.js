// node modules
import React from "react";
import PropTypes from "prop-types";

// local modules
import VideoPlayer from "../VideoPlayer";

// local files
import { useIsPlaying } from "./hooks";
import { Wrapper, VideoContainer } from "./style";

const BackgroundVideo = ({
  video = "",
  poster = "",
  isFixed = false,
  children
}) => {
  const [isPlaying, setIsPlaying] = useIsPlaying();

  return (
    <Wrapper isFixed={isFixed}>
      <VideoContainer isPlaying={isPlaying}>
        <VideoPlayer
          src={video}
          poster={poster}
          hasControls={false}
          hasContextMenu={false}
          isAutoPlay
          isPlaysInline
          isMuted
          isLoop
          isPauseOnBlur
          isCoverSize
          onPlay={setIsPlaying}
        />
      </VideoContainer>
      {children}
    </Wrapper>
  );
};

BackgroundVideo.propTypes = {
  video: PropTypes.string.isRequired,
  poster: PropTypes.string,
  isFixed: PropTypes.bool,
  children: PropTypes.node
};

export default BackgroundVideo;
