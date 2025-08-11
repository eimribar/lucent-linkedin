import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/strategy-hero.png";
import { Sparkles } from "lucide-react";

interface StrategyHeroProps {
  name: string;
  narrative: string;
}

export default function StrategyHero({ name, narrative }: StrategyHeroProps) {
  return (
    <header className="relative overflow-hidden rounded-2xl border-gradient-brand bg-secondary/30">
      {/* spotlight */}
      <div aria-hidden className="pointer-events-none absolute -inset-x-10 -top-24 h-56 bg-gradient-to-b from-primary/15 to-transparent blur-2xl" />

      <Card className="border-0 bg-transparent">
        <div className="grid gap-6 p-6 md:grid-cols-5 md:p-10">
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Badge variant="secondary" className="rounded-full">Content Strategy</Badge>
              <span className="inline-flex items-center gap-1"><Sparkles className="h-3.5 w-3.5 text-primary" /> Premium layout</span>
            </div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              {name} — Content Strategy
            </h1>
            <p className="mt-3 max-w-prose text-base text-muted-foreground md:text-lg">
              {narrative}
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="relative aspect-[2/1] w-full overflow-hidden rounded-xl">
              <img
                src={heroImage}
                alt="Minimal abstract gradient hero artwork for content strategy"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Card>
    </header>
  );
}
