import React from 'react'
import { Eyebrow } from './ui'

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: React.ReactNode
}) {
  return (
    <div className="node-texture">
      <section className="border-b-4 top-accent">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-cream sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-sand">Last updated: {updated}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <div className="legal-body space-y-8 leading-7 text-sand">{children}</div>
      </section>
    </div>
  )
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-2xl font-bold text-cream">{children}</h2>
  )
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3">{children}</p>
}
