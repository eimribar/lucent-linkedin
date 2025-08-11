import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className={cn("glass-panel elevation-1 safe-top sticky top-0 z-40")}
      role="banner"
      aria-label="Primary Navigation">
      <nav className="mx-auto max-w-[1440px] h-14 md:h-16 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div aria-hidden className="h-6 w-6 rounded-md bg-foreground/90" />
          <Link to="/" aria-label="LinkedIn Content Engine" className="text-sm font-medium tracking-tight">
            LinkedIn Content Engine
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Link to="/ideate" className="px-3 py-2 rounded-full hover:bg-muted text-sm transition-colors">Ideate</Link>
          <Link to="/research" className="px-3 py-2 rounded-full hover:bg-muted text-sm transition-colors">Research</Link>
          <Link to="/draft" className="px-3 py-2 rounded-full hover:bg-muted text-sm transition-colors">Draft</Link>
          <Link to="/review" className="px-3 py-2 rounded-full hover:bg-muted text-sm transition-colors">Review</Link>
          <Link to="/approve" className="px-3 py-2 rounded-full hover:bg-muted text-sm transition-colors">Approve</Link>
          <Link to="/schedule" className="px-3 py-2 rounded-full hover:bg-muted text-sm transition-colors">Schedule</Link>
          <Link to="/analytics" className="px-3 py-2 rounded-full hover:bg-muted text-sm transition-colors">Analytics</Link>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="soft" size="pill" className="hidden md:inline-flex"><Link to="/ideate">Get Started</Link></Button>
          <button aria-label="Open menu" className="md:hidden h-10 w-10 rounded-full hover:bg-muted grid place-items-center">
            <Menu className="opacity-80" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
