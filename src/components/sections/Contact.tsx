import { Send, MapPin, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  const { contact } = siteConfig;

  return (
    <section id="contact" className="section section-dark">
      <div className="shell contact-grid">
        <Reveal>
          <p className="section-label" data-light>
            Get in touch
          </p>
          <h2>Tell us what you need. We will deliver it.</h2>
          <p className="contact-sub">
            Send us the product, quantity or application you are looking for — whether you are an industrial plant,
            a hospital, a business or an individual customer — and our team will come back with availability and a
            quote.
          </p>
          <a className="btn btn-primary" href={`mailto:${contact.email}?subject=Product%20enquiry`}>
            <Send size={16} /> Email {contact.email}
          </a>
        </Reveal>

        <Reveal className="contact-cards">
          <div className="contact-card">
            <MapPin size={20} />
            <div>
              <p className="contact-card-title">Registered office</p>
              <p>
                {contact.address.street},
                <br />
                {contact.address.locality} — {contact.address.postalCodeDisplay}, India
              </p>
            </div>
          </div>
          <div className="contact-card">
            <Phone size={20} />
            <div>
              <p className="contact-card-title">Phone</p>
              <p>
                {contact.phone}
                <br />
                {contact.phoneAlt}
              </p>
            </div>
          </div>
          <div className="contact-card">
            <Mail size={20} />
            <div>
              <p className="contact-card-title">Email</p>
              <p>{contact.email}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
