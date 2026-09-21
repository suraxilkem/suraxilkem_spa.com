import { industries } from "@/data/industries";
import { Reveal } from "@/components/ui/Reveal";

export function Industries() {
  return (
    <section id="industries" className="section section-alt">
      <div className="shell">
        {/* widened to 960px: this heading's 46 characters wrap at the site-wide 640px section-head cap */}
        <Reveal className="section-head">
          <div style={{ maxWidth: 960 }}>
            <p className="section-label">Industries</p>
            <h2>Chemical Solutions Across Multiple Industries</h2>
            <p className="section-sub">Suraxil serves diverse industrial, commercial and institutional applications.</p>
          </div>
        </Reveal>

        <div className="industry-grid">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Reveal className={`reveal-delay-${index % 3}`} key={industry.title}>
                <div className="industry-card">
                  <span className="industry-icon">
                    <Icon size={20} />
                  </span>
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
