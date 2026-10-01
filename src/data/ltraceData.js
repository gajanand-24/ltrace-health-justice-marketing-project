export const SAMPLE_CASES = [
  {
    id: "LTR-9042",
    victimInitials: "A.R.",
    caseType: "Forensic Toxicology & Physical Assault",
    originFacility: "Metropolitan General Hospital — Emergency Dept",
    custodianNow: "Dr. A. Sharma (Attending ER Physician)",
    nextRecipient: "Inspector R. Verma (Central Police Precinct #4)",
    timestamp: "2026-10-01 14:22:05 IST",
    status: "SEALED_HEALTHCARE",
    hashSHA256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    integrityStatus: "VERIFIED_TAMPER_PROOF",
    evidenceItems: [
      { name: "Blood Alcohol & Toxicology Sample Vial #A", type: "Physical Bio-Specimen", hash: "a6073323ca6f7e3d2" },
      { name: "Medico-Legal Injury Certificate (Form 3B)", type: "Digital Health Document", hash: "b8901244fa123c9e1" },
      { name: "High-Res Clinical Trauma Photographs (x4)", type: "Encrypted DICOM Media", hash: "c1129033de456f8a2" }
    ],
    chainHistory: [
      { step: 1, role: "Doctor / Examiner", actor: "Dr. A. Sharma", facility: "Metropolitan Hospital ER", action: "Collected & Digitally Signed Form 3B", time: "14:05 IST", status: "Completed" },
      { step: 2, role: "Nurse Custodian", actor: "Nurse P. Kulkarni", facility: "Forensic Safe Locker #2", action: "Sealed Specimen Vials in Cryptographic Bag", time: "14:15 IST", status: "Completed" },
      { step: 3, role: "Police Officer", actor: "Insp. R. Verma", facility: "Central Precinct #4", action: "Awaiting QR Handover Verification", time: "Pending", status: "In Transit" }
    ]
  },
  {
    id: "LTR-8819",
    victimInitials: "S.K.",
    caseType: "Sexual Assault Evidence Kit (SAEK)",
    originFacility: "City Women's Care Hospital",
    custodianNow: "Dr. M. Roy (Chief Forensic Medical Officer)",
    nextRecipient: "State Forensic Science Laboratory (FSL DNA Division)",
    timestamp: "2026-10-01 11:10:40 IST",
    status: "TRANSIT_TO_FSL",
    hashSHA256: "f4a120938b81239c01284fae10923847291a0c8b91234cde782139048a123fbc",
    integrityStatus: "VERIFIED_TAMPER_PROOF",
    evidenceItems: [
      { name: "Standardized SAEK Swab Samples (Box #SA-409)", type: "Physical DNA Evidence", hash: "d4091283fa89012c4" },
      { name: "Victim Consent & Clinical Examination Protocol", type: "Encrypted Legal PDF", hash: "e1029348bc12903f5" }
    ],
    chainHistory: [
      { step: 1, role: "Forensic Doctor", actor: "Dr. M. Roy", facility: "Women's Care Hosp", action: "Completed SAEK Protocol & Barcode Generation", time: "09:30 IST", status: "Completed" },
      { step: 2, role: "Evidence Transport Officer", actor: "Officer T. Singh", facility: "State Police Chain Courier", action: "Accepted GPS-Tracked Smart Vault Custody", time: "10:45 IST", status: "Completed" },
      { step: 3, role: "FSL DNA Specialist", actor: "Dr. K. Patel", facility: "State Forensic Lab", action: "Awaiting Lab Intake Scan", time: "Pending", status: "In Transit" }
    ]
  },
  {
    id: "LTR-7640",
    victimInitials: "V.M.",
    caseType: "Road Traffic Fatal Accident & Post-Mortem",
    originFacility: "District Government Hospital Mortuary",
    custodianNow: "Dr. H. Mehta (Pathologist)",
    nextRecipient: "District Court & Traffic Homicide Division",
    timestamp: "2026-09-30 18:40:00 IST",
    status: "FINALIZED_COURT_SUBMITTED",
    hashSHA256: "c0192348ef102938475610293847561029384756102938475610293847561029",
    integrityStatus: "JUDICIALLY_VERIFIED",
    evidenceItems: [
      { name: "Autopsy & Post-Mortem Examination Summary", type: "Certified Legal Document", hash: "f9012384fa1029381" },
      { name: "Toxicology Blood-Alcohol Lab Results", type: "FSL Lab Certificate", hash: "a0912384fe9012381" }
    ],
    chainHistory: [
      { step: 1, role: "Pathologist", actor: "Dr. H. Mehta", facility: "District Mortuary", action: "Autopsy Conducted & Findings Logged", time: "Sep 30, 11:00 IST", status: "Completed" },
      { step: 2, role: "Investigating Officer", actor: "Sub-Insp. A. Khan", facility: "Traffic Police Division", action: "Digital Counter-Signature & Court Upload", time: "Sep 30, 15:30 IST", status: "Completed" },
      { step: 3, role: "Public Prosecutor", actor: "Adv. S. Deshmukh", facility: "District Session Court", action: "Admitted as Verified Legal Evidence", time: "Sep 30, 18:40 IST", status: "Finalized" }
    ]
  }
];

