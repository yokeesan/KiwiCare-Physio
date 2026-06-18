"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Sparkles,
  Clock,
  HeartHandshake,
  GraduationCap,
  Activity,
} from "lucide-react";

const reasons = [
  {
    icon: <Shield size={28} />,
    title: "ACC Registered Provider",
    description:
      "Fully registered with ACC so you can access funded physiotherapy treatment with ease.",
    color: "#0d9488",
  },
  {
    icon: <GraduationCap size={28} />,
    title: "Qualified & Research-Driven",
    description:
      "BSc (Hons) in Physiotherapy with ongoing Master of Philosophy research at AUT in concussion and gait analysis.",
    color: "#0ea5e9",
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "Personalised Care Plans",
    description:
      "Every patient receives a tailored treatment plan designed around their unique goals and lifestyle.",
    color: "#8b5cf6",
  },
  {
    icon: <Activity size={28} />,
    title: "Evidence-Based Methods",
    description:
      "From dry needling to manual therapy and neurological rehab — all treatments are backed by clinical research.",
    color: "#f59e0b",
  },
  {
    icon: <Clock size={28} />,
    title: "Flexible Scheduling",
    description:
      "Open Monday to Saturday, 8 AM – 6 PM, with same-day appointments available when you need them.",
    color: "#ec4899",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Modern Clinic in Mount Eden",
    description:
      "Conveniently located with state-of-the-art equipment and a welcoming environment.",
    color: "#10b981",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-pad"
      style={{ background: "#ffffff", overflow: "hidden" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
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
            Why Kiwicare
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
            Why Choose <span className="gradient-text">Kiwicare</span> Physio
          </h2>
          <p
            style={{
              color: "#64748b",
              fontSize: "1.05rem",
              maxWidth: 550,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Dedicated to providing expert, compassionate physiotherapy care
            right here in Mount Eden, Auckland.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                y: -6,
                boxShadow: "0 12px 40px rgba(13,148,136,0.12)",
              }}
              style={{
                background: "#fafffe",
                border: "1px solid #e2e8f0",
                borderRadius: 20,
                padding: "2rem",
                transition: "box-shadow 0.3s ease",
                cursor: "default",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: `${r.color}12`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: r.color,
                  marginBottom: "1.25rem",
                }}
              >
                {r.icon}
              </div>
              <h3
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#0f172a",
                  marginBottom: "0.6rem",
                }}
              >
                {r.title}
              </h3>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                }}
              >
                {r.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
