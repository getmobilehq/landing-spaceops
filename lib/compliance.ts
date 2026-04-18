export type ComplianceSection = {
  id: string;
  eyebrow: string;
  headline: string;
  paragraphs: string[];
  subsections?: { title: string; body: string }[];
  keyPoints?: string[];
  note?: string;
  table?: { headers: string[]; rows: string[][] };
};

export const complianceSections: ComplianceSection[] = [
  {
    id: 'flsa',
    eyebrow: 'Section A — FLSA',
    headline: 'FLSA-ready timekeeping and overtime.',
    paragraphs: [
      'The Fair Labor Standards Act requires employers to keep accurate records of hours worked and to pay non-exempt employees overtime (1.5x) for any hours exceeding 40 in a workweek.',
    ],
    subsections: [
      {
        title: 'Accurate timekeeping (29 CFR 516)',
        body: 'The Department of Labor requires employers to maintain records of hours worked each day and total hours worked each workweek for every non-exempt employee. SpaceOPS captures clock-in and clock-out timestamps automatically — no manual timesheets, no rounding disputes, no missing records.',
      },
      {
        title: 'Overtime calculation (29 CFR 778)',
        body: 'SpaceOPS calculates overtime automatically based on the threshold you configure per employee (default: 40 hours/week). The system separates regular hours from overtime hours and applies the correct multiplier (default: 1.5x, configurable up to 5x). This reduces the risk of miscalculating overtime pay — one of the most common FLSA violations.',
      },
      {
        title: 'Recordkeeping retention',
        body: 'FLSA requires payroll records to be retained for at least 3 years, and timekeeping records for at least 2 years. SpaceOPS stores all attendance and payroll data digitally with full timestamps, making retrieval straightforward during audits or disputes.',
      },
    ],
    keyPoints: [
      'Automated clock-in/clock-out with timestamps',
      'Per-employee overtime threshold and multiplier settings',
      'Payroll run history with approval audit trail (who created, who approved, when)',
      'Exportable records (CSV) for auditors or legal review',
      'Prevents off-the-clock work by making attendance the gateway to task visibility',
    ],
    note: 'SpaceOPS provides timekeeping and calculation tools. It is not a payroll processor and does not file taxes, withhold deductions, or issue paycheques. Always consult your payroll provider and legal counsel for full FLSA compliance.',
  },
  {
    id: 'state-overtime',
    eyebrow: 'Section B — State laws',
    headline: 'State-level overtime rules vary — SpaceOPS adapts.',
    paragraphs: [
      'Several states have overtime rules that go beyond the federal FLSA standard. SpaceOPS\u2019s per-employee configuration lets you handle these variations.',
    ],
    subsections: [
      {
        title: 'California (Cal. Lab. Code 510, 511)',
        body: 'California requires overtime after 8 hours in a single day (not just 40 in a week) and double time after 12 hours. SpaceOPS records daily hours by shift, giving you the raw data to apply California\u2019s daily overtime rules.',
      },
      {
        title: 'Alaska, Nevada, Colorado',
        body: 'These states also have daily overtime thresholds (typically 8 or 12 hours). SpaceOPS captures per-shift duration so your payroll team can apply the correct state rules.',
      },
      {
        title: 'New York, New Jersey, Washington',
        body: 'These states have minimum wage rates above the federal level. SpaceOPS\u2019s per-employee hourly rate setting ensures each employee\u2019s rate reflects their state\u2019s requirements.',
      },
    ],
    note: 'SpaceOPS captures the granular shift data your payroll provider needs to apply state-specific rules. Set the correct hourly rate per employee and export the data for your provider to process.',
  },
  {
    id: 'gps-privacy',
    eyebrow: 'Section C — GPS & privacy',
    headline: 'GPS verification done right — with transparency.',
    paragraphs: [
      'SpaceOPS uses GPS location at the moment of clock-in to verify that an employee is within the building\u2019s geofence radius. This is a single location check, not continuous tracking.',
    ],
    subsections: [
      {
        title: 'What SpaceOPS captures',
        body: 'GPS coordinates at the time of clock-in only. Distance from the building\u2019s registered location. Whether the employee was within the geofence radius (verified/unverified).',
      },
      {
        title: 'What SpaceOPS does NOT do',
        body: 'No continuous or real-time location tracking throughout the shift. No tracking of employees outside of the clock-in event. No tracking of personal devices when not clocking in. No background location collection.',
      },
      {
        title: 'California (CCPA / CPRA)',
        body: 'Under the California Privacy Rights Act, employee location data is considered personal information. Employers should provide notice in their privacy policy that GPS data is collected at clock-in for attendance verification. SpaceOPS stores this data scoped to the organisation, and it can be exported or deleted upon request.',
      },
      {
        title: 'Illinois (Workplace Privacy Act, 820 ILCS 55)',
        body: 'Illinois restricts employers from tracking employees via GPS without consent. SpaceOPS\u2019s geofence check occurs only during the voluntary clock-in action, and employers should ensure their employee handbook discloses this practice.',
      },
      {
        title: 'Connecticut, Delaware, Texas, and others',
        body: 'Several states require employers to notify employees before using electronic monitoring. A clear attendance policy and employee acknowledgement form are recommended.',
      },
    ],
    keyPoints: [
      'Include GPS clock-in verification in your employee handbook',
      'Have employees acknowledge the practice during onboarding',
      'Explain what is captured (one-time location at clock-in) and what is not (continuous tracking)',
      'Update your company privacy policy to reference location data collection',
      'Provide a process for employees to raise concerns about location data',
    ],
  },
  {
    id: 'biometric',
    eyebrow: 'Section D — Biometric privacy',
    headline: 'SpaceOPS does not collect biometric data.',
    paragraphs: [
      'Several states — most notably Illinois (BIPA), Texas (CUBI), and Washington — regulate the collection of biometric data such as fingerprints, facial scans, and retina patterns.',
      'SpaceOPS does not collect, store, or process any biometric data. Attendance verification uses GPS geofencing and QR code scanning — not fingerprints, facial recognition, or any biometric identifier.',
      'This means SpaceOPS customers are not subject to biometric privacy obligations (such as BIPA\u2019s written consent requirements or data retention/destruction policies) as a result of using the platform.',
    ],
  },
  {
    id: 'osha',
    eyebrow: 'Section E — OSHA',
    headline: 'Support your OSHA obligations with better documentation.',
    paragraphs: [
      'The Occupational Safety and Health Administration (OSHA) requires employers to maintain safe workplaces and document certain incidents. While SpaceOPS is not an OSHA compliance tool, its issue tracking and inspection features support workplace safety practices.',
    ],
    subsections: [
      {
        title: 'Hazard reporting',
        body: 'Janitors and supervisors can report hazards (wet floors, broken equipment, chemical spills) as deficiencies with severity levels and photos. This creates a timestamped record that the hazard was identified and flagged for action.',
      },
      {
        title: 'Resolution tracking',
        body: 'Issues move through open, in progress, and resolved statuses with timestamps. This documents your response to reported hazards — useful during OSHA inquiries.',
      },
      {
        title: 'Inspection records',
        body: 'Regular room inspections with checklists create a pattern of documented workplace monitoring that demonstrates proactive safety management.',
      },
    ],
    note: 'SpaceOPS is not a substitute for OSHA-required programmes such as Hazard Communication (HazCom), bloodborne pathogen training, or injury/illness logs (OSHA 300). Use SpaceOPS alongside your dedicated safety compliance tools.',
  },
  {
    id: 'janitorial',
    eyebrow: 'Section F — Industry regulations',
    headline: 'Regulations specific to the cleaning industry.',
    paragraphs: [],
    subsections: [
      {
        title: 'California Janitorial Registration (AB 1978 / Labor Code 1420-1434)',
        body: 'California requires janitorial employers to register with the Division of Labor Standards Enforcement (DLSE). Registered employers must maintain records of employees, work locations, and hours worked. SpaceOPS\u2019s attendance records, building assignments, and payroll data directly support these recordkeeping requirements.',
      },
      {
        title: 'California AB 547 — Janitorial Worker Training',
        body: 'Requires property service employers to provide training on sexual harassment and assault prevention. SpaceOPS does not provide training content but can track task assignments and supervisor oversight that support duty-of-care documentation.',
      },
      {
        title: 'New York Displaced Building Service Workers Protection Act',
        body: 'Requires successor contractors to retain existing building service workers for 90 days. SpaceOPS\u2019s user records, building assignments, and attendance history provide documentation of which workers were assigned to which buildings.',
      },
      {
        title: 'Massachusetts Janitorial Worker Right to Know Act',
        body: 'Requires janitorial contractors to inform workers of the terms of service contracts. SpaceOPS\u2019s building and client assignment records document the relationship between cleaning teams and service locations.',
      },
    ],
  },
  {
    id: 'retention',
    eyebrow: 'Section G — Data retention',
    headline: 'Data retention, access, and deletion.',
    paragraphs: [
      'SpaceOPS retains attendance, payroll, and user data for as long as the organisation\u2019s account is active. Organisations can export all data (CSV) at any time. Upon account deletion, all organisation data is permanently removed.',
    ],
    table: {
      headers: ['Record type', 'Retention period', 'Regulation'],
      rows: [
        ['Payroll records', '3 years', 'FLSA (29 CFR 516.5)'],
        ['Timekeeping records', '2 years', 'FLSA (29 CFR 516.6)'],
        ['Employment records', '1 year after termination', 'EEOC / Title VII'],
        ['I-9 forms', '3 years from hire or 1 year after termination', 'IRCA'],
      ],
    },
    subsections: [
      {
        title: 'Employee data access requests',
        body: 'Under state privacy laws (CCPA, Colorado Privacy Act, Virginia CDPA, Connecticut DPA, and others), employees may have the right to know what personal data is collected, access their data, request corrections, or request deletion. SpaceOPS admins can view, export, and deactivate employee records. For deletion requests that require permanent removal, contact SpaceOPS support.',
      },
    ],
  },
  {
    id: 'joint-employer',
    eyebrow: 'Section H — Joint employer',
    headline: 'Understand joint employer risks in facility management.',
    paragraphs: [
      'In the cleaning industry, joint employer liability is a significant concern. When a property management company or building owner exerts control over a cleaning contractor\u2019s workers — schedules, supervision, pay — they may be deemed a joint employer under the FLSA and NLRA.',
    ],
    keyPoints: [
      'The admin role belongs to the cleaning company, not the building owner',
      'The client role is read-only — clients cannot create tasks, assign workers, or manage schedules',
      'Scheduling, supervision, and payroll are controlled entirely by the cleaning company',
      'The client portal provides transparency without operational control',
    ],
    note: 'Role separation supports the argument that the building owner is a client receiving a service, not a joint employer directing work. However, joint employer determinations are fact-specific — consult legal counsel for your situation.',
  },
  {
    id: 'insurance',
    eyebrow: 'Section I — Insurance & bonding',
    headline: 'Documentation that supports your insurance requirements.',
    paragraphs: [
      'Many commercial cleaning contracts require proof of quality control processes, employee tracking, and incident documentation for insurance and bonding purposes.',
    ],
    keyPoints: [
      'Attendance records with GPS verification — proof that employees were on-site',
      'Inspection records with pass/fail results — proof that quality checks were performed',
      'Issue tracking with timestamps and resolution — proof that problems were addressed',
      'Payroll records with approval audit trails — proof of proper compensation',
    ],
    note: 'These records can be exported and provided to insurers, surety companies, or clients as part of your risk management documentation.',
  },
];
