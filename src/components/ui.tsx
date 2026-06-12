import React from 'react'
import { useReveal } from '../lib/nav'

export function Button({
  children,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}: {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'ghost'
  className?: string
  type?: 'button' | 'submit'
}) {
  if (variant === 'ghost') {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`group inline-flex items-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold text-cream ring-1 ring-inset ring-brassDark/70 transition-colors hover:bg-plum/60 ${className}`}
      >
        {children}
      </button>
    )
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-brass inline-flex items-center justify-center gap-2 rounded-sm bg-brass px-7 py-3 text-sm font-semibold text-aubergine transition-colors hover:bg-amber ${className}`}
    >
      {children}
    </button>
  )
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brass">
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
}) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg leading-8 text-sand">{subtitle}</p>}
    </div>
  )
}

export function Card({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`card-ornate rounded-sm border-2 border-brassDark bg-plum/30 p-7 ${className}`}
    >
      {children}
    </div>
  )
}

export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const { ref, shown } = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`reveal ${shown ? 'in-view' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function Logo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="8" cy="9" r="3" fill="#c4477e" />
      <circle cx="24" cy="9" r="3" fill="#e0a458" />
      <circle cx="16" cy="24" r="3" fill="#c5a15a" />
      <path
        d="M8 9 L16 24 L24 9"
        stroke="#c5a15a"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
