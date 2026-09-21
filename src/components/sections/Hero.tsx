import { heroEyebrow, heroHeadline, heroSub, heroPrimaryCta, heroSecondaryCta, heroStats } from "@/data/hero";
import { HeroArtwork } from "./HeroArtwork";

export function Hero() {
  return (
    <section id="home" className="hero">
      <HeroArtwork />
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow-pill">{heroEyebrow}</span>
          <h1>{heroHeadline}</h1>
          <p className="hero-sub">{heroSub}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={heroPrimaryCta.href}>
              {heroPrimaryCta.label}
            </a>
            <a className="btn btn-ghost" href={heroSecondaryCta.href}>
              {heroSecondaryCta.label}
            </a>
          </div>

          <div className="hero-stats">
            {heroStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div className="hero-stat" key={stat.label}>
                  <span className="hero-stat-icon">
                    <Icon size={18} />
                  </span>
                  <span className="hero-stat-text">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
