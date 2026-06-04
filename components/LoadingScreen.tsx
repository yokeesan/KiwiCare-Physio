"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    // Only show once per session to avoid annoying the user on every page load
    const hasLoaded = sessionStorage.getItem("initialLoadDone");
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    // Stage 1: Fade in while blurred (Hide and seek)
    setTimeout(() => {
      setAnimationStage(1);
    }, 100);

    // Stage 2: Slowly unblur and identify the logo
    setTimeout(() => {
      setAnimationStage(2);
    }, 1500);

    // Stage 3: Start fading out the entire screen after 4.5 seconds
    const timer = setTimeout(() => {
      setFading(true);
      // Remove from DOM after transition completes
      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("initialLoadDone", "true");
      }, 700); // fade out duration
    }, 4500); // 4.5 seconds total loading screen time

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center justify-center">
        <div 
          className={`w-64 h-64 md:w-80 md:h-80 relative mb-6 transition-all duration-[1500ms] ease-in-out ${
            animationStage === 0 ? "opacity-0 blur-2xl scale-90" : 
            animationStage === 1 ? "opacity-100 blur-xl scale-95" : 
            "opacity-100 blur-0 scale-100"
          }`}
        >
          <Image
            src="/KiwiCare.png"
            alt="KiwiCare Physio Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
