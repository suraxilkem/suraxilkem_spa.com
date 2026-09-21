import { Check } from "lucide-react";
import { differenceRows, differenceClosingLine } from "@/data/difference";
import { Reveal } from "@/components/ui/Reveal";

export function SuraxilDifference() {
  return (
    <section className="section section-alt">
      <div className="shell">
        <Reveal className="section-head">
          <p className="section-label">The Suraxil Difference</p>
          <h2>Why Manage Multiple Chemical Requirements Separately?</h2>
          <p className="section-sub">Suraxil brings multiple solution categories together under one partner.</p>
        </Reveal>

        <Reveal>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid var(--line)" }}>
                <th style={{ textAlign: "left", padding: "12px 16px", fontFamily: "var(--font-space-grotesk)" }}>
                  Requirement
                </th>
                <th style={{ textAlign: "left", padding: "12px 16px", fontFamily: "var(--font-space-grotesk)" }}>
                  Suraxil Solution
                </th>
              </tr>
            </thead>
            <tbody>
              {differenceRows.map((row) => (
                <tr key={row} style={{ borderBottom: "1px solid var(--line)" }}>
                  <td style={{ padding: "12px 16px", color: "var(--ink)" }}>{row}</td>
                  <td style={{ padding: "12px 16px" }}>
                    <Check size={18} color="var(--teal)" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p
            style={{
              textAlign: "center",
              marginTop: 32,
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 600,
              color: "var(--ink)",
              fontSize: 19.5,
            }}
          >
            {differenceClosingLine}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
