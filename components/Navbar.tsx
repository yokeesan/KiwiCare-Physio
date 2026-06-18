"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/#about" },
  { label: "Why Us", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div
        className="hidden md:block"
        style={{
          background: "linear-gradient(90deg, #0f766e, #0d9488)",
          color: "white",
          fontSize: "0.82rem",
          padding: "0.45rem 0",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 1.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <span
              style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}
            >
              <Phone size={13} /> +64 22 060 2032
            </span>
          </div>
          <span style={{ opacity: 0.85 }}>Mon – Sat: 8:00 AM – 6:00 PM</span>
        </div>
      </div>

      {/* Main nav */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="glass"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          padding: scrolled ? "0.6rem 0" : "1rem 0",
          transition: "padding 0.3s ease, box-shadow 0.3s ease",
          boxShadow: scrolled ? "0 4px 30px rgba(13,148,136,0.12)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="/KiwiCare.png"
              alt="Kiwicare Physio Logo"
              style={{
                height: 64,
                width: "auto",
                objectFit: "contain",
                marginLeft: "-0.5rem",
                transform: scrolled ? "scale(1)" : "scale(1)",
                transition: "transform 0.3s ease",
                transformOrigin: "left center",
              }}
            />
          </a>

          {/* Desktop links */}
          <div
            className="hidden md:flex"
            style={{ alignItems: "center", gap: "2rem" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  textDecoration: "none",
                  color: "#334155",
                  fontWeight: 500,
                  fontSize: "0.92rem",
                  transition: "color 0.2s",
                  position: "relative",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0d9488")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#334155")}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+64220602032"
              className="btn-primary"
              style={{ padding: "0.65rem 1.5rem", fontSize: "0.88rem", display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <Phone size={15} /> Call Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none",
              border: "none",
              color: "#0f172a",
              cursor: "pointer",
            }}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
              style={{ overflow: "hidden", padding: "0 1.5rem" }}
            >
              <div
                style={{
                  paddingTop: "1rem",
                  paddingBottom: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.8rem",
                }}
              >
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      textDecoration: "none",
                      color: "#334155",
                      fontWeight: 500,
                      fontSize: "1rem",
                      padding: "0.5rem 0",
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="tel:+64220602032"
                  className="btn-primary"
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    marginTop: "0.5rem",
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone size={15} /> Call Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
