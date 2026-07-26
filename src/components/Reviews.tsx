import { SprayCan, CheckCircle, Key, MessageSquare, Map, Tag, Star } from "lucide-react";

interface CategoryRating {
  name: string;
  score: string;
  icon: any;
}

const categories: CategoryRating[] = [
  { name: "Cleanliness", score: "5.0", icon: SprayCan },
  { name: "Accuracy", score: "5.0", icon: CheckCircle },
  { name: "Check-in", score: "5.0", icon: Key },
  { name: "Communication", score: "5.0", icon: MessageSquare },
  { name: "Location", score: "4.8", icon: Map },
  { name: "Value", score: "4.8", icon: Tag },
];
interface Review {
  id: string;
  name: string;
  date: string;
  text: string;
}

const reviews: Review[] = [
  {
    id: "1",
    name: "Sarah",
    date: "October 2026",
    text: "Absolutely stunning villa! The ocean views were exactly as pictured, and the private pool was the perfect temperature. We spent every evening watching the sunset from the patio. Highly recommend for a family getaway.",
  },
  {
    id: "2",
    name: "Michael",
    date: "September 2026",
    text: "A truly luxurious experience. The interior design is flawless and the amenities provided were top-notch. The host was incredibly responsive and accommodated our late check-in request without any issues.",
  },
  {
    id: "3",
    name: "Jessica",
    date: "August 2026",
    text: "The perfect summer escape. The house was spotless and cool thanks to the excellent A/C. We loved cooking in the spacious kitchen. The beach access is just a short walk away. Will definitely be returning next year!",
  },
  {
    id: "4",
    name: "David",
    date: "July 2026",
    text: "Everything about our stay was wonderful. The bed was incredibly comfortable and the neighborhood is very quiet at night. It felt very private and secure. A great place to unwind and disconnect.",
  },
  {
    id: "5",
    name: "Emily",
    date: "June 2026",
    text: "We had a fantastic girls' trip here. The outdoor entertainment area is fantastic for lounging and the house had plenty of space for the four of us. The host left a lovely welcome basket which was a nice touch.",
  },
  {
    id: "6",
    name: "Robert",
    date: "May 2026",
    text: "Beautiful property and very well maintained. The wifi was strong enough for me to work remotely for a few days. The only minor issue was finding the exact driveway at night, but the host provided clear instructions.",
  },
];

export default function Reviews() {
  return (
    <div className="py-12 border-b border-border-light text-text-primary">
      {/* Reviews Header */}
      <div className="mb-10">
        <div className="flex flex-col items-start gap-1">
          <h2 className="flex items-center gap-2 text-[32px] font-bold text-text-primary">
            <Star className="h-8 w-8 fill-current" />
            5.0 · 5 reviews
          </h2>
          <button className="text-base font-semibold text-text-secondary underline transition-colors hover:text-text-primary">
            How reviews work
          </button>
        </div>

        <div className="mt-8 font-semibold text-lg">Guest favourite</div>
        <div className="mt-1 text-base text-text-secondary">
          This home is a guest favourite based on ratings, reviews and reliability
        </div>
      </div>

      {/* 7-Column Stats Row */}
      <div className="flex flex-col md:flex-row mb-12 border-b md:border-b-0 border-border-light overflow-x-auto">
        
        {/* Column 1: Overall rating */}
        <div className="flex flex-col py-4 md:py-0 md:pr-4 flex-1 border-b md:border-b-0 md:border-r border-border-light min-w-[140px]">
          <div className="text-sm font-semibold mb-3">Overall rating</div>
          <div className="flex flex-col gap-1 w-full max-w-[120px]">
            {/* 5 stars */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold w-2">5</span>
              <div className="h-1 bg-border-light w-full rounded-full overflow-hidden flex">
                <div className="h-full bg-text-primary w-[95%]"></div>
              </div>
            </div>
            {/* 4 stars */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold w-2">4</span>
              <div className="h-1 bg-border-light w-full rounded-full overflow-hidden flex">
                <div className="h-full bg-text-primary w-[4%]"></div>
              </div>
            </div>
            {/* 3 stars */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold w-2">3</span>
              <div className="h-1 bg-border-light w-full rounded-full overflow-hidden flex">
                <div className="h-full bg-text-primary w-[1%]"></div>
              </div>
            </div>
            {/* 2 stars */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold w-2">2</span>
              <div className="h-1 bg-border-light w-full rounded-full overflow-hidden flex">
                <div className="h-full bg-text-primary w-0"></div>
              </div>
            </div>
            {/* 1 star */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold w-2">1</span>
              <div className="h-1 bg-border-light w-full rounded-full overflow-hidden flex">
                <div className="h-full bg-text-primary w-0"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Columns 2-7: Categories */}
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          const isLast = index === categories.length - 1;
          return (
            <div 
              key={cat.name} 
              className={`flex flex-col py-4 md:py-0 md:px-4 flex-1 border-b md:border-b-0 ${!isLast ? 'md:border-r border-border-light' : ''} min-w-[110px]`}
            >
              <div className="text-sm font-semibold mb-2">{cat.name}</div>
              <div className="text-lg font-bold mb-3">{cat.score}</div>
              <Icon className="w-7 h-7 text-text-primary mt-auto" strokeWidth={1.5} />
            </div>
          );
        })}
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-10">
        {reviews.map((review) => (
          <div key={review.id} className="flex flex-col">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-[#1F4638] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                {review.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-base">{review.name}</h3>
                <div className="text-sm text-text-secondary">{review.date}</div>
              </div>
            </div>
            <p className="text-base leading-6 text-text-primary">
              {review.text}
            </p>
          </div>
        ))}
      </div>

      {/* Show all button */}
      <div className="mt-10">
        <button className="px-6 py-3 rounded-lg border border-text-primary text-base font-semibold hover:bg-bg-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black">
          Show all 23 reviews
        </button>
      </div>
    </div>
  );
}
