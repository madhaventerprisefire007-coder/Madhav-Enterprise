import { Product, Industry, Testimonial, FAQItem, ProductCategory } from '../types';

export const COMPANY_INFO = {
  name: 'Madhav Enterprise and Automation',
  contactPerson: 'MADHAVJI K. JAVIYA',
  tagline: 'Reliable Water Level Controller & Butterfly Valve Supplier',
  subheading: 'Trusted Manufacturer & Supplier in Vadodara, Gujarat',
  location: 'Vadodara, Gujarat, India',
  fullAddress: 'C-10, Gaurav Park, Diwalipura, Vasna Road, Vadodara- 390007, Gujarat, India',
  phonePrimary: '+91 70417 72780',
  phoneSecondary: '+91 99240 40633',
  whatsappNumber: '917041772780',
  emailSales: 'madhaventerprise.fire007@gmail.com',
  emailInfo: 'madhaventerprise.fire007@gmail.com',
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
  {
    id: 'fire-material',
    category: 'Fire Material',
    displayName: 'Fire Material',
    shortTitle: 'Fire Material',
    description: 'ISI marked fire fighting hydrant valves, hose reels, fire sprinklers, branch pipes, and safety equipment in Vadodara.',
    iconName: 'Flame',
    image: 'https://lh3.googleusercontent.com/d/1MO0CXxvAuFA3fJNzwbqQvZd7419iYF3t',
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
      'https://lh3.googleusercontent.com/d/1OiBDxbRxjeLVXI3bLiBHy9_3ixZ6Cf5d',
      'https://lh3.googleusercontent.com/d/1Xxh02Z5jOZsZVPvnPXJEhcHoVhviJQ6H'
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
    applications: [],
    industries: []
  },
  {
    id: 'star-delta-auto-start-digital-panel-with-sensor',
    slug: 'star-delta-auto-start-digital-panel-with-sensor',
    name: 'Star Delta Auto Start Digital Panel With Sensor',
    category: 'Water Level Controller',
    subtitle: 'Fully Automatic Microprocessor Star Delta Starter Panel with Digital Level Sensing & Comprehensive Motor Protection',
    description: 'Looking for Star Delta Auto Start Digital Panel With Sensor in Vadodara? Madhav Enterprise and Automation is a premier manufacturer of heavy-duty 3-phase automatic Star Delta starter panels with digital liquid level controllers, electrolysis-free sensors, auto start-stop, dry-run safety, and phase failure protection for high-capacity 10 HP to 50 HP submersible and centrifugal pumps in Vadodara, Gujarat.',
    longDescription: `### Star Delta Auto Start Digital Panel With Sensor – Manufacturer & Supplier in Vadodara

Welcome to **Madhav Enterprise and Automation**, the premier manufacturer and supplier of the advanced **Star Delta Auto Start Digital Panel With Sensor** in Vadodara, Gujarat. Designed specifically for high-power 3-phase submersible pumps, openwell pumps, and heavy centrifugal motor pumps ranging from 10 HP up to 50 HP, our microprocessor-controlled Star Delta starter panel integrates automated water level sensing and heavy-duty motor protection into a single, compact, industrial-grade unit.

Heavy 3-phase pump motors consume high starting current (up to 6 times the rated current) when started Direct-On-Line (DOL). Our **Star Delta Auto Start Digital Panel** starts the motor in star configuration to lower inrush currents by up to 65%, smoothly transitioning to delta configuration via precision digital timing. Simultaneously, the built-in intelligent liquid level controller constantly monitors both overhead and underground water levels, automating your pumping operations 24/7 without manual intervention.

---

### Key Operational Features & Engineering Highlights

1. **Intelligent Star-to-Delta Auto Transition**:
   - Microprocessor-timed digital transition smoothly shifts from Star mode to Delta mode, protecting high-capacity copper motor windings from thermal shock and grid voltage dips.

2. **Automated Dual-Tank Water Level Sensing**:
   - **Auto Motor Start**: Automatically triggers the pump when the Overhead (OH) Tank falls below the predetermined low water level (OH LOW), provided there is sufficient water in the Underground (UG) Sump.
   - **Auto High Level Cut-Off**: Instantly shuts off the pump when the Overhead Tank reaches full capacity (OH HIGH), completely preventing water overflow and wastage.
   - **Underground Dry-Run Cut-Off**: Protects the pump against dry running by immediately stopping the motor when the underground sump or borewell water drops below safety levels.

3. **Electrolysis-Free Stainless Steel Sensor Technology**:
   - Operates with low-voltage AC sensing signals that eliminate probe corrosion, electrolysis rust, and mineral scaling, guaranteeing years of maintenance-free operation in Gujarat hard water conditions.

4. **Comprehensive 3-Phase Electrical Motor Protection**:
   - **Single Phasing Preventer (SPP)**: Trips the motor within milliseconds if any single phase is lost, preventing instantaneous motor burnout.
   - **Phase Reversal / Phase Asymmetry Guard**: Prevents reverse rotation of submersible pump impellers.
   - **Overload & Thermal Current Trip**: Precise bi-metallic overload relay trips during mechanical jam or overcurrent draw.
   - **High & Low Voltage Cut-Off**: Shuts down operations if line voltage swings outside safe operating limits (340V to 460V AC).

5. **Front Panel Diagnostic Digital Display**:
   - Clear digital LED indicators for Line Voltages (RY, YB, BR), Phase Currents, Water Levels (OH HIGH, OH LOW, UG HIGH, UG LOW), Pump ON Status, and Trip Alarms (Overload, Dry Run, Single Phasing).
   - **Manual / Auto Mode Selector Switch**: Allows instant manual bypass for testing or emergency water pumping.

---

### Technical Specifications

- **Product Name**: Star Delta Auto Start Digital Panel With Sensor
- **Operating Voltage**: 380V - 440V AC, 3-Phase, 50 Hz
- **Motor HP Compatibility**: 10 HP to 50 HP (Submersible, Openwell & Centrifugal Pumps)
- **Starting Method**: Automatic Star-Delta with Digital Timer (0.5s to 30s adjustable)
- **Sensor Types**: Non-corrosive Stainless Steel (SS 304/316) Magnetic Float Switches & AC Sensing Probes
- **Enclosure Material**: CRCA Heavy Gauge Powder Coated Sheet Metal (IP-55 Weatherproof)
- **Contactor Ratings**: Heavy-duty Industrial Silver Alloy Contactors (AC-3 Duty)
- **Warranty**: 1-Year Comprehensive Manufacturer Warranty with Local Vadodara Support

---

### Industrial & Commercial Applications Across Vadodara & Gujarat

Madhav Enterprise and Automation Star Delta Auto Start Digital Starter Panels are trusted across prominent industrial and residential sectors in Vadodara:
- **GIDC Industrial Belts (Makarpura, Savli, Nandesari, Waghodia, Por, Halol)**: Continuous cooling tower circulation, boiler feed pumps, raw water transfer, and effluent treatment plant (ETP/STP) pumping.
- **Commercial High-Rises & Towers**: Multi-story apartments, corporate office complexes, hospitals, and hotels across Vasna Road, Diwalipura, Gotri, Alkapuri, and Manjalpur.
- **Agricultural & Farm Irrigation**: High-discharge deep borewell submersibles and canal water lifting systems.
- **Municipal & Township Water Schemes**: Overhead reservoir filling and raw water intake pumping stations.

---

### Why Choose Madhav Enterprise and Automation in Vadodara?

- **Local Manufacturer with 15+ Years Track Record**: Based at Diwalipura, Vasna Road, Vadodara, offering instant on-site technical support, prompt delivery, and genuine factory direct pricing.
- **Strict Quality Benchmarks**: Every digital panel undergoes high-potential insulation testing, contactor endurance tests, and rigorous sensor logic checks prior to dispatch.
- **Turnkey Customization**: Custom panel sizing, telemetry / GSM SMS alert integration, and multi-pump cascade configurations available upon request.

Contact Madhav Enterprise and Automation today to request technical sizing, wiring diagrams, and an instant wholesale quote for your **Star Delta Auto Start Digital Panel With Sensor in Vadodara**.`,
    image: 'https://lh3.googleusercontent.com/d/1-sDzb5LH6FAkfSb-CsxRDEv6UzKlNkpl',
    galleryImages: [
      'https://lh3.googleusercontent.com/d/1-sDzb5LH6FAkfSb-CsxRDEv6UzKlNkpl',
      'https://lh3.googleusercontent.com/d/1cT_Glz3puVR2bvPr9NaRItzJfYa6-ppL'
    ],
    featured: true,
    modelNumber: 'ME-SD-AUTO-DIGITAL',
    material: 'CRCA Heavy Gauge Powder Coated Enclosure with Microprocessor PCB & Industrial Contactors',
    rating: '4.9/5',
    keyFeatures: [
      'Automatic Star-to-Delta Transition with Microprocessor Precision Timer',
      'Integrated Dual Tank Water Level Controller (Overhead Tank & Underground Sump)',
      'Electrolysis-Free Low AC Voltage Sensor Probes Preventing Rust & Mineral Scaling',
      'Complete 3-Phase Protection: Single Phase Preventer (SPP), Overload, Voltage Trip & Dry-Run Safety',
      'Front Panel Digital Display for Real-Time Voltage, Current & Level Status Indication',
      'Manual / Auto Mode Selector Switch for Operational Flexibility'
    ],
    benefits: [
      'Reduces High Motor Inrush Starting Current by up to 65%, Protecting Electrical Transformers & Windings',
      '100% Water Overflow Prevention & Elimination of Dry-Run Pump Motor Coil Burnouts',
      'Completely Automates 3-Phase Water Pumping Operations, Eliminating Daily Manual Monitoring',
      'Direct Local Vadodara Manufacturer Support, Warranty & Fast Delivery from Vasna Road, Diwalipura'
    ],
    specs: [
      { label: 'Product Name', value: 'Star Delta Auto Start Digital Panel With Sensor' },
      { label: 'Control System', value: 'Microprocessor Digital Star-Delta Auto Starter' },
      { label: 'Operating Voltage', value: '380V - 440V AC, 3 Phase, 50 Hz' },
      { label: 'Motor HP Range', value: '10.0 HP to 50.0 HP (Submersible, Openwell & Monoblock Pumps)' },
      { label: 'Sensor Type', value: 'Electrolysis-Free SS 304 Probes & Magnetic Float Sensors' },
      { label: 'Safety Protections', value: 'Dry-Run, Single Phasing (SPP), Overload, Phase Reversal, Under/Over Voltage' },
      { label: 'Operation Modes', value: 'Fully Automatic / Manual Switchable' },
      { label: 'Enclosure Rating', value: 'IP-55 Dust & Weatherproof Powder Coated Sheet Metal' },
      { label: 'Manufacturer Location', value: 'Madhav Enterprise and Automation, Diwalipura, Vasna Road, Vadodara, Gujarat' }
    ],
    applications: [
      'GIDC Industrial Estates (Makarpura, Savli, Nandesari, Por, Waghodia)',
      'Commercial High-Rise Complexes, Hospitals & Corporate Towers',
      'Residential Societies & Townships Overhead / Underground Water Transfer',
      'Deep Borewell Submersible & Agricultural Farm Irrigation Schemes',
      'Water & Effluent Treatment Plants (ETP / STP)'
    ],
    industries: [
      'Water & Wastewater Management (ETP/STP)',
      'Industrial Manufacturing Plants & GIDC Belts',
      'Commercial Real Estate & Infrastructure',
      'Agriculture & Farm Irrigation'
    ],
    seoKeywords: [
      'star delta auto start digital panel with sensor',
      'star delta auto start digital penal with sensor',
      'star delta starter panel with water level controller vadodara',
      'digital star delta panel with sensor vadodara',
      'water level controller manufacturer in vadodara',
      'automatic 3 phase motor starter panel vadodara',
      'star delta pump panel with dry run sensor vadodara',
      'industrial pump control panel vadodara'
    ],
    faqs: [
      {
        question: 'What is the function of a Star Delta Auto Start Digital Panel With Sensor?',
        answer: 'It reduces high motor starting inrush current by first engaging the motor in Star configuration and transitioning automatically to Delta mode once up to speed. Simultaneously, its built-in digital water level controller starts and stops the pump automatically based on tank water levels, protecting the motor against dry run and electrical faults.'
      },
      {
        question: 'Does the panel protect against phase loss (single phasing)?',
        answer: 'Yes! The panel comes with an integrated Single Phase Preventer (SPP) and phase reversal circuit that trips the motor immediately if any of the three phases is lost or imbalanced, completely preventing motor coil burnouts.'
      },
      {
        question: 'What types of water sensors are included with this Star Delta panel?',
        answer: 'Our panel uses electrolysis-free stainless steel (SS 304/316) sensor probes and magnetic float switches that operate on low AC sensing voltage. This eliminates probe corrosion, carbon scaling, and rust for long-lasting maintenance-free operation.'
      },
      {
        question: 'Can this panel be used for both submersible and monoblock pumps?',
        answer: 'Yes, it is designed for all 3-phase submersible pumps, openwell pumps, monoblock booster pumps, and centrifugal water pumps from 10 HP up to 50 HP.'
      }
    ]
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
    id: 'fully-automatic-digital-motor-starter-with-level-controller-and-protection',
    slug: 'fully-automatic-digital-motor-starter-with-level-controller-and-protection',
    name: 'Fully automatic digital motor starter with level controller and protection',
    category: 'Water Level Controller',
    subtitle: 'Electrolysis-Free Digital Motor Starter Panel with Auto Restart, Auto Cut-Off & Complete Motor Protection',
    description: 'Looking for a fully automatic digital motor starter with level controller and protection in Vadodara? Madhav Enterprise and Automation manufactures heavy-duty, electrolysis-free digital liquid level controller starter panels with automatic motor restart, high/low cut-off, and comprehensive protection for single-phase and 3-phase pumps.',
    longDescription: `### Fully Automatic Digital Motor Starter with Level Controller and Protection in Vadodara

Manufactured by **Madhav Enterprise and Automation** in Vadodara, Gujarat, this **Fully Automatic Digital Motor Starter with Level Controller and Protection** is engineered to automate your water pumping operations while safeguarding your costly motor pump against electrical and hydraulic hazards.

Designed with state-of-the-art **electrolysis-free liquid level sensing circuitry**, this intelligent starter panel eliminates probe corrosion and provides seamless dual-tank automation (simultaneous monitoring of Overhead Tank and Underground Sump).

---

### Core Operational Features & Capabilities

1. **Fully Automatic Operation**:
   - **Auto Start**: Automatically powers ON the motor pump when the Overhead (OH) Tank level falls below the low threshold (OH LOW) and sufficient water exists in the Underground (UG) Sump.
   - **Auto Cut-Off**: Instantly cuts OFF power when the Overhead Tank reaches full capacity (OH HIGH), preventing wasteful water overflow and terrace flooding.
   - **Auto Restart & Delay Timer**: Intelligently restarts the motor pump once power is restored or when underground water levels replenish.

2. **Electrolysis-Free Sensing Technology**:
   - Utilizes ultra-low AC voltage signal probing that completely prevents electrolytic corrosion, oxidation, or scaling on water contact sensors, delivering years of maintenance-free service.

3. **Complete Motor Protection Engine**:
   - **Dry-Run Protection**: Cuts power immediately if the underground sump runs dry, shielding pump impellers and mechanical seals from burning.
   - **Voltage Surge & Under-Voltage Cut-Off**: Built-in relay protection against extreme voltage fluctuations (low voltage cut-off and high voltage surge safety).
   - **Thermal Overload & Current Trip**: Protects copper windings from excessive current draw and motor jamming.

4. **Front Panel Dual-Tank Visual Indicators**:
   - **OH HIGH**: Overhead Tank Full Indicator (Red LED)
   - **OH LOW**: Overhead Tank Low Level Indicator (Green LED)
   - **PUMP ON**: Active Pumping Status Indicator (Green LED)
   - **UG HIGH / UG LOW**: Underground Sump Level Status Indicators
   - **MANUAL / AUTO Mode Switch**: Heavy-duty industrial toggle for switching between fully automated sensing and manual emergency bypass.

---

### Terminal Connections & Electrical Layout

The starter panel is designed with clearly labelled, industrial-grade terminal blocks:
- **OH Terminal (H, L, C)**: Overhead High, Low, and Common sensor probe connections.
- **UG Terminal (H, L, C)**: Underground High, Low, and Common sensor probe connections.
- **OUT Terminal (P, N, E)**: Direct Phase, Neutral, and Earth output supply to the Motor Pump.
- **IN Terminal (P, N, E)**: Phase, Neutral, and Earth 230V/415V AC Mains Input supply.

---

### Key Applications Across Vadodara & Gujarat

- **Residential Complexes & Societies**: Multi-story apartments, bungalows, and farmhouses in Diwalipura, Vasna Road, Gotri, Alkapuri, and Manjalpur.
- **Commercial & Office Buildings**: Hospitals, hotels, institutions, and shopping malls.
- **GIDC Industrial Units**: Makarpura, Savli, Nandesari, Waghodia, and Por industrial estates for process water supply and cooling tower tanks.
- **Agriculture & Borewell Schemes**: Deep borewell submersible and openwell pump automation.

---

### Why Choose Madhav Enterprise and Automation?

- **Direct Manufacturer in Vadodara**: Located at C-10, Gaurav Park, Diwalipura, Vasna Road, Vadodara.
- **Rigorous Factory Testing**: Every starter panel undergoes strict insulation resistance, relay trip, and high-voltage burn-in tests.
- **Direct Factory Pricing & 1-Year Warranty**: Genuine manufacturer direct rates with fast local spare parts and on-site support.

Contact Madhav Enterprise and Automation today to order your **Fully Automatic Digital Motor Starter with Level Controller and Protection** with direct delivery across Vadodara and Gujarat.`,
    image: 'https://lh3.googleusercontent.com/d/1yb2c1H4cKZEiuqOT1v7ECb4_za9YbUyo',
    galleryImages: [
      'https://lh3.googleusercontent.com/d/1yb2c1H4cKZEiuqOT1v7ECb4_za9YbUyo'
    ],
    featured: true,
    modelNumber: 'ME-ADMS-PRO',
    material: 'CRCA Powder Coated Heavy Metal Enclosure with Microprocessor PCB & Industrial Relays',
    rating: '4.9/5',
    keyFeatures: [
      'Electrolysis-Free Sensing Circuitry Eliminates Probe Rust & Mineral Scaling',
      'Dual Tank Level Control: Simultaneous Overhead (OH) Tank & Underground (UG) Sump Monitoring',
      'Integrated Motor Protection: Dry-Run Safety, Voltage Trip & Thermal Overload Protection',
      'Auto Start & Auto Cut-Off with Microprocessor Controlled Restart Timing',
      'Manual / Auto Mode Toggle Switch for Emergency Manual Pumping',
      'Front Panel LED Status Indicators for High, Low, and Pump ON Diagnostics'
    ],
    benefits: [
      '100% Water Overflow Prevention: Eliminates terrace tank overflow and underground water wastage.',
      'Extends Motor Pump Lifespan: Protects motor windings and mechanical seals against dry-running and voltage spikes.',
      'Zero Maintenance Probes: Electrolysis-free AC sensing ensures long years of maintenance-free operation.',
      'Local Vadodara Manufacturer Support: Direct engineering assistance, warranty, and fast delivery from Vasna Road, Diwalipura.'
    ],
    specs: [
      { label: 'Product Type', value: 'Fully Automatic Digital Motor Starter with Level Controller & Protection' },
      { label: 'Technology', value: 'Electrolysis-Free AC Sensing Circuit' },
      { label: 'Supported Pump Types', value: 'Submersible, Monoblock, Openwell & Jet Pumps (Single Phase & 3-Phase)' },
      { label: 'Motor Power Rating', value: '0.5 HP to 5 HP (Single Phase 220V) / Up to 15 HP (Three Phase 415V)' },
      { label: 'Input Operating Voltage', value: '180V - 250V AC (50 Hz)' },
      { label: 'Safety Protections', value: 'Dry-Run Prevention, Overload Cut-off, Voltage Fluctuation Guard' },
      { label: 'Control Modes', value: 'Fully Automatic / Manual Switchable' },
      { label: 'Front Indicators', value: 'OH HIGH, OH LOW, UG HIGH, UG LOW, PUMP ON (LED Display)' },
      { label: 'Enclosure Material', value: 'Shockproof Powder Coated Sheet Metal' },
      { label: 'Manufacturer Location', value: 'Madhav Enterprise and Automation, Diwalipura, Vasna Road, Vadodara, Gujarat' }
    ],
    applications: [
      'Residential Societies, Bungalows & High-Rise Apartments',
      'Commercial Buildings, Hospitals & Hotels',
      'GIDC Industrial Estates (Makarpura, Savli, Nandesari, Por, Waghodia)',
      'Underground Sump to Overhead Rooftop Tank Water Transfer',
      'Borewell & Openwell Pump Automatic Operation'
    ],
    industries: [
      'Residential & Commercial Real Estate',
      'Industrial Manufacturing Plants & GIDC Belts',
      'Water Utilities & Pumping Schemes'
    ],
    seoKeywords: [
      'fully automatic digital motor starter with level controller and protection',
      'automatic motor starter with level controller in vadodara',
      'digital motor starter vadodara',
      'liquid level controller electrolysis free vadodara',
      'automatic water level controller with motor protection',
      'water pump starter panel manufacturer vadodara',
      'madhav electricals level controller vadodara'
    ],
    faqs: [
      {
        question: 'What is the advantage of an electrolysis-free liquid level controller?',
        answer: 'Traditional DC controllers cause probe corrosion and mineral deposition over time. Madhav Enterprise and Automation electrolysis-free controllers use low-frequency AC sensing current, preventing probe rust and water contamination for years of maintenance-free service.'
      },
      {
        question: 'Does this panel protect the motor if the underground sump water is empty?',
        answer: 'Yes! The panel continuously checks the Underground (UG) Sump level. If the sump is empty or dry, the controller will not allow the motor to turn on, completely protecting the pump from dry-run burning.'
      },
      {
        question: 'Can I operate the motor manually if required?',
        answer: 'Yes, the starter panel includes a dedicated front toggle switch to easily select between Automatic mode and Manual mode whenever emergency pumping is needed.'
      }
    ]
  },
  {
    id: 'fire-material-supplier-vadodara',
    slug: 'fire-material-supplier-vadodara',
    name: 'Fire Material Supplier in Vadodara',
    category: 'Fire Material',
    subtitle: 'Authorized Supplier of ISI Marked Fire Fighting Materials, Hydrant Landing Valves, Fire Sprinklers, Hose Reels & Safety Equipment in Vadodara',
    description: 'Looking for a certified Fire Material Supplier in Vadodara? Madhav Enterprise and Automation is a trusted supplier of ISI certified fire fighting equipment, fire hydrant landing valves, fire safety butterfly valves, sprinkler heads, fire hose reels, fire booster pumps, and industrial fire protection piping across Vadodara and Gujarat.',
    longDescription: `### Premier Fire Material Supplier in Vadodara by Madhav Enterprise and Automation

Madhav Enterprise and Automation is a premier **Fire Material Supplier in Vadodara**, delivering certified, heavy-duty, and ISI-marked fire safety and fire fighting solutions to commercial complexes, residential high-rise towers, industrial factories, and EPC contractors throughout Vadodara, Gujarat.

Fire safety systems demand zero compromise on material integrity, pressure handling, and regulatory compliance. We supply a complete range of certified fire fighting equipment engineered to withstand extreme pressures and deliver foolproof reliability in emergency fire containment situations.

---

### Complete Inventory of Fire Fighting Materials & Equipment

1. **Fire Hydrant Landing Valves & Branch Pipes**: ISI marked (IS:5290) single and double outlet landing valves in Gunmetal (LTB2) and Stainless Steel (SS 304 / SS 316), complete with instantaneous coupling branch pipes and fog nozzles.
2. **Fire Sprinkler System Components**: Pendent, upright, and sidewall sprinkler heads (68°C / 79°C / 93°C temperature ratings) with UL/FM certified glass bulbs, flexible sprinkler droppers, and alarm check valve stations.
3. **Fire Fighting Butterfly Valves & Check Valves**: Wafer type and lug type gear-operated fire butterfly valves with supervisory tamper switches, dual-plate check valves, and resilient seated sluice valves tested up to 25 kg/cm².
4. **Fire Hose Reels & Heavy-Duty Cabinets**: 19mm / 25mm thermoplastic and swinging type fire hose reels (IS:884), 30-meter non-kinking fire hoses, and powder-coated MS/SS weather-proof fire extinguisher cabinets.
5. **Fire Booster Pumps & Multi-Pump Control Panels**: Main electric fire pumps, diesel engine backup pumps, and jockey booster pumps integrated with automated starter panels and pressure switch transducers.
6. **Heavy-Duty Fire Piping & Grooved Fittings**: Heavy 'C' class MS ERW fire lines, seamless GI pipes, grooved couplings, mechanical tees, flanged adaptors, and fire line pipe support clamps.
7. **Portable Fire Extinguishers & Accessories**: ABC Dry Chemical Powder, CO2 gas, Mechanical Foam (AFFF), and Clean Agent fire extinguishers with wall mounting brackets.

---

### Strict Regulatory Compliance & Industry Standards

All fire materials supplied by Madhav Enterprise and Automation comply strictly with national and international fire safety norms:
- **IS 5290**: Landing valves and fire hydrant fittings.
- **IS 903**: Fire hose delivery couplings, branch pipes, and nozzles.
- **IS 884**: First-aid fire hose reels for building safety.
- **IS 3844 / IS 13039**: Code of practice for installation and maintenance of internal fire hydrants and hose reel systems.
- **National Building Code of India (NBC 2016)** & Gujarat State Fire Safety Act guidelines.

---

### Areas & Industrial Belts Served Across Vadodara

We provide rapid dispatch, technical sizing support, and direct delivery across all major commercial centers and GIDC industrial zones in Vadodara:
- **GIDC Makarpura & GIDC Por**: Chemical plants, manufacturing workshops, and engineering units.
- **GIDC Savli & GIDC Manjusar**: Heavy machinery, automobile, and electrical equipment plants.
- **GIDC Nandesari & GIDC Waghodia**: Petrochemical, specialty chemical, and bulk drug manufacturing plants.
- **Vadodara City & Commercial Towers (Alkapuri, Gotri, Vasna Road, Diwalipura, Sayajigunj, Akota)**: High-rise commercial offices, shopping malls, hospitals, and educational institutions.
- **Residential Societies & High-Rise Townships (Bhayli, Vasna-Bhayli Road, Sevasi, Waghodia Road)**: Comprehensive residential fire hydrant systems and overhead riser equipment.
- **Halol & Central Gujarat Industrial Zones**: Automobile manufacturing corridors and logistics parks.

---

### Why Madhav Enterprise and Automation is the Preferred Fire Material Supplier in Vadodara

- **Extensive Ready Stock in Vadodara**: Located at Diwalipura, Vasna Road with immediate inventory for swift site dispatches.
- **Direct Factory Pricing & MTC Test Certificates**: Genuine rates with complete Mill Test Certificates (MTC) and hydrostatic inspection reports to facilitate hassle-free Fire NOC approval.
- **Complete End-to-End Solutions**: From fire line pipes, valves, and hydrants to automated booster panels and sensors, get everything under one roof.
- **Local Engineering Expertise**: Experienced technical guidance for Bill of Quantities (BOQ) optimization, piping pressure drop sizing, and valve selection.

Get in touch with Madhav Enterprise and Automation today for instant factory quotes, product datasheets, and swift on-site supply for your fire fighting projects in Vadodara.`,
    image: 'https://lh3.googleusercontent.com/d/1MO0CXxvAuFA3fJNzwbqQvZd7419iYF3t',
    galleryImages: [
      'https://lh3.googleusercontent.com/d/1MO0CXxvAuFA3fJNzwbqQvZd7419iYF3t'
    ],
    featured: true,
    modelNumber: 'ME-FIRE-VADODARA',
    material: 'Gunmetal (LTB2) / Stainless Steel (SS 304/316) / Cast Iron / Forged Brass / Heavy MS',
    rating: '4.9/5',
    keyFeatures: [
      'ISI Marked & NBC 2016 Compliant Fire Fighting Materials & Equipment',
      'Comprehensive Inventory: Hydrant Valves, Branch Pipes, Hose Reels, Sprinklers & Fire Butterfly Valves',
      'Heavy-Duty Corrosion Resistant Gunmetal, Cast Steel & Stainless Steel Construction',
      'High Pressure Hydrostatic Tested up to 25 kg/cm² for Zero-Leakage Reliability',
      'Direct Factory Supply with Mill Test Certificates (MTC) & Warranty',
      'Fast On-Site Delivery across GIDC Makarpura, Savli, Nandesari, Waghodia, Por & Vadodara'
    ],
    benefits: [
      '100% Fire Safety & Regulatory Compliance: Pass local fire department NOC inspections and factory safety audits with certified materials.',
      'Heavy-Duty Endurance under Extreme Temperatures: Built to perform without fail during critical fire emergency conditions.',
      'One-Stop Sourcing Hub in Vadodara: Eliminate multi-vendor hassles by sourcing complete fire piping, valves, hydrants, and pumping systems from one trusted vendor.',
      'Instant Local Availability & Engineering Support: Ready stock for emergency replacements and large-scale EPC project dispatches from Vasna Road, Diwalipura.'
    ],
    specs: [
      { label: 'Supply Category', value: 'Complete Fire Fighting Materials & Equipment' },
      { label: 'Standard Compliance', value: 'IS 5290, IS 903, IS 884, IS 3844, NBC 2016 Guidelines' },
      { label: 'Material Grades', value: 'Gunmetal (IS:318 LTB2), Stainless Steel (SS 304/316), Cast Iron (CI)' },
      { label: 'Hydrant Valve Size', value: '63mm (2.5") Single & Double Outlet Landing Valves' },
      { label: 'Fire Butterfly Valves', value: '50mm (2") to 300mm (12") Wafer / Lug Type with Tamper Switch' },
      { label: 'Fire Sprinkler Rating', value: '68°C (Red Bulb) / 79°C (Yellow Bulb) / 93°C (Green Bulb)' },
      { label: 'Test Pressure', value: 'Hydrostatic Test up to 25 kg/cm² (350 PSI)' },
      { label: 'Service Location', value: 'Vadodara, GIDC Industrial Estates & Across Gujarat' }
    ],
    applications: [
      'GIDC Industrial Estates (Makarpura, Nandesari, Savli, Waghodia, Por, Halol)',
      'Chemical, Petrochemical & Pharmaceutical Plants',
      'Commercial High-Rise Towers, Malls & Corporate Offices in Vadodara',
      'Residential Multi-Story Societies & Apartment Townships',
      'Warehouses, Logistics Hubs & Manufacturing Facilities',
      'Hospitals, Educational Campuses & Public Infrastructure'
    ],
    industries: [
      'Commercial Real Estate & Towers',
      'Water & Effluent Treatment (ETP/STP)',
      'Agriculture & Farm Irrigation'
    ],
    seoKeywords: [
      'fire material supplier in vadodara',
      'fire material supplier vadodara',
      'fire fighting equipment supplier vadodara',
      'fire hydrant valve supplier in vadodara',
      'fire safety materials vadodara',
      'fire fighting pipes and valves vadodara',
      'fire sprinkler supplier in vadodara',
      'GIDC fire equipment supplier'
    ],
    faqs: [
      {
        question: 'Why choose Madhav Enterprise and Automation as your fire material supplier in Vadodara?',
        answer: 'Madhav Enterprise and Automation provides genuine ISI marked, NBC 2016 compliant fire materials with Mill Test Certificates (MTC), backed by 16+ years of engineering experience, ready local stock in Diwalipura/Vasna Road, and swift delivery across Vadodara and Gujarat.'
      },
      {
        question: 'Are the fire hydrant valves and landing valves ISI certified?',
        answer: 'Yes, all our fire hydrant landing valves strictly comply with IS 5290 and IS 903 standards with hydrostatic pressure testing certificates suitable for Fire Department NOC compliance.'
      },
      {
        question: 'Do you supply fire materials to GIDC industrial estates in and around Vadodara?',
        answer: 'Yes, we regularly supply fire fighting materials, butterfly valves, fire hydrant lines, and booster pump systems to chemical, pharmaceutical, and engineering plants across GIDC Makarpura, GIDC Savli, GIDC Nandesari, GIDC Waghodia, GIDC Por, and Halol.'
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
    comment: 'We installed 12 units of Madhav Enterprise and Automation Automatic Water Level Controllers across our chemical batching tanks. The dry-run protection has saved our pumps from burning out multiple times. Fantastic product quality and prompt local service!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-2',
    name: 'Vikramsinh Solanki',
    role: 'Chief Engineer',
    company: 'Apex Textile Processors',
    location: 'Halol Industrial Zone, Gujarat',
    comment: 'Madhav Enterprise and Automation supplied SS 316 ball valves and heavy centrifugal pumps for our modern dyeing unit expansion. The valve seating quality and pressure retention pass strict hydro tests easily. Highly recommended supplier in Vadodara!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-3',
    name: 'Mehul Shah',
    role: 'Project Director',
    company: 'Skyline Commercial Infrastructure',
    location: 'Alkapuri, Vadodara',
    comment: 'For our 18-floor luxury commercial complex, Madhav Enterprise and Automation designed and delivered a multi-stage Hydro-Pneumatic Pressure Booster system. Constant pressure across all rest rooms and zero noise. Excellent engineering guidance!',
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
    question: 'Where is Madhav Enterprise and Automation located in Vadodara?',
    answer: 'Our main office and unit are located at C-10, Gaurav Park, Diwalipura, Vasna Road, Vadodara- 390007, Gujarat. Customers and clients are welcome to visit our facility for product demonstrations and consultations.',
    category: 'General'
  },
  {
    id: 'faq-3',
    question: 'What materials are used in Madhav Enterprise and Automation butterfly valves?',
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
    answer: 'All Madhav Enterprise and Automation Water Level Controllers and Motor/Submersible Pumps come with a 12-Month to 24-Month Manufacturer Warranty against manufacturing defects, supported by our dedicated technical repair team in Vadodara.',
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
