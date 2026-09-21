import { solutionDetails } from "@/data/solutionDetails";
import { Reveal } from "@/components/ui/Reveal";

export function SolutionDetails() {
  return (
    <section className="section">
      <div className="shell">
        <Reveal className="section-head">
          <h2>Know More Details about Our Chemical Solutions</h2>
        </Reveal>

        {solutionDetails.map((detail, index) => (
          <Reveal key={detail.id}>
            <div
              id={detail.id}
              style={{
                paddingTop: index === 0 ? 0 : 48,
                marginTop: index === 0 ? 0 : 48,
                borderTop: index === 0 ? "none" : "1px solid var(--line)",
              }}
            >
              <h3 style={{ fontSize: 26 }}>{detail.heading}</h3>
              <p style={{ maxWidth: 720 }}>{detail.intro}</p>

              {detail.items && (
                <div className="why-grid" style={{ marginTop: 24, marginBottom: 24 }}>
                  {detail.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div className="why-card" key={item.title}>
                        <span className="why-icon">
                          <Icon size={20} />
                        </span>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              )}

              {detail.tags && (
                <div className="chip-row" style={{ margin: "24px 0" }}>
                  {detail.tags.map((tag) => (
                    <span className="chip" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <a className="btn btn-primary" href={detail.cta.href}>
                {detail.cta.label}
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
