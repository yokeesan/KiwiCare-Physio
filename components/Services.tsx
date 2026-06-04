"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Bone,
  Brain,
  Zap,
  Hand,
  Video,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Activity size={28} />,
    title: "Sports Rehabilitation",
    desc: "Get back in the game with targeted sports injury recovery programs designed for athletes at every level.",
    color: "#0d9488",
    gradient: "linear-gradient(135deg, #0d9488, #059669)",
  },
  {
    icon: <Brain size={28} />,
    title: "Neurological Rehabilitation",
    desc: "Specialised rehabilitation for conditions such as Traumatic Brain Injury, spinal cord injuries, and stroke recovery using advanced techniques.",
    color: "#0ea5e9",
    gradient: "linear-gradient(135deg, #0ea5e9, #6366f1)",
  },
  {
    icon: <Zap size={28} />,
    title: "Chronic Pain Management",
    desc: "Evidence-based approaches to understanding and managing persistent pain conditions.",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6, #a855f7)",
  },
  {
    icon: <Activity size={28} />,
    title: "Concussion Management",
    desc: "Targeted recovery plans and gait analysis backed by cutting-edge concussion research.",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
  },
  {
    icon: <Hand size={28} />,
    title: "Manual Therapy & Cupping",
    desc: "Expert hands-on techniques, including joint mobilisation, cupping therapy, taping techniques, and soft tissue massage.",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #14b8a6)",
  },
  {
    icon: <Bone size={28} />,
    title: "Post-Surgery Recovery",
    desc: "Structured rehabilitation protocols to rebuild strength and mobility after orthopaedic surgery.",
    color: "#ec4899",
    gradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="section-pad"
      style={{ background: "#ffffff", position: "relative" }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 400,
          background: "linear-gradient(180deg, #f0fdfa, transparent)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(13,148,136,0.08)",
              borderRadius: 50,
              padding: "0.4rem 1rem",
              fontSize: "0.82rem",
              color: "#0d9488",
              fontWeight: 600,
              marginBottom: "1rem",
            }}
          >
            Our Services
          </div>
          <h2
            style={{
              fontFamily: "Outfit, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#0f172a",
              marginBottom: "1rem",
            }}
          >
            Comprehensive <span className="gradient-text">Physiotherapy</span>{" "}
            Care
          </h2>
          <p
            style={{
              color: "#64748b",
              fontSize: "1.05rem",
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            From acute injuries to long-term wellness, our expert team delivers
            personalised treatment plans tailored to your unique needs.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={cardAnim}
              whileHover={{ y: -8 }}
              style={{
                background: "#ffffff",
                borderRadius: 20,
                padding: "2rem",
                border: "1px solid #e2e8f0",
                cursor: "pointer",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 20px 60px ${s.color}18`;
                e.currentTarget.style.borderColor = `${s.color}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#e2e8f0";
              }}
            >
              {/* Gradient accent top */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: s.gradient,
                }}
              />

              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: `${s.color}12`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: s.color,
                  marginBottom: "1.25rem",
                }}
              >
                {s.icon}
              </div>
              <h3
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: "#0f172a",
                  marginBottom: "0.6rem",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.92rem",
                  lineHeight: 1.65,
                  marginBottom: "1.2rem",
                }}
              >
                {s.desc}
              </p>
              <Link href="/services" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    color: s.color,
                    fontWeight: 600,
                    fontSize: "0.88rem",
                  }}
                >
                  Learn More <ArrowRight size={15} />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
