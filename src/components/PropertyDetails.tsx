import {
  CookingPot,
  Wifi,
  Tv,
  AirVent,
  Waves,
  Umbrella,
  BriefcaseBusiness,
  DoorOpen,
  Palmtree,
  Snowflake,
  CalendarDays,
  Sparkles,
  Users,
  BedDouble,
  Bed,
  Bath,
  Star,
  Award,
  Clock,
  type LucideIcon,
} from "lucide-react";

interface AmenityItem {
  label: string;
  icon: LucideIcon;
}

const amenityList: AmenityItem[] = [
  { label: "Kitchen", icon: CookingPot },
  { label: "Wifi", icon: Wifi },
  { label: "TV", icon: Tv },
  { label: "Air conditioning", icon: AirVent },
  { label: "Private pool", icon: Waves },
  { label: "Beach access", icon: Umbrella },
  { label: "Dedicated workspace", icon: BriefcaseBusiness },
  { label: "Self check-in", icon: DoorOpen },
];

interface FeatureCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

const featureCards: FeatureCard[] = [
  {
    title: "Outdoor entertainment",
    description: "The pool and alfresco dining are great for summer trips.",
    icon: Palmtree,
  },
  {
    title: "Designed for staying cool",
    description: "Beat the heat with the A/C and ceiling fan.",
    icon: Snowflake,
  },
  {
    title: "Self check-in",
    description: "You can check in with the building staff.",
    icon: DoorOpen,
  },
  {
    title: "Flexible stays",
    description: "Ideal for slow, coastal weekends and family getaways.",
    icon: CalendarDays,
  },
];

import Calendar from "./Calendar";

export default function PropertyDetails() {
  return (
    <div className="space-y-6 text-text-primary">
      <div className="rounded-[28px] border border-border-light bg-white/90 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)] backdrop-blur sm:p-8">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-sm font-medium text-text-secondary">
          <span className="rounded-full bg-[#fff2f5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-airbnb">
            <Star className="mr-1 inline h-3 w-3 fill-current" />
            5.0 guest rating
          </span>
          <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />3 guests</span>
          <span aria-hidden="true">•</span>
          <span className="flex items-center gap-1"><BedDouble className="h-3.5 w-3.5" />1 bedroom</span>
          <span aria-hidden="true">•</span>
          <span className="flex items-center gap-1"><Bed className="h-3.5 w-3.5" />1 bed</span>
          <span aria-hidden="true">•</span>
          <span className="flex items-center gap-1"><Bath className="h-3.5 w-3.5" />1 bathroom</span>
        </div>

        <h2 className="mb-3 text-[26px] font-semibold leading-tight text-text-primary sm:text-[30px]">
          Entire serviced apartment in Candolim, India
        </h2>

        <div className="grid gap-4 rounded-[20px] bg-[linear-gradient(135deg,#fff9f7_0%,#fff_100%)] p-4 sm:grid-cols-[1.2fr_0.8fr] sm:items-center">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Award className="h-8 w-8 flex-shrink-0 text-airbnb" strokeWidth={1.5} />
              <span className="text-lg font-semibold">Guest favourite</span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 rounded-[18px] bg-white/80 px-4 py-3 sm:justify-end">
            <div className="text-center">
              <div className="text-2xl font-bold">4.95</div>
              <div className="mt-1 flex justify-center gap-[2px] text-[10px] text-amber-500">
                <Star className="h-3 w-3 fill-current" /><Star className="h-3 w-3 fill-current" /><Star className="h-3 w-3 fill-current" /><Star className="h-3 w-3 fill-current" /><Star className="h-3 w-3 fill-current" />
              </div>
            </div>
            <div className="border-l border-border-light pl-3 text-center">
              <div className="text-2xl font-bold">19</div>
              <div className="text-xs font-semibold underline">Reviews</div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[28px] border border-border-light bg-white p-6 shadow-[0_12px_36px_rgba(15,23,42,0.05)] sm:p-8">
        <div className="mb-6 flex items-center gap-4 border-b border-border-light pb-6">
          <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#1f4638] text-[10px] font-bold uppercase tracking-[0.24em] text-white">
            Mirashya
          </div>
          <div>
            <div className="flex items-center gap-2 text-lg font-semibold">
              Hosted by Mirashya Homes
            </div>
            <div className="flex items-center gap-1 text-sm text-text-secondary">
              <Clock className="h-3.5 w-3.5" />
              2 years hosting
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {featureCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div key={card.title} className="rounded-[20px] bg-[#f8f7f4] p-4">
                <div className="mb-2 flex items-center gap-2 text-lg font-semibold">
                  <IconComponent className="h-5 w-5 text-airbnb" strokeWidth={1.8} />
                  {card.title}
                </div>
                <p className="text-sm text-text-secondary">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-[28px] border border-border-light bg-white p-6 shadow-[0_12px_36px_rgba(15,23,42,0.05)] sm:p-8">
        <h2 className="mb-6 flex items-center gap-2 text-[22px] font-semibold">
          <Sparkles className="h-6 w-6 text-airbnb" strokeWidth={1.8} />
          What this place offers
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {amenityList.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3 rounded-[16px] bg-[#faf8f4] px-4 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-[#f3efe8]">
                <IconComponent className="h-5 w-5 flex-shrink-0 text-text-secondary" strokeWidth={1.6} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
        <button className="mt-6 rounded-full border border-text-primary px-5 py-3 text-sm font-semibold text-text-primary transition-colors hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black">
          Show all amenities
        </button>
      </div>

      <div className="rounded-[28px] border border-border-light bg-white p-6 shadow-[0_12px_36px_rgba(15,23,42,0.05)] sm:p-8">
        {/* Calendar */}
        <Calendar />
      </div>
    </div>
  );
}
