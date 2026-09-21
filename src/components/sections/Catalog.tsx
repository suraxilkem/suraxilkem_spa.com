"use client";

import { useState } from "react";
import { FileText, ShieldAlert } from "lucide-react";
import { catalogTabs, catalogDefaultTab, catalogHeading, catalogLabel } from "@/data/catalog";
import { Reveal } from "@/components/ui/Reveal";

export function Catalog() {
  const [activeTab, setActiveTab] = useState(catalogDefaultTab);
  const tab = catalogTabs.find((t) => t.id === activeTab) ?? catalogTabs.find((t) => t.id === catalogDefaultTab)!;

  return (
    <section id="catalog" className="section">
      <div className="shell">
        <Reveal className="section-head">
          <p className="section-label">{catalogLabel}</p>
          <h2>{catalogHeading}</h2>
        </Reveal>

        <div className="tab-bar" role="tablist" aria-label="Product categories">
          {catalogTabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={t.id === activeTab}
              className={`tab-btn ${t.id === activeTab ? "tab-btn-active" : ""}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <p className="catalog-intro">{tab.intro}</p>

        <div className="catalog-groups">
          {tab.groups.map((group) => (
            <div className="catalog-group" key={group.name}>
              <h3>{group.name}</h3>
              <div className="product-list">
                {group.items.map((item) => (
                  <div className="product-row" key={item.name}>
                    <div>
                      <p className="product-name">{item.name}</p>
                      <p className="product-desc">{item.description}</p>
                    </div>
                    <div className="product-badges">
                      <span className="badge">
                        <FileText size={12} /> TDS
                      </span>
                      <span className="badge">
                        <ShieldAlert size={12} /> MSDS
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
