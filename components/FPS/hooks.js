// node modules
import { useEffect, useRef } from "react";

const useFPS = () => {
  const ref = useRef();

  useEffect(() => {
    let lastTime = Date.now();
    let currentTime;
    let fps = 0;
    let animateRequest;

    const getFPS = () => {
      currentTime = Date.now();
      fps = Math.round(1000 / (currentTime - lastTime));
      lastTime = currentTime;
      ref.current.innerText = `${fps} FPS`;
      animateRequest = requestAnimationFrame(getFPS);
    };

    getFPS();

    return () => {
      cancelAnimationFrame(animateRequest);
    };
  }, []);

  return { ref };
};

export { useFPS };
