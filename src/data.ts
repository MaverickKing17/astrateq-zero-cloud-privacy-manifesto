export interface PhilosophyCard {
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}

export interface ControlAspect {
  title: string;
  tag: string;
  summary: string;
  detail: string;
}

export interface DriverQuestion {
  id: string;
  question: string;
  whyItMatters: string;
  theReality: string;
}

export interface ApproachPillar {
  title: string;
  subtitle: string;
  description: string;
}

export interface MythReality {
  myth: string;
  reality: string;
  explanation: string;
}

export interface CommitmentCard {
  title: string;
  objective: string;
  action: string;
}

export interface FAQItem {
  id: number;
  topic: 'Privacy' | 'Connected Vehicles' | 'Driver Awareness' | 'Local Processing' | 'Technology Basics' | 'Future Trends' | string;
  question: string;
  answer: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  type: string;
  readTime: string;
  description: string;
  contentMarkup: string; // Detailed mock report when clicked
}

export const PHILOSOPHY_CARDS: PhilosophyCard[] = [
  {
    title: "Transparency",
    tagline: "Total visibility.",
    description: "Drivers should know exactly what sensors are active, what diagnostics are being calculated, and where that data flows. We believe complex systems should be governed by simple, explicit controls.",
    iconName: "Eye"
  },
  {
    title: "Privacy Awareness",
    tagline: "Knowledge is protection.",
    description: "True privacy is not just locking away information; it is equipping drivers with the knowledge of how and why data is processed. We reject opaque, seventy-page legalese terms.",
    iconName: "ShieldAlert"
  },
  {
    title: "Technology Simplicity",
    tagline: "Elegance over noise.",
    description: "An intelligent vehicle dashboard should clarify, not overwhelm. By designing software that isolates critical data locally, we reduce system surface area and enhance reliable safety.",
    iconName: "Sliders"
  },
  {
    title: "Responsible Innovation",
    tagline: "Human-centric development.",
    description: "We innovate to protect and empower the person behind the wheel. Technology should serve driver longevity and personal sovereignty, never turn drivers into passive telemetry streams.",
    iconName: "Sparkles"
  }
];

export const VIRTUAL_COMPARISONS = {
  local: {
    title: "Local Processing",
    subtitle: "On-Vehicle Isolation",
    points: [
      "Millisecond reaction times with no cellular latency requirements",
      "Sensor telemetry remains bound to your physically owned vehicle",
      "Immune to cloud service outages, data center breaches, and remote intercepts",
      "Gives owner absolute sovereignty over storage cycles and diagnostic summaries"
    ],
    idealFor: "Real-time safety loops, spatial telemetry, driver attention analysis, cabin-audio diagnostics"
  },
  cloud: {
    title: "Cloud Processing",
    subtitle: "Remote Server Dependence",
    points: [
      "Telemetry uploaded, cataloged, and stored permanently in central databases",
      "Subject to cellular coverage loss, network vulnerabilities, and corporate policy shifts",
      "Creates dynamic digital exhaust of your travels and driving patterns over multiple years",
      "Susceptible to targeted requests, systemic cloud compromises, and passive tracking"
    ],
    idealFor: "Fleet routing trends, crowd-sourced map updates, global software patches"
  }
};

export const CONTROL_ASPECTS: ControlAspect[] = [
  {
    title: "Awareness",
    tag: "Acknowledge",
    summary: "The silent baseline of driving is gone. Connected cars are constantly active.",
    detail: "Drivers must be clearly notified from school zone coordinates to cabin temperature trends, having complete visibility of the car's continuous feedback loop."
  },
  {
    title: "Consent",
    tag: "Agree",
    summary: "Consent should cover separate functional layers, not be an all-or-nothing trap.",
    detail: "Enabling road danger notifications should not force you to license your steering wheel usage logs to data brokers. Every digital endpoint deserves its own clear consent gate."
  },
  {
    title: "Understanding",
    tag: "Absorb",
    summary: "Opaque codes and generic charts do not help you drive safer.",
    detail: "Data visualizers must speak directly to human actions, translating mechanical measurements and signal feeds into clear diagnostics you can act upon."
  },
  {
    title: "Choice",
    tag: "Select",
    summary: "You are the commander of the cabin space. The software must reflect this.",
    detail: "Providing drivers with straightforward options to shut off network transmission streams completely without disabling foundational mechanical safety features."
  },
  {
    title: "Transparency",
    tag: "Inspect",
    summary: "A closed-box system has no place in the driveway of a critical thinker.",
    detail: "Our design standard calls for open schema architecture where drivers can output local system diagnostic logs into human-readable text packages at any time."
  }
];

