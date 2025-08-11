import { useMemo, useState } from "react";
import NavBar from "@/components/layout/NavBar";
import SEO from "@/components/seo/SEO";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Film, StickyNote, Link as LinkIcon } from "lucide-react";

interface LakeItem {
  id: string;
  type: "clip" | "note" | "link";
  title: string;
  source: string;
  tags: string[];
}

const initialItems: LakeItem[] = [
  { id: "1", type: "clip", title: "Customer interview – onboarding friction", source: "Notion", tags: ["onboarding", "customer"] },
  { id: "2", type: "note", title: "3 hooks for talking about pricing transparently", source: "Apple Notes", tags: ["pricing", "messaging"] },
  { id: "3", type: "link", title: "Report: 2025 SaaS benchmarks", source: "External", tags: ["benchmarks", "saas"] },
  { id: "4", type: "clip", title: "Founder clip: roadmap tradeoffs", source: "Drive", tags: ["product", "strategy"] },
];

const Lake = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<string>("all");
  const [items, setItems] = useState<LakeItem[]>(initialItems);

  const filtered = useMemo(() => {
    return items.filter((it) => {
      const matchesType = type === "all" || it.type === type;
      const q = query.toLowerCase();
      const matchesQuery = !q || it.title.toLowerCase().includes(q) || it.tags.some((t) => t.includes(q));
      return matchesType && matchesQuery;
    });
  }, [items, query, type]);

  const addMock = () => {
    const next: LakeItem = {
      id: String(items.length + 1),
      type: "note",
      title: "New insight: users prefer concise carousels",
      source: "Manual",
      tags: ["format", "carousels"],
    };
    setItems([next, ...items]);
    toast.success("Added to Content Lake", { description: next.title });
  };

  return (
    <div className="min-h-screen bg-background text-foreground premium-gradient-bg">
      <SEO
        title="Content Lake – LinkedIn Content Engine"
        description="Centralized content lake for raw assets, research, and inspiration."
        canonicalPath="/lake"
      />
      <NavBar />
      <main className="mx-auto max-w-[1440px] px-4 py-12 animate-enter">
        <header>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">Content Lake</h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">
            A unified repository for ideas, clips, notes, and references to power your content.
          </p>
        </header>

        <section className="mt-8">
          <div className="flex flex-col md:flex-row gap-3 md:items-center">
            <div className="flex-1">
              <Input placeholder="Search the lake…" value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Search content lake" />
            </div>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger className="w-full md:w-[200px]"><SelectValue placeholder="Filter type" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All types</SelectItem>
                <SelectItem value="clip">Clips</SelectItem>
                <SelectItem value="note">Notes</SelectItem>
                <SelectItem value="link">Links</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="premium" size="pill" onClick={addMock}>Add mock item</Button>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((it) => (
              <Card key={it.id} className="elevation-1 hover-scale animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-base tracking-tight flex items-center gap-2">
                    {it.type === "clip" ? <Film className="h-4 w-4 opacity-80" aria-hidden /> : it.type === "note" ? <StickyNote className="h-4 w-4 opacity-80" aria-hidden /> : <LinkIcon className="h-4 w-4 opacity-80" aria-hidden />}
                    <Badge variant="secondary" className="capitalize">{it.type}</Badge>
                    <span className="font-medium">{it.title}</span>
                  </CardTitle>
                  <CardDescription className="mt-1">Source: {it.source}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {it.tags.map((t) => (
                      <Badge key={t} variant="outline">#{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="elevation-1 bg-card rounded-2xl p-8 text-center text-sm text-muted-foreground">
              No results. Try a different filter or add a mock item.
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Lake;
