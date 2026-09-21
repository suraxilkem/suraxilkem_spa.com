import { customSteps, customSolutionsCopy } from "@/data/solutionDetails";
import { Reveal } from "@/components/ui/Reveal";

export function CustomSolutions() {
  const { closing } = customSolutionsCopy;

  return (
    <section id={customSolutionsCopy.id} className="section section-alt">
      <div className="shell">
        <Reveal className="section-head">
          <p className="section-label">Custom Chemical Solutions</p>
          <h2>{customSolutionsCopy.heading}</h2>
          <p className="section-sub">{customSolutionsCopy.intro}</p>
        </Reveal>

        <div className="steps-grid">
          {customSteps.map((step) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.step}>
                <div className="step-card">
                  <div className="step-head">
                    <Icon size={20} />
                    <span className="step-num">{step.step}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="cta-highlight">
            <p className="section-label" style={{ color: "var(--blue)" }}>
              {closing.eyebrow}
            </p>
            <h3 style={{ fontSize: 28 }}>{closing.heading}</h3>
            <p style={{ maxWidth: 560, margin: "0 auto 24px" }}>{closing.body}</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a className="btn btn-primary" href={closing.primaryCta.href}>
                {closing.primaryCta.label}
              </a>
              <a className="btn btn-ghost" href={closing.secondaryCta.href}>
                {closing.secondaryCta.label}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