export const DRIVER_QUESTIONS: DriverQuestion[] = [
  {
    id: "dq-01",
    question: "What information does my vehicle generate?",
    whyItMatters: "Connected vehicles track far more than speed. They log geographic coordinates, cabin audio thresholds, wheel acceleration ratios, and even biometric seating responses.",
    theReality: "Modern drivers often drive a complex mainframe. Knowing the parameters logged helps you audit how much of your daily behavior is permanently memorialized in solid-state drives."
  },
  {
    id: "dq-02",
    question: "Where is it stored?",
    whyItMatters: "If information lives entirely on the vehicle's local solid-state storage, you can manage access. If it is sent over the cellular node to global server farms, it escapes your hardware control.",
    theReality: "Most commercial brands cache data on the flash memory before silently bulk-uploading it when a cell signal is established. True spatial boundaries matter in the digital era."
  },
  {
    id: "dq-03",
    question: "Who can access it?",
    whyItMatters: "Vehicle telemetry can be purchased by insurance adjusters, marketing networks, third-party analytics firms, and remote infrastructure managers.",
    theReality: "Without local-first firewalls, you have a rotating door of stakeholders inspecting your acceleration indexes, trip habits, and cabin environmental levels."
  },
  {
    id: "dq-04",
    question: "How long is it retained?",
    whyItMatters: "Permanent records can resurface years later during structural Audits or policy revisions.",
    theReality: "Zero-Cloud principles advocate for volatile caching: transient performance telemetry should live briefly in memory to guide real-time safety, then dissipate completely."
  },
  {
    id: "dq-05",
    question: "What choices do I have?",
    whyItMatters: "If turning off cellular telemetry disables your navigation or safety features, it's coercion, not a choice.",
    theReality: "Drivers should have physical or direct software levers to go quiet — maintaining localized computing safety without forcing outside network communication."
  },
  {
    id: "dq-06",
    question: "What should I understand before using connected technologies?",
    whyItMatters: "Every network connection creates a vector. Drivers should recognize the trade-off of convenience versus long-term security.",
    theReality: "Being fully aware of whether your driving metrics are processed locally or globally is the necessary foundation for intelligent, safe journeys."
  }
];

export const APPROACH_PILLARS: ApproachPillar[] = [
  {
    title: "Educational-First Mindset",
    subtitle: "Demystifying Telemetry",
    description: "Instead of hiding technical processes behind legal disclosures, we construct simple visual explanations of what every sensor does. We believe an educated driver is the ultimate safety system."
  },
  {
    title: "Radical Transparency",
    subtitle: "Open Schemas",
    description: "We advocate for readable schematics detailing how diagnostic messages flow from CAN-bus systems to onboard processors. No hidden diagnostics chambers, no unmapped parameters."
  },
  {
    title: "Clear Communication",
    subtitle: "Conversational Diagnostics",
    description: "Technical codes like 'DTC-U0100' are translated into straightforward explanations, such as 'The dashboard lost connection with the central processor.' Clear words prevent driver concern."
  },
  {
    title: "Canadian Drivers",
    subtitle: "Designed for Real Terrain",
    description: "As a Canadian brand, we recognize the demands of extreme conditions—from frozen winter mountain passes to vast, un-networked routes where cloud connection is impossible. local processing isn't just a privacy standard; it represents core physical safety."
  },
  {
    title: "Responsible Design",
    subtitle: "No Product Promises",
    description: "This is a blueprint for the future. We make no false claims that every gadget operates with complete zero-cloud isolation today. Instead, we pledge to design each component with maximum on-vehicle containment in mind."
  }
];

