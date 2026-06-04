'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Clock, ArrowRight, Sparkles } from 'lucide-react';
const serviceOptions = [
  'Sports Rehabilitation', 'Post-Surgery Recovery', 'Chronic Pain Management',
  'Dry Needling', 'Manual Therapy', 'Telehealth Consultation', 'General Assessment',
];

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '0.85rem 1rem', borderRadius: 12,
  border: '1.5px solid #e2e8f0', fontSize: '0.92rem',
  fontFamily: 'Inter, sans-serif', outline: 'none',
  background: '#f8fafc', color: '#0f172a',
};

export default function Booking() {
  return (
    <section id="booking" className="section-pad" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0f766e 0%, #0d9488 40%, #059669 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <div className="orb" style={{ width: 300, height: 300, background: 'rgba(255,255,255,0.06)', top: '-5%', right: '-3%' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '3rem', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ color: 'white' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.12)', borderRadius: 50, padding: '0.4rem 1rem', fontSize: '0.82rem', fontWeight: 600, marginBottom: '1.5rem' }}>
              <Sparkles size={14} /> Start Your Recovery
            </div>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '1rem', lineHeight: 1.15 }}>
              Ready to Move<br />Without Limits?
            </h2>
            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem', maxWidth: 420 }}>
              Take the first step towards a pain-free life. Book your appointment today and let our expert team create your personalised treatment plan.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: <CalendarDays size={20} />, title: 'Flexible Scheduling', sub: 'Same-day appointments available' },
                { icon: <Clock size={20} />, title: 'Mon – Sat, 8 AM – 6 PM', sub: '675 Mount Eden Road, Auckland' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.icon}</div>
                  <div><div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{item.title}</div><div style={{ fontSize: '0.82rem', opacity: 0.75 }}>{item.sub}</div></div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div style={{ background: 'white', borderRadius: 24, padding: '1rem', boxShadow: '0 25px 60px rgba(0,0,0,0.15)', height: '650px', overflow: 'hidden' }}>
              {/* Replace the URL below with your actual booking link (e.g. from Calendly, Cal.com, or zcal) */}
              <iframe
                src="https://cal.com/yokeesan-chandrasegar-7rxejj"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ borderRadius: 16 }}
                title="Booking Widget"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
