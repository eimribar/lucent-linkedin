import SEO from "@/components/seo/SEO";
import SwipeDeck from "@/components/swipe/SwipeDeck";

const Approvals = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Approvals – LinkedIn Content Engine"
        description="Approve, decline, or edit posts with a fast Tinder-style workflow."
        canonicalPath="/approve"
      />
      <main className="mx-auto max-w-3xl px-6 pt-12 pb-20 animate-enter">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-gradient-brand text-center">Approvals</h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground text-center">
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
