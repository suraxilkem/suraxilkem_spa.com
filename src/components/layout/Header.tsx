"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { contact } = siteConfig;

  return (
    <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
      <div className="utility-bar">
        <div className="shell utility-inner">
          <a className="utility-item" href={`mailto:${contact.email}`}>
            <Mail size={13} /> {contact.email}
          </a>
          <a className="utility-item" href={contact.phoneHref}>
            <Phone size={13} /> {contact.phone}
          </a>
          <span className="utility-item utility-address">
            <MapPin size={13} /> {contact.location}
          </span>
        </div>
      </div>

      <div className="shell nav-inner">
        <a href="#home" aria-label="Suraxil home">
          <Image src="/logo.png" alt="Suraxil" width={140} height={38} className="brand-logo" priority />
        </a>

        <nav className="nav-links" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-primary nav-cta" href={siteConfig.headerCta.href}>
          {siteConfig.headerCta.label}
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-menu" aria-label="Mobile">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="btn btn-primary" href={siteConfig.headerCta.href} onClick={() => setMenuOpen(false)}>
            {siteConfig.headerCta.label}
          </a>
        </nav>
      )}
    </header>
  );
}
