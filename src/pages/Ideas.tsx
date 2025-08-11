import NavBar from "@/components/layout/NavBar";
import SEO from "@/components/seo/SEO";

const Ideas = () => {
  return (
    <div className="min-h-screen bg-background text-foreground premium-gradient-bg">
      <SEO
        title="Content Ideas – LinkedIn Content Engine"
        description="Brainstorm, refine, and prioritize LinkedIn content ideas with clarity."
        canonicalPath="/ideas"
      />
      <NavBar />
      <main className="mx-auto max-w-[1440px] px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">Content Ideas</h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">
          Capture sparks from the lake, score potential, and shape strong angles.
        </p>
      </main>
    </div>
  );
};

export default Ideas;
