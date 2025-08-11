import NavBar from "@/components/layout/NavBar";
import SEO from "@/components/seo/SEO";
import SwipeDeck from "@/components/swipe/SwipeDeck";

const Approvals = () => {
  return (
    <div className="min-h-screen bg-background text-foreground premium-gradient-bg">
      <SEO
        title="Approvals – LinkedIn Content Engine"
        description="Approve, decline, or edit posts with a fast Tinder-style workflow."
        canonicalPath="/approvals"
      />
      <NavBar />
      <main className="mx-auto max-w-[1440px] px-4 py-12 animate-enter">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">Approvals</h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">
          Quickly review drafts: swipe right to approve, left to decline, tap to edit.
        </p>
        <div className="mt-8">
          <SwipeDeck />
        </div>
      </main>
    </div>
  );
};

export default Approvals;
