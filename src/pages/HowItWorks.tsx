import { Plug, Workflow, CalendarClock, GitBranch, ArrowRight } from 'lucide-react'
import { useGo } from '../lib/nav'
import { useSeo } from '../lib/seo'
import { Button, Card, Eyebrow, Reveal, SectionHeading } from '../components/ui'

const stages = [
  {
    icon: Plug,
    step: 'Step 1',
    title: 'Ingest from any source',
    desc: 'Authenticate to databases, warehouses, object stores, queues, and SaaS APIs using managed connectors. Arkenovia profiles each schema, detects primary keys, and proposes incremental sync strategies so you only move the data that changed.',
    points: ['Managed OAuth & secrets', 'Automatic schema detection', 'Incremental & CDC syncs'],
  },
  {
    icon: Workflow,
    step: 'Step 2',
    title: 'Model & transform visually',
    desc: 'Assemble pipelines as a node graph on the visual canvas. Drop in SQL or Python transforms, branch and join streams, and preview outputs with sampled test runs before promoting anything to production.',
    points: ['Drag-and-drop DAGs', 'SQL & Python transforms', 'Versioned, testable changes'],
  },
  {
    icon: CalendarClock,
    step: 'Step 3',
    title: 'Schedule with confidence',
    desc: 'Trigger pipelines by cron or upstream event. Built-in retries with exponential backoff handle transient failures, while one-click backfills replay history whenever source data is corrected.',
    points: ['Cron & event triggers', 'Retries with backoff', 'One-click backfills'],
  },
  {
    icon: GitBranch,
    step: 'Step 4',
    title: 'Observe end to end',
    desc: 'Column-level lineage maps every field from source to destination. Real-time monitoring tracks freshness, volume, and schema drift, and proactive alerts route to Slack the instant something looks wrong.',
    points: ['Column-level lineage', 'Freshness & volume checks', 'Slack alerting'],
  },
]

export default function HowItWorks() {
  const go = useGo()
  useSeo({
    title: 'How It Works',
    description:
      'See how Arkenovia orchestrates data pipelines: ingest from any source, transform visually, schedule with retries and backfills, and observe with column-level lineage.',
  })

  return (
    <div className="node-texture">
      <section className="border-b-4 top-accent">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <Reveal>
            <Eyebrow>How it works</Eyebrow>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-cream sm:text-5xl">
              From raw source to trusted data, orchestrated
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-sand">
              Arkenovia turns the messy reality of ETL into a clear, observable flow. Here is
              the journey every pipeline takes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal>
          <div className="card-ornate mb-16 overflow-hidden rounded-sm border-2 border-brassDark">
            <img
              src="/images/workflow.png"
              alt="Abstract flowing data pipeline diagram with magenta and amber nodes connected by curved edges on deep aubergine background"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="space-y-6">
          {stages.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <Card>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[auto,1fr,auto] lg:items-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-sm border border-brassDark bg-wine/30 text-brass">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <span className="font-display text-sm font-semibold uppercase tracking-wider text-brass">
                      {s.step}
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-bold text-cream">
                      {s.title}
                    </h3>
                    <p className="mt-3 leading-7 text-sand">{s.desc}</p>
                  </div>
                  <ul className="space-y-2 lg:w-56">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="rounded-sm border border-brassDark/60 bg-plum/30 px-3 py-2 text-sm text-cream"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button onClick={() => go('/request-access')}>
            Start Free Trial <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}
