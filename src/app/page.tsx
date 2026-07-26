import HeroSection from "@/components/HeroSection";
import PropertyDetails from "@/components/PropertyDetails";
import BookingWidget from "@/components/BookingWidget";
import Reviews from "@/components/Reviews";
import LocationMap from "@/components/LocationMap";
import HostProfile from "@/components/HostProfile";
import ThingsToKnow from "@/components/ThingsToKnow";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="min-h-screen text-text-primary">
      <HeroSection />

      <main className="mx-auto w-full max-w-[1280px] px-4 pb-12 pt-6 sm:px-6 lg:px-8 xl:px-10 lg:pb-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_380px] lg:items-start">
          <section className="min-w-0">
            <PropertyDetails />
          </section>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <BookingWidget />
          </aside>
        </div>
        <Reviews />
        <LocationMap />
        <HostProfile />
        <ThingsToKnow />
      </main>
      
      <Footer />
    </div>
  );
}