export const MYTH_REALITIES: MythReality[] = [
  {
    myth: "Privacy means avoiding technology.",
    reality: "Privacy means understanding technology.",
    explanation: "You do not need to live off-grid in the forest to remain private. By establishing clean local boundaries, drivers can harness cutting-edge telemetry, sensor configurations, and active diagnostics without surrendering their digital identities."
  },
  {
    myth: "Connected vehicles are inherently bad.",
    reality: "Connected technologies can provide benefits when used responsibly.",
    explanation: "Vehicle-to-Infrastructure (V2X) sensors and instant traffic analytics save countless lives in blizzards. When structured to handle critical telemetry locally whilst using anonymous, one-way network links, systems keep drivers protected without tracking them."
  },
  {
    myth: "Privacy requires technical expertise.",
    reality: "Drivers deserve simple explanations.",
    explanation: "Opaque digital structures are a choice made by designers, not an unavoidable law of engineering. We believe privacy dashboards should be as intuitive to read and toggle as turning on your windshield wipers."
  }
];

export const COMMITMENT_CARDS: CommitmentCard[] = [
  {
    title: "Strive to Communicate Clearly",
    objective: "Eradicate Opaque Notices",
    action: "Every notification and prompt must use humble, straightforward terminology that prioritizes driver awareness over corporate safety margins."
  },
  {
    title: "Explain Concepts Simply",
    objective: "Humanize Automotive Software",
    action: "We promise to translate diagnostic streams, electronic sensor alerts, and network metrics into plain-English analogies that any member of the family can grasp."
  },
  {
    title: "Respect Driver Awareness",
    objective: "Anti-Distraction Principles",
    action: "We will never design interfaces to trigger artificial urgency, manipulate choices with dark patterns, or trade deep mental focus for digital engagement."
  },
  {
    title: "Avoid Unnecessary Complexity",
    objective: "Elegance of Restraint",
    action: "If a function does not offer direct utility or fundamental safety benefits to the driver, we reject its deployment. Omission is a design success."
  },
  {
    title: "Promote Informed Decision-Making",
    objective: "Independent Autonomy",
    action: "We believe drivers can make great safety and data choices when provided simple, visual tools displaying information flows in real-time."
  },
  {
    title: "Avoid Misleading Claims",
    objective: "Strict Ethical Standard",
    action: "We of Astrateq reject absolute guarantees or claiming complete product isolation. We outline our design paths with clinical honesty."
  }
];

