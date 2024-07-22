"use client";
import { useState, useEffect } from "react";

export const useLink = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobile = window.screen.width <= 640;
    setIsMobile(isMobile);
  }, []);

  const link = isMobile
    ? "https://api.whatsapp.com/send?phone=+6282126753060"
    : "https://web.whatsapp.com/send?phone=+6282126753060";

  return {
    isMobile,
    link,
  };
};
