"use client";

import React, { useEffect, useState } from "react";

export default function LoadingLine() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Step 1: Rapid start
    const timer1 = setTimeout(() => setProgress(30), 100);
    const timer2 = setTimeout(() => setProgress(75), 400);
    const timer3 = setTimeout(() => setProgress(100), 800);
    
    // Step 2: Fade out after completion
    const timer4 = setTimeout(() => setVisible(false), 1200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-1 bg-slate-900/10">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 shadow-[0_0_12px_#3b82f6] transition-all duration-500 ease-out"
        style={{ width: `${progress}%`, opacity: progress === 100 ? 0 : 1 }}
      />
    </div>
  );
}
