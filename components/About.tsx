'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { CheckCircle, Shield, Award, Heart } from 'lucide-react';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const features = [
  'Evidence-based treatment protocols',
  'Personalised recovery plans',
  'State-of-the-art clinic facilities',
  'ACC registered provider',
  'Flexible appointment times',
  'Comprehensive follow-up care',
];

const badges = [
  { icon: <Shield size={22} />, label: 'ACC Registered' },
  { icon: <Award size={22} />, label: 'NZ Certified' },
  { icon: <Heart size={22} />, label: 'Patient First' },
];

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ background: 'linear-gradient(160deg, #f0fdfa 0%, #ecfdf5 50%, #ffffff 100%)', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '4rem', alignItems: 'center' }}>
          {/* Left — visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              background: 'linear-gradient(135deg, #0d9488, #059669)',
              borderRadius: 24,
              padding: '3rem',
              position: 'relative',
              overflow: 'hidden',
              minHeight: 420,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
              {/* Abstract pattern */}
              <div style={{
                position: 'absolute', top: -50, right: -50,
                width: 200, height: 200, borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
              }} />
              <div style={{
                position: 'absolute', bottom: -30, left: -30,
                width: 150, height: 150, borderRadius: '50%',
                background: 'rgba(255,255,255,0.06)',
              }} />

              <div style={{ position: 'relative', zIndex: 2, color: 'white' }}>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 300, fontSize: '1.1rem', opacity: 0.85, marginBottom: '0.5rem' }}>
                  NZ Registered Physiotherapist
                </h3>
                <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '2rem', marginBottom: '0.5rem' }}>
                  Sarniya Moganathas
                </h2>
                <p style={{ opacity: 0.8, fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Dedicated to empowering patient independence by addressing the root causes of pain through evidence-based practice, clinical reasoning, and a deep understanding of human anatomy.
                </p>
              </div>

              {/* Counter cards */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem',
                marginTop: '1.5rem', position: 'relative', zIndex: 2,
              }}>
                {[
                  { num: 6, suffix: '+', label: 'Specialties' },
                  { num: 1, suffix: '+', label: 'Year in AKL' },
                  { num: 98, suffix: '%', label: 'Success' },
                ].map((c, i) => (
                  <div key={i} style={{
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 14,
                    padding: '1rem',
                    textAlign: 'center',
                    color: 'white',
                  }}>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.5rem' }}>
                      <AnimatedCounter target={c.num} suffix={c.suffix} />
                    </div>
                    <div style={{ fontSize: '0.72rem', opacity: 0.8 }}>{c.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(13,148,136,0.08)', borderRadius: 50,
              padding: '0.4rem 1rem', fontSize: '0.82rem', color: '#0d9488', fontWeight: 600,
              marginBottom: '1rem',
            }}>
              About Us
            </div>
            <h2 style={{
              fontFamily: 'Outfit, sans-serif', fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#0f172a',
              marginBottom: '1rem', lineHeight: 1.15,
            }}>
              Auckland&apos;s Trusted <span className="gradient-text">Physiotherapy</span> Partner
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2rem' }}>
              Located in the heart of Mount Eden, Kiwicare Physio is led by <strong>Sarniya Moganathas</strong> — 
              a dedicated physiotherapist holding a BSc (Hons) in Physiotherapy from the University of Peradeniya and pursuing a Master of Philosophy in Concussion and Gait Analysis at AUT. 
              Sarniya is committed to restoring movement, reducing pain, and empowering 
              patients to take charge of their health through expert care and modern techniques like cupping therapy, dry needling, and neurological rehabilitation.
            </p>

            {/* Features checklist */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <CheckCircle size={18} color="#0d9488" />
                  <span style={{ fontSize: '0.88rem', color: '#334155' }}>{f}</span>
                </motion.div>
              ))}
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {badges.map((b, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  background: 'white', border: '1px solid #e2e8f0',
                  borderRadius: 12, padding: '0.65rem 1rem',
                  color: '#0d9488', fontSize: '0.82rem', fontWeight: 600,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}>
                  {b.icon} {b.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
