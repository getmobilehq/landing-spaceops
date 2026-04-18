export type Feature = {
  slug: string;
  name: string;
  headline: string;
  oneLiner: string;
  body: string[];
  keyPoints: string[];
};

export const features: Feature[] = [
  {
    slug: 'scheduling',
    name: 'Scheduling & Activities',
    headline: 'Plan every shift, every room, every day.',
    oneLiner: 'Daily, weekly, or monthly recurring templates. Assign janitors to rooms in a few clicks.',
    body: [
      'Create cleaning activities tied to specific buildings, floors, and rooms. Set date windows and time slots. Assign janitors to individual rooms so everyone knows exactly what to do.',
      'Use activity templates to save your most common configurations. Set up recurring schedules — daily, weekly, monthly — and SpaceOPS generates activities automatically. No more rebuilding the same schedule every week.',
      'One-off tasks let supervisors assign ad-hoc work with due dates, descriptions, and reference photos. Janitors see their tasks for today in a clean, focused interface.',
    ],
    keyPoints: [
      'Date and time window scheduling',
      'Room-level task assignment',
      'Recurring activity templates (daily, weekly, monthly)',
      'One-off ad-hoc task assignments',
      'Activity status tracking: draft, active, closed, cancelled',
    ],
  },
  {
    slug: 'attendance',
    name: 'Attendance & Time Tracking',
    headline: 'Know who\u2019s on site — and prove it.',
    oneLiner: 'GPS-verified clock in, no buddy punching, exact arrival times and locations.',
    body: [
      'Janitors clock in and out through SpaceOPS with GPS verification. Each building has a configurable geofence radius (default 150 metres). If a janitor isn\u2019t within range, the system flags it.',
      'Attendance records capture clock-in time, clock-out time, GPS coordinates, distance from building, and verification status. Supervisors see a real-time attendance dashboard for their assigned buildings. Admins see everything.',
      'Historical attendance data feeds directly into reports and payroll — no manual timesheets, no data entry, no disputes.',
    ],
    keyPoints: [
      'GPS geofencing per building (configurable radius)',
      'QR code scanning for clock-in verification',
      'Real-time attendance dashboard for supervisors',
      'Complete shift history with timestamps and location data',
      'Automatic hours calculation for reports and payroll',
    ],
  },
  {
    slug: 'inspections',
    name: 'Inspections & Quality Control',
    headline: 'Inspect every room. Score every building.',
    oneLiner: 'QR-scan rooms, run custom checklists, auto-calculate pass rates at every level.',
    body: [
      'Supervisors create inspections, scan room QR codes, and record pass or fail results with notes. Every inspection is tied to a checklist — either a global template or a custom one you\u2019ve built for specific room types.',
      'Checklists can require photos, notes, or specific sign-offs per item. When a room fails inspection, the issue is captured with severity and assigned for follow-up.',
      'Pass rates are calculated automatically at every level — room, floor, building, client, and organisation. Set your pass threshold (e.g., 85%) and SpaceOPS tracks compliance across your entire portfolio.',
    ],
    keyPoints: [
      'QR code room scanning',
      'Custom checklists per room type',
      'Photo and note requirements per checklist item',
      'Automatic pass rate calculation at every level',
      'Configurable pass threshold for compliance tracking',
    ],
  },
  {
    slug: 'issues',
    name: 'Issue & Deficiency Management',
    headline: 'Catch problems early. Resolve them fast.',
    oneLiner: 'Report deficiencies with photos and severity levels. SLA timers track resolution.',
    body: [
      'Anyone on the team — janitor, supervisor, or inspector — can report a deficiency. Each issue is logged with a description, severity level (low, medium, high), photos, and precise location (building, floor, room).',
      'Issues move through a clear workflow: open, in progress, resolved. SLA timers track resolution speed by severity — 24 hours for high, 48 for medium, 168 for low. Dashboards show what\u2019s on track, at risk, or breached.',
      'Clients see open issues on their portal, so there\u2019s full transparency without you having to send manual updates.',
    ],
    keyPoints: [
      'Severity levels: low, medium, high',
      'Photo attachments and detailed descriptions',
      'Status workflow: open, in progress, resolved',
      'SLA tracking by severity',
      'Visible to clients through the client portal',
    ],
  },
  {
    slug: 'reports',
    name: 'Reports & Analytics',
    headline: 'Data-driven decisions. Client-ready reports.',
    oneLiner: 'One-click PDFs with AI-written executive summaries, filters by building, client, floor.',
    body: [
      'SpaceOPS generates comprehensive operations reports filtered by date range, building, client, or floor. Every report includes KPIs (pass rate, total activities, passed/failed inspections, open deficiencies), building and client performance breakdowns, floor-level analysis, and issue distribution.',
      'Reports export as polished PDFs with your organisation logo, branded headers, and an AI-generated executive summary that analyses trends and highlights what matters most.',
      'CSV export is available for every data view — plug the numbers into your own tools if you need to.',
    ],
    keyPoints: [
      'One-click PDF report generation',
      'AI-written executive summaries',
      'Filter by date, building, client, floor',
      'Charts and visual breakdowns',
      'CSV export for all data',
      'Organisation branding (logo, name)',
    ],
  },
  {
    slug: 'payroll',
    name: 'Payroll',
    headline: 'From clock-in to payslip — automated.',
    oneLiner: 'Hourly rates, overtime rules, automatic calculation from clock-ins, CSV export.',
    body: [
      'Set hourly rates, overtime thresholds, and overtime multipliers per employee. When it\u2019s time to run payroll, pick a date range and SpaceOPS pulls actual attendance data to calculate regular hours, overtime hours, and gross pay.',
      'Review the payroll run, approve it when you\u2019re satisfied, and export to CSV for your payroll provider. Draft runs can be deleted and regenerated. Approved runs are locked for audit purposes.',
    ],
    keyPoints: [
      'Per-employee hourly rate, OT threshold, and OT multiplier',
      'Automatic calculation from attendance records',
      'Regular hours, overtime hours, and gross pay breakdown',
      'Draft and approval workflow',
      'CSV export for payroll providers',
      'Full audit trail (created by, approved by, timestamps)',
    ],
  },
  {
    slug: 'client-portal',
    name: 'Client Portal',
    headline: 'Give clients visibility. Keep their trust.',
    oneLiner: 'Read-only dashboard per client. SLA compliance, activity, issue tracking — zero leakage.',
    body: [
      'Invite your clients into SpaceOPS with a dedicated read-only role. They see a dashboard tailored to their buildings: overview with room counts, activity pass rates, SLA compliance, and an issue tracker.',
      'Clients never see your internal data — no payroll, no billing, no other client information. They see exactly what they need to trust that the job is being done well.',
    ],
    keyPoints: [
      'Dedicated client login with read-only access',
      'SLA compliance dashboard',
      'Activity and inspection visibility',
      'Issue tracking transparency',
      'Complete data isolation from other clients and internal operations',
    ],
  },
  {
    slug: 'buildings',
    name: 'Buildings & Floor Plans',
    headline: 'Map your entire portfolio.',
    oneLiner: 'Buildings, floors, rooms — plus AI floor-plan detection from uploaded images.',
    body: [
      'Add buildings with addresses and GPS coordinates. Define floors and rooms with types and labels. Upload floor plan images and let AI automatically detect room boundaries, label them, and map coordinates — turning a static image into an interactive, actionable layout.',
      'Each building gets its own geofence for attendance verification, assigned supervisors for oversight, and a linked client for reporting. Manage your entire portfolio from one screen.',
    ],
    keyPoints: [
      'Unlimited buildings (Pro and Enterprise)',
      'Floor and room hierarchy',
      'AI-powered floor plan vectorisation',
      'GPS coordinates and geofence configuration',
      'Supervisor and client assignment per building',
    ],
  },
];

export const getFeature = (slug: string) => features.find((f) => f.slug === slug);
