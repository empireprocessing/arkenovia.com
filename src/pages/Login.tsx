import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { useGo } from '../lib/nav'
import { useSeo } from '../lib/seo'
import { Button, Logo } from '../components/ui'

export default function Login() {
  const go = useGo()
  const [submitted, setSubmitted] = useState(false)
  useSeo({
    title: 'Log in',
    description: 'Log in to your Arkenovia workspace to manage and monitor your data pipelines.',
  })

  return (
    <div className="node-texture flex min-h-[80vh] items-center justify-center px-6 py-20">
      <div className="card-ornate w-full max-w-md rounded-sm border-2 border-brassDark bg-plum/30 p-8">
        <div className="flex flex-col items-center text-center">
          <Logo className="h-10 w-10" />
          <h1 className="mt-4 font-display text-2xl font-bold text-cream">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-sand">Log in to your Arkenovia workspace.</p>
        </div>

        {submitted ? (
          <div className="mt-8 flex flex-col items-center text-center">
            <CheckCircle2 className="h-12 w-12 text-brass" />
            <p className="mt-4 text-sand">
              This is a demo login. Authentication is not enabled.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm font-semibold text-brass hover:text-amber"
            >
              Try again
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
            }}
            className="mt-8 space-y-5"
          >
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-cream">Email</span>
              <input type="email" required className={inputCls} placeholder="you@company.com" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-cream">Password</span>
              <input type="password" required className={inputCls} placeholder="••••••••" />
            </label>
            <Button type="submit" className="w-full">
              Log in
            </Button>
          </form>
        )}

        <p className="mt-6 text-center text-sm text-sand">
          Don't have an account?{' '}
          <button
            onClick={() => go('/request-access')}
            className="font-semibold text-brass hover:text-amber"
          >
            Request access
          </button>
        </p>
      </div>
    </div>
  )
}

const inputCls =
  'w-full rounded-sm border border-brassDark/70 bg-aubergine px-4 py-2.5 text-cream placeholder-sand/50 outline-none transition-colors focus:border-brass'
