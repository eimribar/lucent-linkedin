import { useState } from "react";
import NavBar from "@/components/layout/NavBar";
import SEO from "@/components/seo/SEO";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Link } from "react-router-dom";

interface Idea {
  id: string;
  title: string;
  details: string;
  category: string;
  score: number;
}

const initialIdeas: Idea[] = [
  { id: "1", title: "Why we ship in public (and how)", details: "Share the 3-step cadence and the outcomes.", category: "Brand", score: 7 },
  { id: "2", title: "Pricing transparency post", details: "Show our pricing rationale and invite feedback.", category: "Product", score: 6 },
  { id: "3", title: "Founder lessons: week in review", details: "Short carousel of key learnings.", category: "Founder", score: 5 },
];

const Ideas = () => {
  const [ideas, setIdeas] = useState<Idea[]>(initialIdeas);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");

  const addIdea = () => {
    if (!title.trim()) return toast.error("Please add a title");
    const next: Idea = { id: String(ideas.length + 1), title, details, category: category || "General", score: 5 };
    setIdeas([next, ...ideas]);
    setTitle("");
    setDetails("");
    setCategory("");
    toast.success("Idea added", { description: next.title });
  };

  const upvote = (id: string) => {
    setIdeas((list) => list.map((i) => (i.id === id ? { ...i, score: i.score + 1 } : i)));
  };

  return (
    <div className="min-h-screen bg-background text-foreground premium-gradient-bg">
      <SEO
        title="Content Ideas – LinkedIn Content Engine"
        description="Brainstorm, refine, and prioritize LinkedIn content ideas with clarity."
        canonicalPath="/ideas"
      />
      <NavBar />
      <main className="mx-auto max-w-[1440px] px-4 py-12">
        <header>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">Content Ideas</h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">
            Capture sparks from the lake, score potential, and shape strong angles.
          </p>
        </header>

        <section className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ideas.map((idea) => (
              <Card key={idea.id} className="elevation-1">
                <CardHeader>
                  <CardTitle className="text-lg tracking-tight">{idea.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Badge variant="secondary">{idea.category || "General"}</Badge>
                    <span className="text-xs">Score: {idea.score}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{idea.details}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button size="sm" variant="soft" onClick={() => upvote(idea.id)}>Upvote</Button>
                    <Button asChild size="sm" variant="outline" onClick={() => toast("Promoted to Generate", { description: idea.title })}>
                      <Link to="/generate">Promote to Generate</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <aside className="elevation-2 bg-card rounded-2xl p-6">
            <h3 className="text-lg font-medium tracking-tight">Add idea</h3>
            <p className="mt-2 text-sm text-muted-foreground">Lightweight capture form to keep momentum.</p>
            <div className="mt-4 grid gap-3">
              <Input placeholder="Idea title" value={title} onChange={(e) => setTitle(e.target.value)} />
              <Input placeholder="Category (optional)" value={category} onChange={(e) => setCategory(e.target.value)} />
              <Textarea placeholder="Details (optional)" value={details} onChange={(e) => setDetails(e.target.value)} className="min-h-[120px]" />
              <Button variant="premium" onClick={addIdea}>Add Idea</Button>
            </div>
            <div className="mt-6 text-xs text-muted-foreground">Tip: Promote strong ideas to the Generation step.</div>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default Ideas;
