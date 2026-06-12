import {
  Workflow,
  Plug,
  CalendarClock,
  GitBranch,
  ArrowRight,
  ShieldCheck,
  Activity,
  Boxes,
} from 'lucide-react'
import { useGo } from '../lib/nav'
import { useSeo } from '../lib/seo'
import { Button, Card, Eyebrow, Reveal, SectionHeading } from '../components/ui'

const features = [
  {
    icon: Workflow,
    name: 'Visual pipeline builder',
    desc: 'Compose pipelines on a drag-and-drop canvas. Connect sources, transforms, and destinations as nodes on a living data graph — no boilerplate orchestration code.',
  },
  {
    icon: Plug,
    name: '200+ source & destination connectors',
    desc: 'Ingest from databases, warehouses, queues, and SaaS APIs, then land data anywhere. Hardened connectors handle schema drift and incremental syncs automatically.',
  },
  {
    icon: CalendarClock,
    name: 'Scheduling, retries & backfills',
    desc: 'Schedule by cron or event, with automatic retries, exponential backoff, and one-click historical backfills when upstream data changes.',
  },
  {
    icon: GitBranch,
    name: 'Column-level lineage & monitoring',
    desc: 'Trace every field from source to destination. Real-time monitoring and proactive alerting surface freshness, volume, and schema anomalies before they break dashboards.',
  },
]

const stats = [
  { value: '160+', label: 'data teams orchestrating with Arkenovia' },
  { value: '45%', label: 'less pipeline maintenance on average' },
  { value: '99.9%', label: 'pipeline uptime guarantee' },
  { value: '5PB+', label: 'processed every month' },
]

const steps = [
  {
    n: '01',
    title: 'Connect your sources',
    desc: 'Authenticate to warehouses, databases, queues, and APIs with managed connectors. Arkenovia profiles schemas and suggests an ingestion plan.',
  },
  {
    n: '02',
    title: 'Build & transform',
    desc: 'Assemble pipelines visually, add SQL or Python transforms, and version every change. Test runs validate logic before anything hits production.',
  },
  {
    n: '03',
    title: 'Schedule & observe',
    desc: 'Set schedules with retries and backfills, then watch lineage and freshness in real time. Alerts route to Slack the moment something drifts.',
  },
]

const integrations = [
  'Snowflake',
  'BigQuery',
  'Redshift',
  'dbt',
  'Amazon S3',
  'Apache Kafka',
  'Postgres',
  'Slack',
]

export default function Home() {
  const go = useGo()
  useSeo({
    title: 'Data Pipeline & ETL Orchestration',
    description:
      'Arkenovia helps data teams build, schedule, and monitor ETL pipelines with 200+ connectors, retries, backfills, and column-level lineage.',
  })

  return (
    <div className="node-texture">
      {/* Hero */}
      <section className="relative overflow-hidden border-b-4 top-accent">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          <Reveal>
            <Eyebrow>Data pipeline orchestration</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-cream sm:text-6xl">
              Orchestrate every data pipeline with precision.
            </h1>
            <p className="mt-6 text-lg leading-8 text-sand">
              Arkenovia is the platform data engineering teams use to build, schedule, and
              monitor ETL — from ingestion to column-level lineage, all on one flowing data
              graph.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button onClick={() => go('/request-access')}>
                Start Free Trial <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="ghost" onClick={() => go('/how-it-works')}>
                See how it works
              </Button>
            </div>
            <p className="mt-4 text-sm text-sand/70">No credit card required.</p>
          </Reveal>

          <Reveal delay={120}>
            <div className="card-ornate overflow-hidden rounded-sm border-2 border-brassDark">
              <img
                src="/images/hero-pipeline.png"
                alt="Abstract aubergine and magenta data pipeline node graph with flowing amber edges connecting glowing nodes"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <SectionHeading
          eyebrow="The platform"
          title="Everything a data team needs to ship reliable pipelines"
          subtitle="From the first connector to the last lineage edge, Arkenovia covers the full lifecycle of production ETL."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <Reveal key={f.name} delay={i * 90}>
              <Card className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-brassDark bg-wine/30 text-brass">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-cream">{f.name}</h3>
                <p className="mt-3 leading-7 text-sand">{f.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-brassDark/40 bg-aubergine/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 lg:grid-cols-4 lg:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-brass sm:text-5xl">
                  {s.value}
                </div>
                <p className="mt-2 text-sm leading-6 text-sand">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <SectionHeading
          eyebrow="Workflow"
          title="From raw source to trusted data in three movements"
        />
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <Card className="h-full">
                <span className="font-display text-5xl font-bold text-wine">{s.n}</span>
                <h3 className="mt-4 font-display text-xl font-bold text-cream">{s.title}</h3>
                <p className="mt-3 leading-7 text-sand">{s.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Integrations + image */}
      <section className="border-y border-brassDark/40 bg-aubergine/60">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="card-ornate overflow-hidden rounded-sm border-2 border-brassDark">
              <img
                src="/images/integrations.png"
                alt="Isometric abstract scene of interconnected data warehouse nodes linked by glowing magenta and amber pipelines on deep aubergine background"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Connected to your stack</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl">
              Plug into the tools your data already lives in
            </h2>
            <p className="mt-4 text-lg leading-8 text-sand">
              Arkenovia speaks the language of the modern data stack, with managed connectors
              that keep schemas in sync as your sources evolve.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {integrations.map((name) => (
                <div
                  key={name}
                  className="rounded-sm border border-brassDark/60 bg-plum/30 px-3 py-2 text-center text-sm font-semibold text-cream"
                >
                  {name}
                </div>
              ))}
            </div>
            <button
              onClick={() => go('/integrations')}
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brass hover:text-amber"
            >
              Explore all integrations
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* Security strip */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <SectionHeading
          eyebrow="Security & compliance"
          title="Enterprise-grade controls around every byte"
        />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: 'Encrypted end to end',
              desc: 'TLS in transit and AES-256 at rest, with isolated tenant boundaries for every workspace.',
            },
            {
              icon: Activity,
              title: 'Full audit trail',
              desc: 'Every pipeline change, run, and access event is logged and exportable for compliance.',
            },
            {
              icon: Boxes,
              title: 'Role-based access',
              desc: 'Granular roles, SSO / SAML, and least-privilege defaults keep sensitive pipelines locked down.',
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <Card className="h-full">
                <c.icon className="h-8 w-8 text-magenta" />
                <h3 className="mt-4 font-display text-lg font-bold text-cream">{c.title}</h3>
                <p className="mt-2 leading-7 text-sand">{c.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <Reveal>
          <div className="card-ornate relative overflow-hidden rounded-sm border-2 border-brassDark bg-wine/30 px-8 py-16 text-center sm:px-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl">
              Ship your next pipeline with Arkenovia
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-sand">
              Start a 14-day free trial and orchestrate your data with confidence — no credit
              card required.
            </p>
            <div className="mt-8 flex justify-center">
              <Button onClick={() => go('/request-access')}>
                Start Free Trial <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
