"use client";

import { PawPrint } from "lucide-react";
import { useEffect, useState } from "react";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-primary z-50 flex items-center justify-center splash-screen">
      <div className="text-white text-center">
        <PawPrint className="h-16 w-16 mb-4 animate-bounce" />
        <h1 className="text-3xl font-bold">PawCare</h1>
      </div>
    </div>
  );
}