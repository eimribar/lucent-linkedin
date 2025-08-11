import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Flame, Lightbulb, Link2, Mountain, Rocket } from "lucide-react";

export default function RightRail() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-8">
      {/* Quick Nav */}
      <Card className="bg-secondary/40">
        <CardHeader>
          <CardTitle className="text-sm">Quick Nav</CardTitle>
        </CardHeader>
        <CardContent>
          <nav aria-label="Strategy sections">
            <ul className="space-y-2 text-sm">
              <li><a className="story-link" href="#narrative">Core Narrative</a></li>
              <li><a className="story-link" href="#pillars">Pillars</a></li>
              <li><a className="story-link" href="#themes">Monthly Themes</a></li>
              <li><a className="story-link" href="#weekly-mix">Weekly Mix</a></li>
              <li><a className="story-link" href="#hooks">Hook Templates</a></li>
              <li><a className="story-link" href="#integration">Bounce AI Integration</a></li>
            </ul>
          </nav>
        </CardContent>
      </Card>

      {/* Weekly Mix */}
      <Card id="weekly-mix" className="border-gradient-brand">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg"><CalendarDays className="h-4 w-4 text-primary" /> Content Mix (Weekly)</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-sm">
            <li>
              <div className="font-medium text-foreground">Monday — Contrarian Take</div>
              <p className="text-muted-foreground">“User interviews are overrated. Here's what I do instead...”</p>
            </li>
            <li>
              <div className="font-medium text-foreground">Tuesday — How‑To</div>
              <p className="text-muted-foreground">“My framework for saying no to 70% of feature requests”</p>
            </li>
            <li>
              <div className="font-medium text-foreground">Wednesday — Story Time</div>
              <p className="text-muted-foreground">“I wasted 6 months and $2M. Here's what I learned”</p>
            </li>
            <li>
              <div className="font-medium text-foreground">Thursday — Bounce AI Win</div>
              <p className="text-muted-foreground">“Our customer saved 15 hrs/week. Not from AI, from simplicity”</p>
            </li>
            <li>
              <div className="font-medium text-foreground">Friday — Industry Prediction</div>
              <p className="text-muted-foreground">“In 2027, ‘AI‑powered’ will sound as dated as ‘cyber’ does now”</p>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Hooks */}
      <Card id="hooks" className="border-gradient-brand">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg"><Lightbulb className="h-4 w-4 text-primary" /> Hook Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
            <li><span className="text-foreground">The Failure Hook:</span> “I built a feature nobody wanted. 6 months. 2% adoption. Here's what I learned:”</li>
            <li><span className="text-foreground">The Contrarian Hook:</span> “Everyone says ‘talk to users.’ I say watch the data. Here's why:”</li>
            <li><span className="text-foreground">The Comparison Hook:</span> “Microsoft: 50‑page PRDs. Bounce AI: 5 bullet points. Guess who ships faster?”</li>
            <li><span className="text-foreground">The Simple Truth Hook:</span> “If you can't explain it to your mom, don't build it.”</li>
            <li><span className="text-foreground">The Metric Hook:</span> “0 to 40% daily active users in 3 months. One simple change:”</li>
          </ol>
        </CardContent>
      </Card>

      {/* Integration */}
      <Card id="integration" className="border-gradient-brand">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg"><Link2 className="h-4 w-4 text-primary" /> Natural Bounce AI Integration</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• 30% of posts mention Bounce directly (customer wins, culture, differentiation)</li>
            <li>• 70% pure value (product advice, industry takes, lessons learned)</li>
            <li>Always position Bounce as the “simple” alternative in a complex AI world</li>
          </ul>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="bg-secondary/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base"><Rocket className="h-4 w-4 text-primary" /> Ready to generate posts?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Use your strategy to create on‑brand posts automatically.</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Button asChild>
              <a href="/ideate">Open Ideation Engine</a>
            </Button>
            <Button asChild variant="outline">
              <a href="/ideas">View Ideas</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
