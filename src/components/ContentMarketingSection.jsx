import React, { useState } from 'react';
import { SEO_KEYWORDS, CONTENT_CALENDAR } from '../data/ltraceData';
import { BookOpen, Search, Calendar, Mail, FileText, CheckCircle2, ChevronRight, Share2, Sparkles, ExternalLink } from 'lucide-react';

export default function ContentMarketingSection() {
  const [activeSubTab, setActiveSubTab] = useState('seo'); // 'seo', 'pillar', 'calendar', 'email'

  return (
    <div className="content-section">
      <div className="section-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-indigo"><BookOpen size={14} /> Content & Organic Growth</span>
          <span className="badge badge-emerald"><Search size={14} /> B2G SEO Strategy</span>
        </div>
        <h2 className="section-title">
          Content Marketing Strategy, SEO Matrix & Whitepaper
        </h2>
        <p className="section-desc">
          Build domain authority in health-justice tech and civic innovation. Explores high-intent B2G search keywords, long-form governance whitepapers, 30-day multi-channel content calendars, and email nurture drips.
        </p>
      </div>

      {/* Subnav Pills */}
      <div className="subnav-pills">
        <button 
          className={`subnav-pill ${activeSubTab === 'seo' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('seo')}
        >
          <Search size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
          B2G SEO Keyword Universe Matrix
        </button>
        <button 
          className={`subnav-pill ${activeSubTab === 'pillar' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('pillar')}
        >
          <FileText size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
          Governance Pillar Whitepaper
        </button>
        <button 
          className={`subnav-pill ${activeSubTab === 'calendar' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('calendar')}
        >
          <Calendar size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
          30-Day Multi-Channel Calendar
        </button>
        <button 
          className={`subnav-pill ${activeSubTab === 'email' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('email')}
        >
          <Mail size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
          B2G Executive Email Nurture
        </button>
      </div>

      {/* SUBTAB 1: SEO KEYWORD MATRIX */}
      {activeSubTab === 'seo' && (
        <div className="glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700 }}>
                High-Intent B2G & HealthTech Keyword Universe
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Targeting government RFP search intent and healthcare compliance queries.
              </p>
            </div>
            <span className="badge badge-emerald">Policy & RFP Alignment</span>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.75rem' }}>Target Keyword</th>
                  <th style={{ padding: '0.75rem' }}>Monthly Volume</th>
                  <th style={{ padding: '0.75rem' }}>Keyword Difficulty (KD)</th>
                  <th style={{ padding: '0.75rem' }}>Search Intent</th>
                  <th style={{ padding: '0.75rem' }}>Mapped Content Asset</th>
                  <th style={{ padding: '0.75rem' }}>CVR Potential</th>
                </tr>
              </thead>
              <tbody>
                {SEO_KEYWORDS.map((item, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem 0.75rem', fontWeight: 700, color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
                      "{item.keyword}"
                    </td>
                    <td style={{ padding: '1rem 0.75rem', color: '#fff', fontWeight: 600 }}>{item.volume}</td>
                    <td style={{ padding: '1rem 0.75rem', color: 'var(--text-muted)' }}>{item.kd}</td>
                    <td style={{ padding: '1rem 0.75rem' }}>
                      <span className={`badge ${item.intent.includes('Commercial') ? 'badge-emerald' : 'badge-cyan'}`}>
                        {item.intent}
                      </span>
                    </td>
                    <td style={{ padding: '1rem 0.75rem', color: '#e2e8f0', fontSize: '0.85rem' }}>{item.targetAsset}</td>
                    <td style={{ padding: '1rem 0.75rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>{item.cvrPotential}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SUBTAB 2: PILLAR WHITEPAPER */}
      {activeSubTab === 'pillar' && (
        <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', background: '#0b1120' }}>
          <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
            <span className="badge badge-emerald" style={{ marginBottom: '0.75rem' }}><FileText size={12} /> Featured Governance Whitepaper</span>
            <h2 style={{ fontSize: '1.6rem', color: '#fff', fontWeight: 800, lineHeight: 1.3, marginBottom: '0.5rem' }}>
              Chain of Custody in the Digital Era: Eliminating Evidence Tampering and Accelerating Justice in Medico-Legal Systems
            </h2>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', gap: '1.5rem' }}>
              <span>Author: L-Trace Health-Justice Research Group</span>
              <span>Read Time: 8 min</span>
              <span>Published: Oct 2026</span>
            </div>
          </div>

          <div style={{ color: '#cbd5e1', lineHeight: 1.8, fontSize: '0.95rem' }}>
            <h3 style={{ color: '#fff', fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              1. The Fragility of Paper-Based Medico-Legal Evidence Handover
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              In conventional healthcare and law enforcement workflows, medico-legal certificates, blood alcohol toxicology samples, and injury reports are passed physically between doctors, dispatch couriers, and police precincts. Studies reveal that over 24% of contested criminal cases face delays due to missing paper logs or disputed evidence provenance.
            </p>

            <h3 style={{ color: '#fff', fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              2. Cryptographic Zero-Trust Architecture in Public Safety
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              By generating a unique SHA-256 cryptographic hash at the moment a doctor seals a medical report, L-Trace creates an immutable digital record. Any subsequent modification—whether intentional or accidental—instantly alters the hash checksum, flagging the record for judicial review before it reaches the court exhibit table.
            </p>

            <div className="highlight-box">
              <strong style={{ color: 'var(--accent-emerald)' }}>Systemic Impact:</strong> Trial implementation across state hospital casualty wards demonstrated a 70% reduction in doctor paperwork hours and accelerated average police evidence acquisition from 14 days down to 48 hours.
            </div>

            <h3 style={{ color: '#fff', fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              3. Interoperability Across Health, Law Enforcement & Courts
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              L-Trace bridges ISO 27001 data standards with electronic health record APIs and police record management systems (CCTNS), delivering a unified, role-governed digital bridge that respects patient privacy while guaranteeing legal accountability.
            </p>
          </div>
        </div>
      )}

      {/* SUBTAB 3: 30-DAY CONTENT CALENDAR */}
      {activeSubTab === 'calendar' && (
        <div className="glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700 }}>
                30-Day Multi-Channel Content Distribution Calendar
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Targeting healthcare executives, police commissioners, and civic tech policy leaders.
              </p>
            </div>
            <span className="badge badge-emerald"><Calendar size={14} /> Full Month Plan</span>
          </div>

          <div className="grid-3">
            {CONTENT_CALENDAR.map((item, idx) => (
              <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--bg-card-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span className="badge badge-emerald" style={{ fontSize: '0.75rem' }}>{item.day}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>{item.channel}</span>
                </div>
                <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600, margin: '0.5rem 0' }}>{item.title}</h4>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Format: <strong>{item.format}</strong></div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUBTAB 4: EMAIL NURTURE */}
      {activeSubTab === 'email' && (
        <div className="glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700 }}>
                5-Stage B2G Executive Email Nurture Sequence
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Automated sequence converting hospital operations leaders into state pilot program discovery meetings.
              </p>
            </div>
            <span className="badge badge-cyan"><Mail size={14} /> Executive B2G Lead Drip</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem 1.25rem', borderRadius: '10px', borderLeft: '4px solid var(--accent-emerald)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: 700, marginBottom: '0.2rem' }}>EMAIL 1 (Day 0 - Executive Introduction)</div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>Subject: Modernizing Medico-Legal Workflows: L-Trace Health-Justice Bridge</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                Introduces hospital directors to the L-Trace evidence bridge concept and presents the 1-page governance briefing.
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem 1.25rem', borderRadius: '10px', borderLeft: '4px solid var(--accent-cyan)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 700, marginBottom: '0.2rem' }}>EMAIL 2 (Day 4 - Doctor Paperwork Case Study)</div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>Subject: Case Study: How District Hospital Saved 1,200 Physician Hours</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                Shares quantitative findings on physician time savings and standardized injury certificate automation.
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem 1.25rem', borderRadius: '10px', borderLeft: '4px solid var(--accent-indigo)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-indigo)', fontWeight: 700, marginBottom: '0.2rem' }}>EMAIL 3 (Day 8 - State Pilot Invitation)</div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>Subject: Invitation: Join the Q1 Medico-Legal State Digitalization Pilot</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                Invites Chief Medical Officers and Police Commissioners to schedule a 30-minute pilot scoping session.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
