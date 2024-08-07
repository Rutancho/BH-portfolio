"use client";

import React, { useRef, useEffect } from "react";

export default function Animation() {
  const ref = useRef(null);

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  return (
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <lottie-player
        id="firstLottie"
        ref={ref}
        autoplay
        loop
        mode="normal"
        src="/Animation_1.json"
        style={{ width: "600px", height: "600px" }}
      ></lottie-player>
    </div>
  );
}
