import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Activity, Bone, Brain, Zap, Hand, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Our Services | Kiwicare Physio Auckland',
  description: 'Detailed physiotherapy services including Neurological Rehabilitation, Concussion Management, Cupping, and Manual Therapy.',
};

const detailedServices = [
  {
    icon: <Brain size={40} />,
    title: 'Neurological Rehabilitation',
    desc: 'Specialised rehabilitation for conditions such as Traumatic Brain Injury, spinal cord injuries, sports injuries, and stroke recovery. Sarniya applies advanced physiotherapy techniques like PNF, Bobath/NDT, CIMT, mirror therapy, and robotic-assisted gait training to maximize functional recovery and neuroplasticity.',
    color: '#0ea5e9',
    gradient: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
  },
  {
    icon: <Activity size={40} />,
    title: 'Concussion Management',
    desc: 'Led by a researcher at the SPRINZ Laboratory, our concussion management program includes precise participant assessments. We analyze blood biomarkers, gait parameters, and cognitive/motor performance levels to investigate symptom recovery patterns and restore you safely back to your life and sports.',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
  },
  {
    icon: <Hand size={40} />,
    title: 'Manual Therapy & Cupping',
    desc: 'Expert hands-on techniques dedicated to addressing the root causes of pain. We utilize joint mobilisation, clinical cupping therapy, specialized taping techniques, and soft tissue massage to reduce muscular tension and improve mobility.',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981, #14b8a6)',
  },
  {
    icon: <Zap size={40} />,
    title: 'Dry Needling & Pain Management',
    desc: 'Using precisely targeted trigger point therapy via fine needles, as well as TENS, we release deep muscular tension. Combining this with evidence-based clinical reasoning, we create effective chronic pain management plans for long-term relief.',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
  },
  {
    icon: <Bone size={40} />,
    title: 'Post-Surgery Recovery & ACC',
    desc: 'As an ACC registered provider, we assess and manage musculoskeletal conditions with strict goal-oriented treatment plans. Whether its post-orthopaedic surgery or a work injury, we support functional recovery through tailored home exercise programmes.',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)',
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      
      {/* Page Header */}
      <section style={{ 
        padding: '8rem 1.5rem 4rem', 
        background: 'linear-gradient(160deg, #f0fdfa 0%, #ecfdf5 100%)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#0f172a', marginBottom: '1rem' }}>
            Our <span className="gradient-text">Specialised Services</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Rooted in deep clinical reasoning, human anatomy expertise, and ongoing research at Auckland University of Technology. We empower your independence through tailored, evidence-based treatments.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-pad" style={{ background: '#ffffff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {detailedServices.map((service, index) => (
            <div key={index} style={{
              display: 'flex',
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
              gap: '2.5rem',
              alignItems: 'center',
              background: '#f8fafc',
              borderRadius: 24,
              padding: '2.5rem',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
            }}>
              <div style={{
                flexShrink: 0, width: '100%', maxWidth: 360, height: 260, borderRadius: 24,
                background: '#f1f5f9',
                border: '2px dashed #cbd5e1',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                color: '#94a3b8'
              }}>
                {service.icon}
                <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>Upload Image Later</span>
              </div>
              <div>
                <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.8rem', color: '#0f172a', marginBottom: '0.8rem' }}>
                  {service.title}
                </h2>
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {service.desc}
                </p>
                <Link href="/#booking" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  color: service.color, fontWeight: 600, fontSize: '0.95rem',
                  textDecoration: 'none'
                }}>
                  Book this service <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer Wrapper */}
      <section style={{ background: '#0f766e', padding: '4rem 1.5rem', textAlign: 'center', color: 'white' }}>
        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '2rem', marginBottom: '1rem' }}>
          Ready to address the root causes of your pain?
        </h2>
        <p style={{ opacity: 0.9, marginBottom: '2rem', fontSize: '1.1rem' }}>
          Consult with Sarniya Moganathas and get a personalised recovery plan today.
        </p>
        <Link href="/#booking" className="btn-primary" style={{ background: 'white', color: '#0f766e', boxShadow: 'none' }}>
          Request an Appointment
        </Link>
      </section>

      <Footer />
    </main>
  );
}
