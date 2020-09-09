// node modules
import { useState, useEffect } from "react";

// local modules - hooks
import useInterval from "./useInterval";

const defaultProps = {
  defaultCounts: 0,
  speed: 1000,
  startCountdown: true,
  formatToHHMMSS: false
};

const secondsToHHMMSS = (number = 0) => {
  var totalSeconds = parseInt(number, 10);
  var hours = Math.floor(totalSeconds / 3600);
  var minutes = Math.floor((totalSeconds - hours * 3600) / 60);
  var seconds = totalSeconds - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return hours + ":" + minutes + ":" + seconds;
};

const useCountdown = (props = defaultProps) => {
  const {
    defaultCounts,
    speed,
    startCountdown,
    formatToHHMMSS
  } = Object.assign({}, defaultProps, props);
  const [counts, setCounts] = useState(defaultCounts);
  const [isFinish, setIsFinish] = useState(false);
  const result = formatToHHMMSS ? secondsToHHMMSS(counts) : counts;

  useEffect(() => {
    setCounts(defaultCounts);
    setIsFinish(false);
  }, [defaultCounts]);

  useInterval({
    callback: () => {
      setCounts(counts - 1);
    },
    duration: speed,
    startInterval: startCountdown && !isFinish
  });

  useEffect(() => {
    if (counts === 0) {
      setIsFinish(true);
    }
  }, [counts, isFinish]);

  return [result, isFinish];
};

export default useCountdown;
