import { useSeo } from '../../lib/seo'
import { site } from '../../lib/site'
import LegalLayout, { H2, P } from '../../components/LegalLayout'

const tiers = [
  { uptime: '99.9% – 99.0%', credit: '10% of monthly fees' },
  { uptime: '99.0% – 95.0%', credit: '25% of monthly fees' },
  { uptime: 'Below 95.0%', credit: '50% of monthly fees' },
]

export default function Sla() {
  useSeo({
    title: 'Service Level Agreement',
    description: `Service Level Agreement for ${site.name} — 99.9% uptime guarantee and service credits.`,
  })
  return (
    <LegalLayout title="Service Level Agreement" updated="June 12, 2026">
      <section>
        <P>
          This Service Level Agreement ("SLA") describes the uptime commitment {site.llc} makes
          for the {site.name} platform (the "Service") and the service credits available if we
          fall short.
        </P>
      </section>

      <section>
        <H2>1. Uptime Guarantee</H2>
        <P>
          We guarantee 99.9% monthly uptime for the Service, measured as the percentage of
          minutes in a calendar month during which the Service is available, excluding planned
          maintenance.
        </P>
      </section>

      <section>
        <H2>2. Planned Maintenance</H2>
        <P>
          Planned maintenance is announced at least 48 hours in advance and is scheduled, where
          possible, during low-traffic windows. Planned maintenance windows do not count against
          the uptime guarantee.
        </P>
      </section>

      <section>
        <H2>3. Service Credits</H2>
        <P>
          If monthly uptime falls below the guarantee, you may request service credits according
          to the following tiers:
        </P>
        <div className="mt-5 overflow-hidden rounded-sm border border-brassDark/60">
          <table className="w-full text-left text-sm">
            <thead className="bg-plum/50 text-cream">
              <tr>
                <th className="px-5 py-3 font-display font-bold">Monthly Uptime</th>
                <th className="px-5 py-3 font-display font-bold">Service Credit</th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((t) => (
                <tr key={t.uptime} className="border-t border-brassDark/40 text-sand">
                  <td className="px-5 py-3">{t.uptime}</td>
                  <td className="px-5 py-3">{t.credit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <H2>4. Requesting Credits</H2>
        <P>
          To request a service credit, contact us at{' '}
          <a className="text-brass underline hover:text-amber" href={`mailto:${site.email}`}>
            {site.email}
          </a>{' '}
          within 30 days of the affected month. Credits are applied to future invoices and are
          your sole remedy for downtime.
        </P>
      </section>

      <section>
        <H2>5. Exclusions</H2>
        <P>
          The uptime guarantee does not apply to downtime caused by factors outside our
          reasonable control, including issues with third-party connectors, your own
          configuration, or force majeure events.
        </P>
      </section>
    </LegalLayout>
  )
}
