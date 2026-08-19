export interface InventoryItem {
  sku: string
  productName: string
  category: string
  stock: number
  reorderPoint: number
  warehouse: string
  unitCost: number
  status: 'In Stock' | 'Low Stock' | 'Stockout'
}

export interface ShipmentItem {
  id: string
  trackingId: string
  vessel: string
  origin: string
  destination: string
  eta: string
  speed: string
  containers: number
  status: 'On Schedule' | 'At Risk' | 'Delayed'
  riskFactor: number
}

export interface SupplierItem {
  id: string
  name: string
  category: string
  rating: number
  onTimeDeliveryRate: number
  activeOrders: number
  location: string
  status: 'Active' | 'Under Review' | 'Flagged'
}

export interface UserAccessItem {
  id: string
  name: string
  email: string
  role: 'System Administrator' | 'Logistics Officer' | 'Port Manager' | 'Inventory Analyst'
  department: string
  hitlApprovalLimit: string
  status: 'Active' | 'Offline'
}

export interface AutomationRule {
  id: string
  title: string
  trigger: string
  action: string
  agent: string
  enabled: boolean
  lastRun: string
}

export interface IntegrationItem {
  id: string
  name: string
  type: string
  status: 'Connected' | 'Syncing' | 'Requires Attention'
  lastSync: string
  latency: string
}

export const initialInventory: InventoryItem[] = [
  { sku: 'SKU-001', productName: 'Automotive Engine ECU Module', category: 'Automotive', stock: 245, reorderPoint: 50, warehouse: 'Yokohama Marine Terminal', unitCost: 1420, status: 'In Stock' },
  { sku: 'SKU-002', productName: 'Lithium Iron Battery Pack 48V', category: 'Energy', stock: 89, reorderPoint: 100, warehouse: 'Mumbai JNPT Port Buffer', unitCost: 850, status: 'Low Stock' },
  { sku: 'SKU-003', productName: 'Solid State Drive 2TB PCIe Gen5', category: 'Electronics', stock: 1240, reorderPoint: 200, warehouse: 'Singapore Tuas Hub', unitCost: 110, status: 'In Stock' },
  { sku: 'SKU-004', productName: 'Marine Turbine Bearing Assembly', category: 'Machinery', stock: 14, reorderPoint: 25, warehouse: 'Antwerp Port Logistics Center', unitCost: 3400, status: 'Low Stock' },
  { sku: 'SKU-005', productName: 'Pharmaceutical Cold-Chain Vaccines', category: 'Pharma', stock: 0, reorderPoint: 80, warehouse: 'Rotterdam Gateway Depot', unitCost: 920, status: 'Stockout' },
  { sku: 'SKU-006', productName: 'Hydraulic Steering Pump', category: 'Automotive', stock: 412, reorderPoint: 80, warehouse: 'Mumbai JNPT Port Buffer', unitCost: 360, status: 'In Stock' },
]

export const initialShipments: ShipmentItem[] = [
  { id: 'SH-2048', trackingId: 'TRK-2026-001', vessel: 'MV Tokyo Express', origin: 'Jawaharlal Nehru Port (Mumbai, IN)', destination: 'Port of Yokohama (JP)', eta: 'Nov 22, 2026', speed: '18.2 kn', containers: 4200, status: 'On Schedule', riskFactor: 24 },
  { id: 'SH-2049', trackingId: 'TRK-2026-002', vessel: 'CSCL Globe Supermax', origin: 'Port of Yokohama (JP)', destination: 'Port of Antwerp (BE)', eta: 'Nov 26, 2026 (+4.2d)', speed: '14.1 kn', containers: 3800, status: 'At Risk', riskFactor: 82 },
  { id: 'SH-2050', trackingId: 'TRK-2026-003', vessel: 'Maersk Mc-Kinney', origin: 'Singapore Tuas Port (SG)', destination: 'Rotterdam Gateway (NL)', eta: 'Nov 28, 2026', speed: '19.5 kn', containers: 5100, status: 'On Schedule', riskFactor: 12 },
  { id: 'SH-2051', trackingId: 'TRK-2026-004', vessel: 'CMA CGM Jacques Saadé', origin: 'Port of Shanghai (CN)', destination: 'Los Angeles (US)', eta: 'Dec 02, 2026 (+2.1d)', speed: '12.8 kn', containers: 6200, status: 'Delayed', riskFactor: 68 },
]

