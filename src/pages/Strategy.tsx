import SEO from "@/components/seo/SEO";
import { Card } from "@/components/ui/card";
import StrategyHero from "@/components/strategy/StrategyHero";
import PillarsAccordion from "@/components/strategy/PillarsAccordion";
import RightRail from "@/components/strategy/RightRail";
import { Flag } from "lucide-react";

const Strategy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Amnon Cohen – Content Strategy"
        description="Core narrative, pillars, cadence, hooks, and themes tailored to Amnon's voice."
        canonicalPath="/strategy"
      />

      <main className="mx-auto max-w-6xl px-4 pt-10 pb-16 animate-enter">
        {/* Core Narrative / Hero */}
        <section id="narrative" className="animate-fade-in">
          <StrategyHero
            name="Amnon Cohen"
            narrative="Ex‑Microsoft PM who learned the hard way that simple beats complex. Ships daily at Bounce AI. Believes in data over opinions."
          />
        </section>

        {/* Layout */}
        <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
          {/* Left column */}
          <div className="space-y-6 lg:col-span-2">
            <section id="pillars" className="animate-fade-in">
              <PillarsAccordion />
            </section>

            {/* Monthly Themes */}
            <section id="themes" className="animate-fade-in">
              <Card className="border-gradient-brand rounded-2xl">
                <div className="p-6">
                  <h2 className="flex items-center gap-2 text-lg font-medium tracking-tight">
                    <Flag className="h-4 w-4 text-primary" /> Monthly Themes
                  </h2>
                  <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted-foreground md:text-base">
                    <li>
                      <span className="font-medium text-foreground">Month 1:</span> Simplicity beats complexity (her core belief)
                    </li>
                    <li>
                      <span className="font-medium text-foreground">Month 2:</span> Speed over perfection (shipping philosophy)
                    </li>
                    <li>
                      <span className="font-medium text-foreground">Month 3:</span> Data over opinions (decision making)
                    </li>
                    <li>Repeat with new stories/angles</li>
                  </ol>
                </div>
              </Card>
            </section>
          </div>

          {/* Right rail */}
          <RightRail />
        </div>
      </main>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Amnon Cohen — Content Strategy",
            about:
              "Content strategy: core narrative, pillars, weekly cadence, hooks, and monthly themes",
            creator: { "@type": "Person", name: "Amnon Cohen" },
            inLanguage: "en",
            url: typeof window !== "undefined" ? window.location.href : undefined,
          }),
        }}
      />
    </div>
  );
};

export default Strategy;
