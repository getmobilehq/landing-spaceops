import { Container } from '@/components/ui/container';
import { SectionHead } from '@/components/ui/section-head';
import { Reveal } from '@/components/ui/reveal';

const steps = [
  {
    title: 'Create your account',
    body:
      'Sign up, name your organisation, and you’re in. No credit card required. Free plan includes one building and five seats.',
  },
  {
    title: 'Add your first building',
    body:
      'Enter a name and address. Upload a floor plan and let AI detect room boundaries — or set them up manually.',
  },
  {
    title: 'Invite your team',
    body:
      'Email invites with role-appropriate access. Admins see everything. Janitors see their tasks for today.',
  },
  {
    title: 'Start operating',
    body:
      'Create your first cleaning activity, assign rooms, and let your team get to work. Inspections and reports follow naturally.',
  },
];

export function Steps() {
  return (
    <section className="section">
      <Container>
        <Reveal>
          <SectionHead
            eyebrow="Onboarding"
            title={
              <>
                Up and running in <span className="serif">under ten</span> minutes.
              </>
            }
          />
        </Reveal>

        <Reveal>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-4 left-[3%] right-[3%] h-px bg-line-strong -z-0" />

            {steps.map((step, i) => (
              <div key={step.title} className="relative z-10 group">
                <div className="w-8 h-8 rounded-full bg-bg border border-line-strong flex items-center justify-center font-mono text-[12px] font-medium text-ink mb-6 transition-all duration-200 group-hover:bg-ink group-hover:text-bg group-hover:border-ink">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-[17px] font-medium mb-2.5 tracking-[-0.01em]">{step.title}</h3>
                <p className="text-ink-3 text-[14.5px] leading-[1.55]">{step.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
