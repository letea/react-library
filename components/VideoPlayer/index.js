// node modules
import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef
} from "react";
import screenfull from "screenfull";
import PropTypes from "prop-types";

// local modules - functions
import getVideoType from "@letea/functions/getVideoType";
import checkIsChrome from "@letea/functions/checkIsChrome";
import checkIsDesktop from "@letea/functions/checkIsDesktop";

// local modules - hooks
import useWindowBlur from "../../hooks/useWindowBlur";

// local files
import { DEFAULT_TRANSPARENT_IMAGE } from "./config";
import { Video } from "./style";

const VideoPlayer = ({
  src = "",
  poster = "",
  hasControls = false,
  hasContextMenu = false,
  hasPreload = true,
  isAutoPlay = false,
  isAbsolute = false,
  isPlaysInline = false,
  isMuted = false,
  isLoop = false,
  isPauseOnBlur = false,
  isCoverSize = false,
  onCanPlay = () => {},
  onError = () => {},
  onPlay = () => {},
  onPlaying = () => {},
  onTimeUpdate = () => {},
  onPause = () => {},
  onEnded = () => {},
  onVolumeChange = () => {},
  onFullscreen = () => {},
  onFullscreenExit = () => {}
}) => {
  const setVideoPlayerNotAllowDownload = (
    element = null,
    isNotAllow = true
  ) => {
    element &&
      element.setAttribute("controlsList", isNotAllow ? "nodownload" : "");
  };
  const setVideoPlayerNotAllowPictureInPicture = (
    element = null,
    isNotAllow = true
  ) => {
    element && (element.disablePictureInPicture = isNotAllow);
  };
  const setVideoPlayerNotAllowWithContextMenu = (event) => {
    event.preventDefault();
    return false;
  };
  const handleFullscreenEvent = () => {
    if (screenfull.isFullscreen) {
      onFullscreen && onFullscreen();
    } else {
      onFullscreenExit && onFullscreenExit();
    }
  };
  const videoRef = useRef();
  const [isPlay, setIsPlay] = useState(false);
  const isChrome = checkIsChrome();
  const isDesktop = checkIsDesktop();
  const isWindowBlur = useWindowBlur();
  const posterSrc = useMemo(() => {
    return !isPlay ? poster : "";
  }, [isPlay, poster]);
  const handleOnPlay = useCallback(
    (event) => {
      setIsPlay(true);
      onPlay && onPlay(event);
    },
    [setIsPlay, onPlay]
  );

  // Set Download & Picture In Picture Options
  useEffect(() => {
    if (videoRef && videoRef.current) {
      setVideoPlayerNotAllowDownload(videoRef.current);
      setVideoPlayerNotAllowPictureInPicture(videoRef.current);
    }
  }, [videoRef]);

  // Set Fullscreen Event
  useEffect(() => {
    if (screenfull.isEnabled) {
      if (isDesktop && isChrome) {
        window.addEventListener(
          "webkitfullscreenchange",
          handleFullscreenEvent
        );
      } else {
        screenfull.on("change", handleFullscreenEvent);
      }
    }

    return () => {
      if (screenfull.isEnabled) {
        if (isDesktop && isChrome) {
          window.addEventListener(
            "webkitfullscreenchange",
            handleFullscreenEvent
          );
        } else {
          screenfull.off("change", handleFullscreenEvent);
        }
      }
    };
  }, []);

  // Set Video Source
  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.src = src;
      if (isPlay) {
        setIsPlay(false);
      }
    }
  }, [videoRef, src, setIsPlay]);

  // Set Vide Pause on Blur or not
  useEffect(() => {
    if (isPlay && videoRef && videoRef.current && isPauseOnBlur) {
      if (isWindowBlur) {
        videoRef.current.pause();
      } else if (!isWindowBlur && videoRef.current.paused) {
        videoRef.current.play();
      }
    }
  }, [videoRef, isPauseOnBlur, isWindowBlur, isPlay]);

  return (
    <Video
      preload={hasPreload ? "true" : ""}
      autoPlay={isAutoPlay}
      controls={hasControls}
      playsInline={isPlaysInline}
      muted={isMuted || (isAutoPlay && !isDesktop)}
      loop={isLoop}
      onContextMenu={
        !hasContextMenu ? setVideoPlayerNotAllowWithContextMenu : () => {}
      }
      onCanPlay={onCanPlay}
      onError={onError}
      onPlay={handleOnPlay}
      onPlaying={onPlaying}
      onTimeUpdate={onTimeUpdate}
      onPause={onPause}
      onEnded={onEnded}
      onVolumeChange={onVolumeChange}
      poster={DEFAULT_TRANSPARENT_IMAGE}
      posterSrc={posterSrc}
      isCoverSize={isCoverSize}
      isAbsolute={isAbsolute}
      ref={videoRef}
    >
      <source src={src} type={getVideoType(src)} />
    </Video>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string,
  hasControls: PropTypes.bool,
  hasContextMenu: PropTypes.bool,
  hasPreload: PropTypes.bool,
  isAutoPlay: PropTypes.bool,
  isAbsolute: PropTypes.bool,
  isPlaysInline: PropTypes.bool,
  isMuted: PropTypes.bool,
  isLoop: PropTypes.bool,
  isPauseOnBlur: PropTypes.bool,
  isCoverSize: PropTypes.bool,
  onCanPlay: PropTypes.func,
  onError: PropTypes.func,
  onPlay: PropTypes.func,
  onPlaying: PropTypes.func,
  onTimeUpdate: PropTypes.func,
  onPause: PropTypes.func,
  onEnded: PropTypes.func,
  onVolumeChange: PropTypes.func,
  onFullscreen: PropTypes.func,
  onFullscreenExit: PropTypes.func
};

export default VideoPlayer;
