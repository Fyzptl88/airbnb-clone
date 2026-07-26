import { ChevronRight } from "lucide-react";

export default function ThingsToKnow() {
  return (
    <div className="py-12 text-text-primary">
      <h2 className="text-[22px] font-semibold mb-6">Things to know</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
        {/* Column 1: House rules */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-base mb-3">House rules</h3>
          <ul className="flex flex-col gap-3 text-base text-text-primary">
            <li>Check-in: 3:00 pm – 10:00 pm</li>
            <li>Checkout before 11:00 am</li>
            <li>2 guests maximum</li>
          </ul>
          <button className="mt-4 text-base font-semibold underline hover:text-text-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black self-start">
            Show more
          </button>
        </div>

        {/* Column 2: Safety & property */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-base mb-3">Safety & property</h3>
          <ul className="flex flex-col gap-3 text-base text-text-primary">
            <li>Carbon monoxide alarm not reported</li>
            <li>Smoke alarm</li>
            <li>Pool/hot tub without a gate or lock</li>
          </ul>
          <button className="mt-4 text-base font-semibold underline hover:text-text-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black self-start">
            Show more
          </button>
        </div>

        {/* Column 3: Cancellation policy */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-base mb-3">Cancellation policy</h3>
          <ul className="flex flex-col gap-3 text-base text-text-primary">
            <li>Free cancellation before 17 Oct.</li>
            <li>Review the Host&apos;s full cancellation policy which applies even if you cancel for illness or disruptions caused by COVID-19.</li>
          </ul>
          <button className="mt-4 text-base font-semibold underline hover:text-text-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black self-start">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}
