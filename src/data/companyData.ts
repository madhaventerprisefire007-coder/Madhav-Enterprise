import { Product, Industry, Testimonial, FAQItem, ProductCategory } from '../types';

export const COMPANY_INFO = {
  name: 'Madhav Enterprise',
  tagline: 'Reliable Water Level Controller & Butterfly Valve Supplier',
  subheading: 'Trusted Manufacturer & Supplier in Vadodara, Gujarat',
  location: 'Vadodara, Gujarat, India',
  fullAddress: 'C-10, Gaurav Park, Diwalipura, Vasna Road, Vadodara- 390007, Gujarat, India',
  phonePrimary: '+91 70417 72780',
  phoneSecondary: '+91 99240 40633',
  whatsappNumber: '917041772780',
  emailSales: 'madhaventerpise02021@gmail.com',
  emailInfo: 'madhaventerpise02021@gmail.com',
  workingHours: 'Mon - Sat: 9:00 AM - 7:00 PM',
  establishedYear: 2008,
  certifications: ['CE Compliant', 'MSME Registered', 'Make in India Certified'],
  googleMapsUrl: 'https://www.google.com/maps/place/Madhav+Electricals/@22.3020009,73.0630496,13z/data=!4m10!1m2!2m1!1sC-10+Gaurav+Park+Diwalipura+Vasna+Road+Vadodara+390007!3m6!1s0x395fc94a24253ffb:0x3800abce5d7f2dad!8m2!3d22.3020009!4d73.1392673!15sCjZDLTEwIEdhdXJhdiBQYXJrIERpd2FsaXB1cmEgVmFzbmEgUm9hZCBWYWRvZGFyYSAzOTAwMDdaOCI2YyAxMCBnYXVyYXYgcGFyayBkaXdhbGlwdXJhIHZhc25hIHJvYWQgdmFkb2RhcmEgMzkwMDA3kgEUZWxlY3RyaWNfbW90b3Jfc3RvcmXgAQA!16s%2Fg%2F11ntl6dg7p?entry=ttu&g_ep=EgoyMDI2MDcyOC4wIKXMDSoASAFQAw%3D%3D',
  mapEmbedUrl: 'https://maps.google.com/maps?q=22.3020009,73.1392673&z=16&output=embed',
};

export interface ProductDivision {
  id: string;
  category: ProductCategory;
  displayName: string;
  shortTitle: string;
  description: string;
  iconName: string;
  image: string;
}

