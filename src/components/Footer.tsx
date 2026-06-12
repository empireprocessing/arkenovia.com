import { Mail, Phone, MapPin } from 'lucide-react'
import { site } from '../lib/site'
import { useGo } from '../lib/nav'
import { Logo } from './ui'

const cols: { title: string; links: { label: string; path: string }[] }[] = [
  {
    title: 'Product',
    links: [
      { label: 'Pricing', path: '/pricing' },
      { label: 'How It Works', path: '/how-it-works' },
      { label: 'Integrations', path: '/integrations' },
      { label: 'Security', path: '/security' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Request Access', path: '/request-access' },
      { label: 'Log in', path: '/login' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', path: '/legal/terms' },
      { label: 'Privacy Policy', path: '/legal/privacy' },
      { label: 'Cookie Policy', path: '/legal/cookies' },
      { label: 'Refund Policy', path: '/legal/refund' },
      { label: 'SLA', path: '/legal/sla' },
    ],
  },
]

export default function Footer() {
  const go = useGo()
  return (
    <footer className="border-t-4 top-accent bg-aubergine">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <button onClick={() => go('/')} className="flex items-center gap-2.5">
              <Logo className="h-8 w-8" />
              <span className="font-display text-xl font-bold tracking-wide text-cream">
                {site.name}
              </span>
            </button>
            <p className="mt-4 max-w-sm text-sm leading-7 text-sand">
              The data pipeline orchestration platform for engineering teams — build,
              schedule, and observe ETL with confidence.
            </p>
            <div className="mt-6 space-y-3 text-sm text-sand">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 transition-colors hover:text-cream"
              >
                <Mail className="h-4 w-4 text-brass" /> {site.email}
              </a>
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center gap-3 transition-colors hover:text-cream"
              >
                <Phone className="h-4 w-4 text-brass" /> {site.phone}
              </a>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-brass" /> {site.address}
              </p>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brass">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.path}>
                    <button
                      onClick={() => go(l.path)}
                      className="text-sm text-sand transition-colors hover:text-cream"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-brassDark/40 pt-8 text-sm text-sand/80">
          &copy; {new Date().getFullYear()} {site.llc}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
