import NavBar from "@/components/layout/NavBar";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/common/StatCard";
import SwipeCard from "@/components/swipe/SwipeCard";
import { BarChart3, CheckCircle2, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />

      <main role="main" className="mx-auto max-w-[1440px] px-4">
        <section className="pt-12 md:pt-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight animate-fade-in">
              LinkedIn Content Engine
            </h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">
              A premium, minimal workflow to ideate, refine, and schedule impactful LinkedIn content — designed with Apple-grade clarity and polish.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="premium" size="pill">Create New Post</Button>
              <Button variant="soft" size="pill">Import Ideas</Button>
            </div>
          </div>
        </section>

        <section id="analytics" className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard label="This Week" value="18 posts" icon={<Clock />} />
          <StatCard label="Avg. Engagement" value="4.2%" icon={<BarChart3 />} />
          <StatCard label="Approved" value={"12"} icon={<CheckCircle2 />} />
        </section>

        <section id="pipeline" className="mt-12 md:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Premium Card Stack</h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-prose">
                Swipe right to approve, left to revise. Natural spring physics with subtle color feedback — refined for focus.
              </p>
              <div className="mt-6">
                <SwipeCard
                  text="When building in public, consistency beats intensity. Ship small improvements, tell the story, and let momentum do the heavy lifting."
                  author="@you"
                />
              </div>
            </div>

            <div className="elevation-2 bg-card rounded-2xl p-6">
              <h3 className="text-lg font-medium tracking-tight">Today’s Pipeline</h3>
              <div className="mt-4 space-y-3">
                {["Research hooks", "Draft carousel", "Polish CTA", "Schedule post"].map((t) => (
                  <div key={t} className="flex items-center justify-between bg-muted/50 rounded-xl px-4 py-3">
                    <span className="text-sm">{t}</span>
                    <span className="text-xs text-muted-foreground">Due today</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="templates" className="mt-16 mb-16">
          <article className="elevation-1 bg-card rounded-2xl p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Templates</h2>
            <p className="mt-2 text-sm text-muted-foreground">Save proven patterns for faster creation. More coming soon.</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="elevation-1 bg-card rounded-xl p-5 hover-scale animate-fade-in">
                  <div className="h-24 skeleton" />
                  <p className="mt-3 text-sm">Template {i + 1}</p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Index;
