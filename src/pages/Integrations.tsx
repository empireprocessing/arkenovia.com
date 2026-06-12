import { ArrowRight } from 'lucide-react'
import { useGo } from '../lib/nav'
import { useSeo } from '../lib/seo'
import { Button, Card, Eyebrow, Reveal, SectionHeading } from '../components/ui'

const categories = [
  {
    title: 'Data warehouses',
    items: ['Snowflake', 'BigQuery', 'Redshift', 'Databricks'],
  },
  {
    title: 'Databases',
    items: ['Postgres', 'MySQL', 'MongoDB', 'SQL Server'],
  },
  {
    title: 'Storage & lakes',
    items: ['Amazon S3', 'Google Cloud Storage', 'Azure Blob', 'Delta Lake'],
  },
  {
    title: 'Streaming & queues',
    items: ['Apache Kafka', 'Amazon Kinesis', 'Pub/Sub', 'RabbitMQ'],
  },
  {
    title: 'Transformation',
    items: ['dbt', 'Spark', 'Python', 'SQL'],
  },
  {
    title: 'Alerting & ops',
    items: ['Slack', 'PagerDuty', 'Opsgenie', 'Webhooks'],
  },
]

export default function Integrations() {
  const go = useGo()
  useSeo({
    title: 'Integrations',
    description:
      'Arkenovia connects to 200+ sources and destinations — Snowflake, BigQuery, Redshift, dbt, S3, Kafka, Postgres, Slack, and more.',
  })

  return (
    <div className="node-texture">
      <section className="border-b-4 top-accent">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <Reveal>
            <Eyebrow>Integrations</Eyebrow>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-cream sm:text-5xl">
              200+ connectors for the modern data stack
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-sand">
              Whatever your sources and destinations, Arkenovia keeps them in sync with managed
              connectors that adapt as schemas evolve.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <Card className="h-full">
                <h3 className="font-display text-xl font-bold text-cream">{c.title}</h3>
                <ul className="mt-4 space-y-2">
                  {c.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-center gap-3 rounded-sm border border-brassDark/50 bg-plum/30 px-3 py-2 text-sm text-cream"
                    >
                      <span className="h-2 w-2 rounded-full bg-magenta" />
                      {it}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="card-ornate mt-16 rounded-sm border-2 border-brassDark bg-wine/30 p-10 text-center">
            <SectionHeading
              title="Don't see your tool?"
              subtitle="Our connector SDK and generic REST/JDBC connectors let you build a custom integration in hours, not weeks. Enterprise plans include connector development support."
            />
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
