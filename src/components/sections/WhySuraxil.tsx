import { whySuraxil } from "@/data/why";
import { Reveal } from "@/components/ui/Reveal";

export function WhySuraxil() {
  return (
    <section id="why" className="section">
      <div className="shell">
        <Reveal className="section-head">
          <p className="section-label">Why Suraxil</p>
          <h2>More Than a Chemical Supplier.</h2>
          <p className="section-sub">
            Suraxil is built around a simple idea: <strong>the right chemical solution starts with understanding
            the application.</strong>
          </p>
        </Reveal>

        <div className="why-grid">
          {whySuraxil.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal className={`reveal-delay-${index % 3}`} key={item.title}>
                <div className="why-card">
                  <span className="why-icon">
                    <Icon size={20} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
