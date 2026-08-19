'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown, Command, Globe2, Menu, Play, ShieldCheck, Truck, X, Compass, Zap, Activity, Ship } from 'lucide-react'

const shipImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/container_ship_bow_aerial-hNoZgjNIJAXUjGfXonFiDArBApenba.webp'
const portImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/container_port_aerial-cfcTcy8nZNAaq4T0zDJ74VhW7yZJcp.webp'

const navItems = [
  { label: 'OVERVIEW', href: '/dashboard' },
  { label: 'NETWORK', href: '/network' },
  { label: 'DASHBOARD', href: '/dashboard' },
  { label: 'SIMULATE', href: '/dashboard' },
]

const scenarios = ['PORT CLOSURE', 'TYPHOON', 'FACTORY FAILURE', 'SUPPLIER FAILURE', 'SHIPPING DELAY']
const agents = ['SIGNAL AGENT', 'DISRUPTION ML (XGBoost)', 'DELAY PREDICTOR (LightGBM)', 'PORT CONGESTION', 'INVENTORY BUFFER', 'FINANCIAL EXPOSURE', 'OR-TOOLS SOLVER', 'DIGITAL TWIN', 'SUPERVISOR AGENT']

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-medium tracking-[-0.05em] md:text-4xl text-white">{value}</div>
      <div className="mt-2 text-[10px] font-medium tracking-[0.14em] text-white/50">{label}</div>
    </div>
  )
}

function Status({ label, tone = 'success' }: { label: string; tone?: 'success' | 'warning' | 'critical' }) {
  const colors = { success: 'bg-[#34C759]', warning: 'bg-[#FF9F0A]', critical: 'bg-[#FF3B30]' }
  return (
    <span className="inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.13em]">
      <span className={`size-1.5 rounded-full ${colors[tone]}`} />
      {label}
    </span>
  )
}

