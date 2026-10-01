import React, { useState } from 'react';
import { ABM_PERFORMANCE_CAMPAIGNS } from '../data/ltraceData';
import { TrendingUp, DollarSign, MousePointer, Target, Eye, Layers, Sliders, Zap, ExternalLink, ShieldCheck } from 'lucide-react';

export default function PerformanceMarketingSection() {
  const [activeSubTab, setActiveSubTab] = useState('abm-sandbox'); // 'abm-sandbox', 'calculator', 'cro'
  const [selectedAdIdx, setSelectedAdIdx] = useState(0);

  // Dynamic B2G Cost-of-Delay Calculator State
  const [hospitalsCount, setHospitalsCount] = useState(25);
  const [precinctsCount, setPrecinctsCount] = useState(60);
  const [avgCasesPerMonth, setAvgCasesPerMonth] = useState(150); // per hospital
  const [paperDelayDays, setPaperDelayDays] = useState(14); // days
  const [docPaperHoursPerCase, setDocPaperHoursPerCase] = useState(2.5); // hours

  // Dynamic Calculations
  const totalMonthlyCases = hospitalsCount * avgCasesPerMonth;
  const paperHoursSpent = totalMonthlyCases * docPaperHoursPerCase;
  const paperHoursSaved = Math.round(paperHoursSpent * 0.70); // 70% reduction
  const daysSavedPerCase = paperDelayDays - 2; // L-Trace takes 2 days vs paper 14 days
  const annualDirectCostSavings = Math.round(paperHoursSaved * 12 * 45); // $45/hr physician time
  const annualDelayRiskReduction = Math.round(totalMonthlyCases * 12 * 120); // $120 dispute avoidance per case

  const activeAd = ABM_PERFORMANCE_CAMPAIGNS[selectedAdIdx];

  return (
    <div className="performance-section">
      <div className="section-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-emerald"><TrendingUp size={14} /> ABM & B2G Growth</span>
          <span className="badge badge-cyan"><DollarSign size={14} /> Cost-of-Delay Modeling</span>
        </div>
        <h2 className="section-title">
          Account-Based Marketing (ABM) & ROI Calculator
        </h2>
        <p className="section-desc">
          Execute targeted ABM acquisition campaigns for Health Ministries, Police Directorates, and Enterprise Hospital Networks. Model administrative cost savings, time-to-justice acceleration, and CRO landing page experiments.
        </p>
      </div>

      {/* Subnav Pills */}
      <div className="subnav-pills">
        <button 
          className={`subnav-pill ${activeSubTab === 'abm-sandbox' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('abm-sandbox')}
        >
          <MousePointer size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
          B2G ABM Paid Ad Sandbox
        </button>
        <button 
          className={`subnav-pill ${activeSubTab === 'calculator' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('calculator')}
        >
          <Sliders size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
          B2G Cost-of-Delay & ROI Calculator
        </button>
        <button 
          className={`subnav-pill ${activeSubTab === 'cro' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('cro')}
        >
          <Zap size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
          Landing Page CRO A/B Experiments
        </button>
      </div>

      {/* SUBTAB 1: ABM AD SANDBOX */}
      {activeSubTab === 'abm-sandbox' && (
        <div className="grid-2">
          {/* Ad Selection List */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layers size={18} className="gradient-text-emerald" /> Select Account-Based Channel
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
              {ABM_PERFORMANCE_CAMPAIGNS.map((item, idx) => (
                <div 
                  key={idx}
                  className={`glass-card-interactive ${selectedAdIdx === idx ? 'active' : ''}`}
                  onClick={() => setSelectedAdIdx(idx)}
                  style={{ padding: '1rem' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>{item.platform}</span>
                    <span className="badge badge-emerald">CTR: {item.predictedCTR}</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Format: {item.adFormat} | CPC: {item.estimatedCPC}
                  </div>
                </div>
              ))}
            </div>

            {/* Target Audience Spec */}
            <div className="highlight-box">
              <div style={{ fontWeight: 600, color: 'var(--accent-emerald)', marginBottom: '0.25rem' }}>Executive Decision Makers Targeted:</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{activeAd.targetAudience}</p>
            </div>
          </div>

          {/* Ad Mockup */}
          <div className="glass-card" style={{ background: '#0b1120', border: '1px solid rgba(16,185,129,0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="badge badge-emerald"><Eye size={12} /> B2G Ad Preview</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Est. CPC: {activeAd.estimatedCPC}</span>
              </div>

              {/* Ad Image Render */}
              <div style={{ position: 'relative', width: '100%', height: '180px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img src="/ad-creative.png" alt="L-Trace Ad Creative Mockup" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(0,0,0,0.85)', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', color: '#fff' }}>
                  Sponsored • L-Trace Government Health & Legal
                </div>
              </div>

              <h4 style={{ fontSize: '1.05rem', color: '#fff', fontWeight: 700, marginBottom: '0.5rem' }}>
                {activeAd.headline}
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                {activeAd.primaryText}
              </p>

              <div style={{ background: 'var(--accent-emerald)', color: '#080d1a', padding: '0.75rem', borderRadius: '8px', fontWeight: 700, textAlign: 'center', fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                {activeAd.cta} <ExternalLink size={14} />
              </div>
            </div>

            <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
              <span>Predicted CTR: <strong style={{ color: 'var(--accent-emerald)' }}>{activeAd.predictedCTR}</strong></span>
              <span>Target: <strong>B2G Procurement Leaders</strong></span>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 2: B2G COST-OF-DELAY & ROI CALCULATOR */}
      {activeSubTab === 'calculator' && (
        <div className="grid-2">
          {/* Sliders Input */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sliders size={18} className="gradient-text-emerald" /> State Network Parameters
            </h3>

            {/* Slider 1: Hospitals */}
            <div className="slider-container">
              <div className="slider-header">
                <span className="slider-label">Number of Hospitals in Network</span>
                <span className="slider-value">{hospitalsCount} Hospitals</span>
              </div>
              <input type="range" min={5} max={100} step={5} value={hospitalsCount} onChange={(e) => setHospitalsCount(Number(e.target.value))} />
            </div>

            {/* Slider 2: Precincts */}
            <div className="slider-container">
              <div className="slider-header">
                <span className="slider-label">Police Precincts & FSL Labs Connected</span>
                <span className="slider-value">{precinctsCount} Stations</span>
              </div>
              <input type="range" min={10} max={250} step={10} value={precinctsCount} onChange={(e) => setPrecinctsCount(Number(e.target.value))} />
            </div>

            {/* Slider 3: Cases per hospital */}
            <div className="slider-container">
              <div className="slider-header">
                <span className="slider-label">Monthly Medico-Legal Cases per Hospital</span>
                <span className="slider-value">{avgCasesPerMonth} Cases/mo</span>
              </div>
              <input type="range" min={50} max={500} step={25} value={avgCasesPerMonth} onChange={(e) => setAvgCasesPerMonth(Number(e.target.value))} />
            </div>

            {/* Slider 4: Paper Delay Days */}
            <div className="slider-container">
              <div className="slider-header">
                <span className="slider-label">Baseline Paper Transit Delay (Days)</span>
                <span className="slider-value">{paperDelayDays} Days</span>
              </div>
              <input type="range" min={5} max={30} step={1} value={paperDelayDays} onChange={(e) => setPaperDelayDays(Number(e.target.value))} />
            </div>

            {/* Slider 5: Doctor Hours per Case */}
            <div className="slider-container">
              <div className="slider-header">
                <span className="slider-label">Doctor Paperwork Hours per Case</span>
                <span className="slider-value">{docPaperHoursPerCase.toFixed(1)} Hours</span>
              </div>
              <input type="range" min={1.0} max={5.0} step={0.5} value={docPaperHoursPerCase} onChange={(e) => setDocPaperHoursPerCase(Number(e.target.value))} />
            </div>
          </div>

          {/* Results Panel */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.15rem', color: '#fff' }}>State Impact & Financial Savings</h3>
                <span className="badge badge-emerald">Efficiency Boost</span>
              </div>

              {/* Metric Grid */}
              <div className="grid-2" style={{ gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--bg-card-border)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Total Monthly Cases Processed</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                    {totalMonthlyCases.toLocaleString()} Cases
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--bg-card-border)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Doctor Consultation Hours Saved</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
                    {paperHoursSaved.toLocaleString()} hrs/mo
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--bg-card-border)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Evidence Transfer Speedup</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-indigo)', fontFamily: 'var(--font-mono)' }}>
                    -{daysSavedPerCase} Days Faster
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--bg-card-border)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Annual Physician Savings</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
                    ${annualDirectCostSavings.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Total Institutional ROI */}
              <div style={{ background: 'rgba(16,185,129,0.08)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(16,185,129,0.3)', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Total Annual State Economic Impact</span>
                  <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
                    ${(annualDirectCostSavings + annualDelayRiskReduction).toLocaleString()}/yr
                  </span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Includes clinical paper reduction + legal dispute risk mitigation across {hospitalsCount} hospital facilities.
                </div>
              </div>
            </div>

            <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textAlign: 'center' }}>
              Modeled on state public health & criminal justice administration data.
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 3: CRO A/B EXPERIMENTS */}
      {activeSubTab === 'cro' && (
        <div className="glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700 }}>
                Enterprise Landing Page CRO A/B Test Blueprint
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Testing messaging hooks for hospital Chief Medical Officers and Law Enforcement Procurement.
              </p>
            </div>
            <span className="badge badge-emerald"><Zap size={14} /> Live Experiment</span>
          </div>

          <div className="grid-2">
            {/* Variant A */}
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--bg-card-border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span className="badge badge-amber">Variant A (Control)</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Baseline CVR: 4.8%</span>
              </div>
              <h4 style={{ color: '#fff', fontSize: '1rem', margin: '0.5rem 0' }}>Focus: Compliance & Legal Security</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                "ISO 27001 & Section 65B Compliant Medico-Legal Chain of Custody System for Healthcare & Police."
              </p>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Hypothesis: Legal compliance focus appeals to legal counsel and risk management directors.</div>
            </div>

            {/* Variant B */}
            <div style={{ background: 'rgba(16,185,129,0.08)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(16,185,129,0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span className="badge badge-emerald">Variant B (Winner +32%)</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>Test CVR: 6.3%</span>
              </div>
              <h4 style={{ color: '#fff', fontSize: '1rem', margin: '0.5rem 0' }}>Focus: Time-to-Justice & Doctor Workload Reduction</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                "Cut Doctor Paperwork by 70% and Transfer Medico-Legal Evidence to Police in 2 Minutes."
              </p>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Hypothesis: Workload reduction and speed resonate stronger with CMOs and ER Operations Chiefs.</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
