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
    id: 'sewage-pumps',
    category: 'Sewage Pump',
    displayName: 'Sewage Pump',
    shortTitle: 'Sewage Pump',
    description: 'Heavy duty non-clog sewage pumps, cutter pumps, and industrial wastewater dewatering sets.',
    iconName: 'Zap',
    image: 'https://lh3.googleusercontent.com/d/1nCTshHXYHThd-nwSPdrKnjc2Irotp6SV',
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
    name: 'Single Phase Panel with Sensor Water Level Controller',
    category: 'Water Level Controller',
    subtitle: 'Single Phase Automatic Water Level Controller with PVC Float Switch Sensors',
    description: 'Single phase digital panel with sensor water level controller designed to automatically control single phase pumps with dry-run protection and sensor cutoff.',
    image: 'https://lh3.googleusercontent.com/d/1OiBDxbRxjeLVXI3bLiBHy9_3ixZ6Cf5d',
    galleryImages: [
      'https://lh3.googleusercontent.com/d/1OiBDxbRxjeLVXI3bLiBHy9_3ixZ6Cf5d'
    ],
    videoEmbedUrl: 'https://drive.google.com/file/d/1ucp8xmzAyysXDPACRQMZV70r6yr4TSrC/preview',
    featured: true,
    modelNumber: 'ME-WLC-9000D',
    material: 'Flame Retardant ABS Body & PVC Float Switch Sensors',
    rating: '4.9/5',
    keyFeatures: [],
    benefits: [],
    specs: [
      { label: 'Operating Voltage', value: '180V to 250V' },
      { label: 'Compatible Motor', value: '0.5 HP to 2 HP' },
      { label: 'Sensor Type', value: 'PVC Float Switch' },
      { label: 'Sensor Wire Distance', value: '30 to 60 Meters' }
    ],
    applications: [],
    industries: []
  },
  {
    id: 'wlc-panel-3ph',
    name: '3-Phase Industrial Pump Control Panel',
    category: 'Water Level Controller',
    subtitle: 'Automated Starter Panel with Water Level Sensing & Phase Preventer',
    description: 'Heavy-duty industrial control panel engineered for high-capacity 3-phase submersible and centrifugal pumps. Includes star-delta starter integration and automatic water level logic.',
    image: 'https://lh3.googleusercontent.com/d/11fEoYfvRme9kxmJgMcfFy5TenVMFGFvT',
    galleryImages: [
      'https://lh3.googleusercontent.com/d/11fEoYfvRme9kxmJgMcfFy5TenVMFGFvT'
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
    industries: ['Agriculture & Farm Irrigation']
  },
  {
    id: 'valv-ball-ss',
    name: 'Butterfly Valve',
    category: 'Butterfly Valve',
    subtitle: 'Precision Engineered Stainless Steel Butterfly Valve',
    description: 'High precision stainless steel butterfly valve designed for water and chemical flow control applications.',
    image: 'https://lh3.googleusercontent.com/d/1XaAIg7Zjs4R1u8HJ4IDyHEnqSSUOYOB0',
    galleryImages: [
      'https://lh3.googleusercontent.com/d/1XaAIg7Zjs4R1u8HJ4IDyHEnqSSUOYOB0',
      'https://lh3.googleusercontent.com/d/1VlbcOfozFvwJZ6DjDhxwyrGi6Kzn5CSr',
      'https://lh3.googleusercontent.com/d/17vLFbMPM8c4W1rhS0xUDhuYPQ4_ol0bQ'
    ],
    featured: true,
    modelNumber: 'ME-BV-316FP',
    material: 'Stainless Steel SS 316 / CF8M',
    rating: '4.9/5',
    keyFeatures: [],
    benefits: [],
    specs: [
      { label: 'Size Range', value: '1/2" to 6" (DN15 to DN150)' }
    ],
    applications: [],
    industries: []
  },
  {
    id: 'valv-butterfly-ci',
    name: 'Ball Valve',
    category: 'Butterfly Valve',
    subtitle: 'High Performance Ball Valve with Hand Lever Operation',
    description: 'High performance ball valve designed for smooth water and chemical flow control with leak-proof hand lever operation.',
    image: 'https://lh3.googleusercontent.com/d/1_O3r0CGBcH9cvjJl8VX667vX9TZnp3tw',
    galleryImages: [
      'https://lh3.googleusercontent.com/d/1_O3r0CGBcH9cvjJl8VX667vX9TZnp3tw'
    ],
    featured: true,
    modelNumber: 'ME-BV-CI',
    material: 'Cast Iron / Stainless Steel Body',
    rating: '4.8/5',
    keyFeatures: [],
    benefits: [],
    specs: [
      { label: 'Size Range', value: '2" to 24" (DN50 to DN600)' },
      { label: 'Operation', value: 'Hand Lever' }
    ],
    applications: [],
    industries: []
  },
  {
    id: 'pump-sewage-submersible',
    name: 'Sewage Pump in Vadodara',
    category: 'Sewage Pump',
    subtitle: 'Heavy Duty Non-Clog Sewage Dewatering Pump',
    description: 'Heavy duty cast iron sewage submersible pump designed for wastewater management, industrial slurry transfer, and basement dewatering in Vadodara.',
    image: 'https://lh3.googleusercontent.com/d/1nCTshHXYHThd-nwSPdrKnjc2Irotp6SV',
    galleryImages: [
      'https://lh3.googleusercontent.com/d/1nCTshHXYHThd-nwSPdrKnjc2Irotp6SV'
    ],
    featured: true,
    modelNumber: 'ME-SEW-5HP',
    material: 'Cast Iron Frame & Alloy Steel Shaft',
    rating: '4.8/5',
    keyFeatures: [
      'Non-clogging open channel impeller design',
      'Double mechanical seal with oil chamber',
      'Includes auto float switch for level control',
      'Heavy duty lifting handle and cast iron base'
    ],
    benefits: [
      'Pumps muddy, fibrous slurry without choking or clogging',
      'Submersible rating allows complete under-water operation in deep pits',
      'Substantially reduces manual pit cleaning downtime'
    ],
    specs: [
      { label: 'Power Rating', value: '1HP to 5HP' },
      { label: 'Solid Handling Size', value: 'Up to 50mm particle diameter' },
      { label: 'Submersion Depth', value: 'Up to 15 Meters' }
    ],
    applications: ['Effluent Treatment Plants (ETP/STP)', 'Basement Dewatering', 'Construction Site Pit Pumping', 'Chemical Slurry Transfer'],
    industries: ['Water & Effluent Treatment (ETP/STP)']
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
    material: 'Stainless Steel SS 304 Impellers and SS bowl',
    rating: '4.9/5',
    keyFeatures: [],
    benefits: [],
    specs: [
      { label: 'Power Capacity', value: '0.50 HP to 1.50 HP' },
      { label: 'Tank Capacity', value: '24L / 60L / 100L Expansion Vessel' }
    ],
    applications: ['Luxury Villas & Resorts', 'Commercial Malls & Hotels'],
    industries: []
  },
  {
    id: 'pump-submersible-bore',
    name: 'V3 / V7 Stainless Steel Borewell Submersible Pump',
    category: 'Submersible Pump',
    subtitle: 'Water Filled / Oil Filled Heavy Duty Borewell Submersible Pump Set',
    description: 'Engineered for deep borewell extraction in agriculture and GIDC industrial estates. Features Noryl / SS impellers for high sand resistance and long life.',
    image: 'https://lh3.googleusercontent.com/d/1s3LE7sLg3nABRXZWKKiXHDEjqfeEo5uv',
    galleryImages: [
      'https://lh3.googleusercontent.com/d/1s3LE7sLg3nABRXZWKKiXHDEjqfeEo5uv',
      'https://lh3.googleusercontent.com/d/1I0mj1tLVMtdYxCib4fwE4DfxxmmJTK4z',
      'https://lh3.googleusercontent.com/d/1J5GpKxS-49pyxHyamjmCJtoW_HQ5Y7_h'
    ],
    featured: true,
    modelNumber: 'ME-SUB-V3',
    material: 'SS body and copper rotor (single phase and 3 phase available)',
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
      { label: 'Construction Material', value: 'SS body and copper rotor (single phase and 3 phase available)' },
      { label: 'Power Rating', value: '1 HP to 10 HP' },
      { label: 'Head Range', value: '20 Meters to 350 Meters' },
      { label: 'Discharge Flow', value: 'Up to 1800 LPM' },
      { label: 'Outlet Diameter', value: '50mm to 100mm (2" to 4")' }
    ],
    applications: ['Borewell Groundwater Pumping', 'GIDC Factory Bulk Water Supply', 'Agricultural Irrigation', 'Municipal Water Schemes'],
    industries: ['Agriculture & Farm Irrigation', 'Water & Effluent Treatment (ETP/STP)']
  },
  {
    id: 'reliable-water-pumping-system-vadodara',
    slug: 'reliable-water-pumping-system-vadodara',
    name: 'reliable water pumping system in vadodara',
    category: 'Pressure Pump',
    subtitle: 'High-Performance Commercial, Industrial & Residential Water Pumping Systems with Smart Automation',
    description: 'Looking for a reliable water pumping system in Vadodara? Madhav Enterprise delivers high-efficiency, durable, and energy-saving water pumping solutions engineered for uninterrupted water flow across residential high-rises, commercial buildings, and industrial plants across Vadodara and Gujarat.',
    longDescription: `### Premier Reliable Water Pumping System in Vadodara by Madhav Enterprise

When looking for a **reliable water pumping system in Vadodara**, efficiency, endurance, and seamless automation are critical. At Madhav Enterprise, we engineer and supply state-of-the-art water pumping systems tailored to address the demanding fluid transfer challenges of residential societies, commercial high-rise towers, municipal facilities, and heavy industrial plants across Vadodara, Gujarat.

Water supply disruptions can halt industrial manufacturing lines, disrupt commercial premises, and cause severe inconvenience in residential complexes. Our heavy-duty pumping systems are built with precision-balanced impellers, 100% pure electrolytic copper winding motors, and anti-corrosion stainless steel (SS 304 / SS 316) fluid pathways to guarantee consistent water delivery, high head pressure, and decades of trouble-free operation.

---

### Key Engineering Advantages of Our Vadodara Water Pumping Systems

1. **High Hydraulic Efficiency & Energy Conservation**: Engineered with advanced CFD hydrodynamic flow profiles, our pumps deliver maximum liters-per-minute (LPM) discharge while cutting electricity consumption by up to 25% compared to conventional pump systems.
2. **Heavy-Duty Construction for Gujarat Water Conditions**: Fitted with corrosion-resistant stainless steel shafts, high-grade cast iron or SS bodies, and premium carbon-ceramic mechanical seals that withstand hard water, suspended sediments, and fluctuating operational temperatures.
3. **Seamless Smart Automation Integration**: Completely compatible with Madhav Enterprise digital Automatic Water Level Controllers (WLC), dry-run protection sensors, and float switch logic—ensuring zero water overflow, dry-run burn prevention, and totally automated pump starts/stops.
4. **Thermal Overload & Voltage Protection**: Equipped with Class F insulation and internal thermal overload relays capable of handling standard Indian industrial voltage fluctuations (180V to 440V).

---

### Applications Across Vadodara & Gujarat Industrial Belts

Our water pumping systems are actively deployed across prominent GIDC industrial estates and urban centers in Vadodara, including:
- **GIDC Makarpura & GIDC Por**: Continuous process water transfer, cooling tower circulation, and plant utility supply.
- **GIDC Nandesari & GIDC Savli**: Industrial effluent management, raw water intake, and heavy-duty transfer pumping.
- **GIDC Waghodia & Manjusar**: High-capacity industrial water lifting and boiler feed water boosting.
- **Commercial Complexes & High-Rise Apartments (Vasna Road, Diwalipura, Gotri, Alkapuri)**: Multi-story hydro-pneumatic pressure boosting, rooftop overhead tank filling, and underground sump water circulation.
- **Agricultural & Farm Irrigation**: Deep borewell extraction, micro-sprinkler feeding, and canal water irrigation networks.

---

### Why Choose Madhav Enterprise in Vadodara?

- **Local Technical Engineering Desk**: Situated conveniently at Vasna Road / Diwalipura in Vadodara, providing instant consultation, sizing calculations, and prompt site assistance.
- **Direct Factory Pricing & Complete Warranty**: Genuine manufacturer direct rates with comprehensive test certificates, spare parts availability, and guaranteed performance.
- **Tailored Multi-Stage & Booster Customization**: From compact 0.5 HP domestic pressure boosters to heavy 25 HP industrial multi-pump booster skids, we design and deliver exact turnkey configurations.

Get in touch with Madhav Enterprise today to receive technical sizing assistance, CAD drawings, and an instant direct quote for your reliable water pumping system in Vadodara.`,
    image: 'https://lh3.googleusercontent.com/d/1yb2c1H4cKZEiuqOT1v7ECb4_za9YbUyo',
    galleryImages: [
      'https://lh3.googleusercontent.com/d/1yb2c1H4cKZEiuqOT1v7ECb4_za9YbUyo'
    ],
    featured: true,
    modelNumber: 'ME-WPS-VADODARA',
    material: 'SS 304 / SS 316 Impeller, Heavy Cast Iron / SS Shell & 100% Copper Winding',
    rating: '4.9/5',
    keyFeatures: [
      'High-Efficiency Hydraulic Design for Maximum Water Discharge with Low Power Consumption',
      'Built-in Compatibility with Automatic Water Level Controllers & Dry-Run Sensors',
      'Heavy-Duty Stainless Steel (SS 304/316) & Cast Iron Anti-Corrosive Construction',
      'Continuous Duty Rating (S1) for 24/7 Demanding Industrial GIDC & Commercial Operations',
      'Thermal Overload Protector & Voltage Fluctuation Safety Integration',
      'Dynamically Balanced High-Grade Rotor with Ceramic-Carbon Mechanical Seal'
    ],
    benefits: [
      'Ensures Uninterrupted Water Supply: Eliminates unexpected water supply downtime across domestic societies, high-rise buildings, and industrial plants in Vadodara.',
      'Saves Up to 25% Electricity: High-efficiency energy-saving motor reduces utility bills while delivering consistent flow pressure.',
      'Zero Maintenance Hassle: Robust mechanical seals and anti-rust coatings guarantee long operational lifespan even in hard water conditions.',
      'Turnkey Local Support in Vadodara: Prompt on-site assistance, spare parts availability, and engineering sizing support from Vasna Road, Diwalipura.'
    ],
    specs: [
      { label: 'System Type', value: 'Reliable Water Pumping System' },
      { label: 'Power Range', value: '0.5 HP to 25 HP (Single Phase 220V & 3 Phase 415V)' },
      { label: 'Head Range', value: '10 Meters to 280 Meters' },
      { label: 'Flow Capacity', value: '50 LPM to 3,500 LPM' },
      { label: 'Motor Rating', value: 'Class F Insulation / IP-55 Enclosure' },
      { label: 'Automation Support', value: 'Compatible with Digital WLC Panels & Float Switches' },
      { label: 'Inlet / Outlet Size', value: '25mm (1") to 150mm (6") Flanged / Screwed' },
      { label: 'Service Location', value: 'Vadodara & Across Gujarat Industrial Belts' }
    ],
    applications: [
      'Commercial High-Rise Complexes & Towers in Vadodara',
      'GIDC Industrial Estates (Makarpura, Nandesari, Savli, Waghodia, Por)',
      'Residential Societies, Bungalows & Farmhouses',
      'Overhead Tank & Underground Sump Water Transfer',
      'Agriculture & Farm Irrigation Systems',
      'Water & Effluent Treatment Plants (ETP / STP)'
    ],
    industries: [
      'Commercial Real Estate & Towers',
      'Water & Effluent Treatment (ETP/STP)',
      'Agriculture & Farm Irrigation'
    ],
    seoKeywords: [
      'reliable water pumping system in vadodara',
      'water pumping system in vadodara',
      'industrial water pump vadodara',
      'water pump supplier vadodara',
      'pressure booster pump vadodara',
      'commercial water pumping system vadodara',
      'GIDC makarpura water pump supplier'
    ],
    faqs: [
      {
        question: 'Why is Madhav Enterprise considered the most reliable water pumping system provider in Vadodara?',
        answer: 'Madhav Enterprise combines 16+ years of specialized engineering experience in Vadodara with heavy-duty SS/Cast Iron manufacturing, 100% copper motors, and integrated automated water level controls to ensure zero water failure and maximum energy efficiency.'
      },
      {
        question: 'Can this water pumping system be integrated with automatic water level controllers?',
        answer: 'Yes, all our water pumping systems are 100% compatible with our single-phase and three-phase digital water level controllers with dry-run protection float sensors.'
      },
      {
        question: 'Do you deliver and support industrial GIDC estates around Vadodara?',
        answer: 'Yes, we provide supply, sizing consultation, and prompt local support across Makarpura GIDC, Savli GIDC, Nandesari GIDC, Por GIDC, Waghodia GIDC, Halol, and all across Vadodara district.'
      }
    ]
  }
];

export const INDUSTRIES_SERVED: Industry[] = [
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
    description: 'High depth V3/V7 borewell submersible pumps and HDPE pressure pipes built to supply deep groundwater across agricultural belts of Gujarat.',
    iconName: 'Sprout',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    popularProducts: ['V3 Borewell Submersible Pump', '3-Phase Control Panel', 'HDPE Pipes']
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
