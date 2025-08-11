import NavBar from "@/components/layout/NavBar";
import SEO from "@/components/seo/SEO";

const Generate = () => {
  return (
    <div className="min-h-screen bg-background text-foreground premium-gradient-bg">
      <SEO
        title="Content Generation – LinkedIn Content Engine"
        description="Generate premium LinkedIn posts with a focused, minimal workflow."
        canonicalPath="/generate"
      />
      <NavBar />
      <main className="mx-auto max-w-[1440px] px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">Content Generation</h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">
          Turn ideas into polished drafts with a distraction-free editor.
        </p>
      </main>
    </div>
  );
};

export default Generate;
