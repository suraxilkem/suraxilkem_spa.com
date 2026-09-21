import { approachSteps } from "@/data/approach";
import { Reveal } from "@/components/ui/Reveal";

export function OurApproach() {
  return (
    <section id="approach" className="section section-tight">
      <div className="shell">
        <Reveal className="section-head">
          <p className="section-label">Our Approach</p>
          <h2>From Requirement to Solution.</h2>
        </Reveal>

        <div className="steps-grid">
          {approachSteps.map((step) => {
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
      </div>
    </section>
  );
}
