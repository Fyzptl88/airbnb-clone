"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Lightbox from "./Lightbox";

export interface PropertyImage {
  src: string;
  alt: string;
  category: string;
  amenities?: string[];
}

interface PhotoTourProps {
  images: PropertyImage[];
  onClose: () => void;
}

/** Derive unique categories preserving insertion order, picking the first image as the thumbnail */
function getCategorySummaries(images: PropertyImage[]) {
  const seen = new Map<string, { thumb: string; index: number }>();
  images.forEach((img, i) => {
    if (!seen.has(img.category)) {
      seen.set(img.category, { thumb: img.src, index: i });
    }
  });
  return Array.from(seen.entries()).map(([name, { thumb }]) => ({ name, thumb }));
}

export default function PhotoTour({ images, onClose }: PhotoTourProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const stickyHeaderRef = useRef<HTMLDivElement>(null);
  const filterBarRef = useRef<HTMLDivElement>(null);
  const isScrollingToRef = useRef(false);

  const categories = getCategorySummaries(images);

  // Set initial active category
  useEffect(() => {
    if (categories.length > 0 && !activeCategory) {
      setActiveCategory(categories[0].name);
    }
  }, [categories, activeCategory]);

  // Prevent background scrolling when overlay is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Track which section is in view as user scrolls (Scroll spy)
  const handleScroll = useCallback(() => {
    if (isScrollingToRef.current) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    const stickyHeight = stickyHeaderRef.current?.offsetHeight || 190;
    const containerRect = container.getBoundingClientRect();

    let currentCategory = categories[0]?.name ?? "";

    for (let i = 0; i < categories.length; i++) {
      const cat = categories[i];
      const section = sectionRefs.current.get(cat.name);
      if (!section) continue;

      const sectionRect = section.getBoundingClientRect();
      const relativeTop = sectionRect.top - containerRect.top;

      // When section top is near or above the sticky header threshold
      if (relativeTop <= stickyHeight + 80) {
        currentCategory = cat.name;
      }
    }

    if (currentCategory && currentCategory !== activeCategory) {
      setActiveCategory(currentCategory);
      // Auto-scroll the thumbnail bar to keep active item in view
      const bar = filterBarRef.current;
      if (bar) {
        const thumb = bar.querySelector(`[data-category="${currentCategory}"]`) as HTMLElement | null;
        if (thumb) {
          thumb.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
        }
      }
    }
  }, [categories, activeCategory]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName);
    const section = sectionRefs.current.get(categoryName);
    const container = scrollContainerRef.current;
    if (section && container) {
      isScrollingToRef.current = true;
      const containerRect = container.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      const stickyHeight = stickyHeaderRef.current?.offsetHeight || 190;
      
      const targetScrollTop = container.scrollTop + (sectionRect.top - containerRect.top) - stickyHeight + 12;

      container.scrollTo({
        top: Math.max(0, targetScrollTop),
        behavior: "smooth",
      });

      setTimeout(() => {
        isScrollingToRef.current = false;
      }, 650);
    }

    // Scroll active thumbnail button into view
    const bar = filterBarRef.current;
    if (bar) {
      const thumb = bar.querySelector(`[data-category="${categoryName}"]`) as HTMLElement | null;
      if (thumb) {
        thumb.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  // Group images by category
  const groupedImages = categories.map((cat) => ({
    category: cat.name,
    images: images
      .map((img, globalIndex) => ({ ...img, globalIndex }))
      .filter((img) => img.category === cat.name),
  }));

  return (
    <div
      ref={scrollContainerRef}
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
        .photo-tour-filter-bar::-webkit-scrollbar {
          display: none;
        }
        .photo-tour-filter-bar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Sticky Top Header & Category Filter Bar */}
      <div ref={stickyHeaderRef} className="sticky top-0 bg-white z-30 shadow-[0_1px_0_0_#EBEBEB]">
        {/* Top bar row */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-border-light">
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

          <p className="text-sm font-semibold text-text-primary tracking-wide">
            Photo tour
          </p>

          <div className="flex items-center gap-2">
            <button
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-bg-hover transition-colors text-sm font-semibold text-text-primary underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              aria-label="Share listing photos"
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
              aria-label="Save listing photos"
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

        {/* Category Filter Thumbnails — Horizontally scrollable */}
        <div
          ref={filterBarRef}
          className="photo-tour-filter-bar flex items-start gap-4 px-6 md:px-12 py-3.5 overflow-x-auto bg-white"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                data-category={cat.name}
                onClick={() => handleCategoryClick(cat.name)}
                className={`flex-shrink-0 flex flex-col items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-xl transition-all duration-200 ${
                  isActive ? "opacity-100" : "opacity-75 hover:opacity-100"
                }`}
                aria-label={`Jump to ${cat.name}`}
              >
                <div
                  className={`w-[96px] h-[64px] rounded-xl overflow-hidden transition-all duration-200 ${
                    isActive
                      ? "ring-2 ring-text-primary ring-offset-2 scale-[1.02]"
                      : "ring-1 ring-border-light hover:ring-border-dark"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cat.thumb}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span
                  className={`text-xs leading-tight text-center max-w-[96px] line-clamp-2 transition-colors duration-200 ${
                    isActive
                      ? "font-semibold text-text-primary"
                      : "font-normal text-text-secondary group-hover:text-text-primary"
                  }`}
                >
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Photo Gallery Content Area */}
      <div className="max-w-[1240px] mx-auto py-12 px-6 lg:px-12">
        {groupedImages.map((group) => {
          const firstImg = group.images[0];
          const amenities = firstImg?.amenities ?? [];

          return (
            <div
              key={group.category}
              ref={(el) => {
                if (el) sectionRefs.current.set(group.category, el);
              }}
              className="pb-16 mb-16 border-b border-border-light last:border-b-0 last:mb-0 last:pb-8"
            >
              {/* Two-Column Category Row: Left Title/Amenities, Right Photos */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">
                
                {/* Left Column: Title and Description / Amenities */}
                <div className="w-full lg:w-[320px] xl:w-[360px] flex-shrink-0 lg:sticky lg:top-[190px]">
                  <h2 className="text-[26px] md:text-[30px] font-semibold text-text-primary tracking-tight leading-tight">
                    {group.category}
                  </h2>
                  {amenities.length > 0 && (
                    <p className="mt-3 text-[14px] md:text-[15px] text-text-secondary leading-relaxed font-normal">
                      {amenities.join(" · ")}
                    </p>
                  )}
                </div>

                {/* Right Column: Photos for this category */}
                <div className="flex-1 w-full">
                  <div
                    className={`grid gap-4 ${
                      group.images.length > 1
                        ? "grid-cols-1 sm:grid-cols-2"
                        : "grid-cols-1"
                    }`}
                  >
                    {group.images.map((img) => (
                      <button
                        type="button"
                        key={img.globalIndex}
                        className="group relative block w-full text-left rounded-2xl overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black bg-bg-secondary"
                        onClick={() => setLightboxIndex(img.globalIndex)}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-auto object-cover rounded-2xl transition-all duration-300 group-hover:brightness-95 cursor-pointer"
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
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
