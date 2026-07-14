import { useState, useEffect } from "react";

const FADE_THRESHOLD = 10;   // % de scroll pour atteindre opacité 1
const MIN_WIDTH = 1700;       // en dessous de cette largeur, l'image reste invisible

function useScrollOpacity() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    let ticking = false;

    const calcOpacity = () => {
      // écran trop petit : image toujours invisible, on ignore le scroll
      if (window.innerWidth <= MIN_WIDTH) {
        setOpacity(0);
        ticking = false;
        return;
      }

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      let newOpacity;
      if (progress >= FADE_THRESHOLD) {
        newOpacity = 1;
      } else {
        newOpacity = progress / FADE_THRESHOLD;
      }

      setOpacity(Math.max(0, Math.min(1, newOpacity)));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(calcOpacity);
        ticking = true;
      }
    };

    calcOpacity();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return opacity;
}

export default useScrollOpacity;
