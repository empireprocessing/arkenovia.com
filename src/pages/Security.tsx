import { Lock, ShieldCheck, KeyRound, FileText, Server, EyeOff, ArrowRight } from 'lucide-react'
import { useGo } from '../lib/nav'
import { useSeo } from '../lib/seo'
import { Button, Card, Eyebrow, Reveal, SectionHeading } from '../components/ui'

const controls = [
  {
    icon: Lock,
    title: 'Encryption everywhere',
    desc: 'All data is encrypted in transit with TLS 1.2+ and at rest with AES-256. Secrets and credentials are stored in an isolated, encrypted vault.',
  },
  {
    icon: KeyRound,
    title: 'SSO / SAML & RBAC',
    desc: 'Enforce single sign-on via SAML, and scope every pipeline with granular role-based access control and least-privilege defaults.',
  },
  {
    icon: FileText,
    title: 'Audit logging',
    desc: 'Every configuration change, pipeline run, and access event is captured in an immutable, exportable audit trail.',
  },
  {
    icon: Server,
    title: 'Tenant isolation',
    desc: 'Each workspace runs with isolated compute and storage boundaries, so your pipelines and data never mix with another tenant.',
  },
  {
    icon: EyeOff,
    title: 'Data minimization',
    desc: 'We process only the data required to run your pipelines, never sell personal information, and honor deletion requests promptly.',
  },
  {
    icon: ShieldCheck,
    title: 'Resilient infrastructure',
    desc: 'Redundant, monitored infrastructure backs our 99.9% uptime guarantee, with automated failover and continuous backups.',
  },
]

const compliance = [
  'GDPR-aligned processing',
  'CCPA-aligned processing',
  'SOC 2-aligned controls',
  '99.9% uptime SLA',
  'Encrypted backups',
  'Regular penetration testing',
]

export default function Security() {
  const go = useGo()
  useSeo({
    title: 'Security',
    description:
      'Security at Arkenovia: end-to-end encryption, SSO / SAML, RBAC, audit logging, tenant isolation, and GDPR/CCPA-aligned data processing.',
  })

  return (
    <div className="node-texture">
      <section className="border-b-4 top-accent">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <Reveal>
            <Eyebrow>Security</Eyebrow>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-cream sm:text-5xl">
              Security built into every pipeline
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-sand">
              Your data is among your most sensitive assets. Arkenovia protects it with
              defense-in-depth controls at every layer of the platform.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal>
          <div className="card-ornate mb-16 overflow-hidden rounded-sm border-2 border-brassDark">
            <img
              src="/images/security.png"
              alt="Abstract glowing shield protecting a network of magenta and amber data nodes on deep aubergine background"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {controls.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <Card className="h-full">
                <c.icon className="h-8 w-8 text-magenta" />
                <h3 className="mt-4 font-display text-lg font-bold text-cream">{c.title}</h3>
                <p className="mt-2 leading-7 text-sand">{c.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-brassDark/40 bg-aubergine/60">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Compliance"
            title="Controls aligned to the standards you rely on"
          />
          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {compliance.map((c, i) => (
              <Reveal key={c} delay={i * 50}>
                <div className="flex items-center gap-3 rounded-sm border border-brassDark/60 bg-plum/30 px-4 py-3 text-sm font-semibold text-cream">
                  <ShieldCheck className="h-5 w-5 flex-none text-brass" />
                  {c}
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button onClick={() => go('/request-access')}>
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
