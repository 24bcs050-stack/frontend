'use client'

import React, { useState } from 'react'
import { Cpu, RefreshCw, CheckCircle2, ShieldCheck, Database, Radio, Globe2, Activity } from 'lucide-react'
import { IntegrationItem } from '@/lib/mockData'

interface IntegrationsViewProps {
  integrations: IntegrationItem[]
  onSyncAll: () => void
}

export default function IntegrationsView({ integrations, onSyncAll }: IntegrationsViewProps) {
  const [syncing, setSyncing] = useState(false)

  const handleSync = () => {
    setSyncing(true)
    setTimeout(() => {
      setSyncing(false)
      onSyncAll()
    }, 1200)
  }

  return (
    <div className="space-y-5 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold tracking-[.18em] text-[#087ef5] uppercase">ERP, RADAR & TELEMETRY CONNECTORS</p>
          <h2 className="mt-1 text-2xl font-semibold tracking-[-.04em] text-[#1d1d1f]">System Integrations</h2>
          <p className="text-xs text-[#6e6e73]">PostgreSQL database, AIS marine streams, Open-Meteo weather radar, and SAP S/4HANA</p>
        </div>

        <button 
          onClick={handleSync}
          disabled={syncing}
          className="flex items-center gap-2 rounded-xl bg-[#087ef5] px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-[#076ecf] transition"
        >
          <RefreshCw className={`size-4 ${syncing ? 'animate-spin' : ''}`} /> Sync All Connectors
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {integrations.map((item) => (
          <div key={item.id} className="rounded-2xl border border-[#d2d2d7] bg-white p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div className="flex size-9 items-center justify-center rounded-xl bg-[#1d1d1f] text-white">
                <Cpu className="size-4" />
              </div>
              <span className={`rounded-full px-2.5 py-0.5 text-[9px] font-semibold ${
                item.status === 'Connected' ? 'bg-[#e8f8ed] text-[#34c759]' : 'bg-[#fff5eb] text-[#ff9f0a]'
              }`}>
                {item.status}
              </span>
            </div>

            <h3 className="mt-3 text-sm font-semibold text-[#1d1d1f]">{item.name}</h3>
            <p className="text-[10px] text-[#86868b]">{item.type}</p>

            <div className="mt-4 flex items-center justify-between border-t border-[#f0f0f2] pt-3 text-xs">
              <span className="text-[#86868b]">Latency: <strong className="text-[#1d1d1f]">{item.latency}</strong></span>
              <span className="text-[#86868b]">Last Sync: <strong className="text-[#087ef5]">{item.lastSync}</strong></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