export const initialSuppliers: SupplierItem[] = [
  { id: 'SUP-01', name: 'Global Electronics Industrial Ltd', category: 'Semiconductor & Electronics', rating: 4.9, onTimeDeliveryRate: 97.4, activeOrders: 18, location: 'Shenzhen / Tokyo', status: 'Active' },
  { id: 'SUP-02', name: 'Nippon Steel & Marine Logistics', category: 'Heavy Industrial', rating: 4.7, onTimeDeliveryRate: 94.2, activeOrders: 12, location: 'Yokohama, Japan', status: 'Active' },
  { id: 'SUP-03', name: 'Bharat Logistics & Transshipment', category: 'Maritime Freight', rating: 4.8, onTimeDeliveryRate: 98.1, activeOrders: 24, location: 'Mumbai, India', status: 'Active' },
  { id: 'SUP-04', name: 'Antwerp Port Handling B.V.', category: 'Terminal Services', rating: 4.2, onTimeDeliveryRate: 86.5, activeOrders: 7, location: 'Antwerp, Belgium', status: 'Under Review' },
]

export const initialUsers: UserAccessItem[] = [
  { id: 'USR-01', name: 'Robert Williams', email: 'robert.w@flowforge.internal', role: 'System Administrator', department: 'Enterprise Security & IT', hitlApprovalLimit: '$500,000 USD', status: 'Active' },
  { id: 'USR-02', name: 'Emily Johnson', email: 'emily.j@flowforge.internal', role: 'Logistics Officer', department: 'Maritime Operations (Asia-Pac)', hitlApprovalLimit: '$150,000 USD', status: 'Active' },
  { id: 'USR-03', name: 'Alexandre Mercier', email: 'alex.m@flowforge.internal', role: 'Port Manager', department: 'Harbor Control & Terminal', hitlApprovalLimit: '$250,000 USD', status: 'Active' },
  { id: 'USR-04', name: 'Sarah Chen', email: 'sarah.c@flowforge.internal', role: 'Inventory Analyst', department: 'Global Demand Planning', hitlApprovalLimit: '$50,000 USD', status: 'Active' },
]

export const initialAutomations: AutomationRule[] = [
  { id: 'AUT-01', title: 'Automated Storm Reroute Evaluation', trigger: 'Wave Height > 2.5m OR Wind > 45km/h', action: 'Trigger OR-Tools CP-SAT Solver for 3 Recovery Paths', agent: 'Route Optimization Agent', enabled: true, lastRun: '12 min ago' },
  { id: 'AUT-02', title: 'Critical Port Congestion Alert & Harbor Dispatch', trigger: 'Dwell Time > 24 Hours at Destination Port', action: 'Draft IMO Port Notice and Notify Harbor Master', agent: 'Port Congestion + Reporter Agent', enabled: true, lastRun: '45 min ago' },
  { id: 'AUT-03', title: 'Stockout Protective Hold Trigger', trigger: 'Predicted Hub Stockout < 7 Days', action: 'Reserve Container Priority & Auto-Authorize Expedited Berth', agent: 'Inventory Impact Agent', enabled: true, lastRun: '2 hours ago' },
  { id: 'AUT-04', title: 'Human-in-the-Loop Financial Breach Escalation', trigger: 'Demurrage / Fuel Exposure > $25,000 USD', action: 'Freeze Plan & Request One-Click Supervisor Sign-off', agent: 'Supervisor / Orchestrator Agent', enabled: true, lastRun: 'Yesterday' },
]

export const initialIntegrations: IntegrationItem[] = [
  { id: 'INT-01', name: 'AIS MarineTraffic Stream API', type: 'Satellite GPS Telemetry', status: 'Connected', lastSync: 'Live (sub-second)', latency: '42ms' },
  { id: 'INT-02', name: 'Open-Meteo Weather Radar Engine', type: 'Meteorological Forecast', status: 'Connected', lastSync: '2 min ago', latency: '88ms' },
  { id: 'INT-03', name: 'SAP S/4HANA Supply Chain ERP', type: 'Enterprise Resource Planning', status: 'Connected', lastSync: '5 min ago', latency: '120ms' },
  { id: 'INT-04', name: 'PostgreSQL Database (SQLAlchemy 2.0)', type: 'Primary Relational Schema', status: 'Connected', lastSync: 'Live', latency: '4ms' },
  { id: 'INT-05', name: 'Port Authority Harbor EDI Connector', type: 'Customs & Dwell Clearance', status: 'Syncing', lastSync: '14 min ago', latency: '310ms' },
]
