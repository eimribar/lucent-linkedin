import SEO from "@/components/seo/SEO";
import { Badge } from "@/components/ui/badge";
import { sampleProfile } from "@/data/sampleProfile";
import { sampleOnboarding } from "@/data/sampleOnboarding";

const Pill = ({ children }: { children: string }) => (
  <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">{children}</Badge>
);

const Profile = () => {
  const p = sampleProfile;
  const skills = (p.topSkillsByEndorsements || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={`${p.fullName} – Profile`}
        description={`${p.fullName} · ${p.headline}`}
        canonicalPath="/profile"
      />

      <main className="mx-auto max-w-6xl px-4 pt-10 pb-16 animate-enter">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left: LinkedIn profile */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header card */}
            <section className="border-gradient-brand rounded-2xl overflow-hidden">
              <div className="h-36 bg-gradient-brand-soft" aria-hidden />
              <div className="p-6 relative">
                <img
                  src={p.profilePicHighQuality || p.profilePic || ""}
                  alt={`${p.fullName} profile photo`}
                  className="h-28 w-28 rounded-full border-4 border-card object-cover -mt-16"
                  loading="lazy"
                />
                <div className="mt-4">
                  <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">{p.fullName}</h1>
                  <p className="mt-1 text-sm md:text-base text-muted-foreground">{p.headline}</p>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  {p.addressWithCountry && <span>{p.addressWithCountry}</span>}
                  {p.connections ? <span>• {p.connections.toLocaleString()} connections</span> : null}
                  {p.followers ? <span>• {p.followers.toLocaleString()} followers</span> : null}
                </div>
              </div>
            </section>

            {/* About */}
            {p.about && (
              <section className="border-gradient-brand rounded-2xl p-6">
                <h2 className="text-lg font-medium tracking-tight">About</h2>
                <p className="mt-2 whitespace-pre-line text-sm text-muted-foreground">{p.about}</p>
              </section>
            )}

            {/* Experience */}
            {p.experiences?.length ? (
              <section className="border-gradient-brand rounded-2xl p-6">
                <h2 className="text-lg font-medium tracking-tight">Experience</h2>
                <ul className="mt-3 space-y-4">
                  {p.experiences.map((exp, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      {exp.logo ? (
                        <img src={exp.logo} alt={`${exp.subtitle || exp.title} logo`} className="h-10 w-10 rounded-md object-cover" loading="lazy" />
                      ) : (
                        <div className="h-10 w-10 rounded-md bg-muted" />
                      )}
                      <div>
                        <div className="font-medium text-sm md:text-base text-foreground">{exp.title}</div>
                        {exp.subtitle && <div className="text-sm text-muted-foreground">{exp.subtitle}</div>}
                        {exp.caption && <div className="text-xs text-muted-foreground">{exp.caption}</div>}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {/* Education */}
            {p.educations?.length ? (
              <section className="border-gradient-brand rounded-2xl p-6">
                <h2 className="text-lg font-medium tracking-tight">Education</h2>
                <ul className="mt-3 space-y-4">
                  {p.educations.map((edu, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      {edu.logo ? (
                        <img src={edu.logo} alt={`${edu.title} logo`} className="h-10 w-10 rounded-md object-cover" loading="lazy" />
                      ) : (
                        <div className="h-10 w-10 rounded-md bg-muted" />
                      )}
                      <div>
                        <div className="font-medium text-sm md:text-base text-foreground">{edu.title}</div>
                        {edu.subtitle && <div className="text-sm text-muted-foreground">{edu.subtitle}</div>}
                        {edu.caption && <div className="text-xs text-muted-foreground">{edu.caption}</div>}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {/* Skills */}
            {skills.length ? (
              <section className="border-gradient-brand rounded-2xl p-6">
                <h2 className="text-lg font-medium tracking-tight">Top skills</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skills.map((s, i) => (
                    <Badge key={`${s}-${i}`} variant="secondary" className="rounded-full px-3 py-1 text-xs">
                      {s}
                    </Badge>
                  ))}
                </div>
              </section>
            ) : null}
          </div>

          {/* Right: Onboarding story */}
          <aside className="lg:col-span-1 space-y-6">
            <section className="border-gradient-brand rounded-2xl p-6">
              <h2 className="text-lg font-medium tracking-tight">Your story</h2>
              {(["Your Experiences","Your Beliefs","Your Bounce AI Story","Your Vision"] as const).map((cat) => {
                const items = sampleOnboarding.filter((q) => q.category === cat);
                if (!items.length) return null;
                return (
                  <div key={cat} className="mt-4">
                    <div className="text-sm font-medium text-foreground mb-2">{cat}</div>
                    <ol className="space-y-3">
                      {items.map((item) => (
                        <li key={item.id} className="rounded-xl bg-secondary/40 p-4">
                          <div className="text-sm font-medium text-foreground">{item.id}. {item.question}</div>
                          <p className="mt-1 text-sm text-muted-foreground whitespace-pre-line">{item.answer}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                );
              })}
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Profile;
