import Logo from "./Logo";
import SearchPill from "./SearchPill";
import UserMenu from "./UserMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/95 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-[var(--spacing-nav-height)] w-full items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 xl:px-10"
        aria-label="Main navigation"
      >
        <div className="flex shrink-0 items-center">
          <Logo />
        </div>

        <div className="flex flex-1 justify-center">
          <SearchPill />
        </div>

        <div className="relative flex shrink-0 items-center">
          <UserMenu />
        </div>
      </nav>
    </header>
  );
}