export const RESOURCES: ResourceItem[] = [
  {
    id: "digital-compatibility",
    title: "Digital Vehicle Compatibility & Safety Guide",
    type: "Educational Booklet",
    readTime: "8 min read",
    description: "An open blueprint explaining how different physical vehicle models interface with external hardware and portable diagnostic tools.",
    contentMarkup: `
# Digital Vehicle Compatibility & Safety Guide
### Version 2.4 | Astrateq Educational Series

This booklet explains how consumer telematics connect with modern vehicle bus architectures. Our goal is to empower drivers to understand the physical and digital link points on their vehicles.

## The Onboard Diagnostic Port (OBD-II)
Since 1996, cars sold in Canada have been equipped with a standardized physical diagnostic port, typically located under the steering column. 
- **The Role:** It acts as an open digital window into your vehicle’s internal Controller Area Network (CAN-bus).
- **The Risk:** Most commercial telematics dongles plug into this port and stream every raw sensor packet directly to cloud databases via 4G cellular links, completely unencrypted.

## The Local Isolation Alternative
Astrateq’s design standard champions local physical sandboxing. Instead of constant cellular links, a driver should be able to:
1. Fetch diagnostic codes locally over a short-range physical link.
2. Store reports inside secure, local flash memory belonging to the driver.
3. Fully choose if and when to export these summaries.

## Real Terrain Compatibility
Our reference structures support standard J1979 protocols. We verify that local diagnostic reading does not disrupt safety-critical systems like anti-lock brakes (ABS), traction control, or steering actuators.
    `
  },
  {
    id: "diagnostic-report",
    title: "Diagnostic Compatibility Report",
    type: "Interactive Reference",
    readTime: "5 min read",
    description: "A plain-English analysis of sensor payloads across standard automotive tiers, highlighting what is processed locally versus what commercial brands send to global clouds.",
    contentMarkup: `
# Diagnostic Compatibility Report
### Comparative Telemetry Metrics

How do manufacturers treat your vehicle’s pulse? Here is a transparent look at standard automotive sensor streams, comparing industry practice with Astrateq’s Zero-Cloud design concept.

| Sensor Stream | Common Industry Default | The Zero-Cloud Philosophy standard |
| :--- | :--- | :--- |
| **G-Force / Acceleration** | Uploaded to remote databases to build a profile of your driving aggression. | Kept in temporary system volatility on the car to guide local traction controls. |
| **GPS / Location Data** | Tracked continuously and linked to accounts, creating a chronic history of your routes. | Calculated entirely on-car with standard offline maps. Network is only hit to fetch road alerts. |
| **Windshield Wiper State** | Shared to forecast weather patterns globally with corporate metadata. | Kept local to initiate wiper motors. Requires zero network awareness. |
| **Cabin Audio Controls** | Processed through external cloud servers for voice recognition algorithms. | Handled via localized, offline word models running on dedicated interior digital chips. |
    `
  },
  {
    id: "founding-member",
    title: "Founding Member Guide",
    type: "Philosophy Document",
    readTime: "12 min read",
    description: "Our core letter to early supporters outlining the vision of individual device sovereignty and safety-first Canadian engineering.",
    contentMarkup: `
# Founding Member Guide
### Designing With Integrity for a Brave Digital Future

To our early supporters:

This document lays down the social contract of Astrateq Gadgets. We did not set out to build another tech company that treats personal safety and telemetry statistics as fuel for cloud advertising algorithms.

## Our Pillars
1. **The Sovereignty of the Cabin:** The space inside your vehicle is private. It is a home on wheels. 
2. **True Canadian Engineering:** Built to handle cold weather, remote roads, and environments where high-speed cellular networks cannot be taken for granted. Local processing is standard utility.
3. **No Hidden Costs:** We reject recurring premium subscriptions that restrict access to information your car already generates naturally.

We thank you for participating in this design transition. Let’s build an era where drivers remain firmly in the conversation.
    `
  },
  {
    id: "future-educational",
    title: "Future Educational Resources",
    type: "Resource Roadmap",
    readTime: "4 min read",
    description: "A public repository roadmap tracking our scheduled releases of transparent vehicle computing modules and open diagnostic wireframes.",
    contentMarkup: `
# Future Educational Resources & Roadmap
### Open-Source Automotive Strategy

Privacy is an ongoing conversation, not a static product state. Here is what our design teams are preparing to release for download soon:

- **Interactive Bus Analyzer (Fall 2026):** A visual simulation playground that lets you map out safe OBD signals using your browser.
- **Privacy Standard Document 1.0 (Winter 2026):** A proposed guidelines document for open-source automotive privacy audits, designed for regulatory standards.
- **Telemetry Playground (Spring 2027):** Lightweight, local firmware scripts designed for safety advocates who wish to monitor their car’s diagnostic health without remote data transmission.
    `
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    topic: "Privacy",
    question: "What is vehicle privacy and why does it matter today?",
    answer: "A vehicle is a physically secure shell where individuals have high expectations of personal privacy. As cars became mobile computers, they gained the power to track your driving habits, location histories, and cabin interactions. Vehicle privacy ensures this rich material remains physical to you, avoiding remote exploitation."
  },
  {
    id: 2,
    topic: "Privacy",
    question: "How did vehicle data collection become so common without driver awareness?",
    answer: "Historically, electronics were integrated into cars quietly for mechanical diagnostics. Over time, as wireless modems became standard, manufacturers realized this data could be sent back automatically. Since it occurred in the background under long, default terms of service, most drivers remained completely unaware."
  },
  {
    id: 3,
    topic: "Privacy",
    question: "Who typically buys, sells, or accesses connected car records?",
    answer: "Data analytic firms, insurance brokers, data brokers, and marketing networks seek detailed driving diagnostics to construct behavioral algorithms. Raw location data and acceleration metrics are highly sought after to forecast consumer habits and write custom policy models."
  },
  {
    id: 4,
    topic: "Connected Vehicles",
    question: "Why do cars need sensors and internet connectivity in the first place?",
    answer: "Sensors are critical for passive safety. Antilock brakes, tire pressure trackers, and collision detection rely on rapid sensor readings. Connectivity is useful for receiving safety bulletins, real-time traffic hazards, and remote emergency signals. The key is isolating safety systems from external collection nodes."
  },
  {
    id: 5,
    topic: "Connected Vehicles",
    question: "Do cars collect location coordinates continuously, even when park mode is active?",
    answer: "Many connected vehicles maintain a low-power telemetry sleep cycle that pings GPS satellites and cellular antennas periodically. This is sold under the guise of 'theft tracking,' but it builds a continuous history of where you dwell, sleep, work, and dine."
  },
  {
    id: 6,
    topic: "Connected Vehicles",
    question: "How can spatial telemetry from cameras and LIDAR arrays be safely protected?",
    answer: "By keeping the video and light feed isolated on a local processing card. There is no reason to stream raw spatial video of Canadian streets back to a global server. The car should digest the visual space locally for navigation, then immediately disregard the generic visual files."
  },
  {
    id: 7,
    topic: "Local Processing",
    question: "What does 'local processing' mean for an everyday driver?",
    answer: "It means that the calculations required to run your safety alerts, dashboard gauges, and fuel diagnostics happen directly on the computer chips housed inside your physical car. Your information stays inside the vehicle rather than being sent over the airwaves to be compiled on a cloud computer."
  },
  {
    id: 8,
    topic: "Local Processing",
    question: "Why is analyzing driver data on-vehicle safer than processing it in the cloud?",
    answer: "Local data is physically bounded by your vehicle. To steal it, someone must physically access your passenger compartment. Cloud-hosted databases, however, represent single points of failure that can be penetrated remotely by bad actors thousands of miles away."
  },
  {
    id: 9,
    topic: "Local Processing",
    question: "Does local processing limit the intelligent response speed of active safety systems?",
    answer: "Quite the opposite. Processing data directly on-vehicle eliminates cellular link latency. In a split-second emergency, relying on a 5G connection to decide when to pre-charge a brake pad is extremely dangerous. Local computing ensures maximum responsiveness."
  },
  {
    id: 10,
    topic: "Technology Basics",
    question: "When is cloud processing actually necessary or useful in modern vehicles?",
    answer: "Cloud databases excel at aggregate information: compiling anonymized road temperature data to warn future drivers of black ice, downloading global firmware updates, and aggregating overall traffic volumes. It is useful for general trends, not for specific driver diagnostics."
  },
  {
    id: 11,
    topic: "Connected Vehicles",
    question: "What are the primary security risks of sending raw telematics directly to databases?",
    answer: "Once telematics escape the vehicle, they are recorded permanently. Security risks include systemic API leaks, unauthorized access by subsidiary partners, database misconfigurations, and long-term storage profiles that can affect your personal insurance standing."
  },
  {
    id: 12,
    topic: "Local Processing",
    question: "How does Astrateq's Zero-Cloud design reference help minimize cloud exposures?",
    answer: "Zero-Cloud is our guiding design philosophy. It forces engineers to design products with the assumption that a network connection is completely absent. Every option, setting, and diagnostic metric must run in standalone isolation unless you explicitly choose to connect."
  },
  {
    id: 13,
    topic: "Driver Awareness",
    question: "How can a driver verify exactly what information their vehicle is recording?",
    answer: "Under current commercial setups, it is extremely difficult. It often requires purchasing third-party OBD scanners or filing formal privacy act requests. We support a future where a simple 'Data Transparency Dashboard' is built into every vehicle screen."
  },
  {
    id: 14,
    topic: "Driver Awareness",
    question: "Why aren't traditional seventy-page legal terms and conditions sufficient?",
    answer: "Legalese terms are designed to transfer liability and secure broad legal consent, not to educate the driver. They are deliberately long and complex to encourage clicking 'Agree' without reading. Drivers deserve clear plain-English summaries, not fatigue."
  },
  {
    id: 15,
    topic: "Driver Awareness",
    question: "What is clear plain-English communication in vehicular software?",
    answer: "It is the commitment to avoid technical acronyms and complex engineering variables. Instead of showing dry error codes, the software should state clearly: 'The steering angle sensor detected light frost buildup; self-tuning complete. No data was shared.'"
  },
  {
    id: 16,
    topic: "Driver Awareness",
    question: "Can I request a complete export of the information my car stores locally?",
    answer: "Under Canadian PIPEDA privacy laws, you have a right to access your recorded data. Astrateq advocates for physical hardware outputs that let you copy your local trip log directly onto a standard USB key, with no fees or hurdles."
  },
  {
    id: 17,
    topic: "Technology Basics",
    question: "Do I need a computer science background to take back control of my vehicle data?",
    answer: "Absolutely not. Privacy is a human right, and human rights should not have technical pre-requisites. Systems must be built so an individual of any background can inspect, configure, and secure their driving cabin with simple, friendly toggles."
  },
  {
    id: 18,
    topic: "Technology Basics",
    question: "How does Astrateq promote educational-first software interfaces?",
    answer: "We design with visual storytelling. Our templates show how electric currents flow, what parameters live in computer chips, and exactly how data pathways diverge. When drivers see the map of their system, they intuitively master it."
  },
  {
    id: 19,
    topic: "Privacy",
    question: "Are there unique regulatory frameworks safeguarding drivers in Canada?",
    answer: "Canada is protected under PIPEDA and provincial acts like Quebec's Law 25, which demand strict limits on automated tracking and clear consent mechanics. However, automotive systems often lag behind these legal updates, calling for local-first initiatives."
  },
  {
    id: 20,
    topic: "Future Trends",
    question: "How do Canadian weather patterns and geography influence local-first design considerations?",
    answer: "Canada contains vast geographical spaces, freezing cold winters, and thousands of kilometers of unlinked forest paths. A vehicle that depends on a persistent internet cloud to unlock its secondary features or calculate local fuel economy is a safety hazard in a Canadian winter. Local-first design ensures absolute reliability under any sky."
  }
];

