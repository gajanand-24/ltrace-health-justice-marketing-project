import React, { useState } from 'react';
import { POSITIONING_MATRIX, GTM_LAUNCH_PLAN, COMPETITIVE_BATTLECARD, STAKEHOLDER_ROLES } from '../data/ltraceData';
import { Target, Layers, Rocket, ShieldAlert, CheckCircle, UserCheck, Award, Users, Stethoscope, Shield, Microscope, Gavel } from 'lucide-react';

export default function ProductMarketingSection() {
  const [activeSubTab, setActiveSubTab] = useState('positioning'); // 'positioning', 'stakeholders', 'gtm', 'battlecard'
  const [selectedSegIdx, setSelectedSegIdx] = useState(0);

  const activeSegment = POSITIONING_MATRIX[selectedSegIdx];

  return (
    <div className="pmm-section">
      <div className="section-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-emerald"><Target size={14} /> Product Marketing (PMM) Suite</span>
          <span className="badge badge-cyan"><Rocket size={14} /> Health-Justice Alignment</span>
        </div>
        <h2 className="section-title">
          Product Positioning, GTM Strategy & Battlecards
        </h2>
        <p className="section-desc">
          Strategic product marketing frameworks for L-Trace. Mapped value propositions across hospital administrators, police commissioners, and government policy makers, 90-day B2G GTM procurement roadmaps, and competitive positioning.
        </p>
      </div>

      {/* Subnav Pills */}
      <div className="subnav-pills">
        <button 
          className={`subnav-pill ${activeSubTab === 'positioning' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('positioning')}
        >
          <Layers size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
          Product Positioning Matrix
        </button>
        <button 
          className={`subnav-pill ${activeSubTab === 'stakeholders' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('stakeholders')}
        >
          <Users size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
          4-Stakeholder User Analysis
        </button>
        <button 
          className={`subnav-pill ${activeSubTab === 'gtm' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('gtm')}
        >
          <Rocket size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
          B2G & Enterprise GTM Launch Blueprint
        </button>
        <button 
          className={`subnav-pill ${activeSubTab === 'battlecard' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('battlecard')}
        >
          <ShieldAlert size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
          Competitive Battlecard
        </button>
      </div>

      {/* SUBTAB 1: POSITIONING MATRIX */}
      {activeSubTab === 'positioning' && (
        <div className="grid-2">
          {/* Segment Selection */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <UserCheck size={18} className="gradient-text-emerald" /> Target Market Segments
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {POSITIONING_MATRIX.map((item, idx) => (
                <div 
                  key={idx}
                  className={`glass-card-interactive ${selectedSegIdx === idx ? 'active' : ''}`}
                  onClick={() => setSelectedSegIdx(idx)}
                  style={{ padding: '1rem' }}
                >
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff', marginBottom: '0.25rem' }}>
                    {item.segment}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontStyle: 'italic' }}>
                    "{item.tagline}"
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Positioning Detail */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="badge badge-indigo">PMM Messaging Hierarchy</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Segment #{selectedSegIdx + 1}</span>
              </div>

              <h3 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 700, marginBottom: '0.5rem' }}>
                {activeSegment.segment}
              </h3>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>
                  Institutional Pain Point:
                </div>
                <div style={{ background: 'rgba(244,63,94,0.06)', borderLeft: '3px solid var(--accent-rose)', padding: '0.75rem 1rem', borderRadius: '0 8px 8px 0', fontSize: '0.9rem', color: '#e2e8f0' }}>
                  {activeSegment.painPoints}
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>
                  Primary Value Proposition:
                </div>
                <div style={{ background: 'rgba(16,185,129,0.06)', borderLeft: '3px solid var(--accent-emerald)', padding: '0.75rem 1rem', borderRadius: '0 8px 8px 0', fontSize: '0.9rem', color: '#e2e8f0' }}>
                  {activeSegment.valueProp}
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>
                  Core Hero Message:
                </div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--accent-emerald)' }}>
                  "{activeSegment.keyMessage}"
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>
                  Product Differentiator:
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  {activeSegment.diffFactor}
                </p>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Tagline</span>
              <span className="badge badge-emerald">{activeSegment.tagline}</span>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 2: STAKEHOLDER ANALYSIS */}
      {activeSubTab === 'stakeholders' && (
        <div className="grid-2">
          {STAKEHOLDER_ROLES.map((stk, idx) => (
            <div key={idx} className="glass-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {idx === 0 ? <Stethoscope size={18} color="var(--accent-emerald)" /> : idx === 1 ? <Microscope size={18} color="var(--accent-cyan)" /> : idx === 2 ? <Shield size={18} color="var(--accent-indigo)" /> : <Gavel size={18} color="var(--accent-amber)" />}
                  {stk.role}
                </h3>
                <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>Persona #{idx + 1}</span>
              </div>

              <div style={{ marginBottom: '0.75rem' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Daily Operational Friction:</div>
                <p style={{ fontSize: '0.88rem', color: '#fb7185', marginTop: '0.2rem' }}>{stk.painPoints}</p>
              </div>

              <div style={{ marginBottom: '0.75rem' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>L-Trace Targeted Solution:</div>
                <p style={{ fontSize: '0.88rem', color: '#34d399', marginTop: '0.2rem' }}>{stk.ltraceValue}</p>
              </div>

              <div style={{ paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                System Access: <strong style={{ color: '#e2e8f0' }}>{stk.permissions}</strong>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SUBTAB 3: GTM LAUNCH BLUEPRINT */}
      {activeSubTab === 'gtm' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {GTM_LAUNCH_PLAN.map((plan, idx) => (
            <div key={idx} className="glass-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Rocket size={18} color="var(--accent-emerald)" /> {plan.phase}
                </h3>
                <span className="badge badge-cyan">B2G Milestone</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                <strong>Strategic Focus:</strong> {plan.focus}
              </p>

              <div className="grid-2" style={{ gap: '0.75rem' }}>
                {plan.deliverables.map((item, dIdx) => (
                  <div key={dIdx} style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--bg-card-border)', display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <CheckCircle size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.88rem', color: '#e2e8f0' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SUBTAB 4: BATTLECARD */}
      {activeSubTab === 'battlecard' && (
        <div className="glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700 }}>
                Competitive Positioning & Battlecard Matrix
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Comparison against legacy paper registers and generic hospital EHR software.
              </p>
            </div>
            <span className="badge badge-indigo"><Award size={14} /> Executive Briefing Ready</span>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.75rem' }}>Solution</th>
                  <th style={{ padding: '0.75rem' }}>Category</th>
                  <th style={{ padding: '0.75rem' }}>Chain of Custody</th>
                  <th style={{ padding: '0.75rem' }}>Interoperability</th>
                  <th style={{ padding: '0.75rem' }}>Doctor Usability</th>
                  <th style={{ padding: '0.75rem' }}>Core Advantage</th>
                </tr>
              </thead>
              <tbody>
                {COMPETITIVE_BATTLECARD.competitors.map((comp, idx) => (
                  <tr 
                    key={idx} 
                    style={{ 
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      background: comp.name.includes('L-Trace') ? 'rgba(16,185,129,0.08)' : 'transparent'
                    }}
                  >
                    <td style={{ padding: '1rem 0.75rem', fontWeight: 700, color: comp.name.includes('L-Trace') ? 'var(--accent-emerald)' : '#fff' }}>
                      {comp.name}
                    </td>
                    <td style={{ padding: '1rem 0.75rem', color: 'var(--text-muted)' }}>{comp.type}</td>
                    <td style={{ padding: '1rem 0.75rem', color: '#e2e8f0' }}>{comp.chainOfCustody}</td>
                    <td style={{ padding: '1rem 0.75rem', color: '#e2e8f0' }}>{comp.interoperability}</td>
                    <td style={{ padding: '1rem 0.75rem', color: 'var(--accent-cyan)' }}>{comp.doctorUsability}</td>
                    <td style={{ padding: '1rem 0.75rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>{comp.advantage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
