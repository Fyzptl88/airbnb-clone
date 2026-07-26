export default function BookingWidget() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between gap-4 rounded-[24px] border border-border-light bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
        <div className="flex items-start gap-3">
          <svg className="mt-0.5 h-6 w-6 shrink-0 fill-[#008A05]" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false">
            <path d="M29.5 14L18 2.5a3 3 0 0 0-2.12-.88H4A3 3 0 0 0 1 4.62v11.89A3 3 0 0 0 1.88 18.6L13.4 30.14a3 3 0 0 0 4.24 0l11.86-11.9a3 3 0 0 0 0-4.24zM8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"></path>
          </svg>
          <div>
            <div className="text-sm font-semibold text-text-primary">Get 10% off your next stay.</div>
            <div className="text-sm font-semibold underline">Terms apply</div>
          </div>
        </div>
        <button className="rounded-full px-4 py-2 text-sm font-semibold text-text-primary transition-colors hover:bg-border-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black bg-gray-100">
          Claim
        </button>
      </div>

      <div className="rounded-[28px] border border-border-light bg-white p-5 shadow-[0_18px_48px_rgba(15,23,42,0.1)] sm:p-6">
        <div className="mb-5 flex items-baseline gap-2">
          <span className="text-[28px] font-semibold">₹28,499</span>
          <span className="text-sm text-text-secondary">for 5 nights</span>
        </div>

        <div className="mb-4 overflow-hidden rounded-[18px] border border-text-tertiary bg-white">
          <div className="grid grid-cols-2 border-b border-text-tertiary">
            <button type="button" className="p-3 text-left transition-colors hover:bg-bg-hover focus-visible:bg-bg-hover focus-visible:outline-none">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-text-secondary">Check-in</div>
              <div className="mt-1 text-sm font-semibold text-text-primary">10/18/2026</div>
            </button>
            <button type="button" className="p-3 text-left transition-colors hover:bg-bg-hover focus-visible:bg-bg-hover focus-visible:outline-none">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-text-secondary">Checkout</div>
              <div className="mt-1 text-sm font-semibold text-text-primary">10/23/2026</div>
            </button>
          </div>

          <button type="button" className="flex w-full items-center justify-between p-3 text-left transition-colors hover:bg-bg-hover focus-visible:bg-bg-hover focus-visible:outline-none">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-text-secondary">Guests</div>
              <div className="mt-1 text-sm font-semibold text-text-primary">2 guests</div>
            </div>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: '4', overflow: 'visible' }}>
              <path fill="none" d="M28 12L16 24 4 12"></path>
            </svg>
          </button>
        </div>

        <div className="mb-4 rounded-[16px] bg-bg-secondary px-3 py-3 text-center text-sm text-text-primary">
          Free cancellation before <strong>17 October</strong>
        </div>

        <button className="mb-3 w-full rounded-full bg-[#E51D53] py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#D70466] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2">
          Reserve
        </button>

        <div className="text-center text-sm text-text-primary">You won&apos;t be charged yet</div>
      </div>

      <button className="flex items-center justify-center gap-2 text-sm font-semibold text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '16px', width: '16px', fill: 'currentColor' }}>
          <path d="M28 6H17V4a2 2 0 0 0-2-2H3v28h2V18h10v2a2 2 0 0 0 2 2h11l.11-.01A1 1 0 0 0 29 21V7a1 1 0 0 0-1-1zm-1 13H17v-2a2 2 0 0 0-2-2H5V4h10v2a2 2 0 0 0 2 2h10v11z"></path>
        </svg>
        <span>Report this listing</span>
      </button>
    </div>
  );
}