function OrionTeamMark() {
  return (
    <div className="flex flex-col items-start text-[10px] font-medium tracking-[0.22em] text-white/70">
      <div className="flex gap-[0.18em]">
        {['O', 'R', 'I', 'O', 'N'].map((letter, index) => (
          <span key={`${letter}-${index}`}>{letter}</span>
        ))}
      </div>
      <span className="mt-2 h-px w-12 bg-white/35" />
      <span className="mt-2">TEAM ORION</span>
    </div>
  )
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [commandOpen, setCommandOpen] = useState(false)
  const [scenario, setScenario] = useState(1)
  const [recoveryStep, setRecoveryStep] = useState(0)
  const [recovered, setRecovered] = useState(false)

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setCommandOpen(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  function executeRecovery() {
    if (recoveryStep > 0) return
    let step = 1
    setRecoveryStep(step)
    const timer = window.setInterval(() => {
      step += 1
      setRecoveryStep(step)
      if (step === 5) {
        window.clearInterval(timer)
        setRecovered(true)
      }
    }, 850)
  }

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#0d0d0f] text-white selection:bg-[#087ef5] selection:text-white">
      {/* Top Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
        <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between rounded-2xl border border-white/10 bg-[#121214]/80 px-5 shadow-2xl backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-2.5 text-xs font-semibold tracking-[-0.02em]">
            <span className="flex size-6 items-center justify-center rounded-full bg-white">
              <span className="size-1.5 rounded-full bg-[#121214]" />
            </span>
            <span>FLOWFORGE</span>
            <span className="hidden text-white/50 sm:inline font-normal">/ MARITIME DISRUPTION OS</span>
          </Link>

          <nav className="hidden items-center gap-6 text-[10px] font-semibold tracking-[0.14em] text-white/70 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-slate-200 transition"
            >
              LAUNCH APP <ArrowRight className="size-3.5" />
            </Link>
            <button
              className="lg:hidden p-2 text-white/70 hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="mx-auto mt-2 flex max-w-[1440px] flex-col gap-4 rounded-3xl border border-white/10 bg-[#121214] p-5 text-xs shadow-2xl lg:hidden">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="overview" className="relative flex min-h-[880px] items-end overflow-hidden pt-24">
        <img
          src={shipImage}
          alt="Container vessel moving through deep ocean"
          className="absolute inset-0 size-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-[#0d0d0f]/60 to-transparent" />
        
        <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-16 md:px-12 md:pb-24">
          <div className="max-w-3xl text-white">
            <p className="mb-6 text-[10px] font-semibold tracking-[0.22em] text-[#087ef5] uppercase">
              A LIVING INTELLIGENCE LAYER FOR GLOBAL SUPPLY CHAINS
            </p>
            <h1 className="text-balance text-6xl font-semibold leading-[.94] tracking-[-0.07em] md:text-9xl">
              COMMAND<br />THE FLOW.
            </h1>
            
            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
              <p className="max-w-md text-sm leading-6 text-white/75 md:text-base">
                See the system. Predict the disruption. Shape the maritime outcome with 9 collaborative AI decision agents.
              </p>
              <div className="flex gap-3">
                <Link
                  href="/dashboard"
                  className="rounded-full bg-[#087ef5] px-6 py-3.5 text-xs font-semibold text-white transition hover:bg-[#076ecf]"
                >
                  ENTER COMMAND CENTER
                </Link>
                <Link
                  href="/network"
                  className="rounded-full border border-white/25 px-6 py-3.5 text-xs font-medium text-white transition hover:bg-white/10"
                >
                  GLOBAL NETWORK
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 · Global Network Live Telemetry */}
      <section id="network" className="mx-auto max-w-[1440px] px-5 py-24 md:px-12 md:py-32">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-[#087ef5]">01 · GLOBAL NETWORK</p>
            <h2 className="max-w-2xl text-balance text-4xl font-semibold leading-[.98] tracking-[-0.065em] md:text-6xl text-white">
              The whole system,<br />in one view.
            </h2>
          </div>
          <p className="max-w-sm text-xs leading-6 text-white/60">
            Every vessel, port, route, facility, and satellite telemetry signal connected in a single operational digital twin.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[28px] border border-white/10 bg-[#161619] text-white">
          <div className="relative min-h-[420px] overflow-hidden">
            <img
              src={portImage}
              alt="Container port viewed from above"
              className="absolute inset-0 size-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-[#0d0d0f]/60" />
            <div className="relative flex min-h-[420px] flex-col justify-between p-6 md:p-10">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-[10px] tracking-[0.16em] text-white">
                  <Globe2 className="size-4 text-[#087ef5]" /> LIVE NETWORK
                </span>
                <Status label="NETWORK HEALTH 94.7%" />
              </div>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4 border-t border-white/10 pt-8">
                <Metric value="1,842" label="ACTIVE VESSELS" />
                <Metric value="247" label="ACTIVE ROUTES" />
                <Metric value="12,430" label="FACILITIES" />
                <Metric value="94.7%" label="NETWORK HEALTH" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 · 9-Agent Decision Intelligence Section */}
      <section className="border-t border-white/10 bg-[#121215] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-12">
          <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-[#087ef5]">02 · MULTI-AGENT ARCHITECTURE</p>
              <h2 className="text-balance text-4xl font-semibold leading-[.98] tracking-[-0.065em] md:text-6xl text-white">
                Autonomous<br />decision loops.
              </h2>
              <p className="mt-6 max-w-sm text-xs leading-6 text-white/60">
                Machine learning models and combinatorial constraint solvers cooperate in sub-second intervals to resolve maritime exceptions.
              </p>
              <Link
                href="/dashboard"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-semibold text-black hover:bg-slate-200 transition"
              >
                OPEN DECISION STUDIO <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="space-y-2.5">
              {agents.map((agent, i) => (
                <div
                  key={agent}
                  className={`flex items-center gap-3 rounded-2xl border border-white/10 bg-[#18181c] px-4 py-3.5 text-xs transition ${
                    i === 1 ? 'border-[#087ef5] ring-1 ring-[#087ef5]' : ''
                  }`}
                >
                  <span className={`size-2 rounded-full ${i === 1 ? 'bg-[#087ef5]' : 'bg-white/30'}`} />
                  <span className="font-semibold text-white">{agent}</span>
                  <span className="ml-auto font-mono text-[10px] text-white/50">
                    {i === 1 ? 'INFERENCE ACTIVE' : 'READY'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0d0d0f] py-16 text-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-12">
          <div>
            <p className="text-2xl font-semibold tracking-[-0.04em]">FLOWFORGE OS</p>
            <p className="mt-1 text-[10px] text-white/40">MARITIME SUPPLY CHAIN DECISION INTELLIGENCE</p>
          </div>
          <OrionTeamMark />
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-xs font-semibold text-[#087ef5] hover:underline"
          >
            ENTER DASHBOARD <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </footer>
    </main>
  )
}
