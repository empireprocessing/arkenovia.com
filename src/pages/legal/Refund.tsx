import { useSeo } from '../../lib/seo'
import { site } from '../../lib/site'
import LegalLayout, { H2, P } from '../../components/LegalLayout'

export default function Refund() {
  useSeo({
    title: 'Refund Policy',
    description: `Refund Policy for ${site.name} — our 14-day money-back guarantee for first subscriptions.`,
  })
  return (
    <LegalLayout title="Refund Policy" updated="June 12, 2026">
      <section>
        <P>
          We want you to be confident in {site.name}. This Refund Policy explains when and how
          refunds are issued for paid subscriptions to the Service provided by {site.llc}.
        </P>
      </section>

      <section>
        <H2>1. 14-Day Money-Back Guarantee</H2>
        <P>
          We offer a 14-day money-back guarantee. If you are not satisfied, you may request a
          full refund within 14 days of your initial paid subscription purchase.
        </P>
      </section>

      <section>
        <H2>2. First Subscription Only</H2>
        <P>
          The guarantee applies to your first subscription only. Subsequent renewals and
          additional subscriptions are not eligible for the 14-day refund, except where a refund
          is required by law.
        </P>
      </section>

      <section>
        <H2>3. How to Request a Refund</H2>
        <P>
          To request a refund, email us at{' '}
          <a className="text-brass underline hover:text-amber" href={`mailto:${site.email}`}>
            {site.email}
          </a>{' '}
          from the address associated with your account within the eligible period.
        </P>
      </section>

      <section>
        <H2>4. Processing Time</H2>
        <P>
          Approved refunds are processed within 5–7 business days to your original payment
          method. Depending on your bank or card issuer, it may take additional time for the
          credit to appear on your statement.
        </P>
      </section>

      <section>
        <H2>5. Contact</H2>
        <P>
          Questions about this Refund Policy can be sent to{' '}
          <a className="text-brass underline hover:text-amber" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </P>
      </section>
    </LegalLayout>
  )
}
