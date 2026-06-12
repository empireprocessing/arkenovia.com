import { useState } from 'react'
import { Check, ChevronDown, ArrowRight } from 'lucide-react'
import { useGo } from '../lib/nav'
import { useSeo } from '../lib/seo'
import { Button, Eyebrow, Reveal, SectionHeading } from '../components/ui'

const plans = [
  {
    name: 'Starter',
    priceUSD: '29.90',
    priceEUR: '29.90',
    tagline: 'For small teams shipping their first pipelines.',
    cta: 'Start Free Trial',
    popular: false,
    features: [
      'Up to 10 active pipelines',
      '25 managed connectors',
      'Hourly scheduling & retries',
      '7-day lineage retention',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    priceUSD: '49.90',
    priceEUR: '49.90',
    tagline: 'For scaling data teams that need observability.',
    cta: 'Start Free Trial',
    popular: true,
    features: [
      'Up to 100 active pipelines',
      '100 managed connectors',
      'Minute-level scheduling & backfills',
      '30-day column-level lineage',
      'Advanced alerting to Slack',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    priceUSD: '89.90',
    priceEUR: '89.90',
    tagline: 'For organizations with mission-critical data.',
    cta: 'Contact Sales',
    popular: false,
    features: [
      'Unlimited pipelines',
      'All 200+ connectors',
      'Custom transforms & SLAs',
      '1-year lineage retention',
      'SSO / SAML & audit logs',
      'Dedicated solutions engineer',
    ],
  },
]

const addons = [
  { name: 'Additional connectors', price: '19.90' },
  { name: 'Extra compute capacity', price: '34.90' },
  { name: 'Extended lineage retention', price: '39.90' },
  { name: 'Custom transforms', price: '44.90' },
  { name: 'Advanced alerting', price: '59.90' },
  { name: 'SSO / SAML', price: '69.90' },
  { name: 'Audit log & data export', price: '79.90' },
]

const faqs = [
  {
    q: 'Can I change plans later?',
    a: 'Yes. Upgrade or downgrade at any time from your workspace settings. Changes are prorated automatically against your current billing cycle.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit and debit cards. Enterprise customers can also be invoiced annually via bank transfer.',
  },
  {
    q: 'Is there a long-term contract?',
    a: 'No. All plans are month-to-month and you can cancel anytime. Annual billing is available if you prefer a longer commitment for a discount.',
  },
  {
    q: 'Do you offer discounts?',
    a: 'Yes. We offer discounted annual billing, plus special pricing for early-stage startups, non-profits, and educational institutions. Reach out to discuss eligibility.',
  },
  {
    q: 'How are active pipelines counted?',
    a: 'An active pipeline is any pipeline that has executed at least one run in the current billing month. Paused and draft pipelines do not count toward your plan limit.',
  },
  {
    q: 'Do you charge for backfills and retries?',
    a: 'No. Retries, automatic backoff, and historical backfills are included on every plan. You only pay for the compute capacity your pipelines actually consume.',
  },
]

export default function Pricing() {
  const go = useGo()
  const [eur, setEur] = useState(false)
  const [open, setOpen] = useState<number | null>(null)
  useSeo({
    title: 'Pricing',
    description:
      'Simple, transparent pricing for Arkenovia. Starter, Growth, and Enterprise plans plus add-ons. Start with a 14-day free trial.',
  })

  const sym = eur ? '€' : '$'

  return (
    <div className="node-texture">
      <section className="border-b-4 top-accent">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <Reveal>
            <Eyebrow>Pricing</Eyebrow>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-cream sm:text-5xl">
              Pricing that scales with your pipelines
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-sand">
              Start with a 14-day free trial. Scale when you're ready. Cancel anytime.
            </p>

            <div className="mt-8 inline-flex items-center gap-1 rounded-sm border border-brassDark bg-plum/40 p-1">
              <button
                onClick={() => setEur(false)}
                className={`rounded-sm px-4 py-1.5 text-sm font-semibold transition-colors ${
                  !eur ? 'bg-brass text-aubergine' : 'text-sand'
                }`}
              >
                USD ($)
              </button>
              <button
                onClick={() => setEur(true)}
                className={`rounded-sm px-4 py-1.5 text-sm font-semibold transition-colors ${
                  eur ? 'bg-brass text-aubergine' : 'text-sand'
                }`}
              >
                EUR (€)
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div
                className={`card-ornate flex h-full flex-col rounded-sm border-2 bg-plum/30 p-8 ${
                  p.popular ? 'border-magenta' : 'border-brassDark'
                }`}
              >
                {p.popular && (
                  <span className="mb-4 inline-block w-fit rounded-sm bg-magenta px-3 py-1 text-xs font-bold uppercase tracking-wider text-cream">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold text-cream">{p.name}</h3>
                <p className="mt-2 text-sm text-sand">{p.tagline}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold text-brass">
                    {sym}
                    {eur ? p.priceEUR : p.priceUSD}
                  </span>
                  <span className="text-sand">/mo</span>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-sand">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-brass" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 w-full" onClick={() => go('/request-access')}>
                  {p.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="border-y border-brassDark/40 bg-aubergine/60">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Add-ons"
            title="Extend your plan as your data grows"
            subtitle="Mix and match optional capabilities. All add-ons are billed monthly per workspace."
          />
          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {addons.map((a, i) => (
              <Reveal key={a.name} delay={i * 50}>
                <div className="flex items-center justify-between rounded-sm border border-brassDark/60 bg-plum/30 px-5 py-4">
                  <span className="text-sm font-semibold text-cream">{a.name}</span>
                  <span className="font-display font-bold text-brass">
                    {sym}
                    {a.price}
                    <span className="text-xs font-normal text-sand">/mo</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className="overflow-hidden rounded-sm border border-brassDark/60 bg-plum/30"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-semibold text-cream">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-none text-brass transition-transform ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {open === i && (
                <p className="px-5 pb-5 leading-7 text-sand">{f.a}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button onClick={() => go('/request-access')}>
            Start Free Trial <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}
