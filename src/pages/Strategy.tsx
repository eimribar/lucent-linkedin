import NavBar from "@/components/layout/NavBar";
import SEO from "@/components/seo/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Lightbulb, Megaphone, ShieldCheck, Target, Timer, Wand2 } from "lucide-react";

const Pill = ({ children }: { children: string }) => (
  <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">{children}</Badge>
);

const Strategy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground premium-gradient-bg">
      <SEO
        title="Content Strategy – LinkedIn Content Engine"
        description="Crisp pillars, cadence, tone, and audience—tailored to your profile."
        canonicalPath="/strategy"
      />
      <NavBar />

      <main className="mx-auto max-w-[1200px] px-4 py-12 animate-enter">
        <header className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">Your Content Strategy</h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            A clear, on-brand plan to grow authority and engagement. This is a mock preview—your real strategy will be generated from your data.
          </p>
        </header>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Wand2 size={18} /> Pillars</CardTitle>
              <CardDescription>Core themes you’ll post about consistently.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Pill>Leadership</Pill>
              <Pill>AI in Practice</Pill>
              <Pill>Go-to-Market</Pill>
              <Pill>Operating Systems</Pill>
              <Pill>Career Stories</Pill>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Timer size={18} /> Cadence</CardTitle>
              <CardDescription>Lightweight weekly schedule to build momentum.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>Mon – Quick insight (150–220 chars)</li>
                <li>Wed – Story post (600–900 chars)</li>
                <li>Fri – Playbook/How-to (400–700 chars)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Megaphone size={18} /> Tone & Voice</CardTitle>
              <CardDescription>What your best posts sound like.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
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
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Target size={18} /> Audience</CardTitle>
              <CardDescription>People who will get the most value.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Pill>Founders</Pill>
              <Pill>Product Leaders</Pill>
              <Pill>Marketing</Pill>
              <Pill>Revenue</Pill>
            </CardContent>
          </Card>
        </section>

        <section className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Lightbulb size={18} /> Sample Post Hooks</CardTitle>
              <CardDescription>Great first lines to spark engagement.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 list-disc pl-4 text-muted-foreground">
                <li>We shipped X and the unexpected lesson was Y.</li>
                <li>Most teams overcomplicate X—here’s the 3‑step version.</li>
                <li>I was wrong about X. Here’s what changed my mind.</li>
                <li>The boring playbook that quietly 2×’d our metric.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><ShieldCheck size={18} /> Guardrails</CardTitle>
              <CardDescription>Quality and brand fit checks.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>1 idea per post, clear takeaway</li>
                <li>Specific numbers over adjectives</li>
                <li>Respect privacy and NDAs</li>
                <li>Always add a concrete example</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-8" />

        <footer className="flex flex-wrap items-center gap-3">
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
