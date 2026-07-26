"use client";

import { useEffect, useState } from "react";
import Lightbox from "./Lightbox";

interface PropertyImage {
  src: string;
  alt: string;
}

interface PhotoTourProps {
  images: PropertyImage[];
  onClose: () => void;
}

export default function PhotoTour({ images, onClose }: PhotoTourProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Prevent background scrolling when overlay is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300); // Wait for animation
  };

  return (
    <div
      className={`fixed inset-0 z-[100] bg-white overflow-y-auto transition-transform duration-300 ease-in-out ${
        isClosing ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
      style={{ animation: isClosing ? "none" : "slideUp 0.3s ease-out forwards" }}
    >
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0.5; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
      
      {/* Sticky Top Navigation Bar */}
      <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-6 h-20 border-b border-border-light">
        <button
          onClick={handleClose}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-bg-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
          aria-label="Close photo tour"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 28L8.7 16.7a1 1 0 010-1.4L20 4" />
          </svg>
        </button>

        <div className="flex items-center gap-4">
          <button
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-bg-hover transition-colors text-sm font-semibold text-text-primary underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M27 18v9a2 2 0 01-2 2H7a2 2 0 01-2-2v-9"
                stroke="#222222"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 3v20M9 10l7-7 7 7"
                stroke="#222222"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="hidden sm:inline">Share</span>
          </button>
          <button
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-bg-hover transition-colors text-sm font-semibold text-text-primary underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 00-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05A6.98 6.98 0 009 4a6.98 6.98 0 00-7 7c0 7 7 12.27 14 17z"
                stroke="#222222"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="hidden sm:inline">Save</span>
          </button>
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-bg-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            aria-label="Close photo tour"
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
      </div>

      {/* Photo Grid Layout */}
      <div className="max-w-[732px] mx-auto py-10 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((img, index) => {
            // First image full width, next two half width (on desktop), then full, then half...
            const isFullWidth = index % 3 === 0;
            return (
              <button
                type="button"
                key={index}
                className={`relative text-left block w-full p-0 border-none bg-transparent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-inset ${
                  isFullWidth ? "md:col-span-2" : "md:col-span-1"
                }`}
                onClick={() => setLightboxIndex(index)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
                  style={{ maxHeight: isFullWidth ? 'auto' : 'auto' }}
                  loading="lazy"
                />
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <Lightbox 
          images={images} 
          initialIndex={lightboxIndex} 
          onClose={() => setLightboxIndex(null)} 
        />
      )}
    </div>
  );
}
