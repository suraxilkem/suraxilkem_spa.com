import Image from "next/image";
import { solutions, accentColors } from "@/data/solutions";
import { Reveal } from "@/components/ui/Reveal";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="section">
      <div className="shell">
        <Reveal className="section-head">
          <p className="section-label">What We Do</p>
          <h2>One Partner. Multiple Chemical Solutions.</h2>
          <p className="section-sub">
            Suraxil brings together a broad range of chemical solutions designed for industrial, commercial and
            facility applications.
          </p>
        </Reveal>

        {solutions.map((solution, index) => {
          const Icon = solution.icon;
          const card = (
            <div className="solution-card">
              <span className="overview-icon" style={{ color: accentColors[solution.accent] }}>
                <Icon size={22} />
              </span>
              <h3 className="overview-title">{solution.title}</h3>
              <p className="overview-blurb">{solution.description}</p>
              <a className="overview-link" href={solution.href}>
                {solution.cta} →
              </a>
            </div>
          );
          const photo = (
            <div className="solution-photo">
              <Image src={solution.image.src} alt={solution.image.alt} width={560} height={320} />
            </div>
          );

          return (
            <Reveal className="solution-row" key={solution.id}>
              {index % 2 === 0 ? (
                <>
                  {card}
                  {photo}
                </>
              ) : (
                <>
                  {photo}
                  {card}
                </>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
