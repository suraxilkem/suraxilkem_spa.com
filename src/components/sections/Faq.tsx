import { faqItems } from "@/data/faq";
import { Reveal } from "@/components/ui/Reveal";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";

export function Faq() {
  return (
    <section id="faq" className="section section-alt">
      <FaqJsonLd items={faqItems} />
      <div className="shell">
        <Reveal className="section-head">
          <p className="section-label">FAQ</p>
          <h2>Frequently Asked Questions</h2>
          <p className="section-sub">
            Quick answers to the questions we hear most. Still need something specific? Reach out and we will help
            directly.
          </p>
        </Reveal>

        <div className="faq-list">
          {faqItems.map((item) => (
            <details className="faq-item" name="faq" key={item.question}>
              <summary>
                {item.question}
                <span className="faq-icon">+</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
