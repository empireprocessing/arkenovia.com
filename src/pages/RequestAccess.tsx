import { useState } from 'react'
import { Zap, GitBranch, Bell, Lock, CheckCircle2 } from 'lucide-react'
import { useGo } from '../lib/nav'
import { useSeo } from '../lib/seo'
import { Button, Eyebrow } from '../components/ui'

const benefits = [
  { icon: Zap, title: 'Onboard in minutes', desc: 'Connect a source and run your first pipeline the same day.' },
  { icon: GitBranch, title: 'Full lineage from day one', desc: 'See column-level lineage across every pipeline you build.' },
  { icon: Bell, title: 'Proactive alerting', desc: 'Catch freshness and schema issues before they reach dashboards.' },
  { icon: Lock, title: 'Secure by default', desc: 'Encryption, SSO / SAML, and audit logs come standard.' },
]

export default function RequestAccess() {
  const go = useGo()
  const [submitted, setSubmitted] = useState(false)
  useSeo({
    title: 'Request Access',
    description:
      'Request access to Arkenovia. Tell us about your team and our team will review and reach out within 24 hours.',
  })

  return (
    <div className="node-texture">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <Eyebrow>Get started</Eyebrow>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-cream sm:text-5xl">
              Request Access
            </h1>
            <p className="mt-5 text-lg leading-8 text-sand">
              Arkenovia is rolling out to data teams in waves. Tell us a little about your
              organization and our team will set up a tailored workspace so you can start
              orchestrating pipelines right away.
            </p>
            <div className="mt-10 space-y-6">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-sm border border-brassDark bg-wine/30 text-brass">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-cream">{b.title}</h3>
                    <p className="mt-1 text-sand">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="card-ornate rounded-sm border-2 border-brassDark bg-plum/30 p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-brass" />
                <h2 className="mt-6 font-display text-2xl font-bold text-cream">
                  Request received
                </h2>
                <p className="mt-3 max-w-sm text-sand">
                  Our team will review and reach out within 24 hours.
                </p>
                <button
                  onClick={() => go('/')}
                  className="mt-8 text-sm font-semibold text-brass hover:text-amber"
                >
                  &larr; Back to Home
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="space-y-5"
              >
                <Field label="Full Name">
                  <input type="text" required className={inputCls} placeholder="Jane Doe" />
                </Field>
                <Field label="Work Email">
                  <input
                    type="email"
                    required
                    className={inputCls}
                    placeholder="jane@company.com"
                  />
                </Field>
                <Field label="Company Name">
                  <input type="text" required className={inputCls} placeholder="Acme Data" />
                </Field>
                <Field label="Role">
                  <select required className={inputCls} defaultValue="">
                    <option value="" disabled>
                      Select a role
                    </option>
                    <option>CEO / Founder</option>
                    <option>CTO</option>
                    <option>VP Engineering</option>
                    <option>Product Manager</option>
                    <option>Developer</option>
                    <option>Other</option>
                  </select>
                </Field>
                <Field label="Team Size">
                  <select required className={inputCls} defaultValue="">
                    <option value="" disabled>
                      Select team size
                    </option>
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-200</option>
                    <option>201-500</option>
                    <option>500+</option>
                  </select>
                </Field>

                <Button type="submit" className="w-full">
                  Request Access
                </Button>

                <p className="text-center text-xs leading-6 text-sand/80">
                  By submitting, you agree to our{' '}
                  <button
                    type="button"
                    onClick={() => go('/legal/terms')}
                    className="font-semibold text-brass underline hover:text-amber"
                  >
                    Terms of Service
                  </button>{' '}
                  and{' '}
                  <button
                    type="button"
                    onClick={() => go('/legal/privacy')}
                    className="font-semibold text-brass underline hover:text-amber"
                  >
                    Privacy Policy
                  </button>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

const inputCls =
  'w-full rounded-sm border border-brassDark/70 bg-aubergine px-4 py-2.5 text-cream placeholder-sand/50 outline-none transition-colors focus:border-brass'

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-cream">{label}</span>
      {children}
    </label>
  )
}
