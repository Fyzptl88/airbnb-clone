import { ChevronRight, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] border-t border-border-light mt-12 text-[#222222]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-10 py-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-sm text-[#222222] font-medium mb-12">
          <span className="hover:underline cursor-pointer">Airbnb</span>
          <ChevronRight className="w-3 h-3 text-text-secondary" />
          <span className="hover:underline cursor-pointer">India</span>
          <ChevronRight className="w-3 h-3 text-text-secondary" />
          <span className="hover:underline cursor-pointer">Goa</span>
          <ChevronRight className="w-3 h-3 text-text-secondary" />
          <span className="text-text-secondary cursor-default">Candolim</span>
        </div>

        {/* 4-Column Link Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-border-light">
          
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm">Support</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:underline">Help Centre</a></li>
              <li><a href="#" className="hover:underline">AirCover</a></li>
              <li><a href="#" className="hover:underline">Anti-discrimination</a></li>
              <li><a href="#" className="hover:underline">Disability support</a></li>
              <li><a href="#" className="hover:underline">Cancellation options</a></li>
              <li><a href="#" className="hover:underline">Report neighbourhood concern</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm">Community</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:underline">Airbnb.org: disaster relief housing</a></li>
              <li><a href="#" className="hover:underline">Support Afghan refugees</a></li>
              <li><a href="#" className="hover:underline">Combating discrimination</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm">Hosting</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:underline">Airbnb your home</a></li>
              <li><a href="#" className="hover:underline">AirCover for Hosts</a></li>
              <li><a href="#" className="hover:underline">Explore hosting resources</a></li>
              <li><a href="#" className="hover:underline">Visit our community forum</a></li>
              <li><a href="#" className="hover:underline">How to host responsibly</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm">Airbnb</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">Learn about new features</a></li>
              <li><a href="#" className="hover:underline">Letter from our founders</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Copyright & Socials Bar */}
        <div className="pt-6 flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-[#222222]">
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1">
            <span>© 2026 Airbnb, Inc.</span>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:underline">Terms</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:underline">Sitemap</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:underline">Company details</a>
          </div>

          <div className="flex items-center gap-6 font-semibold">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 hover:underline">
                <Globe className="w-4 h-4" />
                English (IN)
              </button>
              <button className="hover:underline">
                ₹ INR
              </button>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-text-secondary">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="hover:text-text-secondary">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href="#" className="hover:text-text-secondary">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
