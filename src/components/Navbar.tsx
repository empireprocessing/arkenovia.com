import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { site } from '../lib/site'
import { useGo } from '../lib/nav'
import { Button, Logo } from './ui'

const links = [
  { label: 'Pricing', path: '/pricing' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Integrations', path: '/integrations' },
  { label: 'Security', path: '/security' },
]

export default function Navbar() {
  const go = useGo()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  const nav = (path: string) => {
    setOpen(false)
    go(path)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-brassDark/40 bg-aubergine/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <button
          onClick={() => nav('/')}
          className="flex items-center gap-2.5"
          aria-label={site.name}
        >
          <Logo className="h-8 w-8" />
          <span className="font-display text-xl font-bold tracking-wide text-cream">
            {site.name}
          </span>
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <button
              key={l.path}
              onClick={() => nav(l.path)}
              className={`text-sm font-semibold transition-colors hover:text-cream ${
                pathname === l.path ? 'text-brass' : 'text-sand'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            onClick={() => nav('/login')}
            className="text-sm font-semibold text-sand transition-colors hover:text-cream"
          >
            Log in
          </button>
          <Button onClick={() => nav('/request-access')}>Start Free Trial</Button>
        </div>

        <button
          className="text-cream lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-brassDark/40 bg-aubergine px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <button
                key={l.path}
                onClick={() => nav(l.path)}
                className="text-left text-sm font-semibold text-sand hover:text-cream"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => nav('/login')}
              className="text-left text-sm font-semibold text-sand hover:text-cream"
            >
              Log in
            </button>
            <Button className="mt-2 w-full" onClick={() => nav('/request-access')}>
              Start Free Trial
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
