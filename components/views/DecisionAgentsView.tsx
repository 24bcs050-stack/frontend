'use client'

import React, { useState } from 'react'
import { Sparkles, Zap, ShieldCheck, CheckCircle2, Play, Terminal, Layers, RefreshCw, Cpu } from 'lucide-react'

export default function DecisionAgentsView() {
  const [selectedAgent, setSelectedAgent] = useState<number>(0)
  const [simulating, setSimulating] = useState(false)

  const agents = [
    {
      step: '01',
      name: 'Live Risk Detection Agent',
      category: 'API Stream + LLM Parser',
      description: 'Continuously monitors satellite AIS beacons and Open-Meteo weather radars to identify emerging maritime anomalies.',
      status: 'Online',
      model: 'Open-Meteo V2 + AIS MarineTraffic Stream',
      output: 'Anomaly flagged: 2.8m wave swell along Mumbai-Yokohama corridor at 18.95N, 72.95E.'
    },
    {
      step: '02',
      name: 'Shipment Disruption Predictor',
      category: 'Trained Machine Learning (XGBoost)',
      description: 'Computes probability of maritime voyage disruption given real-time weather and vessel heading.',
      status: 'Critical Alert',
      model: 'XGBoost Classification (Accuracy 94.2%)',
      output: 'Disruption Probability: 82% (Threshold > 60% exceeded).'
    },
    {
      step: '03',
      name: 'ETA Delay Predictor',
      category: 'Trained Machine Learning (LightGBM)',
      description: 'Predicts exact calendar slip and arrival variance in days/hours based on historic vessel performance.',
      status: 'Active',
      model: 'LightGBM Regression Engine',
      output: 'Estimated Delay: +4.2 days slip for CSCL Globe Supermax.'
    },
    {
      step: '04',
      name: 'Port Congestion Agent',
      category: 'Trained Machine Learning (RandomForest)',
      description: 'Forecasts berth dwell times, container crane queues, and terminal saturation at destination harbors.',
      status: 'Active',
      model: 'RandomForest Regressor (31-Port Matrix)',
      output: 'Yokohama Port Dwell: 31 hours · Terminal capacity at 74%.'
    },
    {
      step: '05',
      name: 'Inventory Impact Agent',
      category: 'Trained Machine Learning Engine',
      description: 'Correlates container manifest with downstream factory inventories and forecasts buffer stockout risks.',
      status: 'Active',
      model: 'Demand-Supply Stockout Forecaster',
      output: 'SKU-005 (Pharmaceuticals) predicted stockout in 5.8 days at Rotterdam Gateway.'
    },
    {
      step: '06',
      name: 'Cost & Financial Exposure Engine',
      category: 'Financial Loss Engine',
      description: 'Calculates contractual SLA breach penalties, demurrage surcharges, and secondary reroute fuel burn.',
      status: 'Active',
      model: 'Demurrage Loss Formula Matrix',
      output: 'Total Financial Exposure: $42,000 USD risk ($18K fuel + $12K demurrage + $12K buffer).'
    },
    {
      step: '07',
      name: 'Route Optimization Agent',
      category: 'Mathematical Solver (Google OR-Tools)',
      description: 'Executes CP-SAT constraint optimization to generate multi-objective recovered nautical routes.',
      status: 'Ready',
      model: 'Google OR-Tools CP-SAT Solver',
      output: 'Scenario A: Speed Boost (+15% fuel) | Scenario B: South Reroute (-63% net cost, Recommended).'
    },
    {
      step: '08',
      name: 'Digital Twin Simulation Engine',
      category: 'Monte Carlo Stochastic Engine',
      description: 'Runs 500-sample probabilistic Monte Carlo simulations across wave, wind, and port dwell variables.',
      status: 'Simulating',
      model: '500-Sample Monte Carlo Digital Twin',
      output: '92% confidence of arriving within SLA window under Scenario B recovery.'
    },
    {
      step: '09',
      name: 'Supervisor / Orchestrator Agent',
      category: 'Autonomous Multi-Agent Orchestrator',
      description: 'Coordinates peer agents, verifies HITL authority thresholds, and dispatches automated notices.',
      status: 'Auto-Approved',
      model: 'Supervisor Multi-Agent LLM Orchestrator',
      output: 'Plan Auto-Approved: Scenario B execution started. Port Authority notified.'
    },
  ]

  const handleRunAgent = () => {
    setSimulating(true)
    setTimeout(() => setSimulating(false), 1200)
  }

  return (
    <div className="space-y-5 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold tracking-[.18em] text-[#087ef5] uppercase">DECISION INTELLIGENCE ARCHITECTURE</p>
          <h2 className="mt-1 text-2xl font-semibold tracking-[-.04em] text-[#1d1d1f]">9-Agent Multi-Agent Decision Engine</h2>
          <p className="text-xs text-[#6e6e73]">Trained ML models (XGBoost, LightGBM, RandomForest), OR-Tools CP-SAT solver, and Orchestrator</p>
        </div>

        <button 
          onClick={handleRunAgent}
          className="flex items-center gap-2 rounded-xl bg-[#087ef5] px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-[#076ecf] transition"
        >
          <Play className={`size-3.5 ${simulating ? 'animate-spin' : ''}`} /> Run End-to-End Pipeline
        </button>
      </div>

      {/* Agents Interactive Matrix */}
      <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
        
        {/* Agent Cards Grid */}
        <div className="grid gap-3 sm:grid-cols-2">
          {agents.map((agent, index) => {
            const isSelected = selectedAgent === index
            return (
              <div 
                key={agent.step}
                onClick={() => setSelectedAgent(index)}
                className={`cursor-pointer rounded-2xl border p-4 transition-all duration-200 ${
                  isSelected 
                    ? 'border-[#087ef5] bg-white shadow-md ring-2 ring-[#087ef5]/10' 
                    : 'border-[#e5e5e7] bg-[#fafaf9] hover:bg-white hover:border-[#d2d2d7]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#087ef5]">{agent.step}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[8px] font-semibold ${
                    agent.status === 'Critical Alert' ? 'bg-[#ffebe8] text-[#ff3b30]' : 'bg-[#e8f8ed] text-[#34c759]'
                  }`}>
                    {agent.status}
                  </span>
                </div>

                <h3 className="mt-2 text-xs font-semibold text-[#1d1d1f]">{agent.name}</h3>
                <p className="text-[10px] text-[#86868b] mt-0.5 line-clamp-1">{agent.category}</p>
              </div>
            )
          })}
        </div>

        {/* Selected Agent Inspector Drawer */}
        <div className="rounded-[28px] border border-[#d2d2d7] bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-[#e5e5e7] pb-3">
            <div>
              <p className="text-[10px] font-bold tracking-[.18em] text-[#087ef5] uppercase">AGENT INSPECTOR</p>
              <h3 className="mt-1 text-lg font-semibold text-[#1d1d1f]">{agents[selectedAgent].name}</h3>
            </div>
            <span className="font-mono text-xs font-bold text-[#86868b]">
              AGENT {agents[selectedAgent].step}
            </span>
          </div>

          <div className="mt-4 space-y-4 text-xs">
            <div>
              <span className="text-[9px] font-semibold text-[#86868b] uppercase">Architecture / Model:</span>
              <p className="font-medium text-[#1d1d1f] mt-0.5">{agents[selectedAgent].model}</p>
            </div>

            <div>
              <span className="text-[9px] font-semibold text-[#86868b] uppercase">Role Description:</span>
              <p className="text-[#6e6e73] leading-5 mt-0.5">{agents[selectedAgent].description}</p>
            </div>

            <div className="rounded-xl bg-[#1d1d1f] p-3 text-white font-mono text-[11px]">
              <div className="flex items-center gap-1.5 text-[#34c759] text-[9px] mb-1">
                <Terminal className="size-3" /> AGENT OUTPUT LOG
              </div>
              <p className="leading-5 text-[#e5e5e7]">{agents[selectedAgent].output}</p>
            </div>

            <button 
              onClick={() => alert(`⚡ Triggered standalone re-evaluation for ${agents[selectedAgent].name}`)}
              className="w-full flex items-center justify-center gap-2 rounded-xl border border-[#d2d2d7] bg-[#f5f5f7] py-2.5 text-xs font-semibold text-[#1d1d1f] hover:bg-slate-200 transition"
            >
              <Play className="size-3.5 text-[#087ef5]" /> Execute Agent Standalone
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
