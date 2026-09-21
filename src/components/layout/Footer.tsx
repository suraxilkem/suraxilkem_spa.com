import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YoutubeIcon,
  XIcon,
  PinterestIcon,
} from "@/components/ui/SocialIcons";

const socialLinks = [
  { label: "Facebook", href: siteConfig.social.facebook, Icon: FacebookIcon },
  { label: "Instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: LinkedInIcon },
  { label: "YouTube", href: siteConfig.social.youtube, Icon: YoutubeIcon },
  { label: "X (Twitter)", href: siteConfig.social.x, Icon: XIcon },
  { label: "Pinterest", href: siteConfig.social.pinterest, Icon: PinterestIcon },
];

const solutionsLinks = [
  { label: "Water Treatment", href: "#water-treatment-chemicals" },
  { label: "Wastewater Treatment", href: "#wastewater-treatment-chemicals" },
  { label: "Specialty Maintenance", href: "#industrial-maintenance-chemicals" },
  { label: "Housekeeping", href: "#housekeeping-cleaning-chemicals" },
  { label: "Fragrance Solutions", href: "#fragrance-solutions" },
  { label: "Projects", href: "#projects" },
  { label: "Custom Solutions", href: "#custom-chemical-solutions" },
];

const industriesLinks = [
  "Manufacturing",
  "Automotive & Engineering",
  "Textile",
  "Food & Beverage",
  "Pharmaceutical",
  "Hospitality",
  "Chemical & Process Industries",
  "Commercial & Institutional",
];

const companyLinks = [
  { label: "About Suraxil", href: "#why" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Image src="/logo-white.png" alt="Suraxil" width={140} height={40} className="footer-logo" />
          <p style={{ color: "#fff", fontWeight: 600, marginTop: 20, marginBottom: 0 }}>{siteConfig.tagline}</p>
          <p>
            Chemical solutions for water treatment, wastewater treatment, industrial maintenance, housekeeping,
            fragrance and specialized applications.
          </p>
          <div className="footer-social">
            {socialLinks.map(({ label, href, Icon }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="footer-heading">Solutions</p>
          <ul className="footer-col">
            {solutionsLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer-heading">Industries</p>
          <ul className="footer-col">
            {industriesLinks.map((label) => (
              <li key={label}>
                <a href="#industries">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer-heading">Company</p>
          <ul className="footer-col">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li style={{ marginTop: 10 }}>Need a Chemical Solution?</li>
            <li>
              <a href="#contact" style={{ color: "var(--blue)", fontWeight: 600 }}>
                Request a Quote →
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</span>
      </div>
    </footer>
  );
}