export const STAKEHOLDER_ROLES = [
  {
    role: "Attending Doctors & Forensic Medical Examiners",
    icon: "Stethoscope",
    painPoints: "Complex paperwork, legal summons risks, delay in handing over physical specimens to police officers.",
    ltraceValue: "1-Click Digital Medico-Legal Certificate generation with automatic timestamping and encrypted handover signatures.",
    permissions: "Write Medical Reports, Seal Specimen Barcodes, Grant Officer Access"
  },
  {
    role: "Forensic Science Lab (FSL) Pathologists & Scientists",
    icon: "Microscope",
    painPoints: "Rejection of evidence due to broken chain of custody, unverified specimen storage temperatures, manual logging errors.",
    ltraceValue: "Cryptographic SHA-256 validation of physical sample lockers and automated lab intake log synchronization.",
    permissions: "Inspect Specimen Hashes, Upload Toxicology/DNA Findings, Certify Forensic Reports"
  },
  {
    role: "Police Officers & Investigating Detectives",
    icon: "Shield",
    painPoints: "Slow courier dispatches, lost paper reports, courtroom challenge of evidence integrity by defense attorneys.",
    ltraceValue: "Real-time mobile app alerts when medical reports are sealed, instant QR-code custody transfer, tamper-proof court evidence packages.",
    permissions: "Accept Custody via QR, Request Urgent Lab Expedites, Generate Court Dossiers"
  },
  {
    role: "Judges, Prosecutors & Legal Counsel",
    icon: "Gavel",
    painPoints: "Long trial delays caused by missing medical certificates or disputed evidence provenance.",
    ltraceValue: "Zero-Trust Evidence Audit Portal verifying 100% immutable chain-of-custody from emergency room to court exhibit table.",
    permissions: "Read Verified Court Packages, Audit Custody Timestamps, Export Judicial Certificates"
  }
];

export const POSITIONING_MATRIX = [
  {
    segment: "State Healthcare Networks & Hospital Administrations",
    painPoints: "Doctors spending 3+ hours daily on legal paperwork and facing legal liability during chain-of-custody disputes.",
    valueProp: "L-Trace automates medico-legal report creation, standardizes evidence sealing, and reduces doctor administrative overhead by 70%.",
    keyMessage: "Empower clinical care while securing legal compliance automatically.",
    diffFactor: "Built-in medico-legal workflow engines replacing generic non-compliant EHR forms.",
    tagline: "Clinical Integrity. Judicial Trust."
  },
  {
    segment: "Law Enforcement Agencies & Police Departments",
    painPoints: "Case dismissals due to compromised evidence chains, slow lab turnarounds, and untracked paper dispatch.",
    valueProp: "A secure mobile-first evidence bridge that gives officers instant notification and tamper-proof digital evidence packages.",
    keyMessage: "Zero evidence tampering. 100% conviction confidence.",
    diffFactor: "Cryptographic QR handover verification between hospitals, couriers, and precincts.",
    tagline: "The Immutable Bridge from ER to Courtroom."
  },
  {
    segment: "State Departments of Justice & Forensic Directorates",
    painPoints: "Massive backlog of pending cases due to fragmented communication between health and legal stakeholders.",
    valueProp: "State-wide interoperability platform connecting emergency departments, mortuaries, FSLs, and district courts.",
    keyMessage: "Accelerate time-to-justice through synchronized inter-agency intelligence.",
    diffFactor: "ISO 27001 & HIPAA compliant zero-trust evidence exchange architecture.",
    tagline: "Systemic Accountability for Modern Governance."
  }
];

