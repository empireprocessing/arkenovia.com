import { useSeo } from '../../lib/seo'
import { site } from '../../lib/site'
import LegalLayout, { H2, P } from '../../components/LegalLayout'

export default function Privacy() {
  useSeo({
    title: 'Privacy Policy',
    description: `Privacy Policy for ${site.name} — how we collect, use, and protect your data, including GDPR and CCPA rights.`,
  })
  return (
    <LegalLayout title="Privacy Policy" updated="June 12, 2026">
      <section>
        <P>
          This Privacy Policy explains how {site.llc} ("we", "us", or "our") collects, uses, and
          protects information in connection with the {site.name} platform (the "Service"). We
          are committed to protecting your privacy and handling your data transparently.
        </P>
      </section>

      <section>
        <H2>1. Information We Collect</H2>
        <P>
          We collect account information (such as name, work email, and company), configuration
          and usage data needed to operate your pipelines, and technical data such as log and
          device information. We process the data you connect to the Service solely to provide
          the Service.
        </P>
      </section>

      <section>
        <H2>2. How We Use Information</H2>
        <P>
          We use information to provide, maintain, and improve the Service, to communicate with
          you, to ensure security, and to comply with legal obligations. We do not use the
          content of your pipelines for advertising.
        </P>
      </section>

      <section>
        <H2>3. We Never Sell Your Data</H2>
        <P>
          We never sell personal information to third parties. We share data only with service
          providers who help us operate the Service, under strict confidentiality and data
          protection obligations.
        </P>
      </section>

      <section>
        <H2>4. GDPR — Rights of EEA Residents</H2>
        <P>
          If you are located in the European Economic Area (EEA), you have rights under the
          General Data Protection Regulation (GDPR), including the right to access, rectify,
          erase, restrict, or object to the processing of your personal data, and the right to
          data portability. We act as a data processor for the data you submit and as a data
          controller for account data. To exercise these rights, contact us at{' '}
          <a className="text-brass underline hover:text-amber" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </P>
      </section>

      <section>
        <H2>5. CCPA — Rights of California Consumers</H2>
        <P>
          If you are a California resident, the California Consumer Privacy Act (CCPA) provides
          you with rights to know what personal information we collect, to request deletion of
          your personal information, and to not be discriminated against for exercising your
          rights. As stated above, we never sell personal information. To exercise your CCPA
          rights, contact us at{' '}
          <a className="text-brass underline hover:text-amber" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </P>
      </section>

      <section>
        <H2>6. Children</H2>
        <P>
          Children under 16 — this service is not intended for anyone under the age of 16. We do
          not knowingly collect personal information from anyone under 16. If you believe a child
          has provided us personal information, please contact us so we can delete it.
        </P>
      </section>

      <section>
        <H2>7. Data Security</H2>
        <P>
          We protect your data with encryption in transit and at rest, access controls, and
          continuous monitoring. No method of transmission or storage is completely secure, but
          we work hard to safeguard your information.
        </P>
      </section>

      <section>
        <H2>8. Data Retention</H2>
        <P>
          We retain personal data only as long as necessary to provide the Service and to comply
          with legal obligations. Following account termination, you have 30 days to export your
          data before it is deleted in the ordinary course of operations.
        </P>
      </section>

      <section>
        <H2>9. Contact</H2>
        <P>
          For privacy questions, contact us at{' '}
          <a className="text-brass underline hover:text-amber" href={`mailto:${site.email}`}>
            {site.email}
          </a>{' '}
          or by mail to {site.llc}, {site.address}.
        </P>
      </section>
    </LegalLayout>
  )
}
