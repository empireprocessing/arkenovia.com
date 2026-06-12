import { useSeo } from '../../lib/seo'
import { site } from '../../lib/site'
import LegalLayout, { H2, P } from '../../components/LegalLayout'

export default function Cookies() {
  useSeo({
    title: 'Cookie Policy',
    description: `Cookie Policy for ${site.name} — how and why we use cookies and similar technologies.`,
  })
  return (
    <LegalLayout title="Cookie Policy" updated="June 12, 2026">
      <section>
        <P>
          This Cookie Policy explains how {site.llc} uses cookies and similar technologies on the{' '}
          {site.name} website and platform (the "Service").
        </P>
      </section>

      <section>
        <H2>1. What Are Cookies</H2>
        <P>
          Cookies are small text files placed on your device when you visit a website. They help
          the site function, remember your preferences, and understand how the Service is used.
        </P>
      </section>

      <section>
        <H2>2. Types of Cookies We Use</H2>
        <P>
          <strong className="text-cream">Essential cookies</strong> are required for the Service
          to operate, such as authentication and security.{' '}
          <strong className="text-cream">Preference cookies</strong> remember your settings, such
          as your currency choice.{' '}
          <strong className="text-cream">Analytics cookies</strong> help us understand aggregate
          usage so we can improve the Service. We do not use cookies for third-party advertising.
        </P>
      </section>

      <section>
        <H2>3. Managing Cookies</H2>
        <P>
          Most browsers let you control cookies through their settings, including blocking or
          deleting them. Note that disabling essential cookies may affect the functionality of
          the Service.
        </P>
      </section>

      <section>
        <H2>4. Changes to This Policy</H2>
        <P>
          We may update this Cookie Policy from time to time. Material changes will be reflected
          by the "Last updated" date above.
        </P>
      </section>

      <section>
        <H2>5. Contact</H2>
        <P>
          Questions about our use of cookies can be sent to{' '}
          <a className="text-brass underline hover:text-amber" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </P>
      </section>
    </LegalLayout>
  )
}