export const GTM_LAUNCH_PLAN = [
  {
    phase: "Phase 1: Regional Government Pilot & Validation (Months 1-3)",
    focus: "Deployment across 5 major state hospital casualty wards, 10 police precincts, and 1 central Forensic Science Lab.",
    deliverables: [
      "Co-design workshops with 50+ Emergency Physicians and Police Inspectors",
      "System integration with state EHR & Police Crime Record Management System (CCTNS)",
      "HIPAA, ISO 27001, and Indian Evidence Act Section 65B Compliance Certification",
      "Pilot evaluation report showing 65% reduction in evidence transit delays"
    ]
  },
  {
    phase: "Phase 2: State-Wide Rollout & Public Procurement (Months 4-8)",
    focus: "B2G Public Procurement RFP tenders, state health department mandates, and police academy training.",
    deliverables: [
      "State-wide tender bidding & Health/Home Ministry RFP procurement playbook",
      "Standard Operating Procedure (SOP) manual for Medico-Legal Evidence Handling",
      "Mobile App deployment for 2,500+ patrolling officers and forensic techs",
      "Annual User Conference: Health-Justice Digital Transformation Summit"
    ]
  },
  {
    phase: "Phase 3: National Expansion & Private Enterprise Scaling (Months 9-15)",
    focus: "Expansion to private hospital chains (Apollo, Fortis, Manipal), insurance fraud units, and national legal databases.",
    deliverables: [
      "Private Hospital Enterprise SLA tier launch ($150k ARR per hospital network)",
      "Automated Insurance Injury Claim Verification API module",
      "Integration with National Judicial Data Grid (NJDG)",
      "Thought leadership whitepaper series on AI in Medico-Legal Forensics"
    ]
  }
];

export const COMPETITIVE_BATTLECARD = {
  competitors: [
    {
      name: "L-Trace",
      type: "Purpose-Built Medico-Legal Bridge Platform",
      chainOfCustody: "Cryptographic SHA-256 & Smart Locker Barcode",
      interoperability: "Native Hospital-to-Police-to-Court API",
      doctorUsability: "1-Click Standardized Form Engine (< 3 mins)",
      pricing: "B2G SaaS Tier / Enterprise Hospital SLA",
      advantage: "Role-tailored interfaces for Doctors, Forensic Experts & Police with zero-trust immutable audit logs."
    },
    {
      name: "Legacy Paper Registers & Manual Couriers",
      type: "Manual Physical Process",
      chainOfCustody: "Paper Log Books (High Risk of Tampering/Loss)",
      interoperability: "None (Physical Dispatch Drivers)",
      doctorUsability: "Manual Handwriting (45-60 mins per case)",
      pricing: "High Operational Indirect Cost",
      advantage: "Familiarity, but vulnerable to corruption, degradation, and legal challenge."
    },
    {
      name: "Generic EHR Systems (Epic / Cerner)",
      type: "Clinical Hospital Systems",
      chainOfCustody: "Basic Internal Audit Trail (No Police Bridge)",
      interoperability: "Internal Hospital System Only",
      doctorUsability: "Complex Clinical EHR Forms",
      pricing: "High Enterprise EHR Module Cost",
      advantage: "Widespread hospital adoption, but lacks legal chain-of-custody and police handover portal."
    }
  ]
};

export const ABM_PERFORMANCE_CAMPAIGNS = [
  {
    platform: "LinkedIn B2B Account-Based Marketing (ABM)",
    targetAudience: "Chief Medical Officers (CMOs), Hospital Managing Directors, State Police Commissioners, GovTech Directors",
    adFormat: "Document Lead Gen Carousel & Executive Video Brief",
    headline: "Eliminate Medico-Legal Evidence Delays. Bridge Hospitals & Police in Real Time.",
    primaryText: "Paper-based evidence logs slow down justice and expose institutions to compliance liability. Discover how L-Trace protects evidence integrity with zero-trust cryptographic chain of custody.",
    cta: "Request Executive Demo & Pilot Access",
    predictedCTR: "3.25%",
    estimatedCPC: "$8.50"
  },
  {
    platform: "Google Search (High-Intent Gov & Healthcare Search)",
    targetAudience: "Queries: 'digital chain of custody software for police', 'medico legal report software', 'forensic evidence tracking system'",
    adFormat: "Responsive Search Ads (RSA)",
    headline: "L-Trace Medico-Legal Platform | Secure Health to Justice Evidence Exchange",
    primaryText: "ISO 27001 & HIPAA Compliant. Real-Time Evidence Chain of Custody. Trusted by Health & Law Enforcement.",
    cta: "Download Governance Briefing",
    predictedCTR: "5.80%",
    estimatedCPC: "$4.90"
  },
  {
    platform: "Civic Tech & Health Policy Sponsored Briefings",
    targetAudience: "Public Policy Consultants, Legal Reform Advocates, Judiciary Operations Officers",
    adFormat: "Sponsored Newsletter Header & Native Article Spotlight",
    headline: "Modernizing Health-Justice Infrastructure: The 2026 Medico-Legal Evidence Report",
    primaryText: "Read how leading health departments are eliminating courtroom evidence disputes while freeing up doctor consultation hours.",
    cta: "Read Whitepaper",
    predictedCTR: "2.40%",
    estimatedCPC: "$6.20"
  }
];

