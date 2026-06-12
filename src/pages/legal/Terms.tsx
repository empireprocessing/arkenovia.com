import { useSeo } from '../../lib/seo'
import { site } from '../../lib/site'
import LegalLayout, { H2, P } from '../../components/LegalLayout'

export default function Terms() {
  useSeo({
    title: 'Terms of Service',
    description: `Terms of Service for ${site.name} — the data pipeline orchestration platform.`,
  })
  return (
    <LegalLayout title="Terms of Service" updated="June 12, 2026">
      <section>
        <P>
          These Terms of Service ("Terms") govern your access to and use of the {site.name}{' '}
          platform and related services (the "Service") provided by {site.llc} ("we", "us", or
          "our"). By accessing or using the Service, you agree to be bound by these Terms.
        </P>
      </section>

      <section>
        <H2>1. Use of the Service</H2>
        <P>
          You may use the Service only in compliance with these Terms and all applicable laws.
          You are responsible for your account, your pipelines, and all activity that occurs
          under your credentials. You must not misuse the Service or interfere with its normal
          operation.
        </P>
      </section>

      <section>
        <H2>2. Fees and Payment</H2>
        <P>
          Paid plans are billed in advance on a recurring basis. All fees are non-refundable
          except where a refund is required by law or expressly provided in our Refund Policy.
          We will provide at least 30 days' notice before any change to recurring pricing takes
          effect for your subscription.
        </P>
      </section>

      <section>
        <H2>3. Termination</H2>
        <P>
          Either party may terminate these Terms at any time. Upon termination, your right to
          access the Service will cease. You will have 30 days following termination to export
          your data, after which we may delete it in the ordinary course of operations.
        </P>
      </section>

      <section>
        <H2>4. Data Processing</H2>
        <P>
          We process data in line with the General Data Protection Regulation (GDPR) and the
          California Consumer Privacy Act (CCPA), as described in our Privacy Policy. You retain
          ownership of all data you submit to the Service.
        </P>
      </section>

      <section>
        <H2>5. Limitation of Liability</H2>
        <P>
          To the maximum extent permitted by law, our total aggregate liability arising out of
          or relating to the Service shall not exceed the amounts you paid to us in the twelve
          (12) months preceding the event giving rise to the claim. We are not liable for
          indirect, incidental, or consequential damages.
        </P>
      </section>

      <section>
        <H2>6. Warranties</H2>
        <P>
          The Service is provided "as is" and "as available". While we strive for high
          reliability as described in our SLA, we do not warrant that the Service will be
          uninterrupted or entirely error-free.
        </P>
      </section>

      <section>
        <H2>7. Governing Law</H2>
        <P>
          These Terms are governed by and construed in accordance with the laws of the State of{' '}
          {site.governingState}, without regard to its conflict of laws principles. Any disputes
          shall be subject to the exclusive jurisdiction of the courts located in{' '}
          {site.governingState}.
        </P>
      </section>

      <section>
        <H2>8. Changes to These Terms</H2>
        <P>
          We may update these Terms from time to time. If we make material changes, we will
          notify you in advance. Your continued use of the Service after changes take effect
          constitutes acceptance of the revised Terms.
        </P>
      </section>

      <section>
        <H2>9. Contact</H2>
        <P>
          Questions about these Terms can be sent to{' '}
          <a className="text-brass underline hover:text-amber" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          , or by mail to {site.llc}, {site.address}.
        </P>
      </section>
    </LegalLayout>
  )
}
