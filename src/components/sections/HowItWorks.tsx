import { CircleCheck } from "lucide-react";
import { howItWorksLabel, howItWorksHeading, howItWorksSub, howItWorksSteps, sourcingNote } from "@/data/howItWorks";
import { Reveal } from "@/components/ui/Reveal";

export function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="shell">
        <Reveal className="section-head">
          <p className="section-label">{howItWorksLabel}</p>
          <h2>{howItWorksHeading}</h2>
          <p className="section-sub">{howItWorksSub}</p>
        </Reveal>

        <div className="steps-grid">
          {howItWorksSteps.map((step) => {
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

        <div className="sourcing-note">
          <CircleCheck size={20} />
          <p>{sourcingNote}</p>
        </div>
      </div>
    </section>
  );
}
