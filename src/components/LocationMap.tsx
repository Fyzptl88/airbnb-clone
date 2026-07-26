export default function LocationMap() {
  return (
    <div className="py-12 border-b border-border-light text-text-primary">
      <h2 className="text-[22px] font-semibold mb-6">Where you&apos;ll be</h2>
      
      {/* Dummy Google Map */}
      <div className="w-full h-[480px] bg-[#E5E3DF] rounded-xl overflow-hidden relative mb-6">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123062.5977934664!2d73.74233075204482!3d15.503251433983287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1081a971249%3A0xc3f6a27e025de0be!2sCandolim%2C%20Goa!5e0!3m2!1sen!2sin!4v1683884841123!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
      </div>

      {/* Location Text */}
      <div>
        <h3 className="text-base font-semibold mb-4">Candolim, Goa, India</h3>
        <p className="text-base text-text-primary max-w-3xl leading-6">
          The villa is located in a quiet, upscale neighborhood just minutes away from the vibrant Candolim beach. 
          You&apos;ll be within walking distance of highly-rated restaurants, boutique shops, and local markets. 
          Despite being close to the action, the property itself offers a peaceful and private sanctuary surrounded by tropical greenery.
        </p>
        <button className="mt-4 text-base font-semibold underline hover:text-text-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded px-1 -ml-1">
          Show more
        </button>
      </div>
    </div>
  );
}
