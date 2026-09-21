import { ShieldCheck, Check } from "lucide-react";
import {
  trustLabel,
  trustHeading,
  trustBody,
  trustChecklist,
  trustCardTitle,
  trustCardSub,
  trustCardBody,
  trustCardList,
} from "@/data/trust";
import { Reveal } from "@/components/ui/Reveal";

export function TrustExperience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="shell projects-grid">
        <Reveal>
          <p className="section-label">{trustLabel}</p>
          <h2>{trustHeading}</h2>
          <p>{trustBody}</p>
          <ul className="check-list">
            {trustChecklist.map((item) => (
              <li key={item}>
                <Check size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="lab-card">
          <div className="lab-card-head">
            <ShieldCheck size={26} />
            <div>
              <p className="lab-card-title">{trustCardTitle}</p>
              <p className="lab-card-sub">{trustCardSub}</p>
            </div>
          </div>
          <p>{trustCardBody}</p>
          <ul className="lab-list">
            {trustCardList.map((item) => (
              <li key={item}>
                <Check size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
