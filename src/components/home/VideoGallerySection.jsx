// src/components/VideoGallerySection.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// VIDEOS
import video1 from "../../assets/home/video1.mp4";
import video2 from "../../assets/home/video1.mp4";
import video3 from "../../assets/home/video1.mp4";
import video4 from "../../assets/home/video1.mp4";
import video5 from "../../assets/home/video1.mp4";
import video6 from "../../assets/home/video1.mp4";

const videos = [video1, video2, video3, video4, video5, video6];

export default function VideoGallerySection() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isBuffering, setIsBuffering] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  // sync playback state with real <video>
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    function onTime() {
      setCurrent(v.currentTime);
    }
    function onLoaded() {
      setDuration(v.duration || 0);
      setCurrent(v.currentTime || 0);
    }
    function onEnded() {
      setIsPlaying(false);
      setShowControls(true);
    }
    function onWaiting() {
      setIsBuffering(true);
    }
    function onPlaying() {
      setIsBuffering(false);
    }

    v.addEventListener("timeupdate", onTime);
    v.addEventListener("loadedmetadata", onLoaded);
    v.addEventListener("ended", onEnded);
    v.addEventListener("waiting", onWaiting);
    v.addEventListener("playing", onPlaying);

    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("loadedmetadata", onLoaded);
      v.removeEventListener("ended", onEnded);
      v.removeEventListener("waiting", onWaiting);
      v.removeEventListener("playing", onPlaying);
    };
  }, [index]);

  // play / pause control
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (isPlaying) {
      v.play().catch(() => {
        setIsPlaying(false);
      });
    } else {
      v.pause();
    }
  }, [isPlaying, index]);

  // mute toggle
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !!isMuted;
  }, [isMuted]);

  // Auto-hide controls
  useEffect(() => {
    if (isPlaying) {
      setShowControls(true);
      clearTimeout(controlsTimeoutRef.current);
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
    return () => clearTimeout(controlsTimeoutRef.current);
  }, [isPlaying, current]);

  const selectVideo = (i) => {
    if (i === index) return;
    setIndex(i);
    setIsPlaying(false);
    setCurrent(0);
    setShowControls(true);
    setTimeout(() => {
      const v = videoRef.current;
      if (v) {
        v.load();
      }
    }, 0);
  };

  const togglePlay = () => {
    setIsPlaying((p) => !p);
    setShowControls(true);
  };

  const toggleMute = () => {
    setIsMuted((m) => !m);
    setShowControls(true);
  };

  const handleProgressClick = (e) => {
    const rect = progressRef.current.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const newTime = percent * duration;
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrent(newTime);
    }
    setShowControls(true);
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  const handleKeyControls = (e) => {
    if (e.key === " " || e.key === "k") {
      e.preventDefault();
      togglePlay();
    } else if (e.key === "m") {
      toggleMute();
    } else if (e.key === "ArrowRight") {
      if (videoRef.current) {
        videoRef.current.currentTime = Math.min(duration, (videoRef.current.currentTime || 0) + 5);
      }
    } else if (e.key === "ArrowLeft") {
      if (videoRef.current) {
        videoRef.current.currentTime = Math.max(0, (videoRef.current.currentTime || 0) - 5);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyControls);
    return () => window.removeEventListener("keydown", handleKeyControls);
  }, [duration]);

  const formatTime = (s) => {
    if (!s || isNaN(s)) return "0:00";
    const mins = Math.floor(s / 60);
    const secs = Math.floor(s % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        duration: 0.8
      } 
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 15,
        duration: 0.6
      } 
    },
  };

  const videoVariants = {
    hidden: { 
      opacity: 0,
      scale: 1.1 
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    }
  };

  const playButtonVariants = {
    initial: { 
      scale: 1,
      opacity: 0.9 
    },
    hover: { 
      scale: 1.1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { 
      scale: 0.9 
    }
  };

  const controlsVariants = {
    hidden: { 
      opacity: 0,
      y: 20 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const smallVideoVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 20
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    selected: {
      scale: 1.08,
      y: -8,
      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
      borderColor: "#3b82f6",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-20 py-12 sm:py-16 lg:py-20 bg-linear-to-br from-gray-50 to-white">
      {/* Header */}
      <motion.div
        className="text-center mb-12 lg:mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#024369] mb-4"
        >
          Video <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600">Gallery</span>
        </motion.h2>
        
        <motion.div 
          className="h-1 w-20 bg-linear-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Main Video Player */}
      <motion.div 
        className="max-w-6xl mx-auto mb-8 sm:mb-10 lg:mb-12"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div 
          className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[520px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-black cursor-pointer group"
          onClick={handleVideoClick}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => {
            if (isPlaying) {
              clearTimeout(controlsTimeoutRef.current);
              controlsTimeoutRef.current = setTimeout(() => {
                setShowControls(false);
              }, 2000);
            }
          }}
        >
          {/* Actual Video Element */}
          <AnimatePresence mode="wait">
            <motion.video
              key={index}
              ref={videoRef}
              className="w-full h-full object-cover"
              preload="metadata"
              playsInline
              variants={videoVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <source src={videos[index]} type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>
          </AnimatePresence>

          {/* Buffering Indicator */}
          <AnimatePresence>
            {isBuffering && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-30"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mute Button - Top Right */}
          <AnimatePresence>
            {(showControls || !isPlaying) && (
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMute();
                }}
                variants={controlsVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 z-40"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.63 3.63a.996.996 0 000 1.41L7.29 9H6c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1.29l4.71 4.71c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L5.05 5.05a.996.996 0 00-1.41 0l-1.01 1.01zm17.14 15.14l-2.68-2.68a.996.996 0 10-1.41 1.41l2.68 2.68a.996.996 0 101.41-1.41z" />
                    <path d="M12.73 9L10 6.27a.996.996 0 10-1.41 1.41L11.32 9H12v6h-.68l2.73 2.73A.996.996 0 1015 16.73L12.73 14.5zM18.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                )}
              </motion.button>
            )}
          </AnimatePresence>

          {/* Central Play/Pause Button */}
          <AnimatePresence>
            {(!isPlaying || showControls) && (
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                variants={playButtonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                <motion.div 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-2xl border-2 border-white/20"
                  whileHover={{ 
                    boxShadow: "0 0 40px rgba(59, 130, 246, 0.5)",
                    background: "rgba(255, 255, 255, 1)"
                  }}
                >
                  {isPlaying ? (
                    <motion.svg 
                      key="pause"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-8 h-8 text-[#024369]" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </motion.svg>
                  ) : (
                    <motion.svg 
                      key="play"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-8 h-8 text-[#024369] ml-1" 
                      viewBox="0 0 16 16" 
                      fill="currentColor"
                    >
                      <path d="M10.804 8.697l-4.796 2.723V5.58l4.796 3.117z" />
                    </motion.svg>
                  )}
                </motion.div>
              </motion.button>
            )}
          </AnimatePresence>

          {/* Bottom Controls */}
          <AnimatePresence>
            {showControls && (
              <motion.div
                variants={controlsVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="absolute left-0 right-0 bottom-0 z-40 p-4 bg-linear-to-t from-black/80 via-black/50 to-transparent"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Progress Bar */}
                <div 
                  ref={progressRef}
                  onClick={handleProgressClick}
                  className="w-full h-2 bg-gray-600/80 rounded-full cursor-pointer group/progress mb-3"
                >
                  <motion.div 
                    className="h-full bg-linear-to-r from-blue-500 to-cyan-400 rounded-full relative"
                    style={{ width: `${duration ? (current / duration) * 100 : 0}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${duration ? (current / duration) * 100 : 0}%` }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover/progress:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.2 }}
                    />
                  </motion.div>
                </div>

                {/* Control Buttons */}
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-4">
                    <motion.button
                      onClick={togglePlay}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="hover:text-cyan-300 transition-colors"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? (
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M10.804 8.697l-4.796 2.723V5.58l4.796 3.117z" />
                        </svg>
                      )}
                    </motion.button>
                    <div className="text-sm font-medium">
                      {formatTime(current)} / {formatTime(duration)}
                    </div>
                  </div>

                  <motion.button
                    onClick={toggleMute}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="hover:text-cyan-300 transition-colors"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.63 3.63a.996.996 0 000 1.41L7.29 9H6c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1.29l4.71 4.71c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L5.05 5.05a.996.996 0 00-1.41 0l-1.01 1.01zm17.14 15.14l-2.68-2.68a.996.996 0 10-1.41 1.41l2.68 2.68a.996.996 0 101.41-1.41z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                      </svg>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Small Videos Grid */}
      <motion.div 
        className="max-w-6xl mx-auto mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h3 
          variants={itemVariants}
          className="text-xl font-semibold text-gray-700 mb-6 text-center"
        >
          More Videos
        </motion.h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 px-4">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              variants={smallVideoVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              animate={index === i ? "selected" : ""}
              onClick={() => selectVideo(i)}
              className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                index === i 
                  ? 'border-blue-500 shadow-xl' 
                  : 'border-gray-200 hover:border-gray-300 shadow-md'
              }`}
            >
              {/* Small Video Player */}
              <video
                className="w-full h-full object-cover"
                preload="metadata"
                muted
                playsInline
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => {
                  e.target.pause();
                  e.target.currentTime = 0;
                }}
              >
                <source src={video} type="video/mp4" />
              </video>

              {/* Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-all duration-300">
                <motion.div 
                  className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg
                    className="w-4 h-4 text-gray-700 ml-0.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M10.804 8.697l-4.796 2.723V5.58l4.796 3.117z" />
                  </svg>
                </motion.div>
              </div>

              {/* Video Number */}
              <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/70 rounded text-xs text-white font-medium">
                {i + 1}
              </div>

              {/* Active Indicator */}
              {index === i && (
                <motion.div 
                  className="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Video Counter */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.span 
          className="inline-block text-sm sm:text-base text-gray-600 font-medium bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
        >
          Video {index + 1} of {videos.length}
        </motion.span>
      </motion.div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>
    </section>
  );
}
