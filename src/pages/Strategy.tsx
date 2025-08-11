import SEO from "@/components/seo/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Pill = ({ children }: { children: string }) => (
  <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">{children}</Badge>
);

const Strategy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Content Strategy – LinkedIn Content Engine"
        description="Crisp pillars, cadence, tone, and audience—tailored to your profile."
        canonicalPath="/strategy"
      />

      <main className="mx-auto max-w-2xl px-4 pt-10 pb-16 animate-enter">
        <header className="text-center">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-gradient-brand">Your Content Strategy</h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            A clear, on-brand plan to grow authority and engagement. This is a mock preview—your real strategy will be generated from your data.
          </p>
        </header>

        <div className="mt-10 space-y-6">
          <section className="border-gradient-brand rounded-2xl p-6">
            <div className="flex items-center gap-2 font-medium mb-3">
              <span className="h-8 w-8 rounded-full grid place-items-center bg-secondary">🏛️</span>
              Pillars
            </div>
            <div className="flex flex-wrap gap-2">
              <Pill>Leadership</Pill>
              <Pill>AI in Practice</Pill>
              <Pill>Go-to-Market</Pill>
              <Pill>Operating Systems</Pill>
              <Pill>Career Stories</Pill>
            </div>
          </section>

          <section className="border-gradient-brand rounded-2xl p-6">
            <div className="flex items-center gap-2 font-medium mb-3">
              <span className="h-8 w-8 rounded-full grid place-items-center bg-secondary">⏱️</span>
              Cadence
            </div>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>Mon – Quick insight (150–220 chars)</li>
              <li>Wed – Story post (600–900 chars)</li>
              <li>Fri – Playbook/How-to (400–700 chars)</li>
            </ul>
          </section>

          <section className="border-gradient-brand rounded-2xl p-6">
            <div className="flex items-center gap-2 font-medium mb-3">
              <span className="h-8 w-8 rounded-full grid place-items-center bg-secondary">📣</span>
              Tone & Voice
            </div>
            <div className="text-sm text-muted-foreground space-y-2">
              <div>
                <span className="font-medium text-foreground">Tone:</span> Credible, optimistic, direct
              </div>
              <div>
                <span className="font-medium text-foreground">Style:</span> First‑person, practical examples, crisp endings
              </div>
              <div>
                <span className="font-medium text-foreground">Do:</span> Short sentences, concrete outcomes, numbers
              </div>
              <div>
                <span className="font-medium text-foreground">Avoid:</span> Vague claims, buzzwords, long intros
              </div>
            </div>
          </section>

          <section className="border-gradient-brand rounded-2xl p-6">
            <div className="flex items-center gap-2 font-medium mb-3">
              <span className="h-8 w-8 rounded-full grid place-items-center bg-secondary">🎯</span>
              Audience
            </div>
            <div className="flex flex-wrap gap-2">
              <Pill>Founders</Pill>
              <Pill>Product Leaders</Pill>
              <Pill>Marketing</Pill>
              <Pill>Revenue</Pill>
            </div>
          </section>

          <section className="border-gradient-brand rounded-2xl p-6">
            <div className="flex items-center gap-2 font-medium mb-3">
              <span className="h-8 w-8 rounded-full grid place-items-center bg-secondary">💡</span>
              Sample Post Hooks
            </div>
            <ul className="text-sm space-y-2 list-disc pl-4 text-muted-foreground">
              <li>We shipped X and the unexpected lesson was Y.</li>
              <li>Most teams overcomplicate X—here’s the 3‑step version.</li>
              <li>I was wrong about X. Here’s what changed my mind.</li>
              <li>The boring playbook that quietly 2×’d our metric.</li>
            </ul>
          </section>

          <section className="border-gradient-brand rounded-2xl p-6">
            <div className="flex items-center gap-2 font-medium mb-3">
              <span className="h-8 w-8 rounded-full grid place-items-center bg-secondary">🛡️</span>
              Guardrails
            </div>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>1 idea per post, clear takeaway</li>
              <li>Specific numbers over adjectives</li>
              <li>Respect privacy and NDAs</li>
              <li>Always add a concrete example</li>
            </ul>
          </section>
        </div>

        <footer className="mt-10 flex items-center justify-center gap-3">
          <Button asChild variant="premium">
            <a href="/approvals">Start approvals</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/analytics">View analytics</a>
          </Button>
        </footer>
      </main>
    </div>
  );
};

export default Strategy;
