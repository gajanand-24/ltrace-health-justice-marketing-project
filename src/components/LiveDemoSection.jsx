import React, { useState } from 'react';
import { SAMPLE_CASES, STAKEHOLDER_ROLES } from '../data/ltraceData';
import { ShieldCheck, Stethoscope, Microscope, Shield, Gavel, Cpu, Sparkles, Clock, CheckCircle2, ArrowRight, Lock, Key, RefreshCw, FileText, QrCode } from 'lucide-react';

export default function LiveDemoSection() {
  const [activeRole, setActiveRole] = useState('doctor'); // 'doctor', 'fsl', 'police', 'court'
  const [selectedCase, setSelectedCase] = useState(SAMPLE_CASES[0]);
  const [casesList, setCasesList] = useState(SAMPLE_CASES);
  const [isSealing, setIsSealing] = useState(false);
  
  // Custom case state
  const [newVictim, setNewVictim] = useState('D.K.');
  const [newCaseType, setNewCaseType] = useState('Physical Assault & Injury Certification');
  const [newDoctorNotes, setNewDoctorNotes] = useState('Patient presented at ER with blunt force laceration on left forearm. Form 3B filled.');

  const handleSelectCase = (c) => {
    setSelectedCase(c);
  };

  const handleCreateAndSealCase = () => {
    setIsSealing(true);
    setTimeout(() => {
      const newCase = {
        id: `LTR-${Math.floor(1000 + Math.random() * 9000)}`,
        victimInitials: newVictim,
        caseType: newCaseType,
        originFacility: "City Central Emergency Ward",
        custodianNow: "Dr. Current User (ER Physician)",
        nextRecipient: "Investigating Officer (Precinct #1)",
        timestamp: new Date().toLocaleString() + " IST",
        status: "SEALED_HEALTHCARE",
        hashSHA256: Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2),
        integrityStatus: "VERIFIED_TAMPER_PROOF",
        evidenceItems: [
          { name: "Digital Medico-Legal Form 3B", type: "Certified Legal PDF", hash: "a" + Math.random().toString(36).substring(2, 10) },
          { name: "Clinical Injury Photo (Encrypted)", type: "DICOM Image", hash: "b" + Math.random().toString(36).substring(2, 10) }
        ],
        chainHistory: [
          { step: 1, role: "Doctor / Examiner", actor: "Dr. Current User", facility: "City Central ER", action: "Created & Sealed Case", time: "Just Now", status: "Completed" },
          { step: 2, role: "Police Officer", actor: "Pending Officer", facility: "Precinct #1", action: "Awaiting QR Handover Scan", time: "Pending", status: "In Transit" }
        ]
      };

      setCasesList([newCase, ...casesList]);
      setSelectedCase(newCase);
      setIsSealing(false);
    }, 700);
  };

  return (
    <div className="demo-section">
      <div className="section-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-emerald"><Cpu size={14} /> Interactive Product Core</span>
          <span className="badge badge-cyan"><Lock size={14} /> Cryptographic Chain of Custody</span>
        </div>
        <h2 className="section-title">
          Live Medico-Legal Evidence Exchange Simulator
        </h2>
        <p className="section-desc">
          Test L-Trace's multi-stakeholder evidence chain of custody live. Create or inspect sealed medical reports, verify cryptographic SHA-256 hashes, and switch perspectives between Doctors, Forensic Scientists, and Police Officers.
        </p>
      </div>

      {/* Stakeholder Perspective Selector Bar */}
      <div className="glass-card" style={{ marginBottom: '1.5rem', background: 'rgba(15, 23, 42, 0.9)', border: '1px solid var(--accent-emerald)' }}>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Switch Active Stakeholder Perspective View:
        </div>
        <div className="subnav-pills" style={{ marginBottom: 0 }}>
          <button 
            className={`subnav-pill ${activeRole === 'doctor' ? 'active' : ''}`}
            onClick={() => setActiveRole('doctor')}
          >
            <Stethoscope size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
            Doctor / ER Examiner View
          </button>
          <button 
            className={`subnav-pill ${activeRole === 'fsl' ? 'active' : ''}`}
            onClick={() => setActiveRole('fsl')}
          >
            <Microscope size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
            Forensic Pathologist / FSL Lab View
          </button>
          <button 
            className={`subnav-pill ${activeRole === 'police' ? 'active' : ''}`}
            onClick={() => setActiveRole('police')}
          >
            <Shield size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
            Police Detective / Precinct View
          </button>
          <button 
            className={`subnav-pill ${activeRole === 'court' ? 'active' : ''}`}
            onClick={() => setActiveRole('court')}
          >
            <Gavel size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
            Judicial Prosecutor Audit View
          </button>
        </div>
      </div>

      <div className="grid-2">
        {/* Cases Selector & Sealer Form */}
        <div className="glass-card">
          <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FileText size={18} className="gradient-text-emerald" /> Active Medico-Legal Cases
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.25rem' }}>
            {casesList.map((item) => (
              <div 
                key={item.id}
                className={`glass-card-interactive ${selectedCase.id === item.id ? 'active' : ''}`}
                onClick={() => handleSelectCase(item)}
                style={{ padding: '0.85rem 1rem' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>{item.id} (Victim: {item.victimInitials})</span>
                  <span className={`badge ${item.status.includes('FINALIZED') ? 'badge-indigo' : item.status.includes('TRANSIT') ? 'badge-amber' : 'badge-emerald'}`} style={{ fontSize: '0.7rem' }}>
                    {item.status.replace('_', ' ')}
                  </span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {item.caseType} • {item.originFacility}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Doctor Create & Seal Box */}
          {activeRole === 'doctor' && (
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem' }}>
              <h4 style={{ fontSize: '0.9rem', color: '#fff', marginBottom: '0.6rem', fontWeight: 600 }}>
                Seal New Medico-Legal Certificate (Doctor Fast-Path):
              </h4>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.6rem' }}>
                <input 
                  type="text" 
                  className="custom-input" 
                  value={newVictim} 
                  onChange={(e) => setNewVictim(e.target.value)} 
                  placeholder="Victim Initials (e.g. A.B.)"
                  style={{ width: '40%' }}
                />
                <input 
                  type="text" 
                  className="custom-input" 
                  value={newCaseType} 
                  onChange={(e) => setNewCaseType(e.target.value)} 
                  placeholder="Injury / Assault Type"
                  style={{ width: '60%' }}
                />
              </div>
              <textarea 
                className="custom-textarea" 
                rows={2} 
                value={newDoctorNotes}
                onChange={(e) => setNewDoctorNotes(e.target.value)}
                style={{ marginBottom: '0.75rem', fontSize: '0.85rem' }}
              />
              <button 
                className="btn-primary" 
                style={{ width: '100%' }}
                onClick={handleCreateAndSealCase}
                disabled={isSealing}
              >
                {isSealing ? (
                  <> <RefreshCw className="spin" size={16} /> Generating SHA-256 Hash... </>
                ) : (
                  <> <Lock size={16} /> Seal & Generate Cryptographic Handover QR </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Live Case Chain-of-Custody Inspector */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="badge badge-emerald"><ShieldCheck size={12} /> {selectedCase.integrityStatus}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{selectedCase.id}</span>
            </div>

            <h3 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 700, marginBottom: '0.3rem' }}>
              {selectedCase.caseType}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              Origin: <strong>{selectedCase.originFacility}</strong> | Custodian: <strong style={{ color: 'var(--accent-cyan)' }}>{selectedCase.custodianNow}</strong>
            </p>

            {/* SHA-256 Hash Verification Box */}
            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '0.85rem 1rem', borderRadius: '10px', marginBottom: '1.25rem', border: '1px solid var(--bg-card-border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Cryptographic SHA-256 Evidence Hash:
                </span>
                <span className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>Tamper-Proof Lock</span>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-emerald)', wordBreak: 'break-all' }}>
                {selectedCase.hashSHA256}
              </div>
            </div>

            {/* Evidence Sub-Items */}
            <div style={{ marginBottom: '1.25rem' }}>
              <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Sealed Evidence Items & Specimen Barcodes:
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {selectedCase.evidenceItems.map((item, idx) => (
                  <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid var(--bg-card-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                    <span style={{ color: '#fff', fontWeight: 600 }}>{item.name} ({item.type})</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>Hash: {item.hash}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chain of Custody Timeline */}
            <div>
              <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Immutable Chain-of-Custody Handover Trail:
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {selectedCase.chainHistory.map((step, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.02)', padding: '0.6rem 0.85rem', borderRadius: '8px', borderLeft: step.status === 'Completed' ? '3px solid var(--accent-emerald)' : '3px solid var(--accent-amber)' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: step.status === 'Completed' ? 'var(--accent-emerald)' : 'var(--accent-amber)', color: '#080d1a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.75rem', flexShrink: 0 }}>
                      {step.step}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                        <strong style={{ color: '#fff' }}>{step.actor} ({step.role})</strong>
                        <span style={{ color: 'var(--text-dim)', fontSize: '0.75rem' }}>{step.time}</span>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{step.action} — {step.facility}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ paddingTop: '1rem', marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem' }}>
            <span style={{ color: 'var(--text-dim)' }}>Admissible in Court: <strong>Yes (Sec 65B Certified)</strong></span>
            <button className="btn-secondary" style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem' }} onClick={() => alert(`Verified QR Handover Token generated for Case ${selectedCase.id}`)}>
              <QrCode size={12} /> Show Handover QR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