export const SEO_KEYWORDS = [
  {
    keyword: "digital chain of custody software",
    volume: "8,900",
    kd: "22 (Low)",
    intent: "Commercial / B2G",
    targetAsset: "L-Trace Product Solution Overview & Arch Spec",
    cvrPotential: "Very High (Government RFPs & Demos)"
  },
  {
    keyword: "medico legal evidence tracking system",
    volume: "5,400",
    kd: "18 (Low)",
    intent: "Commercial / Enterprise",
    targetAsset: "Hospital Chief Medical Officer Buying Guide",
    cvrPotential: "High (Hospital Procurement)"
  },
  {
    keyword: "how to prevent evidence tampering in forensic lab",
    volume: "12,100",
    kd: "31 (Medium)",
    intent: "Informational",
    targetAsset: "Pillar Whitepaper: Cryptographic Evidence Integrity in 2026",
    cvrPotential: "Medium (Domain Authority & Awareness)"
  },
  {
    keyword: "police hospital evidence exchange standard",
    volume: "3,800",
    kd: "15 (Low)",
    intent: "Informational / Policy",
    targetAsset: "Regulatory Compliance & Interoperability Whitepaper",
    cvrPotential: "High (Public Policy Leaders)"
  }
];

export const CONTENT_CALENDAR = [
  { day: "Day 1", channel: "LinkedIn Executive Brief", title: "Why Paper-Based Medico-Legal Registers Fail in Modern Courts", format: "Visual Infographic Deck" },
  { day: "Day 5", channel: "Blog / SEO", title: "The Anatomy of a Cryptographic Chain of Custody: From ER to Verdict", format: "Long-Form Technical Post" },
  { day: "Day 10", channel: "Webinar", title: "Bridging ER & Police Precincts: Case Studies in Medico-Legal Digitalization", format: "Live Panel Discussion" },
  { day: "Day 15", channel: "B2G Nurture Email", title: "How Hospital Network X Reduced Doctor Paperwork Burden by 70%", format: "Case Study Briefing" },
  { day: "Day 22", channel: "Twitter / X & Threads", title: "Thread: Top 5 Reasons Forensic Evidence gets Rejected in Criminal Trials", format: "Educational Thread" },
  { day: "Day 28", channel: "Whitepaper Release", title: "The 2026 Health-Justice Interoperability Benchmark", format: "Downloadable PDF Lead Magnet" }
];

export const RESUME_BULLETS = {
  pmm: [
    "Spearheaded Go-To-Market (GTM) positioning & stakeholder alignment strategy for L-Trace, a zero-trust Medico-Legal Evidence Bridge connecting healthcare systems, forensic labs, and law enforcement agencies.",
    "Conducted user research with 40+ Emergency Physicians, Pathologists, and Police Detectives to engineer multi-persona value proposition hierarchies, GTM procurement roadmaps, and competitive battlecards.",
    "Defined product messaging and compliance positioning (HIPAA, ISO 27001), resulting in a 40% increase in government pilot evaluation interest during launch simulation."
  ],
  performance: [
    "Architected targeted Account-Based Marketing (ABM) and B2G paid media campaigns (LinkedIn Sponsored Content, Google Search RSAs) with a projected $25k budget targeting CMOs and Police Commissioners.",
    "Engineered interactive B2G Cost-of-Delay & ROI Calculator to model evidence processing timelines, trial delay financial costs, and administrative savings for state health networks.",
    "Designed and executed CRO A/B testing roadmap for healthcare enterprise landing pages, driving a projected 32% improvement in demo request conversions."
  ],
  content: [
    "Developed comprehensive Content Marketing & SEO roadmap targeting 30,000+ monthly search volume across high-intent B2G HealthTech and legal compliance keywords.",
    "Authored long-form thought leadership pillar assets and technical governance whitepapers on cryptographic evidence chain of custody to establish category authority.",
    "Created 30-day multi-channel content calendar and 5-step B2G email nurture sequence that converted hospital operations leads into pilot discovery meetings."
  ]
};
