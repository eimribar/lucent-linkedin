import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Pill = ({ children }: { children: string }) => (
  <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">{children}</Badge>
);

export default function PillarsAccordion() {
  return (
    <Card className="border-gradient-brand">
      <CardHeader>
        <CardTitle className="text-lg">Content Pillars + Unique Angles</CardTitle>
        <div className="mt-2 hidden flex-wrap gap-2 md:flex">
          <Pill>Leadership</Pill>
          <Pill>Team & Culture</Pill>
          <Pill>AI Industry</Pill>
          <Pill>Product Craft</Pill>
          <Pill>Career</Pill>
          <Pill>Bounce AI</Pill>
        </div>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple" className="mt-1">
          <AccordionItem value="pillar-1">
            <AccordionTrigger>1. Product Leadership</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Why I killed our personalization engine (failure story)</li>
                <li>The "mom test" for every feature decision</li>
                <li>How we went from 0 to 40% DAU in 3 months</li>
                <li>My scoring framework that says "no" to 70% of features</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="pillar-2">
            <AccordionTrigger>2. Team & Culture</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Why our engineers talk directly to customers</li>
                <li>Breaking down the wall between product and engineering</li>
                <li>How we replaced 50-page PRDs with 5 bullet points</li>
                <li>The day our backend engineer fixed a bug live on a customer call</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="pillar-3">
            <AccordionTrigger>3. AI Industry</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>AI will be invisible in 3 years (here's why)</li>
                <li>Stop advertising "AI-powered" — it's already cringe</li>
                <li>Why simple UX beats fancy AI features</li>
                <li>The real AI moat isn't technology</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="pillar-4">
            <AccordionTrigger>4. Product Craft</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>User research is overrated (controversial take)</li>
                <li>Production data &gt; 100 user interviews</li>
                <li>Ship in 2 weeks or kill it</li>
                <li>Why building for power users ruins products</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="pillar-5">
            <AccordionTrigger>5. Career Growth</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>My $10M mistake taught me this</li>
                <li>From Microsoft bureaucracy to startup speed</li>
                <li>How to align engineering and sales (without losing your mind)</li>
                <li>Why PMs hide behind research</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="pillar-6">
            <AccordionTrigger>6. Bounce AI Stories</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>We ship to production daily (here's how)</li>
                <li>Our customer saved 15 hours/week with one simple change</li>
                <li>Why we reject 70% of feature requests</li>
                <li>How Bounce AI makes AI invisible</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
