import NavBar from "@/components/layout/NavBar";
import SEO from "@/components/seo/SEO";

const Lake = () => {
  return (
    <div className="min-h-screen bg-background text-foreground premium-gradient-bg">
      <SEO
        title="Content Lake – LinkedIn Content Engine"
        description="Centralized content lake for raw assets, research, and inspiration."
        canonicalPath="/lake"
      />
      <NavBar />
      <main className="mx-auto max-w-[1440px] px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">Content Lake</h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">
          A unified repository for ideas, clips, notes, and references to power your content.
        </p>
      </main>
    </div>
  );
};

export default Lake;
