"use client";

import { motion } from "framer-motion";
import { Phone, Play, Award, Users, Clock, Star } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: <Users size={20} />, value: "6+", label: "Specialties Offered" },
  { icon: <Award size={20} />, value: "98%", label: "Success Rate" },
  { icon: <Clock size={20} />, value: "1+", label: "Year in Auckland" },
  { icon: <Star size={20} />, value: "4.9", label: "Patient Rating" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background:
          "linear-gradient(160deg, #f0fdfa 0%, #ecfdf5 40%, #ffffff 100%)",
      }}
    >
      {/* Decorative orbs */}
      <div
        className="orb"
        style={{
          width: 500,
          height: 500,
          background: "rgba(13,148,136,0.08)",
          top: "-10%",
          right: "-5%",
        }}
      />
      <div
        className="orb"
        style={{
          width: 350,
          height: 350,
          background: "rgba(5,150,105,0.06)",
          bottom: "10%",
          left: "-8%",
        }}
      />
      <div
        className="orb animate-float"
        style={{
          width: 200,
          height: 200,
          background: "rgba(20,184,166,0.1)",
          top: "20%",
          right: "20%",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            "radial-gradient(circle, #0d9488 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1.5rem 4rem",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Left Column Text */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "rgba(13,148,136,0.08)",
                  border: "1px solid rgba(13,148,136,0.15)",
                  borderRadius: 50,
                  padding: "0.5rem 1.2rem",
                  fontSize: "0.85rem",
                  color: "#0d9488",
                  fontWeight: 600,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#10b981",
                    boxShadow: "0 0 8px rgba(16,185,129,0.6)",
                  }}
                />
                Now Accepting New Patients in Auckland
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                color: "#0f172a",
              }}
            >
              Your Path to <span className="gradient-text">Pain-Free</span>{" "}
              Living Starts Here
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                color: "#64748b",
                lineHeight: 1.7,
              }}
            >
              At Kiwicare Physio, we identify and treat the root cause of pain
              and movement challenges—not just the symptoms. Through expert
              hands-on assessment and evidence-based care, we promote natural
              healing, restore functional movement, and help you achieve lasting
              results. We offer affordable, high-quality physiotherapy services,
              making effective care accessible to everyone so they can move
              better and enjoy life to the fullest.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                alignItems: "center",
                marginTop: "0.5rem",
              }}
            >
              <a
                href="tel:+64220602032"
                className="btn-primary"
                style={{ fontSize: "1rem", padding: "1rem 2.2rem" }}
              >
                Call Us Now <Phone size={18} />
              </a>
              <button
                className="btn-outline"
                style={{ fontSize: "1rem", padding: "1rem 2.2rem" }}
              >
                <Play size={18} /> Watch Our Story
              </button>
            </motion.div>

            {/* Trust line */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                flexWrap: "wrap",
                marginTop: "1rem",
              }}
            >
              <div style={{ display: "flex" }}>
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: `linear-gradient(${135 + i * 30}deg, #0d9488, #059669)`,
                      border: "2.5px solid white",
                      marginLeft: i === 1 ? 0 : -10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                    }}
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ display: "flex", gap: 2 }}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <span style={{ fontSize: "0.82rem", color: "#64748b" }}>
                  Expert physiotherapy care in Mount Eden, Auckland
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column Image */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              marginTop: "-2rem",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 900,
                height: 900,
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              {/* Background accent for the image */}
              <div
                style={{
                  position: "absolute",
                  top: "10%",
                  width: "80%",
                  height: "60%",
                  background:
                    "linear-gradient(135deg, rgba(13,148,136,0.2), rgba(5,150,105,0.1))",
                  borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
                  filter: "blur(20px)",
                  zIndex: 0,
                }}
              />

              <Image
                src="/hero-image.png"
                alt="Physiotherapist"
                fill
                style={{
                  objectFit: "contain",
                  zIndex: 1,
                  objectPosition: "top",
                }}
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          variants={fadeUp}
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="glass card-hover"
              style={{
                padding: "1.5rem",
                borderRadius: 16,
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background:
                    "linear-gradient(135deg, rgba(13,148,136,0.12), rgba(5,150,105,0.08))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0d9488",
                }}
              >
                {stat.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontWeight: 800,
                    fontSize: "1.3rem",
                    color: "#0f172a",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: "0.78rem", color: "#64748b" }}>
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
