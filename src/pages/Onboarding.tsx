import NavBar from "@/components/layout/NavBar";
import SEO from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

import { Trophy, ArrowRight, ArrowLeft, Info } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";

interface Question {
  id: number;
  category: string;
  prompt: string;
  placeholder?: string;
}

const QUESTIONS: Question[] = [
  { id: 1, category: "Your Experiences", prompt: "Tell us about a big win (project/achievement you're proud of):", placeholder: "E.g., Led a cross-functional launch that grew signups by 42%..." },
  { id: 2, category: "Your Experiences", prompt: "Share a failure/mistake that taught you something important:", placeholder: "E.g., Shipped too early, learned to validate with users first..." },
  { id: 3, category: "Your Experiences", prompt: "What's the hardest problem you've solved in your career?", placeholder: "E.g., Re-architected a flaky pipeline to 99.9% uptime..." },
  { id: 4, category: "Your Beliefs", prompt: "What's your contrarian take that most people in your field disagree with?", placeholder: "E.g., Velocity beats perfect correctness in early stages..." },
  { id: 5, category: "Your Beliefs", prompt: "What principle/rule do you always follow that others should know?", placeholder: "E.g., Show the work—process over outcomes wins trust..." },
  { id: 6, category: "Your Beliefs", prompt: "What common advice in your field is actually terrible?", placeholder: "E.g., 'Wait for PMF'—ship iterations that create PMF..." },
  { id: 7, category: "Your Bounce AI Story", prompt: "What surprised you most about joining Bounce AI?", placeholder: "E.g., Depth of customer focus in roadmap rituals..." },
  { id: 8, category: "Your Bounce AI Story", prompt: "What are we doing differently here that you haven't seen elsewhere?", placeholder: "E.g., Pairing eng + CS weekly to review narratives..." },
  { id: 9, category: "Your Bounce AI Story", prompt: "Describe a recent 'aha moment' working on our product/team:", placeholder: "E.g., Realized our users value transparency over polish..." },
  { id: 10, category: "Your Vision", prompt: "What do you think your industry/field will look like in 3 years?", placeholder: "E.g., Decision loops shrink from weeks to hours with AI..." },
];

const total = QUESTIONS.length;

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(total).fill(""));
  const [touched, setTouched] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const current = QUESTIONS[step];
  const completed = useMemo(() => answers.filter((a) => a.trim().length > 0).length, [answers]);
  const progress = useMemo(() => ((step) / Math.max(1, total)) * 100, [step]);
  const xp = useMemo(() => completed * 10, [completed]);

  useEffect(() => {
    // Autofocus current textarea
    const t = setTimeout(() => inputRef.current?.focus(), 50);
    return () => clearTimeout(t);
  }, [step]);

  const update = (val: string) => {
    setAnswers((arr) => {
      const next = [...arr];
      next[step] = val;
      return next;
    });
  };

  const next = () => {
    if (!answers[step]?.trim()) {
      setTouched(true);
      toast("Add a quick note", { description: "Even 1–2 sentences help us tailor content authentically." });
      return;
    }
    if (step < total - 1) setStep((s) => s + 1);
  };

  const back = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  const skip = () => {
    if (step < total - 1) setStep((s) => s + 1);
  };

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      next();
    }
  };

  const done = step === total - 1 && answers[step].trim().length > 0;

  return (
    <div className="min-h-screen bg-background text-foreground premium-gradient-bg">
      <SEO
        title="Onboarding – 10-Question Story Mining"
        description="Typeform-style onboarding to capture authentic stories, beliefs, and vision."
        canonicalPath="/onboarding"
      />
      <NavBar />

      <main className="mx-auto max-w-[960px] px-4 pb-16 pt-8 animate-enter">
        <header className="flex flex-col gap-2">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">10-Question Story Mining</h1>
          <p className="text-muted-foreground">10–15 minutes. One question at a time. Your answers shape an on-brand content strategy.</p>
        </header>

        <section className="mt-8 space-y-4">
          {/* Top progress */}
          <div className="flex items-center gap-3">
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-2 bg-foreground/80" style={{ width: `${progress}%` }} />
            </div>
            <span className="text-xs text-muted-foreground min-w-[88px] text-right">
              {step + 1} / {total}
            </span>
          </div>

          {/* XP micro-gamification */}
          <div className="flex items-center gap-2 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 border border-input bg-card">
              <Trophy className="h-4 w-4 text-foreground/70" />
              <span>{xp} XP</span>
            </span>
            <button
              onClick={() => toast("Why this matters", { description: "Richer answers = more authentic, high-signal content." })}
              className="text-xs text-muted-foreground inline-flex items-center gap-1 hover-scale"
              aria-label="Why we ask this"
            >
              <Info className="h-3.5 w-3.5" /> Why we ask this
            </button>
          </div>

          {/* Question Card */}
          <Card className="elevation-2 bg-card/90">
            <CardHeader>
              <div className="text-xs uppercase tracking-wide text-muted-foreground">{current.category}</div>
              <h2 className="text-2xl md:text-3xl font-medium leading-tight">{current.prompt}</h2>
            </CardHeader>
            <CardContent>
              <Textarea
                ref={inputRef}
                value={answers[step]}
                onChange={(e) => update(e.target.value)}
                onKeyDown={handleKey}
                placeholder={current.placeholder}
                aria-label={`Answer for question ${step + 1}`}
                className="min-h-[160px] md:min-h-[200px]"
              />
              {touched && !answers[step]?.trim() && (
                <p className="mt-2 text-sm text-destructive">Please add at least a short sentence.</p>
              )}
            </CardContent>
            <CardFooter className="flex items-center justify-between gap-2">
              <div className="text-xs text-muted-foreground">Press Cmd/Ctrl + Enter to continue</div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="pill" onClick={back} disabled={step === 0} aria-label="Back">
                  <ArrowLeft className="h-4 w-4 mr-1" /> Back
                </Button>
                <Button variant="soft" size="pill" onClick={skip} disabled={step === total - 1} aria-label="Skip">
                  Skip
                </Button>
                {step < total - 1 ? (
                  <Button variant="premium" size="pill" onClick={next} aria-label="Next">
                    Next <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                ) : (
                  <Button
                    variant="premium"
                    size="pill"
                    onClick={() => toast.success("Great work!", { description: "We’ll use this to tailor your strategy." })}
                    disabled={!done}
                    aria-label="Finish"
                  >
                    Finish
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>

          {/* Step indicator */}
          <div className="flex items-center justify-center gap-1 mt-2">
            {QUESTIONS.map((q, i) => (
              <span
                key={q.id}
                className={
                  "h-1.5 w-6 rounded-full " +
                  (i <= step ? "bg-foreground/80" : "bg-muted")
                }
                aria-hidden
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Onboarding;
