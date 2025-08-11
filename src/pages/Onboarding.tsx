import SEO from "@/components/seo/SEO";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { Trophy } from "lucide-react";
import { useMemo, useState } from "react";

// 10-Question prompts used as rotating placeholders (branding intact)
const QUESTIONS = [
  "Tell us about a big win (project/achievement you're proud of)",
  "Share a failure/mistake that taught you something important",
  "What's the hardest problem you've solved in your career?",
  "What's your contrarian take that most people in your field disagree with?",
  "What principle/rule do you always follow that others should know?",
  "What common advice in your field is actually terrible?",
  "What surprised you most about joining Bounce AI?",
  "What are we doing differently here that you haven't seen elsewhere?",
  "Describe a recent 'aha moment' working on our product/team",
  "What will your industry/field look like in 3 years?",
];

const Onboarding = () => {
  const placeholders = useMemo(() => QUESTIONS, []);
  const [xp, setXp] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Ask Bounce AI Anything"
        description="A premium, minimal onboarding: one elegant input with rotating prompts."
        canonicalPath="/onboarding"
      />

      <main className="min-h-screen flex flex-col items-center justify-center px-4">
        <header className="mb-10 sm:mb-20 text-center">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">Ask Bounce AI Anything</h1>
        </header>

        <section className="w-full max-w-2xl">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={() => {}}
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const input = form.querySelector("input[type='text']") as HTMLInputElement | null;
              const val = input?.value?.trim();
              if (val) {
                setAnswers((prev) => [val, ...prev]);
                setXp((x) => x + 10);
              }
            }}
          />
        </section>

        {/* Subtle, graceful gamification at the bottom */}
        <aside className="fixed bottom-6 inset-x-0 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 border border-border bg-card/80 supports-[backdrop-filter]:bg-card/60 backdrop-blur shadow-sm text-xs sm:text-sm">
            <Trophy className="h-4 w-4 text-foreground/70" />
            <span>{xp} XP</span>
            <span className="text-muted-foreground hidden sm:inline">Thoughtful answers earn XP</span>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Onboarding;
