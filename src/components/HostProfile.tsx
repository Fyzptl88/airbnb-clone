import { Shield, Star, Award, Clock } from "lucide-react";

export default function HostProfile() {
  return (
    <div className="py-12 border-b border-border-light text-text-primary">
      <h2 className="text-[22px] font-semibold mb-6">Meet your host</h2>
      
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left Side: Host Card */}
        <div className="w-full lg:w-[350px] flex-shrink-0">
          <div className="bg-[#f0ede6] rounded-3xl p-8 flex flex-col items-center justify-center shadow-[0_12px_24px_rgba(0,0,0,0.06)] h-full">
            <div className="relative">
              <div className="w-28 h-28 bg-[#1f4638] rounded-full flex items-center justify-center text-4xl font-bold text-white mb-2 shadow-sm">
                M
              </div>
              <div className="absolute bottom-0 right-0 bg-airbnb text-white p-1.5 rounded-full border-2 border-[#f0ede6]">
                <Shield className="w-4 h-4 fill-current" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-center mt-2">Mirashya</h3>
            <div className="flex items-center gap-1 font-semibold mt-1">
              <Award className="w-4 h-4" />
              Superhost
            </div>
            <div className="text-text-secondary mt-2 text-sm font-semibold text-center">
              Joined in 2024
            </div>
          </div>
        </div>

        {/* Right Side: Host Info */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8">
            <div className="flex flex-col">
              <div className="text-2xl font-bold">19</div>
              <div className="text-xs font-semibold text-text-secondary uppercase tracking-wide">Reviews</div>
            </div>
            <div className="flex flex-col border-l border-border-light pl-8">
              <div className="flex items-center gap-1 text-2xl font-bold">
                4.95 <Star className="w-4 h-4 fill-current mt-1" />
              </div>
              <div className="text-xs font-semibold text-text-secondary uppercase tracking-wide">Rating</div>
            </div>
            <div className="flex flex-col border-l border-border-light pl-8">
              <div className="text-2xl font-bold">2</div>
              <div className="text-xs font-semibold text-text-secondary uppercase tracking-wide">Years hosting</div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 font-semibold mb-2">
              <Award className="w-5 h-5 text-text-primary" />
              Mirashya is a Superhost
            </div>
            <p className="text-base text-text-secondary leading-6 max-w-xl">
              Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests. Mirashya has been hosting luxury properties in Goa for several years, ensuring every guest has an unforgettable experience.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="font-semibold mb-2 text-base">Host details</h4>
            <div className="text-base text-text-secondary leading-6">
              Response rate: 100%<br />
              Responds within an hour
            </div>
          </div>

          <div className="mt-auto">
            <button className="px-6 py-3 rounded-lg bg-text-primary text-white text-base font-semibold hover:bg-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black">
              Contact Host
            </button>
            <div className="flex items-center gap-3 mt-6 text-xs text-text-secondary max-w-sm leading-4">
              <Shield className="w-6 h-6 flex-shrink-0 strokeWidth={1.5}" />
              To protect your payment, never transfer money or communicate outside of the Airbnb website or app.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
