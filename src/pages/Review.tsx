import NavBar from "@/components/layout/NavBar";
import { Button } from "@/components/ui/button";
import SEO from "@/components/seo/SEO";
import { Link } from "react-router-dom";

const Review = () => {
  return (
    <div className="min-h-screen bg-background text-foreground premium-gradient-bg">
      <SEO
        title="Review – LinkedIn Content Engine"
        description="Review and refine drafts with clear, minimal feedback workflows."
        canonicalPath="/review"
      />
      <NavBar />
      <main className="mx-auto max-w-[1440px] px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">Review</h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">
          Ensure every draft meets your quality bar before approval.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild variant="soft" size="pill">
            <Link to="/draft">Back to Draft</Link>
          </Button>
          <Button asChild variant="premium" size="pill">
            <Link to="/approve">Approve</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Review;
