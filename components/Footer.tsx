"use client";

import {
  Phone,
  Mail,
  Clock,
  Heart,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/#about" },
  { label: "Why Us", href: "/#testimonials" },
  { label: "Call Us", href: "tel:+64220602032" },
];

const serviceLinks = [
  "Sports Rehabilitation",
  "Post-Surgery Recovery",
  "Chronic Pain",
  "Dry Needling",
  "Manual Therapy",
  "Telehealth",
];

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{ background: "#0f172a", color: "white", position: "relative" }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "4rem 1.5rem 2rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2.5rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <img
                src="/KiwiCare.png"
                alt="Kiwicare Physio Logo"
                style={{
                  height: 64,
                  width: "auto",
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                  marginLeft: "-0.5rem",
                  transform: "scale(1)",
                  transformOrigin: "left center",
                  marginBottom: "1.5rem",
                }}
              />
            </div>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "0.88rem",
                lineHeight: 1.7,
                marginBottom: "1.2rem",
              }}
            >
              Evidence-based physiotherapy in the heart of Mount Eden, Auckland.
              Dedicated to restoring movement and improving lives.
            </p>
            <div style={{ display: "flex", gap: "0.6rem" }}>
              {[
                { Icon: Instagram, href: "https://www.instagram.com/kiwicarephysio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                { Icon: Facebook, href: "https://www.facebook.com/share/1BT8H6cLJm/?mibextid=wwXIfr" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/kiwicare-physio/" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#94a3b8",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#0d9488";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.color = "#94a3b8";
                  }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "Outfit, sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                marginBottom: "1.2rem",
              }}
            >
              Quick Links
            </h4>
            {quickLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  display: "block",
                  color: "#94a3b8",
                  textDecoration: "none",
                  fontSize: "0.88rem",
                  padding: "0.3rem 0",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#14b8a6")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontFamily: "Outfit, sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                marginBottom: "1.2rem",
              }}
            >
              Services
            </h4>
            {serviceLinks.map((s) => (
              <a
                key={s}
                href="#services"
                style={{
                  display: "block",
                  color: "#94a3b8",
                  textDecoration: "none",
                  fontSize: "0.88rem",
                  padding: "0.3rem 0",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#14b8a6")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                {s}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "Outfit, sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                marginBottom: "1.2rem",
              }}
            >
              Contact Us
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
              }}
            >
              {[
                { icon: <Phone size={16} />, text: "+64 22 060 2032" },
                {
                  icon: <Mail size={16} />,
                  text: "admin@kiwicarephysio.co.nz",
                },
                {
                  icon: <Clock size={16} />,
                  text: "Mon – Sat: 8:00 AM – 6:00 PM",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "0.6rem",
                    color: "#94a3b8",
                    fontSize: "0.85rem",
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: "#14b8a6", marginTop: 2 }}>
                    {c.icon}
                  </span>
                  <span style={{ whiteSpace: "pre-line" }}>{c.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <p style={{ color: "#64748b", fontSize: "0.82rem" }}>
            © 2026 Kiwicare Physio Ltd. @ All rights reserved.
          </p>
          <p
            style={{
              color: "#64748b",
              fontSize: "0.82rem",
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
            }}
          >
            Made with <Heart size={13} color="#ef4444" fill="#ef4444" /> in
            Auckland, NZ
          </p>
        </div>
      </div>
    </footer>
  );
}
