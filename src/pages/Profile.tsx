import SEO from "@/components/seo/SEO";
import UserNav from "@/components/layout/UserNav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Pill = ({ children }: { children: string }) => (
  <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">{children}</Badge>
);

const Profile = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Profile – LinkedIn Content Engine"
        description="Unified profile combining import + onboarding (mock)."
        canonicalPath="/profile"
      />

      <main className="mx-auto max-w-2xl px-4 py-16 animate-enter">
        <UserNav />
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-gradient-brand text-center">Profile</h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground text-center">
          A clean, on‑brand view of your details. Real data will appear after import and onboarding.
        </p>

        <div className="mt-10 space-y-6">
          <section className="border-gradient-brand rounded-2xl p-6">
            <div className="font-medium mb-2">Basics</div>
            <div className="text-sm text-muted-foreground grid grid-cols-2 gap-3">
              <div><span className="text-foreground font-medium">Name:</span> You</div>
              <div><span className="text-foreground font-medium">Location:</span> Remote</div>
              <div className="col-span-2"><span className="text-foreground font-medium">Headline:</span> Building signal over noise</div>
            </div>
          </section>

          <section className="border-gradient-brand rounded-2xl p-6">
            <div className="font-medium mb-2">Bio</div>
            <p className="text-sm text-muted-foreground">Operator turned storyteller. I turn lessons learned into playbooks that help teams move faster.</p>
          </section>

          <section className="border-gradient-brand rounded-2xl p-6">
            <div className="font-medium mb-2">Expertise</div>
            <div className="flex flex-wrap gap-2">
              <Pill>Leadership</Pill>
              <Pill>GTM</Pill>
              <Pill>AI Apps</Pill>
              <Pill>Product Ops</Pill>
            </div>
          </section>

          <footer className="pt-2 flex items-center justify-center">
            <Button asChild variant="premium"><a href="/strategy">View strategy</a></Button>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Profile;
