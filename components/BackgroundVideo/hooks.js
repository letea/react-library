// node modules
import { useState } from "react";

const useIsPlaying = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handleOnPlay = () => {
    setIsPlaying(true);
  };

  return [isPlaying, handleOnPlay];
};

export { useIsPlaying };