export interface PrivacyMatterCard {
  title: string;
  category: string;
  description: string;
  iconName: string;
}

export interface ApproachItem {
  title: string;
  description: string;
}

export interface PrivacyPrinciple {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export const PRIVACY_MATTERS_CARDS: PrivacyMatterCard[] = [
  {
    title: "Daily Commutes",
    category: "Routine Signature Protection",
    description: "Your routine is your signature. Repeating the same route to the office, the cafe, and home generates a predictable baseline that telemetry algorithms use to catalog your life. Local processing ensures your calendar remains private.",
    iconName: "Car"
  },
  {
    title: "Family Road Trips",
    category: "Leisure Location Isolation",
    description: "Vacations should be about winding down, not generating coordinate coordinates. Frequent stops at parks, detours, and rest areas create dynamic profiles that escape your control on cloud systems. Drive offline.",
    iconName: "MapPin"
  },
  {
    title: "School Pickups",
    category: "Domestic Routine Protection",
    description: "The safety of children is paramount. Logging school zones, activity drop-offs, and relative playground coordinates exposes critical domestic patterns. Pupil travel logs should never leave your physical vehicle computer.",
    iconName: "Shield"
  },
  {
    title: "Urban Driving",
    category: "Civic Transit Isolation",
    description: "Cities are dense with wireless tracking clusters and smart towers. Navigating high-traffic lanes tracks you across every toll lane, shopping stop, and corner. A local diagnostic firewall blocks passive telemetry collection.",
    iconName: "Layers"
  },
  {
    title: "Long Highway Travel",
    category: "Interstate Path Anonymization",
    description: "Vast expanses of empty asphalt are perfect for open-road freedom. But continuous cellular networks map speed and timing metrics to build permanent remote trails. Volatile local RAM keeps your tracks anonymous.",
    iconName: "Network"
  }
];

export const APPROACH_AIM: ApproachItem[] = [
  {
    title: "Explain things clearly",
    description: "We translate complex automotive computer codes into humble, straightforward statements that prioritize user understanding."
  },
  {
    title: "Encourage awareness",
    description: "We reveal what information is generated by active systems so drivers can make fully informed decisions."
  },
  {
    title: "Promote transparency",
    description: "We document system configurations and database parameters openly to build trust through verifiable facts."
  },
  {
    title: "Use simple language",
    description: "We avoid dry jargon, legalistic fatigue, and marketing hype to provide comfortable, educational manuals."
  },
  {
    title: "Help drivers learn",
    description: "We publish free diagnostics guides, compatibility reports, and structural diagrams to democratize technical literacy."
  },
  {
    title: "Respect privacy",
    description: "We treat local containment as our absolute non-negotiable engineering baseline for every new accessory concept."
  }
];

export const APPROACH_AVOID: ApproachItem[] = [
  {
    title: "Fear-based messaging",
    description: "We reject alarmist warnings, exaggerated safety threats, and panic-inducing alerts designed to manipulate behavior."
  },
  {
    title: "Unnecessary complexity",
    description: "We design out complicated submenus, multi-step configurations, and confusing pathways that exhaust driver patience."
  },
  {
    title: "Confusing terminology",
    description: "We say no to seventy-page agreements, fine print, and opaque formulations that hide background cell-uploads."
  },
  {
    title: "Privacy buzzwords",
    description: "We skip flashy marketing speech, empty compliance branding, and vague buzzwords used to normalize default tracking."
  },
  {
    title: "Technical overload",
    description: "We refuse to hide behind engineering metrics or crowd dashboard displays with unrequested technical telemetry."
  },
  {
    title: "Hidden explanations",
    description: "We do not bury limitations, network dependency disclaimers, or design choices inside distant footnotes."
  }
];

export const PRIVACY_PRINCIPLES: PrivacyPrinciple[] = [
  {
    title: "Clarity First",
    subtitle: "Plain English Delivery",
    description: "System alerts and diagnosis writeups are designed to be immediately understood by any family member, stripped of legalistic jargon.",
    iconName: "Eye"
  },
  {
    title: "Awareness Matters",
    subtitle: "Visual Diagnostic Feed",
    description: "You cannot steer what you cannot see. We present clear maps showing active system parameters and data boundaries in real-time.",
    iconName: "Sliders"
  },
  {
    title: "Transparency Builds Trust",
    subtitle: "Verifiable Configurations",
    description: "We publish open structural definitions and database schemas so safety advocates can inspect and verify our system architecture.",
    iconName: "ShieldCheck"
  },
  {
    title: "Privacy Is A Design Choice",
    subtitle: "Absolute Container Standards",
    description: "Local processing must be built directly into the software blueprint, securing driver assets at the foundational layer.",
    iconName: "Cpu"
  },
  {
    title: "Simplicity Over Complexity",
    subtitle: "Intentional Modular Layouts",
    description: "Eliminating superfluous network check-ins is a design victory. We build with elegant restraint to focus on what you actually need.",
    iconName: "Layers"
  },
  {
    title: "Drivers Come First",
    subtitle: "Cabin Sovereignty Priority",
    description: "The individual holding the steering wheel is the absolute administrator of the cabin. Digital systems must support the driver, not remote platforms.",
    iconName: "Car"
  }
];
