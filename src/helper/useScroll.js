import React, { useEffect, useRef, useState } from "react";

function useScroll(trigger = 0.8) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      //If element is visible removeEventListener
      if (
        ref.current.getBoundingClientRect().top <
        window.innerHeight * trigger
      ) {
        setVisible(true);
        window.removeEventListener("scroll", handleScroll, { passive: true });
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, []);
  useEffect(() => {
    if (
      ref.current.getBoundingClientRect().top <
      window.innerHeight * trigger
    ) {
      setVisible(true);
    }
  }, []);
  return [ref, visible];
}

export default useScroll;
