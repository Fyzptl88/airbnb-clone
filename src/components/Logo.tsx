import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded-sm" aria-label="Airbnb homepage">
      {/* Full logo with wordmark — hidden on mobile */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/airbnb-logo.svg"
        alt="Airbnb"
        className="block h-8 w-auto object-contain"
      />
    </Link>
  );
}
