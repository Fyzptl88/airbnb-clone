import { Search } from "lucide-react";
import Image from "next/image";

export default function SearchPill() {
  return (
    <button
      id="search-pill"
      className="gap-3 hidden h-14 items-center rounded-full border border-border-light bg-white shadow-[0_1px_2px_rgba(0,0,0,0.08),0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(0,0,0,0.18),0_12px_32px_rgba(0,0,0,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 md:flex"
      aria-label="Search destinations"
    >
      <span className="flex items-center gap-2 whitespace-nowrap px-4 text-sm font-semibold text-text-primary">
        <Image
          src="/search-icon-anywhere.png"
          alt=""
          width={20}
          height={20}
          className="h-10 w-full object-contain"
          aria-hidden="true"
        />
        Anywhere
      </span>

      <span className="h-6 w-px bg-border-light" aria-hidden="true" />

      <span className="whitespace-nowrap px-4 text-sm font-semibold text-text-primary">
        Any week
      </span>

      <span className="h-6 w-px bg-border-light" aria-hidden="true" />

      <span className="flex items-center gap-2.5 pl-4 pr-2">
        <span className="whitespace-nowrap text-sm font-normal text-text-secondary">
          Add guests
        </span>

        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-airbnb">
          <Search className="h-5 w-5 text-white" strokeWidth={3} />
        </span>
      </span>
    </button>
  );
}

