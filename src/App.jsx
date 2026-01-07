import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import AIAssistant from "./components/AIAssistant";

// Lazy load heavy components for faster initial load
const Background3D = lazy(() => import("./components/Background3D"));

const Home = lazy(() => import("./pages/Home").then(module => ({ default: module.Home })));
const NotFound = lazy(() => import("./pages/NotFound").then(module => ({ default: module.NotFound })));

// Preloader Component - Shows during initial load
const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    // Complete loading after progress reaches 100
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        onComplete();
      }, 800); // Wait for fade out animation
    }, 1500); // Minimum preloader time

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Logo/Brand */}
      <div className="relative mb-8">
        <div className="w-20 h-20 rounded-full border-2 border-emerald-500/30 flex items-center justify-center overflow-hidden">
          <img 
            src="/logo.webp" 
            alt="Logo" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin" />
      </div>
      
      {/* Brand Name */}
      <h1 className="text-3xl font-bold text-white mb-2">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
          Sufyan Liaqat
        </span>
      </h1>
      <p className="text-gray-400 text-sm mb-8 font-mono">Full-Stack Developer</p>

      {/* Progress Bar */}
      <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <p className="text-emerald-400/70 text-xs mt-3 font-mono">
        {Math.min(Math.round(progress), 100)}% Loading...
      </p>
    </div>
  );
};

// Static background fallback (super lightweight)
const StaticBackground = () => (
  <div className="fixed inset-0 z-[-1] bg-black">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-70 pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80 pointer-events-none" />
  </div>
);

// Loading fallback component for routes
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center z-10 relative">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-emerald-400">Loading...</p>
    </div>
  </div>
);

function App() {
  const [isPreloading, setIsPreloading] = useState(true);
  const [show3D, setShow3D] = useState(false);
  const [showAssistant, setShowAssistant] = useState(false);
  const [is3DVisible, setIs3DVisible] = useState(false);

  useEffect(() => {
    if (!isPreloading) {
      // Delay 3D background by 3 seconds after preloader completes
      const timer3D = setTimeout(() => {
        setShow3D(true);
        // Add small delay before making visible for smooth fade-in
        setTimeout(() => setIs3DVisible(true), 100);
      }, 3000);

      // Show AI Assistant after 4 seconds (appears with nice animation)
      const timerAssistant = setTimeout(() => {
        setShowAssistant(true);
      }, 4000);

      return () => {
        clearTimeout(timer3D);
        clearTimeout(timerAssistant);
      };
    }
  }, [isPreloading]);

  return (
    <>
      {/* Preloader */}
      {isPreloading && <Preloader onComplete={() => setIsPreloading(false)} />}
      
      {/* Static background shown immediately, replaced by 3D later */}
      {!show3D && <StaticBackground />}
      
      {/* 3D Background - Delayed and fades in */}
      {show3D && (
        <Suspense fallback={<StaticBackground />}>
          <div 
            className={`transition-opacity duration-1500 ease-in-out ${
              is3DVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Background3D />
          </div>
        </Suspense>
      )}
      
      {/* AI Assistant - Shows after preloading */}
      {!isPreloading && <AIAssistant />}
      
      <Toaster />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