export const PRODUCT_DIVISIONS: ProductDivision[] = [
  {
    id: 'wlc',
    category: 'Water Level Controller',
    displayName: 'Water Level Controller',
    shortTitle: 'Water Level Controller',
    description: 'Automated microprocessor digital overhead tank & sump water level controllers with dry-run protection.',
    iconName: 'Cpu',
    image: 'https://lh3.googleusercontent.com/d/1VNt-UEeGupP1i_ghqByTydYKuWhIR4YI',
  },
  {
    id: 'valves',
    category: 'Butterfly Valve',
    displayName: 'Butterfly Valve',
    shortTitle: 'Butterfly Valve',
    description: 'Heavy duty SS 316 ball valves, wafer butterfly valves, check valves, and flanged valves for chemical & water lines.',
    iconName: 'CircleDot',
    image: 'https://lh3.googleusercontent.com/d/1XaAIg7Zjs4R1u8HJ4IDyHEnqSSUOYOB0',
  },
  {
    id: 'motor-pumps',
    category: 'Motor Pump',
    displayName: 'Motor Pump',
    shortTitle: 'Motor Pump',
    description: 'High flow centrifugal monoblock motor pumps and heavy duty industrial water transfer pump sets.',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pipes-fittings',
    category: 'Pipes & Fittings',
    displayName: 'Pipes & Fittings',
    shortTitle: 'Pipes & Fittings',
    description: 'SCH 40 / SCH 80 CPVC, UPVC pressure pipes, SS forged flanges and heavy industrial pipe fittings.',
    iconName: 'Layers',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pressure-pumps',
    category: 'Pressure Pump',
    displayName: 'Pressure Pump',
    shortTitle: 'Pressure Pump',
    description: 'Automatic hydro-pneumatic multi-stage booster pressure pumps for constant pressure in tall towers.',
    iconName: 'Gauge',
    image: 'https://lh3.googleusercontent.com/d/1oNlm_PgkpAR_FLkHXVkL_l_SDDSTSIpn',
  },
  {
    id: 'submersible-pumps',
    category: 'Submersible Pump',
    displayName: 'Submersible Pump',
    shortTitle: 'Submersible Pump',
    description: 'Deep borewell stainless steel submersibles and heavy duty non-clog sewage dewatering pumps.',
    iconName: 'Droplets',
    image: 'https://lh3.googleusercontent.com/d/1s3LE7sLg3nABRXZWKKiXHDEjqfeEo5uv',
  },
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'wlc-auto-pro',
    name: 'Panel with Sensor',
    category: 'Water Level Controller',
    subtitle: 'Microprocessor Based Overhead & Sump Dual Tank Controller',
    description: 'Advanced digital water level controller with micro-controller logic designed to automatically control single/three phase pumps. Features dry-run protection, high/low voltage cutoff, and LED digital indicator.',
    image: 'https://lh3.googleusercontent.com/d/1VNt-UEeGupP1i_ghqByTydYKuWhIR4YI',
    galleryImages: [
      'https://lh3.googleusercontent.com/d/1VNt-UEeGupP1i_ghqByTydYKuWhIR4YI'
    ],
    videoEmbedUrl: 'https://drive.google.com/file/d/1ucp8xmzAyysXDPACRQMZV70r6yr4TSrC/preview',
    wiringDiagramUrl: 'https://lh3.googleusercontent.com/d/14T77b0NTyy2I8vvH8jNNerXrdG9Pj0TO',
    featured: true,
    modelNumber: 'ME-WLC-9000D',
    material: 'Flame Retardant ABS Body & SS Sensors',
    rating: '4.9/5',
    keyFeatures: [
      'Dual tank management (Overhead Tank & Sump Tank)',
      'Built-in dry-run protection prevents pump burnout',
      'High/Low line voltage surge suppressor',
      'Maintenance-free Magnetic & SS Float Sensors',
      'Manual override toggle switch for emergency operation'
    ],
    benefits: [
      'Eliminates 100% of water tank overflow and wastage',
      'Saves up to 18% monthly electricity costs by optimizing pump run cycles',
      'Extends motor pump life by preventing dry running',
      '24/7 automated unattended water level monitoring'
    ],
    specs: [
      { label: 'Operating Voltage', value: '180V - 270V AC, 50Hz' },
      { label: 'Compatible Motor', value: '0.5 HP to 15 HP (1-Phase & 3-Phase)' },
      { label: 'Sensor Type', value: 'Magnetic Reed / Stainless Steel Electrodes' },
      { label: 'Sensor Wire Distance', value: 'Up to 500 Meters without signal drop' },
      { label: 'Enclosure Rating', value: 'IP-65 Dust & Moisture Resistant' }
    ],
    applications: ['Industrial Chemical Plants', 'Commercial High-Rises', 'Housing Societies', 'Textile Processing Units', 'Municipal Water Pumping'],
    industries: ['Chemical & Pharmaceutical', 'Commercial Real Estate & Towers', 'Textile & Dyeing Mills', 'Water & Effluent Treatment (ETP/STP)']
  },
  {
    id: 'wlc-panel-3ph',
    name: '3-Phase Industrial Pump Control Panel',
    category: 'Water Level Controller',
    subtitle: 'Automated Starter Panel with Water Level Sensing & Phase Preventer',
    description: 'Heavy-duty industrial control panel engineered for high-capacity 3-phase submersible and centrifugal pumps. Includes star-delta starter integration and automatic water level logic.',
    image: 'https://lh3.googleusercontent.com/d/1VNt-UEeGupP1i_ghqByTydYKuWhIR4YI',
    galleryImages: [
      'https://lh3.googleusercontent.com/d/1VNt-UEeGupP1i_ghqByTydYKuWhIR4YI'
    ],
    wiringDiagramUrl: 'https://lh3.googleusercontent.com/d/14T77b0NTyy2I8vvH8jNNerXrdG9Pj0TO',
    featured: false,
    modelNumber: 'ME-CP3P-15HP',
    material: 'CRCA Powder Coated Sheet Metal Enclosure',
    rating: '4.8/5',
    keyFeatures: [
      'Integrated Single Phase Preventer (SPP)',
      'Overload relay protection with current display',
      'Dual tank water level automation interface',
      'LCH digital ammeter & voltmeter meters'
    ],
    benefits: [
      'Prevents motor coil burnout during phase loss or imbalance',
      'Enables seamless connection with remote automation PLC systems',
      'Dust-proof heavy industrial enclosure suitable for harsh GIDC conditions',
      'Instant trip notification and current load monitoring'
    ],
    specs: [
      { label: 'Supply Voltage', value: '415V AC ± 10%, 3 Phase' },
      { label: 'Motor Range', value: '3.0 HP to 30.0 HP' },
      { label: 'Starter Type', value: 'Direct On-Line (DOL) / Star-Delta' },
      { label: 'Protection Grade', value: 'IP-55 Industrial Grade' }
    ],
    applications: ['GIDC Industrial Plants', 'Agriculture & Irrigation', 'Dewatering Sump Systems', 'Cooling Tower Water Panels'],
    industries: ['Chemical & Pharmaceutical', 'Agriculture & Farm Irrigation', 'Textile & Dyeing Mills']
  },
  {
    id: 'valv-ball-ss',
    name: 'Heavy Duty Stainless Steel Ball Valve',
    category: 'Butterfly Valve',
    subtitle: '3-Piece Full Port SS 316 / SS 304 Screwed & Flanged Ball Valve',
    description: 'High pressure precision engineered SS 316 ball valve designed for harsh chemical, steam, and water applications. Provides leak-proof quarter-turn shutoff.',
    image: 'https://lh3.googleusercontent.com/d/1XaAIg7Zjs4R1u8HJ4IDyHEnqSSUOYOB0',
    galleryImages: [
      'https://lh3.googleusercontent.com/d/1XaAIg7Zjs4R1u8HJ4IDyHEnqSSUOYOB0',
      'https://lh3.googleusercontent.com/d/1_O3r0CGBcH9cvjJl8VX667vX9TZnp3tw',
      'https://lh3.googleusercontent.com/d/1VlbcOfozFvwJZ6DjDhxwyrGi6Kzn5CSr',
      'https://lh3.googleusercontent.com/d/17vLFbMPM8c4W1rhS0xUDhuYPQ4_ol0bQ'
    ],
    featured: true,
    modelNumber: 'ME-BV-316FP',
    material: 'Stainless Steel SS 316 / CF8M',
    rating: '4.9/5',
    keyFeatures: [
      'Blowout-proof stem design for maximum safety',
      'PTFE / R-PTFE seat rings for smooth operation',
      'Tested up to 1000 PSI water, oil, and gas pressure',
      'ISO 5211 mounting pad for easy actuator integration'
    ],
    benefits: [
      'Extreme corrosion resistance against aggressive chemical media',
      'Low operating torque ensures extended actuator life',
      'Zero bubble-tight sealing guarantees zero leakage',
      '3-Piece design allows easy online maintenance without removing body from pipeline'
    ],
    specs: [
      { label: 'Size Range', value: '1/2" to 6" (DN15 to DN150)' },
      { label: 'Pressure Rating', value: 'PN16 / PN25 / PN40 / Class 150/300' },
      { label: 'End Connections', value: 'BSP Screwed / NPT / ANSI Flanged' },
      { label: 'Temperature Range', value: '-20°C to +220°C' }
    ],
    applications: ['Pharma & Chemical Plants', 'Steam Distribution Pipelines', 'Water Purification Plants', 'Petrochemical Refineries'],
    industries: ['Chemical & Pharmaceutical', 'Food & Dairy Processing', 'Water & Effluent Treatment (ETP/STP)']
  },
  {
    id: 'valv-butterfly-ci',
    name: 'Cast Iron Wafer Type Butterfly Valve',
    category: 'Butterfly Valve',
    subtitle: 'EPDM / Nitrile Lined Wafer Butterfly Valve with Lever / Gear',
    description: 'Cost-effective high-flow butterfly valve featuring a ductile iron disc and replaceable EPDM seat. Ideal for large water supply lines and HVAC systems.',
    image: 'https://lh3.googleusercontent.com/d/1_O3r0CGBcH9cvjJl8VX667vX9TZnp3tw',
    galleryImages: [
      'https://lh3.googleusercontent.com/d/1_O3r0CGBcH9cvjJl8VX667vX9TZnp3tw',
      'https://lh3.googleusercontent.com/d/1VlbcOfozFvwJZ6DjDhxwyrGi6Kzn5CSr',
      'https://lh3.googleusercontent.com/d/17vLFbMPM8c4W1rhS0xUDhuYPQ4_ol0bQ',
      'https://lh3.googleusercontent.com/d/1XaAIg7Zjs4R1u8HJ4IDyHEnqSSUOYOB0'
    ],
    featured: true,
    modelNumber: 'ME-BFV-WAF',
    material: 'CI / DI Body with Ductile Iron or SS Disc',
    rating: '4.8/5',
    keyFeatures: [
      'Wafer design fits compactly between PN10/16 flanges',
      'Bi-directional zero bubble-tight shutoff',
      'Low torque operation reduces actuator sizing requirement',
      'Epoxy coated body for anti-corrosion longevity'
    ],
    benefits: [
      'Ultra compact face-to-face dimensions save piping space',
      'Low cost and high flow capability for large diameter lines',
      'Replaceable elastomeric liner acts as gasket during installation',
      'Suitable for both throttling flow control and tight isolation'
    ],
    specs: [
      { label: 'Size Range', value: '2" to 24" (DN50 to DN600)' },
      { label: 'Pressure Class', value: 'PN10 / PN16' },
      { label: 'Operation', value: 'Hand Lever / Worm Gear Box / Pneumatic Actuator' },
      { label: 'Seat Material', value: 'EPDM / Nitrile / Viton / PTFE' }
    ],
    applications: ['Effluent Treatment Plants (ETP)', 'HVAC Cooling Water', 'Firefighting Water Lines', 'Sugar & Paper Industries'],
    industries: ['Water & Effluent Treatment (ETP/STP)', 'Textile & Dyeing Mills', 'Commercial Real Estate & Towers']
  },
  {
    id: 'pump-centrifugal-mono',
    name: 'High Flow Industrial Monoblock Motor Pump',
    category: 'Motor Pump',
    subtitle: 'Heavy Duty Cast Iron Centrifugal Monoblock Pump',
    description: 'Designed for high volumetric water transfer in manufacturing plants, farms, and boiler feed systems. Features dynamically balanced bronze impeller.',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80'
    ],
    featured: true,
    modelNumber: 'ME-CPM-750',
    material: 'Cast Iron Casing & Bronze Impeller',
    rating: '4.8/5',
    keyFeatures: [
      'High efficiency TEFC 100% copper motor',
      'Mechanical seal preventing shaft leakage',
      'Wide voltage operating band (180V-240V for 1-phase / 350V-440V for 3-phase)',
      'Low noise and minimal vibration during continuous run'
    ],
    benefits: [
      'Delivers steady continuous water discharge with minimal maintenance',
      'Heavy duty cast iron casing handles hydraulic shocks',
      'Dynamically balanced rotor ensures smooth quiet operation',
      'IE2/IE3 high efficiency energy saving copper motor'
    ],
    specs: [
      { label: 'Power Rating', value: '1 HP to 40 HP' },
      { label: 'Discharge Capacity', value: 'Up to 2400 Liters / Minute' },
      { label: 'Speed', value: '2880 RPM (2-Pole)' }
    ],
    applications: ['Boiler Feed Systems', 'Industrial Water Circulation', 'Dairy Processing Units', 'Commercial Washing Stations'],
    industries: ['Textile & Dyeing Mills', 'Food & Dairy Processing', 'Agriculture & Farm Irrigation']
  },
  {
    id: 'pump-pressure-booster',
    name: 'Automatic Hydro-Pneumatic Pressure Booster Pump',
    category: 'Pressure Pump',
    subtitle: 'Multi-stage SS Pressure Booster System with Pressure Switch & Tank',
    description: 'Maintains constant water pressure across multiple outlets in commercial buildings, hotels, and luxury residences. Automatically turns on/off based on tap usage.',
    image: 'https://lh3.googleusercontent.com/d/1oNlm_PgkpAR_FLkHXVkL_l_SDDSTSIpn',
    galleryImages: [
      'https://lh3.googleusercontent.com/d/1oNlm_PgkpAR_FLkHXVkL_l_SDDSTSIpn'
    ],
    featured: true,
    modelNumber: 'ME-HPN-PRESS',
    material: 'Stainless Steel SS 304 Impellers & Pressure Tank',
    rating: '4.9/5',
    keyFeatures: [
      'Multi-stage silent pump design with zero pulsation',
      'Food-grade EPDM pressure diaphragm tank',
      'Preset pressure switch & brass pressure gauge included',
      'Protects against dry running & high temperature'
    ],
    benefits: [
      'Guarantees uniform water pressure across all upper and lower floor taps',
      'Silent operation suitable for indoor equipment rooms',
      'Reduces frequent pump starts, extending motor switchgear life',
      'Plug-and-play complete skid packaged unit'
    ],
    specs: [
      { label: 'Power Capacity', value: '0.75 HP to 5.0 HP' },
      { label: 'Pressure Range', value: '1.5 Bar to 7.0 Bar' },
      { label: 'Tank Capacity', value: '24L / 50L / 100L Expansion Vessel' },
      { label: 'Max Outlets', value: 'Up to 12 Bathrooms simultaneously' }
    ],
    applications: ['Luxury Villas & Resorts', 'Commercial Malls & Hotels', 'Car Wash Systems', 'Pharma Cleanroom Washing'],
    industries: ['Commercial Real Estate & Towers', 'Chemical & Pharmaceutical', 'Food & Dairy Processing']
  },
  {
    id: 'pump-submersible-bore',
    name: 'V6 / V8 Stainless Steel Borewell Submersible Pump',
    category: 'Submersible Pump',
    subtitle: 'Water Filled / Oil Filled Heavy Duty Borewell Submersible Pump Set',
    description: 'Engineered for deep borewell extraction in agriculture and GIDC industrial estates. Features Noryl / SS impellers for high sand resistance and long life.',
    image: 'https://lh3.googleusercontent.com/d/1s3LE7sLg3nABRXZWKKiXHDEjqfeEo5uv',
    galleryImages: [
      'https://lh3.googleusercontent.com/d/1s3LE7sLg3nABRXZWKKiXHDEjqfeEo5uv'
    ],
    featured: true,
    modelNumber: 'ME-SUB-V6',
    material: 'SS 304 Outer Shell & Bronze Bushes',
    rating: '4.9/5',
    keyFeatures: [
      'High efficiency electrical design reduces power consumption by 15%',
      'Anti-friction thrust bearing for heavy axial load',
      'Dynamically balanced rotor with anti-corrosion coating',
      'Suitable for 100mm (4"), 150mm (6"), and 200mm (8") borewells'
    ],
    benefits: [
      'Pumps water reliably from deep water tables down to 350 meters',
      'Sand resistant impeller stage design resists abrasion',
      '100% Stainless steel outer jacket prevents well water rusting',
      'Low thermal rise winding allows continuous 24-hour operation'
    ],
    specs: [
      { label: 'Power Rating', value: '3.0 HP to 35.0 HP' },
      { label: 'Head Range', value: '20 Meters to 350 Meters' },
      { label: 'Discharge Flow', value: 'Up to 1800 LPM' },
      { label: 'Outlet Diameter', value: '50mm to 100mm (2" to 4")' }
    ],
    applications: ['Borewell Groundwater Pumping', 'GIDC Factory Bulk Water Supply', 'Agricultural Irrigation', 'Municipal Water Schemes'],
    industries: ['Agriculture & Farm Irrigation', 'Chemical & Pharmaceutical', 'Water & Effluent Treatment (ETP/STP)']
  },
  {
    id: 'pump-submersible-sewage',
    name: 'Industrial Dewatering & Sewage Submersible Pump',
    category: 'Submersible Pump',
    subtitle: 'Cutter / Non-Clog Impeller Submersible Pump for Slurry & Wastewater',
    description: 'Heavy duty cast iron submersible pump for handling dirty water, industrial sludge, sewage, and effluent with solids up to 50mm diameter.',
    image: 'https://lh3.googleusercontent.com/d/1s3LE7sLg3nABRXZWKKiXHDEjqfeEo5uv',
    galleryImages: [
      'https://lh3.googleusercontent.com/d/1s3LE7sLg3nABRXZWKKiXHDEjqfeEo5uv'
    ],
    featured: false,
    modelNumber: 'ME-SEW-75',
    material: 'Cast Iron Heavy Frame & Alloy Steel Shaft',
    rating: '4.7/5',
    keyFeatures: [
      'Non-clogging open channel impeller design',
      'Double mechanical seal with oil chamber',
      'Includes auto float switch for level control',
      'Heavy duty lifting handle and cast iron base'
    ],
    benefits: [
      'Pumps muddy, fibrous slurry without choking or clogging',
      'Submersible rating allows complete under-water operation in deep pits',
      'Substantially reduces manual pit cleaning downtime',
      'Dual seal technology protects motor from slurry ingress'
    ],
    specs: [
      { label: 'Power Rating', value: '1.0 HP to 10.0 HP' },
      { label: 'Solid Handling Size', value: 'Up to 50mm particle diameter' },
      { label: 'Submersion Depth', value: 'Up to 15 Meters' }
    ],
    applications: ['Effluent Treatment Plants (ETP/STP)', 'Basement Dewatering', 'Construction Site Pit Pumping', 'Chemical Slurry Transfer'],
    industries: ['Water & Effluent Treatment (ETP/STP)', 'Chemical & Pharmaceutical', 'Textile & Dyeing Mills']
  },
  {
    id: 'pipes-cpvc-industrial',
    name: 'Industrial Heavy Duty CPVC & UPVC Pipes',
    category: 'Pipes & Fittings',
    subtitle: 'SDR 11 / SCH 40 / SCH 80 High Pressure Chemical Pipes',
    description: 'Corrosion resistant CPVC and UPVC pipes manufactured according to IS 15778 / ASTM F441 standards for transporting hot & cold water, acids, and chemicals.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80'
    ],
    featured: true,
    modelNumber: 'ME-PIPE-CPVC-S80',
    material: 'Chlorinated Polyvinyl Chloride (CPVC)',
    rating: '4.9/5',
    keyFeatures: [
      'Handles fluids up to 93°C (200°F)',
      '100% chemical corrosion resistant & scale free',
      'Smooth inner surface minimizes frictional pressure drop',
      'Fire resistant with low flame spread index'
    ],
    benefits: [
      'Zero corrosion or rusting compared to traditional metal pipes',
      'Lightweight and quick solvent weld jointing reduces installation labor',
      'Resists mineral scaling and bio-film buildup inside pipe walls',
      'Excellent thermal insulation reduces heat loss in hot water lines'
    ],
    specs: [
      { label: 'Size Diameter', value: '1/2" to 12" (15mm to 300mm)' },
      { label: 'Pressure Class', value: 'SCH 40 / SCH 80 / SDR 11 / SDR 13.5' },
      { label: 'Standard Length', value: '3 Meters / 5 Meters per length' },
      { label: 'Compliant Standards', value: 'ASTM D1785 / IS 4985 / ASTM F441' }
    ],
    applications: ['Chemical Processing Lines', 'Hot Water Boiler Feed Lines', 'Plating & Anodizing Plants', 'Commercial Plumbing'],
    industries: ['Chemical & Pharmaceutical', 'Commercial Real Estate & Towers', 'Food & Dairy Processing']
  },
  {
    id: 'fittings-industrial-flanges',
    name: 'Stainless Steel & Forged Steel Flanges & Fittings',
    category: 'Pipes & Fittings',
    subtitle: 'ANSI B16.5 Weld Neck, Slip-On, Blind & Socket Weld Flanges',
    description: 'Precision machined heavy industrial pipe fittings, elbows, tees, reducers, and flanges in SS 304, SS 316, and Carbon Steel for high pressure pipelines.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80'
    ],
    featured: false,
    modelNumber: 'ME-FIT-FLG-150',
    material: 'Forged SS 304 / SS 316 / A105 Carbon Steel',
    rating: '4.8/5',
    keyFeatures: [
      'CNC precision machined sealing face',
      'Hydrostatically pressure batch tested',
      'Available in Raised Face (RF) and Flat Face (FF)',
      'Accompanied by Material Test Certificates (TC)'
    ],
    benefits: [
      'Precise dimensions guarantee perfect alignment with butterfly valves',
      'Forged steel grain structure provides high burst strength',
      '100% material traceability with test certificates for auditor compliance',
      'Resists severe pressure surges and thermal expansion forces'
    ],
    specs: [
      { label: 'Size Range', value: '1/2" to 24" NB' },
      { label: 'Pressure Rating', value: '150#, 300#, 600#, PN10, PN16, PN40' },
      { label: 'Manufacturing Standard', value: 'ANSI B16.5 / BS 10 Table D/E/F / DIN' }
    ],
    applications: ['Process Piping Lines', 'Petroleum & Gas Mains', 'Industrial Water Distribution', 'Factory Equipment Connections'],
    industries: ['Chemical & Pharmaceutical', 'Water & Effluent Treatment (ETP/STP)', 'Textile & Dyeing Mills']
  }
];

