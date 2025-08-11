import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const NavBar = () => {
  return (
    <header className={cn("glass-panel elevation-1 safe-top sticky top-0 z-40")}
      role="banner"
      aria-label="Primary Navigation">
      <nav className="mx-auto max-w-[1440px] h-14 md:h-16 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div aria-hidden className="h-6 w-6 rounded-md bg-foreground/90" />
          <a href="/" aria-label="LinkedIn Content Engine" className="text-sm font-medium tracking-tight">
            LinkedIn Content Engine
          </a>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <a href="#pipeline" className="px-3 py-2 rounded-full hover:bg-muted text-sm transition-colors">Pipeline</a>
          <a href="#templates" className="px-3 py-2 rounded-full hover:bg-muted text-sm transition-colors">Templates</a>
          <a href="#analytics" className="px-3 py-2 rounded-full hover:bg-muted text-sm transition-colors">Analytics</a>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="soft" size="pill" className="hidden md:inline-flex">Sign in</Button>
          <Button variant="premium" size="pill" className="hidden md:inline-flex">Get Started</Button>
          <button aria-label="Open menu" className="md:hidden h-10 w-10 rounded-full hover:bg-muted grid place-items-center">
            <Menu className="opacity-80" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
