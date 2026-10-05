"use client";

import { useState } from "react";
import PhotoTour, { type PropertyImage } from "./PhotoTour";

const images: PropertyImage[] = [
  {
    src: "/images/room-1.png",
    alt: "Spacious living room 1 with natural light and dining table",
    category: "Living room 1",
    amenities: ["Sofa", "Air conditioning", "Ceiling fan", "TV"],
  },
  {
    src: "/images/living-room-2.jpg",
    alt: "Living room 2 with stone wall, dining nook and private jacuzzi hot tub",
    category: "Living room 2",
    amenities: ["Ceiling fan", "Hot tub"],
  },
  {
    src: "/images/room-3.png",
    alt: "Full kitchen with wooden cabinets and countertop",
    category: "Full kitchen",
    amenities: [
      "Freezer",
      "Fridge",
      "Blender",
      "Cooker",
      "Cooking basics",
      "Kettle",
      "Microwave",
      "Toaster",
      "Wine glasses",
      "Coffee",
      "Crockery and cutlery",
    ],
  },
  {
    src: "/images/kitchen-2.jpg",
    alt: "Full kitchen dining area and gas stove cooktop",
    category: "Full kitchen",
    amenities: [
      "Freezer",
      "Fridge",
      "Blender",
      "Cooker",
      "Cooking basics",
      "Kettle",
      "Microwave",
      "Toaster",
      "Wine glasses",
      "Coffee",
      "Crockery and cutlery",
    ],
  },
  {
    src: "/images/room-2.png",
    alt: "Bedroom with double bed, curtains and natural lighting",
    category: "Bedroom",
    amenities: [
      "Double bed",
      "Air conditioning",
      "Bed linen",
      "Ceiling fan",
      "Clothes storage",
      "Cot",
      "Hangers",
      "Iron",
      "Room-darkening blinds",
      "Cleaning available during stay",
      "Cleaning products",
      "Long-term stays allowed",
      "Private entrance",
      "Wifi",
    ],
  },
  {
    src: "/images/room-4.png",
    alt: "Full bathroom with mirror and glass shower enclosure",
    category: "Full bathroom",
    amenities: ["Bathtub", "Shower", "Hair dryer", "Toiletries", "Hot water", "Shampoo"],
  },
  {
    src: "/images/gym.jpg",
    alt: "Indoor fitness gym with cardio equipment and weights",
    category: "Gym",
    amenities: ["Treadmill", "Exercise bike", "Free weights", "Dumbbells", "Air conditioning"],
  },
  {
    src: "/images/room-5.png",
    alt: "Exterior view of the villa property architecture",
    category: "Exterior",
    amenities: ["Private patio or balcony", "Outdoor furniture", "Outdoor dining area", "Sun loungers"],
  },
  {
    src: "/images/pool.jpg",
    alt: "Courtyard outdoor swimming pool with crystal blue water",
    category: "Pool",
    amenities: ["Private outdoor pool", "Open all year", "Sun loungers", "Pool towels"],
  },
  {
    src: "/images/additional-1.jpg",
    alt: "Relaxing patio corner with rattan armchair and stone wall",
    category: "Additional photos",
    amenities: ["Corner lounge", "Indoor plants", "Accent lighting", "Rattan furniture"],
  },
];

export default function HeroSection() {
  const [showPhotoTour, setShowPhotoTour] = useState(false);

  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 pt-6 sm:px-6 lg:px-8 xl:px-10">
      {showPhotoTour && (
        <PhotoTour images={images} onClose={() => setShowPhotoTour(false)} />
      )}

      <div className="mb-6 rounded-[28px] border border-border-light bg-white/90 px-4 py-4 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur sm:px-6 sm:py-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3">
            <span className="inline-flex w-fit items-center rounded-full bg-[#fff2f5] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-airbnb">
              Oceanfront escape
            </span>
            <h1 className="max-w-4xl text-[28px] font-semibold leading-tight text-text-primary sm:text-[34px] lg:text-[40px]">
              Luxury Oceanfront Villa — Stunning Views &amp; Private Pool
            </h1>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-text-primary shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              aria-label="Share this listing"
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
              Share
            </button>

            <button
              className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-text-primary shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              aria-label="Save this listing"
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
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[28px] ring-1 ring-black/5">
        <div
          className="hidden h-[520px] grid-cols-4 grid-rows-2 gap-2 md:grid"
        >
          <button
            type="button"
            className="group col-span-2 row-span-2 relative overflow-hidden rounded-[24px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-inset"
            onClick={() => setShowPhotoTour(true)}
          >
            <span className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="eager"
            />
          </button>

          {images.slice(1, 5).map((image, index) => (
            <button
              key={image.src}
              type="button"
              className="group relative overflow-hidden rounded-[24px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-inset"
              onClick={() => setShowPhotoTour(true)}
            >
              <span className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          className="relative aspect-[4/3] w-full text-left md:hidden"
          onClick={() => setShowPhotoTour(true)}
        >
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute bottom-4 right-4 rounded-full border border-border bg-white/90 px-3 py-1 text-xs font-semibold text-text-primary backdrop-blur-sm">
            1 / {images.length}
          </div>
        </button>

        <button
          onClick={() => setShowPhotoTour(true)}
          className="absolute bottom-4 right-4 z-10 hidden items-center gap-2 rounded-full border border-text-primary bg-white px-4 py-[7px] text-sm font-semibold text-text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-bg-hover md:flex"
          aria-label="Show all photos"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M3 3h4v4H3V3zm6 0h4v4H9V3zm-6 6h4v4H3V9zm6 0h4v4H9V9z"
              stroke="#222222"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Show all photos
        </button>
      </div>
    </section>
  );
}
