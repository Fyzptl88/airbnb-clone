"use client";

import { useEffect, useState, useCallback, useRef } from "react";

interface PropertyImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: PropertyImage[];
  initialIndex: number;
  onClose: () => void;
}

export default function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev));
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    },
    [onClose, handleNext, handlePrev]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    // Focus the container to ensure immediate keyboard interaction without clicking
    containerRef.current?.focus();
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      ref={containerRef}
      tabIndex={-1}
      className="fixed inset-0 z-[200] bg-black text-white flex flex-col outline-none animate-in fade-in duration-300"
      aria-modal="true"
      role="dialog"
    >
      {/* Top Header */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between p-4 z-10">
        <button
          onClick={onClose}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Close lightbox"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 28L8.7 16.7a1 1 0 010-1.4L20 4" />
          </svg>
        </button>
        <div className="text-sm font-semibold tracking-wide">
          {currentIndex + 1} / {images.length}
        </div>
        <button
          onClick={onClose}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Close lightbox"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 6L26 26M26 6L6 26" />
          </svg>
        </button>
      </div>

      {/* Main Sliding Track */}
      <div className="flex-1 overflow-hidden relative">
        <div
          className="w-full h-full flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="w-full h-full flex-shrink-0 flex items-center justify-center p-4 md:p-16"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="max-w-full max-h-full object-contain"
                loading={Math.abs(currentIndex - i) <= 1 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full border border-white/20 hover:bg-white/10 hover:border-white transition-all bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Previous image"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 28L8.7 16.7a1 1 0 010-1.4L20 4" />
          </svg>
        </button>
      )}

      {currentIndex < images.length - 1 && (
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full border border-white/20 hover:bg-white/10 hover:border-white transition-all bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Next image"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 4l11.3 11.3a1 1 0 010 1.4L12 28" />
          </svg>
        </button>
      )}
    </div>
  );
}
