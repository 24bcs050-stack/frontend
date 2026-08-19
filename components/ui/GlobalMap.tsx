'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

export interface ShipmentPin {
  id: string;
  lat: number;
  lng: number;
  status: 'on-time' | 'delayed' | 'critical';
  shipmentId: string;
  origin: string;
  destination: string;
  eta: string;
}

interface GlobalMapProps {
  shipments?: ShipmentPin[];
  onPinClick?: (shipment: ShipmentPin) => void;
}

const defaultShipments: ShipmentPin[] = [
  {
    id: 'SH001',
    lat: 18.95,
    lng: 72.95,
    status: 'on-time',
    shipmentId: 'SH-2048',
    origin: 'Mumbai (JNPT)',
    destination: 'Yokohama, JP',
    eta: 'Nov 22, 2026'
  },
  {
    id: 'SH002',
    lat: 35.6762,
    lng: 139.6503,
    status: 'critical',
    shipmentId: 'SH-2049',
    origin: 'Yokohama, JP',
    destination: 'Antwerp, BE',
    eta: 'Nov 26, 2026'
  },
  {
    id: 'SH003',
    lat: 1.29,
    lng: 103.85,
    status: 'on-time',
    shipmentId: 'SH-2050',
    origin: 'Singapore Hub',
    destination: 'Rotterdam, NL',
    eta: 'Nov 28, 2026'
  },
  {
    id: 'SH004',
    lat: 40.7128,
    lng: -74.0060,
    status: 'delayed',
    shipmentId: 'SH-2051',
    origin: 'New York, US',
    destination: 'London, UK',
    eta: 'Nov 24, 2026'
  }
];

const GlobalMap = ({ shipments = defaultShipments, onPinClick }: GlobalMapProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedPin, setSelectedPin] = useState<ShipmentPin | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="w-full h-96 bg-muted rounded-xl flex items-center justify-center">
        <div className="text-center">
          <Icon name="MapIcon" size={48} className="text-muted-foreground mx-auto mb-2" />
          <p className="text-muted-foreground">Loading global map...</p>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-time': return 'bg-emerald-500';
      case 'delayed': return 'bg-amber-500';
      case 'critical': return 'bg-rose-500';
      default: return 'bg-slate-400';
    }
  };

  const handlePinClick = (shipment: ShipmentPin) => {
    setSelectedPin(shipment);
    onPinClick?.(shipment);
  };

  return (
    <div className="relative w-full h-[460px] bg-card rounded-2xl overflow-hidden border border-border shadow-sm">
      {/* Map Container */}
      <div className="w-full h-full relative">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="Global Supply Chain Map"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=20.5937,78.9629&z=3&output=embed"
          className="w-full h-full border-0"
        />
        
        {/* Overlay Pins */}
        <div className="absolute inset-0 pointer-events-none">
          {shipments.map((shipment, index) => (
            <div
              key={shipment.id}
              className="absolute pointer-events-auto cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
              style={{
                left: `${22 + (index % 6) * 14}%`,
                top: `${28 + Math.floor(index / 3) * 22}%`
              }}
              onClick={() => handlePinClick(shipment)}
            >
              <div className={`w-3.5 h-3.5 rounded-full ${getStatusColor(shipment.status)} border-2 border-white shadow-md animate-pulse group-hover:scale-125 transition-transform`} />
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="absolute top-4 right-4 rounded-xl border border-white/80 bg-white/90 p-3 shadow-lg backdrop-blur-md">
        <p className="text-[10px] font-semibold text-[#86868b] uppercase tracking-wider mb-2">Status</p>
        <div className="space-y-1.5">
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
            <span className="text-xs font-medium text-foreground">On Time</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 bg-amber-500 rounded-full" />
            <span className="text-xs font-medium text-foreground">Delayed</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 bg-rose-500 rounded-full" />
            <span className="text-xs font-medium text-foreground">Critical</span>
          </div>
        </div>
      </div>

      {/* Tooltip */}
      {selectedPin && (
        <div className="absolute top-4 left-4 rounded-2xl border border-white/80 bg-white/92 p-4 max-w-xs shadow-xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-[#e5e5e7]">
            <h4 className="font-semibold text-xs text-foreground">Shipment {selectedPin.shipmentId}</h4>
            <button
              onClick={() => setSelectedPin(null)}
              className="text-muted-foreground hover:text-foreground ml-3 p-1 rounded-md hover:bg-slate-100 transition"
            >
              <Icon name="XMarkIcon" size={14} />
            </button>
          </div>
          <div className="space-y-1.5 text-xs text-muted-foreground">
            <p className="flex justify-between"><span className="font-medium text-foreground">From:</span> {selectedPin.origin}</p>
            <p className="flex justify-between"><span className="font-medium text-foreground">To:</span> {selectedPin.destination}</p>
            <p className="flex justify-between"><span className="font-medium text-foreground">ETA:</span> {selectedPin.eta}</p>
            <div className="flex items-center space-x-2 mt-2 pt-1 border-t border-slate-100">
              <div className={`w-2 h-2 rounded-full ${getStatusColor(selectedPin.status)}`} />
              <span className="capitalize font-medium text-foreground">{selectedPin.status}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobalMap;