export const INDUSTRIES_SERVED: Industry[] = [
  {
    id: 'chemical-pharma',
    name: 'Chemical & Pharmaceutical',
    description: 'Corrosion resistant SS 316 valves, automatic fluid controllers, and SCH 80 CPVC piping for acid and solvent transport in Vadodara, Nandesari, and Ankleshwar hubs.',
    iconName: 'FlaskConical',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    popularProducts: ['SS 316 Ball Valve', 'CPVC Industrial Pipes', 'Level Controllers']
  },
  {
    id: 'textile-processing',
    name: 'Textile & Dyeing Mills',
    description: 'High-volume centrifugal motor pumps and wafer butterfly valves designed for continuous water treatment, wash process circulation, and boiler feed lines.',
    iconName: 'Shirt',
    image: 'https://images.unsplash.com/photo-1606744888344-493238951221?auto=format&fit=crop&w=800&q=80',
    popularProducts: ['Centrifugal Monoblock Pump', 'Cast Iron Butterfly Valve', 'Water Level Automation']
  },
  {
    id: 'water-treatment',
    name: 'Water & Effluent Treatment (ETP/STP)',
    description: 'Submersible sewage pumps, automatic level switches, and heavy duty valves for municipal water treatment plants and industrial effluent recycling.',
    iconName: 'Droplets',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    popularProducts: ['Submersible Sewage Pump', 'Wafer Butterfly Valve', 'Water Level Controllers']
  },
  {
    id: 'construction-realty',
    name: 'Commercial Real Estate & Towers',
    description: 'Hydro-pneumatic booster pumps for multi-story pressure balancing and automatic dual tank controllers eliminating overflow in residential societies.',
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    popularProducts: ['Hydro-Pneumatic Booster Pump', 'Panel with Sensor', 'CPVC Fittings']
  },
  {
    id: 'agriculture-irrigation',
    name: 'Agriculture & Farm Irrigation',
    description: 'High depth V6/V8 borewell submersible pumps and HDPE pressure pipes built to supply deep groundwater across agricultural belts of Gujarat.',
    iconName: 'Sprout',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    popularProducts: ['V6 Borewell Submersible Pump', '3-Phase Control Panel', 'HDPE Pipes']
  },
  {
    id: 'food-beverage',
    name: 'Food & Dairy Processing',
    description: 'Sanitary grade stainless steel pumps, valves, and level indicators compliant with food processing hygienic standards for milk plants and bottling units.',
    iconName: 'Utensils',
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80',
    popularProducts: ['Sanitary SS Valves', 'Multi-stage Pressure Pump', 'Digital Controllers']
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rajesh Patel',
    role: 'Plant Maintenance Head',
    company: 'Gujarat Chemicals & Resins',
    location: 'Vadodara Industrial Zone, Gujarat',
    comment: 'We installed 12 units of Madhav Enterprise Automatic Water Level Controllers across our chemical batching tanks. The dry-run protection has saved our pumps from burning out multiple times. Fantastic product quality and prompt local service!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-2',
    name: 'Vikramsinh Solanki',
    role: 'Chief Engineer',
    company: 'Apex Textile Processors',
    location: 'Halol Industrial Zone, Gujarat',
    comment: 'Madhav Enterprise supplied SS 316 ball valves and heavy centrifugal pumps for our modern dyeing unit expansion. The valve seating quality and pressure retention pass strict hydro tests easily. Highly recommended supplier in Vadodara!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-3',
    name: 'Mehul Shah',
    role: 'Project Director',
    company: 'Skyline Commercial Infrastructure',
    location: 'Alkapuri, Vadodara',
    comment: 'For our 18-floor luxury commercial complex, Madhav Enterprise designed and delivered a multi-stage Hydro-Pneumatic Pressure Booster system. Constant pressure across all rest rooms and zero noise. Excellent engineering guidance!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How does an Automatic Water Level Controller save electricity and pump life?',
    answer: 'An Automatic Water Level Controller monitors both the Underground Sump and Overhead Tank using magnetic float sensors. When the overhead tank drops below the set lower limit AND water is available in the sump, it switches the pump ON automatically. When the overhead tank fills up or sump water drops, it switches the pump OFF immediately, preventing overflow, dry-running, and wasted energy.',
    category: 'Controllers'
  },
  {
    id: 'faq-2',
    question: 'Where is Madhav Enterprise located in Vadodara?',
    answer: 'Our main office and unit are located at C-10, Gaurav Park, Diwalipura, Vasna Road, Vadodara- 390007, Gujarat. Customers and clients are welcome to visit our facility for product demonstrations and consultations.',
    category: 'General'
  },
  {
    id: 'faq-3',
    question: 'What materials are used in Madhav Enterprise butterfly valves?',
    answer: 'We manufacture and supply valves in various grades including Stainless Steel SS 316 / CF8M, SS 304, Cast Iron (CI), Ductile Iron (DI), WCB Carbon Steel, and PVC/CPVC. All valves undergo hydrostatic pressure testing and seating integrity checks before dispatch.',
    category: 'Valves'
  },
  {
    id: 'faq-4',
    question: 'Do you provide custom product specifications for large GIDC projects?',
    answer: 'Yes! We specialize in tailored industrial solutions including custom starter panels for 30+ HP pumps, motorized valve actuators, high-pressure piping manifolds, and specific flange drilling dimensions (ANSI, DIN, BS standards).',
    category: 'General'
  },
  {
    id: 'faq-5',
    question: 'What is the warranty provided on pumps and controllers?',
    answer: 'All Madhav Enterprise Water Level Controllers and Motor/Submersible Pumps come with a 12-Month to 24-Month Manufacturer Warranty against manufacturing defects, supported by our dedicated technical repair team in Vadodara.',
    category: 'Delivery & Support'
  },
  {
    id: 'faq-6',
    question: 'How quickly can products be delivered across Gujarat and India?',
    answer: 'Standard inventory items (Water level controllers, standard SS valves, monoblock pumps, CPVC fittings) are shipped within 24 hours across Vadodara, Ahmedabad, Surat, Ankleshwar, Rajkot, and nationwide via reliable transport logistics.',
    category: 'Delivery & Support'
  }
];

export const COMPANY_ADVANTAGES = [
  {
    title: 'In-House Testing Lab',
    description: '100% of water level controllers and valves undergo 1.5x working pressure & insulation testing before packing.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Vadodara Supply Hub',
    description: 'Located in Vadodara ensuring rapid spare parts dispatch and immediate technical on-site visit.',
    iconName: 'MapPin'
  },
  {
    title: 'Energy Efficient Engineering',
    description: 'Pumps and controllers designed with low watt loss logic, reducing factory power consumption by up to 18%.',
    iconName: 'Zap'
  },
  {
    title: 'Direct Manufacturer Pricing',
    description: 'Eliminate middleman markups. Receive genuine direct factory quotes with tax invoices and test certificates.',
    iconName: 'Award'
  }
];
