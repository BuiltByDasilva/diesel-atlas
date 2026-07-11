window.WRENCHIE_KNOWLEDGE = {
  version: 1,
  identity: {
    name: "Mr. Wrenchie",
    role: "Transportation safety and rulemaking guide",
    promise: "Source first. Status clear. Jurisdiction visible.",
    boundary: "Educational information only. Verify current federal, state, local, employer, and equipment-specific requirements before acting."
  },
  agencyScopes: {
    all: [
      { slug: "national-highway-traffic-safety-administration", label: "NHTSA" },
      { slug: "federal-highway-administration", label: "FHWA" },
      { slug: "federal-motor-carrier-safety-administration", label: "FMCSA" },
      { slug: "federal-aviation-administration", label: "FAA" },
      { slug: "federal-railroad-administration", label: "FRA" },
      { slug: "coast-guard", label: "Coast Guard" },
      { slug: "maritime-administration", label: "MARAD" }
    ],
    car: [
      { slug: "national-highway-traffic-safety-administration", label: "NHTSA" },
      { slug: "federal-highway-administration", label: "FHWA" }
    ],
    truck: [
      { slug: "federal-motor-carrier-safety-administration", label: "FMCSA" },
      { slug: "national-highway-traffic-safety-administration", label: "NHTSA" },
      { slug: "federal-highway-administration", label: "FHWA" }
    ],
    boat: [
      { slug: "coast-guard", label: "Coast Guard" },
      { slug: "maritime-administration", label: "MARAD" }
    ],
    plane: [
      { slug: "federal-aviation-administration", label: "FAA" }
    ],
    train: [
      { slug: "federal-railroad-administration", label: "FRA" }
    ]
  },
  sources: [
    {
      id: "federal-register",
      name: "Federal Register API",
      kind: "Rules and notices",
      url: "https://www.federalregister.gov/developers/documentation/api/v1",
      note: "Public, keyless API. FederalRegister.gov is informational; linked govinfo PDFs are the official editions."
    },
    {
      id: "congress",
      name: "Congress.gov RSS",
      kind: "Legislation presented to the President",
      url: "https://www.congress.gov/rss/presented-to-president.xml",
      note: "A presented bill has passed both chambers but is not necessarily law."
    },
    {
      id: "nhtsa-recalls",
      name: "NHTSA Recalls API",
      kind: "Vehicle safety recalls",
      url: "https://www.nhtsa.gov/nhtsa-datasets-and-apis",
      note: "Public, keyless vehicle recall data. Confirm applicability with the exact VIN and manufacturer instructions."
    }
  ],
  transportKeywords: [
    "transportation",
    "highway",
    "motor vehicle",
    "vehicle safety",
    "commercial driver",
    "truck",
    "trucking",
    "aviation",
    "aircraft",
    "railroad",
    "rail safety",
    "maritime",
    "vessel",
    "bridge",
    "transit",
    "infrastructure"
  ],
  lessons: [
    {
      id: "seat-belts-every-trip",
      modes: ["all", "car", "truck"],
      status: "Safety guidance",
      title: "Buckle every occupant for every trip",
      summary: "Use a lap-and-shoulder belt correctly in every seating position. Air bags supplement seat belts; they do not replace them.",
      why: "A belt helps keep an occupant inside the vehicle and positions the body for the restraint system to work as designed.",
      next: "Check belt fit, seating position, child-restraint needs, and the law in the state where the vehicle is operating.",
      jurisdiction: "United States; state belt laws vary",
      sourceLabel: "NHTSA Seat Belts",
      sourceUrl: "https://www.nhtsa.gov/vehicle-safety/seat-belts",
      keywords: ["seat belt", "buckle", "air bag", "restraint", "passenger"]
    },
    {
      id: "distracted-driving",
      modes: ["all", "car", "truck"],
      status: "Safety guidance",
      title: "Driving requires the full visual, manual, and mental task",
      summary: "Set navigation, mirrors, climate, and cargo before moving. Do not text or handle a phone while driving.",
      why: "Distraction takes attention away from detection, judgment, and vehicle control. State restrictions and employer rules may be stricter than a general safety recommendation.",
      next: "Use a safe stopping place before interacting with a device and verify the current law for the route.",
      jurisdiction: "United States; state and commercial rules vary",
      sourceLabel: "NHTSA Distracted Driving",
      sourceUrl: "https://www.nhtsa.gov/risky-driving/distracted-driving",
      keywords: ["phone", "texting", "distracted", "hands free", "navigation"]
    },
    {
      id: "speed-for-conditions",
      modes: ["all", "car", "truck"],
      status: "Safety guidance",
      title: "A posted limit is not a promise that conditions are safe",
      summary: "Obey posted limits and reduce speed for visibility, weather, traffic, road surface, work zones, curves, and vehicle load.",
      why: "Stopping distance and available traction change with speed, tires, brakes, grade, load, and surface conditions.",
      next: "Check route-specific signs and state law. Commercial fleets may impose lower operating limits.",
      jurisdiction: "United States; state and local law controls",
      sourceLabel: "NHTSA Speeding",
      sourceUrl: "https://www.nhtsa.gov/risky-driving/speeding",
      keywords: ["speed", "speeding", "weather", "stopping distance", "traction"]
    },
    {
      id: "tire-readiness",
      modes: ["all", "car", "truck"],
      status: "Safety guidance",
      title: "Inspect tires cold and before highway loads",
      summary: "Use the vehicle placard pressure, inspect tread and sidewalls, verify load capacity, and address TPMS warnings before travel.",
      why: "Pressure, damage, age, loading, and heat affect grip and tire durability. The tire sidewall maximum is not the normal vehicle inflation target.",
      next: "Use the exact vehicle and tire manufacturer limits, including dual-tire and commercial service requirements.",
      jurisdiction: "United States; equipment and commercial rules may apply",
      sourceLabel: "NHTSA Tire Safety",
      sourceUrl: "https://www.nhtsa.gov/vehicle-safety/tires",
      keywords: ["tire", "pressure", "tread", "tpms", "load", "sidewall"]
    },
    {
      id: "work-zone-discipline",
      modes: ["all", "car", "truck"],
      status: "Safety guidance",
      title: "Treat every work zone as an active worksite",
      summary: "Slow early, increase following distance, expect lane shifts and stopped traffic, obey flaggers, and avoid device use.",
      why: "Workers, temporary geometry, queues, and changing control devices create hazards even when construction equipment is not immediately visible.",
      next: "Follow posted temporary traffic controls. Penalties and speed rules vary by jurisdiction and work-zone status.",
      jurisdiction: "United States; state and local enforcement varies",
      sourceLabel: "FHWA Work Zone Management",
      sourceUrl: "https://ops.fhwa.dot.gov/wz/",
      keywords: ["work zone", "construction", "flagger", "lane shift", "temporary traffic control"]
    },
    {
      id: "roadside-incident",
      modes: ["all", "car", "truck"],
      status: "Safety guidance",
      title: "Protect the scene before attempting roadside work",
      summary: "Move out of travel lanes when possible, make the vehicle conspicuous, keep people away from traffic, and call trained responders when exposure cannot be controlled.",
      why: "A minor breakdown becomes a severe hazard when people work beside moving traffic without adequate space, visibility, or traffic control.",
      next: "Verify the state's Move Over law and company incident procedure. Do not stand where an impact could push the disabled vehicle into you.",
      jurisdiction: "United States; Move Over laws vary by state",
      sourceLabel: "FHWA Traffic Incident Management",
      sourceUrl: "https://ops.fhwa.dot.gov/tim/",
      keywords: ["roadside", "breakdown", "move over", "incident", "emergency", "shoulder"]
    },
    {
      id: "child-passenger-fit",
      modes: ["all", "car"],
      status: "Safety guidance",
      title: "Choose child restraints by fit, not age alone",
      summary: "Use the restraint that fits the child's size, the seat, and both manufacturers' instructions; keep children in the rear seat through age 12.",
      why: "Correct selection, installation, harnessing, and belt fit determine whether the restraint can manage crash forces.",
      next: "Check height and weight limits, vehicle instructions, state law, recalls, and a local inspection resource when uncertain.",
      jurisdiction: "United States; state child-restraint laws vary",
      sourceLabel: "NHTSA Car Seats and Booster Seats",
      sourceUrl: "https://www.nhtsa.gov/vehicle-safety/car-seats-and-booster-seats",
      keywords: ["child", "car seat", "booster", "tether", "rear facing", "passenger"]
    },
    {
      id: "recall-verification",
      modes: ["all", "car", "truck"],
      status: "Safety guidance",
      title: "Model-level recall results are a screening step",
      summary: "A year, make, and model search can surface relevant campaigns, but only a VIN-level check can confirm whether a specific vehicle is included and unrepaired.",
      why: "Campaigns can be limited by production date, plant, component, configuration, or replacement equipment.",
      next: "Run the exact VIN at NHTSA Recalls and follow the manufacturer's remedy instructions.",
      jurisdiction: "United States federal vehicle safety",
      sourceLabel: "NHTSA Recalls",
      sourceUrl: "https://www.nhtsa.gov/recalls",
      keywords: ["recall", "campaign", "vin", "defect", "remedy"]
    },
    {
      id: "commercial-hours-of-service",
      modes: ["all", "truck"],
      status: "Current regulation summary",
      title: "Hours-of-service limits depend on the operation",
      summary: "Property- and passenger-carrying drivers have different driving, on-duty, break, and rest limits under 49 C.F.R. Part 395.",
      why: "The applicable rule depends on carrier type, operation, exceptions, records, and the driver's recent duty history.",
      next: "Use the current regulation, FMCSA guidance, carrier policy, and exact duty record. A summary is not a compliance determination.",
      jurisdiction: "United States interstate commercial motor carriers",
      sourceLabel: "FMCSA Hours of Service",
      sourceUrl: "https://www.fmcsa.dot.gov/regulations/hours-service/summary-hours-service-regulations",
      keywords: ["hours of service", "hos", "eld", "commercial driver", "rest", "14 hour", "11 hour"]
    },
    {
      id: "bill-is-not-law",
      modes: ["all", "car", "truck", "boat", "plane", "train"],
      status: "Legal literacy",
      title: "A bill is not current law",
      summary: "Introduced, committee, passed-one-chamber, and presented-to-the-President are legislative stages. Enactment and a public law number establish that a bill became law.",
      why: "Treating a proposal or pending bill as an enforceable requirement can mislead operators and the public.",
      next: "Check the latest actions, presidential disposition, public law number, effective provisions, and any later implementing rules.",
      jurisdiction: "United States federal legislation",
      sourceLabel: "Congress.gov Legislative Process",
      sourceUrl: "https://www.congress.gov/help/legislative-process",
      keywords: ["bill", "law", "congress", "legislation", "public law", "president", "enacted"]
    },
    {
      id: "proposed-rule-is-not-final",
      modes: ["all", "car", "truck", "boat", "plane", "train"],
      status: "Legal literacy",
      title: "A proposed rule is not a final rule",
      summary: "A proposed rule describes an agency's plan and invites participation. A final rule states the adopted action and normally identifies effective and compliance dates.",
      why: "Notices, proposed rules, final rules, and corrections have different legal meaning and timing.",
      next: "Read the document type, dates, regulatory text, docket, later corrections, and the current eCFR before relying on a requirement.",
      jurisdiction: "United States federal rulemaking",
      sourceLabel: "Federal Register Reader Aids",
      sourceUrl: "https://www.federalregister.gov/reader-aids/understanding-the-federal-register",
      keywords: ["proposed rule", "final rule", "notice", "comment", "effective date", "federal register"]
    },
    {
      id: "ecfr-current-reference",
      modes: ["all", "car", "truck", "boat", "plane", "train"],
      status: "Legal literacy",
      title: "Use the current CFR after reading a rulemaking document",
      summary: "The Federal Register publishes agency actions; the eCFR organizes the currently incorporated regulatory text for convenient research.",
      why: "A Federal Register item may amend only part of a rule, have a future effective date, or be followed by a correction or stay.",
      next: "Verify the official Federal Register PDF, effective date, affected CFR parts, and current eCFR text. Seek qualified legal guidance for a compliance decision.",
      jurisdiction: "United States federal regulations",
      sourceLabel: "eCFR Title 49 Transportation",
      sourceUrl: "https://www.ecfr.gov/current/title-49",
      keywords: ["cfr", "ecfr", "regulation", "federal register", "current rule", "title 49"]
    },
    {
      id: "aircraft-maintenance-authority",
      modes: ["all", "plane"],
      status: "Current regulation reference",
      title: "Aircraft maintenance starts with legal authority",
      summary: "14 C.F.R. Part 43 identifies who may perform maintenance and who may approve an aircraft or component for return to service.",
      why: "A technically possible task may still require certificated personnel, approved data, records, inspections, and a specific return-to-service approval.",
      next: "Check the exact task, certificate privileges, operator rules, current approved data, and required record entry before work begins.",
      jurisdiction: "United States civil aviation",
      sourceLabel: "eCFR 14 C.F.R. Part 43",
      sourceUrl: "https://www.ecfr.gov/current/title-14/part-43",
      keywords: ["faa", "aircraft", "maintenance", "return to service", "part 43", "airworthiness"]
    },
    {
      id: "marine-operating-rules",
      modes: ["all", "boat"],
      status: "Current regulation reference",
      title: "Navigation duties continue during maintenance and testing",
      summary: "Vessel operation remains subject to navigation, equipment, local waterway, environmental, and operator requirements during post-maintenance checks.",
      why: "A dockside repair checklist does not establish seaworthiness or replace the rules that apply to the vessel, waterway, or operator.",
      next: "Verify required equipment, weather and waterway restrictions, navigation rules, and a controlled test plan before departure.",
      jurisdiction: "United States waters; local rules may add requirements",
      sourceLabel: "eCFR Navigation and Navigable Waters",
      sourceUrl: "https://www.ecfr.gov/current/title-33",
      keywords: ["coast guard", "boat", "vessel", "navigation", "seaworthy", "waterway"]
    },
    {
      id: "rail-blue-signal",
      modes: ["all", "train"],
      status: "Current regulation reference",
      title: "Worker protection is established before rail work",
      summary: "Blue-signal requirements protect workers inspecting, testing, repairing, or servicing rolling equipment on, under, or between equipment.",
      why: "A maintenance reference cannot establish protection, qualification, track authority, inspection acceptance, or movement release.",
      next: "Apply the railroad's current rule, job briefing, blue-signal procedure, qualification requirements, and release authority.",
      jurisdiction: "United States railroad operations",
      sourceLabel: "eCFR 49 C.F.R. Part 218 Subpart B",
      sourceUrl: "https://www.ecfr.gov/current/title-49/part-218/subpart-B",
      keywords: ["fra", "rail", "blue signal", "worker protection", "rolling equipment", "track"]
    }
  ]
};
