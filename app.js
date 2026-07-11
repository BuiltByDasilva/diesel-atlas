(function () {
  const data = window.WA_DATA;
  const wrenchieKnowledge = window.WRENCHIE_KNOWLEDGE || {
    identity: { promise: "Source first. Status clear. Jurisdiction visible.", boundary: "Educational information only." },
    agencyScopes: {},
    transportKeywords: [],
    lessons: []
  };
  const WRENCHIE_CACHE_TTL = 4 * 60 * 60 * 1000;
  let wrenchieRefreshTimer = null;
  const variant = window.WA_VARIANT || {
    id: "wrenchatlas",
    name: "Lil Mechanic's: WrenchAtlas",
    familyPrefix: "Lil Mechanic's:",
    brandPrefix: "Wrench",
    brandAccent: "Atlas",
    mode: "all",
    lockMode: false,
    tagline: "American repair field guide"
  };
  const profiles = {
    all: {
      industry: "car",
      edition: "American Garage Edition",
      mascot: "Mr. Wrenchie",
      mascotTagline: "Tap me for the next smart move.",
      workspace: "Vehicle workspace",
      statusTitle: "Built for American repair freedom",
      statusText: "Free, open source, ad-free, and locally saved.",
      missionKicker: "American garage mission",
      standardTitle: "U.S. field format",
      standardText: "SAE + metric · ft-lb + N-m",
      identifier: { type: "vin", short: "VIN", label: "VIN decode", nav: "VIN Decode", placeholder: "Enter 17-character VIN", action: "Decode" },
      demo: { label: "2001 Corolla brake demo", vehicleId: "car-toyota-corolla-2001", mode: "car", make: "Toyota", systemId: "brakes", subsystemId: "front-disc" },
      rights: {
        kicker: "Freedom to fix",
        title: "Repair ownership is an American garage principle.",
        intro: "WrenchAtlas supports owners, independent mechanics, competition, and responsible repairs. These sourced facts are civic information, not legal advice.",
        cards: [
          { date: "June 29, 2026", title: "President Trump's Freedom to Fix memorandum", text: "Directs EPA to clarify lawful emissions-repair options and consider deprioritizing civil tampering enforcement for good-faith attempts to return an owner's vehicle to original configuration.", url: "https://www.whitehouse.gov/presidential-actions/2026/06/lowering-the-cost-of-living-by-promoting-the-freedom-to-fix/", link: "Read the White House memorandum" },
          { date: "Federal warranty baseline", title: "Your warranty and independent repair", text: "The FTC says independent service or aftermarket parts alone generally do not void a consumer warranty. Damage caused by a part or repair may still be excluded.", url: "https://consumer.ftc.gov/articles/auto-warranties-and-auto-service-contracts", link: "Read FTC consumer guidance" },
          { date: "37 C.F.R. 201.40", title: "Vehicle software diagnosis and repair", text: "A current Copyright Office exemption covers qualifying software access in lawfully acquired land vehicles and marine vessels for diagnosis, repair, lawful modification, and certain operational data access. Other laws still apply.", url: "https://www.copyright.gov/title37/201/37cfr201-40.html", link: "Read the current federal rule" }
        ],
        note: "Independent civic advocacy by JerseyPublishers. Not affiliated with or endorsed by the White House, President Donald J. Trump, the United States Government, the FTC, Google, NHTSA, Toyota, or any manufacturer. Emissions tampering remains unlawful; current law and exact service data control."
      }
    },
    car: {
      industry: "car",
      edition: "American Garage Edition",
      mascot: "Mr. Wrenchie",
      mascotTagline: "Know the car. Own the repair.",
      workspace: "Car workspace",
      statusTitle: "Car repair freedom, evidence first",
      statusText: "Free, open source, ad-free, and locally saved.",
      missionKicker: "American car mission",
      standardTitle: "U.S. garage format",
      standardText: "SAE + metric · ft-lb + N-m",
      identifier: { type: "vin", short: "VIN", label: "VIN decode", nav: "VIN Decode", placeholder: "Enter 17-character VIN", action: "Decode" },
      demo: { label: "2001 Corolla brake demo", vehicleId: "car-toyota-corolla-2001", mode: "car", make: "Toyota", systemId: "brakes", subsystemId: "front-disc" }
    },
    truck: {
      industry: "truck",
      edition: "American Fleet Edition",
      mascot: "Mr. Wrenchie",
      mascotTagline: "Stage the work. Protect the route.",
      workspace: "Truck workspace",
      statusTitle: "Built for America's working fleets",
      statusText: "Free field references with local job records.",
      missionKicker: "American fleet mission",
      standardTitle: "Fleet field format",
      standardText: "SAE + metric · psi + kPa",
      identifier: { type: "vin", short: "VIN", label: "Truck VIN", nav: "VIN Decode", placeholder: "Enter 17-character truck VIN", action: "Decode" },
      demo: { label: "Cascadia air-brake demo", vehicleId: "truck-freightliner-cascadia-2018", mode: "truck", make: "Freightliner", systemId: "air-brakes", subsystemId: "drum-air-brake" },
      rights: {
        kicker: "Freedom to keep America moving",
        title: "Independent truck maintenance supports American commerce.",
        intro: "DieselAtlas pairs repair freedom with the higher safety duties attached to commercial vehicles. Regulations and exact fleet procedures control.",
        cards: [
          { date: "June 29, 2026", title: "Federal Freedom to Fix direction", text: "President Trump's memorandum addresses affordable vehicle repair options and directs EPA guidance on lawful emissions repairs. It does not authorize emissions tampering or displace commercial-vehicle rules.", url: "https://www.whitehouse.gov/presidential-actions/2026/06/lowering-the-cost-of-living-by-promoting-the-freedom-to-fix/", link: "Read the White House memorandum" },
          { date: "49 C.F.R. Part 393", title: "Commercial brake systems must remain compliant", text: "FMCSA rules require adequate service, parking, and emergency brakes and prescribe requirements for actuators, slack adjusters, linings, drums, rotors, hoses, and performance.", url: "https://www.ecfr.gov/current/title-49/part-393/subpart-C", link: "Read current FMCSA brake rules" },
          { date: "37 C.F.R. 201.40", title: "Commercial vehicle software repair", text: "The current Copyright Office exemption includes qualifying software access in lawfully acquired commercial land vehicles for diagnosis, repair, lawful modification, and operational data. Other laws still apply.", url: "https://www.copyright.gov/title37/201/37cfr201-40.html", link: "Read the current federal rule" }
        ],
        note: "Independent civic and technical reference by JerseyPublishers. Not endorsed by the White House, President Donald J. Trump, FMCSA, DOT, Google, NHTSA, Freightliner, or any fleet or manufacturer. Commercial brake, emissions, inspection, and return-to-service rules remain fully applicable."
      }
    },
    boat: {
      industry: "boat",
      edition: "American Dockside Edition",
      mascot: "Mr. Wrenchie",
      mascotTagline: "Identify. Service. Return seaworthy.",
      workspace: "Vessel workspace",
      statusTitle: "Open maintenance for American boaters",
      statusText: "Local HIN checks, marine tools, and evidence notes.",
      missionKicker: "American dockside mission",
      standardTitle: "Marine field format",
      standardText: "SAE + metric · dry + corrosion aware",
      identifier: { type: "hin", short: "HIN", label: "HIN check", nav: "HIN Check", placeholder: "Enter 12-character U.S. HIN", action: "Validate" },
      demo: { label: "Yamaha F150 impeller demo", vehicleId: "boat-yamaha-f150-2019", mode: "boat", make: "Yamaha", systemId: "outboard", subsystemId: "water-pump" },
      rights: {
        kicker: "American marine ownership",
        title: "Boat owners deserve useful maintenance access and clear safety limits.",
        intro: "MarineAtlas supports independent vessel care while separating lawful software access, hull identification, warranty facts, and seaworthiness obligations.",
        cards: [
          { date: "37 C.F.R. 201.40", title: "Marine software diagnosis and repair", text: "The current Copyright Office exemption includes qualifying access to software in lawfully acquired marine vessels for diagnosis, repair, lawful modification, and certain operational data. Other laws still apply.", url: "https://www.copyright.gov/title37/201/37cfr201-40.html", link: "Read the current federal rule" },
          { date: "33 C.F.R. 181.25", title: "U.S. hull identification format", text: "Covered boats use a 12-character HIN with no spaces, slashes, or hyphens. MarineAtlas validates that structure locally and does not claim to query an ownership registry.", url: "https://www.ecfr.gov/current/title-33/part-181/subpart-C", link: "Read Coast Guard HIN rules" },
          { date: "Consumer warranty baseline", title: "Independent service and consumer warranties", text: "For covered consumer products, the FTC says independent service or aftermarket parts alone generally do not void a warranty. Damage caused by them may still be excluded; contract and state terms matter.", url: "https://consumer.ftc.gov/articles/warranties", link: "Read FTC warranty guidance" }
        ],
        note: "Independent marine reference by JerseyPublishers. Not endorsed by the Coast Guard, Copyright Office, FTC, Google, Yamaha, Sea Ray, or any manufacturer. HIN validation is a local format check, not title, ownership, recall, or registration verification. Follow current marine safety and environmental rules."
      }
    },
    plane: {
      industry: "plane",
      edition: "American Hangar Edition",
      mascot: "Mr. Wrenchie",
      mascotTagline: "Know the authority. Protect airworthiness.",
      workspace: "Aircraft workspace",
      statusTitle: "Open references within FAA authority",
      statusText: "Local N-number notes with explicit maintenance limits.",
      missionKicker: "American hangar mission",
      standardTitle: "Aviation reference format",
      standardText: "Approved data · calibrated tools · logbook",
      identifier: { type: "nnumber", short: "N-number", label: "N-number check", nav: "N-number", placeholder: "Enter N-number, e.g. N172SP", action: "Validate" },
      demo: { label: "Cessna 172S wheel demo", vehicleId: "plane-cessna-172s-2005", mode: "plane", make: "Cessna", systemId: "landing-gear", subsystemId: "main-wheel-brake" },
      rights: {
        kicker: "American maintenance responsibility",
        title: "Aviation maintenance freedom operates inside airworthiness law.",
        intro: "AeroAtlas helps owners and mechanics stage references without blurring who may perform work, what qualifies as preventive maintenance, or who may approve return to service.",
        cards: [
          { date: "14 C.F.R. 43.3", title: "Who may perform aircraft maintenance", text: "Part 43 identifies authorized mechanics, repairmen, supervised persons, repair stations, operators, and limited pilot preventive-maintenance privileges. Certificate and operating limitations matter.", url: "https://www.ecfr.gov/current/title-14/part-43/section-43.3", link: "Read current Part 43 authority" },
          { date: "Part 43, Appendix A(c)", title: "Preventive maintenance is a defined list", text: "The federal list includes qualifying landing-gear tire work, wheel-bearing service, safety wire, spark plugs, batteries, and other listed tasks only when complex assembly is not involved.", url: "https://www.ecfr.gov/current/title-14/part-43/appendix-Appendix%20A%20to%20Part%2043", link: "Read the preventive-maintenance list" },
          { date: "FAA AC 43-12A", title: "Performance and return-to-service duties", text: "FAA guidance explains who may perform preventive maintenance, applicable performance standards, approval for return to service, and required records. The advisory circular remains active.", url: "https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1028826", link: "Read FAA preventive-maintenance guidance" }
        ],
        note: "Independent informational reference by JerseyPublishers. Not endorsed by FAA, DOT, Google, Cessna, Piper, or any manufacturer. This app does not authorize work or return to service. Use current approved data, comply with Parts 43, 65, 91 and applicable operating rules, and involve appropriately certificated personnel."
      }
    },
    train: {
      industry: "train",
      edition: "American Rail Edition",
      mascot: "Mr. Wrenchie",
      mascotTagline: "Protect the track. Verify the release.",
      workspace: "Locomotive workspace",
      statusTitle: "Open references for America's rail workforce",
      statusText: "Local unit IDs with FRA-bound safety gates.",
      missionKicker: "American rail mission",
      standardTitle: "Rail shop format",
      standardText: "Blue signal · qualified person · records",
      identifier: { type: "unit", short: "Unit ID", label: "Locomotive unit ID", nav: "Unit ID", placeholder: "Reporting mark and unit, e.g. UP 1234", action: "Validate" },
      demo: { label: "GP38-2 brake-rigging demo", vehicleId: "train-emd-gp38-2-1975", mode: "train", make: "EMD", systemId: "locomotive-brakes", subsystemId: "foundation-brake-gear" },
      rights: {
        kicker: "American rail responsibility",
        title: "Rail maintenance keeps American industry moving under strict safety law.",
        intro: "RailAtlas supports skilled railroad workers with orientation and job staging while keeping worker protection, qualification, inspection, and release authority explicit.",
        cards: [
          { date: "49 C.F.R. Part 229", title: "Locomotive safety standards", text: "FRA rules cover locomotive inspections, tests, brake systems, foundation brake gear, wheelsets, electrical equipment, records, and other minimum safety requirements.", url: "https://www.ecfr.gov/current/title-49/part-229", link: "Read current locomotive standards" },
          { date: "49 C.F.R. Part 232", title: "Freight brake qualification and testing", text: "Freight brake work and tests depend on trained, qualified persons or qualified mechanical inspectors assigned by the railroad for the specific functions and equipment.", url: "https://www.ecfr.gov/current/title-49/part-232", link: "Read current freight-brake rules" },
          { date: "49 C.F.R. Part 218", title: "Blue signal worker protection", text: "Workers inspecting, testing, repairing, or servicing rolling equipment on, under, or between equipment require the applicable blue-signal protections before exposure to movement hazards.", url: "https://www.ecfr.gov/current/title-49/part-218/subpart-B", link: "Read blue-signal protection rules" }
        ],
        note: "Independent rail reference by JerseyPublishers. Not endorsed by FRA, DOT, any railroad, labor organization, EMD, Wabtec, Google, or a manufacturer. This app does not qualify personnel, establish blue-signal protection, perform an inspection, or authorize movement or release. Railroad rules and current federal requirements control."
      }
    }
  };
  const profile = Object.assign({}, profiles.all, profiles[variant.mode] || {});
  if (!profile.rights) profile.rights = profiles.all.rights;
  const els = {};
  const state = {
    mode: variant.mode || "all",
    type: variant.mode === "all" ? "All Vehicles" : "",
    make: "",
    vehicleId: "",
    systemId: "",
    subsystemId: "",
    activeToolPanel: "tools",
    zoom: 1,
    torque: true,
    decodedVin: null,
    savedVehicles: [],
    communityVehicles: [],
    taskChecks: {},
    repairNotes: {},
    wrenchieView: "live",
    wrenchieFilter: "all",
    wrenchieQuery: "",
    wrenchieSelectedId: "",
    wrenchieCache: null,
    wrenchieSavedItems: [],
    wrenchieLoading: false,
    wrenchieMessage: "",
    wrenchieCoachTipIndex: -1
  };

  const ids = [
    "modeStrip",
    "typeSelect",
    "makeSelect",
    "vehicleSelect",
    "systemSelect",
    "subsystemSelect",
    "vinForm",
    "vinInput",
    "railVehicleTitle",
    "railVehicleMeta",
    "railVin",
    "saveVehicleButton",
    "diagramTitle",
    "diagramSubtitle",
    "diagramSvg",
    "partsLegend",
    "toolContent",
    "savedList",
    "torqueToggle",
    "zoomIn",
    "zoomOut",
    "zoomReset",
    "printButton",
    "openDataButton",
    "resetButton",
    "importButton",
    "importInput",
    "addSampleButton",
    "themeToggle",
    "demoButton",
    "missionSummary",
    "missionMeta",
    "missionProgress",
    "missionProgressBar",
    "repairChecklist",
    "workflowTitle",
    "jobNotes",
    "resetJobButton",
    "editionLabel",
    "mascotName",
    "mascotTagline",
    "workspaceLabel",
    "identifierNavLabel",
    "statusTitle",
    "statusText",
    "identifierLabel",
    "lookupButton",
    "missionKicker",
    "missionStandardTitle",
    "missionStandardText",
    "rightsKicker",
    "rightsTitle",
    "rightsIntro",
    "rightsGrid",
    "affiliationNote",
    "opensourceTitle",
    "opensourceText",
    "mascotGuideButton",
    "wrenchieCoachMascot",
    "wrenchieCoachTitle",
    "wrenchieCoachMessage",
    "wrenchieDeskMascotButton",
    "wrenchiePromise",
    "wrenchieSourceHealth",
    "wrenchieLastUpdated",
    "wrenchieRefreshButton",
    "wrenchieSearchForm",
    "wrenchieSearchInput",
    "wrenchieFilterRow",
    "wrenchieStatus",
    "wrenchieFeedList",
    "wrenchieBrief",
    "wrenchieBoundary"
  ];

  ids.forEach((id) => {
    els[id] = document.getElementById(id);
  });

  function storageGet(keys) {
    return new Promise((resolve) => {
      if (window.chrome && chrome.storage && chrome.storage.local) {
        chrome.storage.local.get(keys, resolve);
        return;
      }

      const result = {};
      keys.forEach((key) => {
        try {
          result[key] = JSON.parse(localStorage.getItem(key));
        } catch (_) {
          result[key] = null;
        }
      });
      resolve(result);
    });
  }

  function storageSet(values) {
    return new Promise((resolve) => {
      if (window.chrome && chrome.storage && chrome.storage.local) {
        chrome.storage.local.set(values, resolve);
        return;
      }

      Object.entries(values).forEach(([key, value]) => {
        localStorage.setItem(key, JSON.stringify(value));
      });
      resolve();
    });
  }

  function allVehicles() {
    return data.vehicles.concat(state.communityVehicles || []);
  }

  function vehiclesForMode() {
    const vehicles = allVehicles();
    return state.mode === "all" ? vehicles : vehicles.filter((vehicle) => vehicle.mode === state.mode);
  }

  function modeOptions() {
    if (!variant.lockMode) return data.modes;
    return data.modes.filter((mode) => mode.id === variant.mode);
  }

  function enforceVariantMode() {
    if (variant.lockMode) {
      state.mode = variant.mode;
    }
    const selected = data.modes.find((mode) => mode.id === state.mode) || data.modes[0];
    state.type = selected.label;
  }

  function unique(items) {
    return Array.from(new Set(items)).sort((a, b) => String(a).localeCompare(String(b)));
  }

  function byId(collection, id) {
    return collection.find((item) => item.id === id) || collection[0];
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);
  }

  function safeNumber(value, fallback = 0) {
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : fallback;
  }

  function safeExternalUrl(value) {
    try {
      const url = new URL(String(value || ""));
      return url.protocol === "https:" ? url.href : "";
    } catch (_) {
      return "";
    }
  }

  function renderList(items, suffix = "") {
    return (Array.isArray(items) ? items : [])
      .map((item) => `<li>${escapeHtml(item)}${suffix ? `<span>${escapeHtml(suffix)}</span>` : ""}</li>`)
      .join("");
  }

  function evidenceLabel(entry) {
    if (typeof entry === "string") return escapeHtml(entry);
    const title = escapeHtml(entry.title || "Reference source");
    const meta = [
      entry.scope ? `Scope: ${entry.scope}` : "",
      entry.confidence ? `Confidence: ${entry.confidence}` : ""
    ].filter(Boolean).map(escapeHtml).join("<br>");
    return `${title}${meta ? `<br><span>${meta}</span>` : ""}`;
  }

  function renderEvidenceRows(entries) {
    return (Array.isArray(entries) ? entries : [])
      .map((entry) => {
        const label = evidenceLabel(entry);
        const safeUrl = entry && typeof entry === "object" ? safeExternalUrl(entry.url) : "";
        const url = safeUrl
          ? `<a href="${escapeHtml(safeUrl)}" target="_blank" rel="noopener noreferrer">source</a>`
          : "";
        return `<li>${label}${url}</li>`;
      })
      .join("");
  }

  function renderQuality(procedure) {
    const quality = procedure.quality || {};
    const notes = renderList(quality.measurementNotes || []);
    const limits = renderList(quality.limitations || []);
    return `
      <div class="quality-box">
        <strong>${escapeHtml(quality.verificationLevel || "Reference data")}</strong>
        <span>${escapeHtml(quality.confidence || "Verify against official service data.")}</span>
        ${quality.lastReviewed ? `<small>Reviewed ${escapeHtml(quality.lastReviewed)}</small>` : ""}
      </div>
      ${notes ? `<h4>Measurement notes</h4><ul>${notes}</ul>` : ""}
      ${limits ? `<h4>Limits</h4><ul>${limits}</ul>` : ""}
    `;
  }

  function currentVehicle() {
    return byId(allVehicles(), state.vehicleId);
  }

  function currentSystem() {
    const vehicle = currentVehicle();
    return byId(vehicle.systems, state.systemId);
  }

  function currentProcedure() {
    const system = currentSystem();
    return byId(system.subsystems, state.subsystemId);
  }

  function currentProcedureKey() {
    const vehicle = currentVehicle();
    const system = currentSystem();
    const procedure = currentProcedure();
    return `${vehicle.id}:${system.id}:${procedure.id}`;
  }

  function taskKey(group, itemId) {
    return `${currentProcedureKey()}:${group}:${itemId}`;
  }

  function workflowPhases(procedure = currentProcedure()) {
    const phases = [];
    if (Array.isArray(procedure.safety) && procedure.safety.length) {
      phases.push({ id: "safety", title: "Safety gate", items: procedure.safety });
    }
    if (Array.isArray(procedure.workflow)) {
      procedure.workflow.forEach((phase, index) => {
        if (phase && Array.isArray(phase.items) && phase.items.length) {
          phases.push({
            id: String(phase.id || `phase-${index + 1}`),
            title: String(phase.title || `Phase ${index + 1}`),
            items: phase.items
          });
        }
      });
    }
    return phases;
  }

  function workflowTasks() {
    return workflowPhases().flatMap((phase) => phase.items.map((item, index) => ({
      key: taskKey("workflow", `${phase.id}-${index}`),
      label: String(item)
    })));
  }

  function toolTasks() {
    const tools = currentProcedure().tools || {};
    return ["sockets", "wrenches", "specialty"].flatMap((group) => (
      Array.isArray(tools[group]) ? tools[group] : []
    ).map((item, index) => ({
      key: taskKey(group, index),
      label: String(item)
    })));
  }

  function missionTasks() {
    return toolTasks().concat(workflowTasks());
  }

  function renderToolChecklist(items, group) {
    return (Array.isArray(items) ? items : []).map((item, index) => {
      const key = taskKey(group, index);
      return `<label class="tool-check"><input type="checkbox" data-task-key="${escapeHtml(key)}"${state.taskChecks[key] ? " checked" : ""}><span>${escapeHtml(item)}</span></label>`;
    }).join("");
  }

  function bindTaskInputs(root) {
    root.querySelectorAll("[data-task-key]").forEach((input) => {
      input.addEventListener("change", () => {
        state.taskChecks[input.dataset.taskKey] = input.checked;
        state.wrenchieCoachTipIndex = -1;
        renderMission();
        renderWrenchieCoach();
        persistWorkspace();
      });
    });
  }

  function renderMission() {
    const vehicle = currentVehicle();
    const system = currentSystem();
    const procedure = currentProcedure();
    const tasks = missionTasks();
    const complete = tasks.filter((task) => state.taskChecks[task.key]).length;
    const percent = tasks.length ? Math.round((complete / tasks.length) * 100) : 0;

    els.missionSummary.textContent = `${vehicle.year} ${vehicle.make} ${vehicle.model} · ${procedure.name}`;
    els.missionMeta.textContent = `${system.name} · ${procedure.quality && procedure.quality.verificationLevel ? procedure.quality.verificationLevel : "Reference data"}`;
    els.missionProgress.textContent = `${complete} of ${tasks.length} checks complete`;
    els.missionProgressBar.style.width = `${percent}%`;
    els.workflowTitle.textContent = `${procedure.name} field sequence`;
  }

  function renderWorkflow() {
    const phases = workflowPhases();
    els.repairChecklist.textContent = "";

    phases.forEach((phase) => {
      const section = document.createElement("section");
      section.className = phase.id === "safety" ? "workflow-phase safety-phase" : "workflow-phase";
      const heading = document.createElement("h3");
      heading.textContent = phase.title;
      section.appendChild(heading);

      phase.items.forEach((item, index) => {
        const key = taskKey("workflow", `${phase.id}-${index}`);
        const label = document.createElement("label");
        label.className = "workflow-check";
        const input = document.createElement("input");
        input.type = "checkbox";
        input.dataset.taskKey = key;
        input.checked = Boolean(state.taskChecks[key]);
        const marker = document.createElement("span");
        marker.className = "check-marker";
        marker.setAttribute("aria-hidden", "true");
        const text = document.createElement("span");
        text.textContent = String(item);
        label.append(input, marker, text);
        section.appendChild(label);
      });

      els.repairChecklist.appendChild(section);
    });

    els.jobNotes.value = state.repairNotes[currentProcedureKey()] || "";
    bindTaskInputs(els.repairChecklist);
  }

  function runIndustryDemo() {
    const demo = profile.demo;
    state.mode = demo.mode;
    state.make = demo.make;
    state.vehicleId = demo.vehicleId;
    state.systemId = demo.systemId;
    state.subsystemId = demo.subsystemId;
    state.activeToolPanel = "tools";
    state.zoom = 1;
    render();
    persistWorkspace();
    queueWrenchieRefresh();
    const target = document.getElementById("mission");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function resetCurrentJob() {
    const prefix = `${currentProcedureKey()}:`;
    Object.keys(state.taskChecks).forEach((key) => {
      if (key.startsWith(prefix)) delete state.taskChecks[key];
    });
    delete state.repairNotes[currentProcedureKey()];
    renderMission();
    renderWorkflow();
    renderTools();
    renderWrenchieCoach();
    persistWorkspace();
  }

  function option(label, value, selected) {
    const el = document.createElement("option");
    el.value = value;
    el.textContent = label;
    el.selected = selected;
    return el;
  }

  function renderModes() {
    els.modeStrip.textContent = "";
    modeOptions().forEach((mode) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = mode.label;
      button.className = mode.id === state.mode ? "active" : "";
      button.setAttribute("role", "tab");
      button.setAttribute("aria-selected", String(mode.id === state.mode));
      button.addEventListener("click", () => {
        if (variant.lockMode) return;
        state.mode = mode.id;
        state.type = mode.label;
        state.make = "";
        state.vehicleId = "";
        syncSelectionDefaults();
        render();
        persistWorkspace();
        queueWrenchieRefresh();
      });
      els.modeStrip.appendChild(button);
    });
  }

  function syncSelectionDefaults() {
    enforceVariantMode();
    const pool = vehiclesForMode();
    if (!pool.length) return;

    if (!pool.some((vehicle) => vehicle.make === state.make)) {
      state.make = pool[0].make;
    }

    const makePool = pool.filter((vehicle) => vehicle.make === state.make);
    if (!makePool.some((vehicle) => vehicle.id === state.vehicleId)) {
      state.vehicleId = makePool[0].id;
    }

    const vehicle = currentVehicle();
    if (!vehicle.systems.some((system) => system.id === state.systemId)) {
      state.systemId = vehicle.systems[0].id;
    }

    const system = currentSystem();
    if (!system.subsystems.some((procedure) => procedure.id === state.subsystemId)) {
      state.subsystemId = system.subsystems[0].id;
    }
  }

  function renderSelectors() {
    const pool = vehiclesForMode();
    const selectedVehicle = currentVehicle();
    const system = currentSystem();

    els.typeSelect.textContent = "";
    modeOptions().forEach((mode) => {
      els.typeSelect.appendChild(option(mode.label, mode.id, mode.id === state.mode));
    });

    els.makeSelect.textContent = "";
    unique(pool.map((vehicle) => vehicle.make)).forEach((make) => {
      els.makeSelect.appendChild(option(make, make, make === state.make));
    });

    els.vehicleSelect.textContent = "";
    pool.filter((vehicle) => vehicle.make === state.make).forEach((vehicle) => {
      els.vehicleSelect.appendChild(
        option(`${vehicle.year} ${vehicle.model} • ${vehicle.trim}`, vehicle.id, vehicle.id === state.vehicleId)
      );
    });

    els.systemSelect.textContent = "";
    selectedVehicle.systems.forEach((entry) => {
      els.systemSelect.appendChild(option(entry.name, entry.id, entry.id === state.systemId));
    });

    els.subsystemSelect.textContent = "";
    system.subsystems.forEach((entry) => {
      els.subsystemSelect.appendChild(option(entry.name, entry.id, entry.id === state.subsystemId));
    });
  }

  function renderRail() {
    const vehicle = currentVehicle();
    els.railVehicleTitle.textContent = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
    els.railVehicleMeta.textContent = `${vehicle.type} • ${vehicle.trim}`;
    if (state.decodedVin && state.decodedVin.vin === "Check failed") {
      els.railVin.textContent = state.decodedVin.make;
    } else {
      els.railVin.textContent = state.decodedVin
        ? `${profile.identifier.short}: ${state.decodedVin.vin}`
        : `Example: ${vehicle.vinExample}`;
    }
  }

  function renderBrand() {
    document.body.dataset.industry = profile.industry;
    document.title = variant.name || "Lil Mechanic's: WrenchAtlas";
    document.querySelectorAll(".brand-lockup h1").forEach((heading) => {
      heading.textContent = "";
      heading.setAttribute("aria-label", variant.name || "Lil Mechanic's: WrenchAtlas");
      const family = document.createElement("span");
      family.className = "family-prefix";
      family.textContent = variant.familyPrefix || "Lil Mechanic's:";
      const product = document.createElement("span");
      product.className = "product-name";
      product.append(document.createTextNode(variant.brandPrefix || "Wrench"));
      const accent = document.createElement("span");
      accent.textContent = variant.brandAccent || "Atlas";
      product.appendChild(accent);
      heading.append(family, product);
    });
    els.editionLabel.textContent = `${profile.edition} · JerseyPublishers`;
    els.mascotName.textContent = profile.mascot;
    els.mascotTagline.textContent = profile.mascotTagline;
    els.workspaceLabel.textContent = profile.workspace;
    els.identifierNavLabel.textContent = profile.identifier.nav;
    els.statusTitle.textContent = profile.statusTitle;
    els.statusText.textContent = profile.statusText;
    els.identifierLabel.textContent = profile.identifier.label;
    els.vinInput.placeholder = profile.identifier.placeholder;
    els.lookupButton.textContent = profile.identifier.action;
    els.demoButton.textContent = profile.demo.label;
    els.missionKicker.textContent = profile.missionKicker;
    els.missionStandardTitle.textContent = profile.standardTitle;
    els.missionStandardText.textContent = profile.standardText;
    els.opensourceTitle.textContent = `${variant.name || "Lil Mechanic's: WrenchAtlas"} is free American open source`;
    els.opensourceText.textContent = "Industry-specific repair packs with visible evidence limits. Verify critical procedures with current official data.";
    document.querySelectorAll(".rail-footer span:first-child").forEach((label) => {
      label.textContent = variant.name || "Lil Mechanic's: WrenchAtlas";
    });
  }

  function wrenchieCoachTips() {
    const equipment = {
      car: "car",
      truck: "truck",
      boat: "vessel",
      plane: "aircraft",
      train: "locomotive"
    }[profile.industry] || "equipment";
    return [
      {
        title: "Identity before tools.",
        message: `Confirm the exact ${equipment}, installed configuration, and selected job before loosening a fastener.`
      },
      {
        title: "Stage the full tool stack.",
        message: "Lay out sockets, wrenches, specialty tools, measuring tools, and safety equipment before the first step."
      },
      {
        title: "Treat every safety gate as a stop gate.",
        message: "Stored energy, support, authority, inspection, and return-to-service checks are part of the repair, not optional reminders."
      },
      {
        title: "Source labels matter.",
        message: "Use the reference to orient the job, then verify critical values and procedures against current official service data."
      },
      {
        title: "Close out before release.",
        message: "Complete inspection, leak or function checks, documentation, and the applicable low-risk return-to-service process."
      }
    ];
  }

  function automaticWrenchieCoach() {
    const vehicle = currentVehicle();
    const procedure = currentProcedure();
    const tasks = missionTasks();
    const complete = tasks.filter((task) => state.taskChecks[task.key]).length;
    const equipmentName = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;

    if (!state.decodedVin || state.decodedVin.vin === "Check failed") {
      return {
        title: `Confirm the ${profile.identifier.short} or load the demonstration.`,
        message: `I have ${equipmentName} selected. Identification helps orient the job but never proves installed parts or service values.`
      };
    }
    if (complete === 0) {
      return {
        title: `Stage every tool for ${procedure.name}.`,
        message: "Open Tool stack, verify the installed hardware, and read the safety phase before the first fastener moves."
      };
    }
    if (complete < tasks.length) {
      return {
        title: `${complete} of ${tasks.length} checks complete. Keep the sequence intact.`,
        message: "Finish the current phase before moving on, and stop if the equipment differs from this evidence-labeled reference."
      };
    }
    return {
      title: "The checklist is complete. Verify release authority.",
      message: "Review notes, inspection, function checks, documentation, and current official requirements before returning equipment to service."
    };
  }

  function renderWrenchieCoach() {
    if (!els.wrenchieCoachTitle || !els.wrenchieCoachMessage) return;
    const tips = wrenchieCoachTips();
    const guidance = state.wrenchieCoachTipIndex >= 0
      ? tips[state.wrenchieCoachTipIndex % tips.length]
      : automaticWrenchieCoach();
    els.wrenchieCoachTitle.textContent = guidance.title;
    els.wrenchieCoachMessage.textContent = guidance.message;
  }

  function animateWrenchie(element) {
    if (!element) return;
    element.classList.remove("wrenchie-wave");
    void element.offsetWidth;
    element.classList.add("wrenchie-wave");
  }

  function advanceWrenchieCoach(element) {
    const tips = wrenchieCoachTips();
    state.wrenchieCoachTipIndex = (state.wrenchieCoachTipIndex + 1 + tips.length) % tips.length;
    renderWrenchieCoach();
    animateWrenchie(element);
  }

  function jumpToSection(id, focusTarget) {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    if (focusTarget) window.setTimeout(() => focusTarget.focus(), 420);
  }

  function runWrenchieCoachAction(action) {
    state.wrenchieCoachTipIndex = -1;
    if (action === "identify") {
      jumpToSection("vin", els.vinInput);
      return;
    }
    if (action === "tools") {
      state.activeToolPanel = "tools";
      renderToolTabs();
      renderTools();
      jumpToSection("systems");
      return;
    }
    if (action === "safety") {
      jumpToSection("workflow", document.querySelector(".safety-phase input"));
      return;
    }
    state.wrenchieView = "learn";
    state.wrenchieQuery = "";
    els.wrenchieSearchInput.value = "";
    renderWrenchie();
    jumpToSection("wrenchie", els.wrenchieSearchInput);
  }

  function renderRights() {
    const rights = profile.rights || profiles.all.rights;
    els.rightsKicker.textContent = rights.kicker;
    els.rightsTitle.textContent = rights.title;
    els.rightsIntro.textContent = rights.intro;
    els.affiliationNote.textContent = rights.note;
    els.rightsGrid.textContent = "";

    rights.cards.forEach((card) => {
      const article = document.createElement("article");
      const date = document.createElement("span");
      date.className = "source-date";
      date.textContent = card.date;
      const heading = document.createElement("h3");
      heading.textContent = card.title;
      const copy = document.createElement("p");
      copy.textContent = card.text;
      const link = document.createElement("a");
      link.textContent = card.link;
      link.href = safeExternalUrl(card.url);
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      article.append(date, heading, copy, link);
      els.rightsGrid.appendChild(article);
    });
  }

  function partShape(part) {
    const x = safeNumber(part.x, 460);
    const y = safeNumber(part.y, 250);
    const shape = String(part.shape || "");
    switch (shape) {
      case "rotor":
        return `<g class="part-art rotor"><circle cx="${x}" cy="${y}" r="84"/><circle cx="${x}" cy="${y}" r="30"/><circle cx="${x - 34}" cy="${y - 34}" r="6"/><circle cx="${x + 34}" cy="${y - 34}" r="6"/><circle cx="${x - 34}" cy="${y + 34}" r="6"/><circle cx="${x + 34}" cy="${y + 34}" r="6"/></g>`;
      case "hub":
        return `<g class="part-art hub"><circle cx="${x}" cy="${y}" r="58"/><circle cx="${x}" cy="${y}" r="25"/><path d="M${x - 58} ${y}h-45M${x + 58} ${y}h45"/><circle cx="${x - 32}" cy="${y - 30}" r="5"/><circle cx="${x + 30}" cy="${y - 28}" r="5"/><circle cx="${x - 31}" cy="${y + 30}" r="5"/><circle cx="${x + 30}" cy="${y + 31}" r="5"/></g>`;
      case "caliper":
        return `<g class="part-art caliper"><path d="M${x - 68} ${y - 80}c-42 22-50 138 4 166h72c-22-30-24-112 4-166z"/><rect x="${x - 20}" y="${y - 58}" width="52" height="116" rx="18"/></g>`;
      case "pad":
        return `<g class="part-art pad"><rect x="${x - 22}" y="${y - 72}" width="46" height="144" rx="13"/><line x1="${x - 8}" y1="${y - 50}" x2="${x - 8}" y2="${y + 50}"/></g>`;
      case "clip":
        return `<g class="part-art clip"><path d="M${x - 38} ${y}h76m-55-20 18 20-18 20m55-40-18 20 18 20"/></g>`;
      case "bolt":
        return `<g class="part-art bolt"><line x1="${x - 48}" y1="${y}" x2="${x + 48}" y2="${y}"/><polygon points="${x - 66},${y} ${x - 48},${y - 14} ${x - 28},${y} ${x - 48},${y + 14}"/><rect x="${x + 20}" y="${y - 12}" width="38" height="24" rx="3"/></g>`;
      case "shield":
        return `<g class="part-art shield"><path d="M${x - 36} ${y - 92}c70 10 92 165 12 190-28-48-30-135 24-190z"/></g>`;
      case "engine":
        return `<g class="part-art engine"><rect x="${x - 105}" y="${y - 58}" width="210" height="116" rx="18"/><rect x="${x - 70}" y="${y - 82}" width="140" height="34" rx="8"/><circle cx="${x - 58}" cy="${y + 10}" r="13"/><circle cx="${x}" cy="${y + 10}" r="13"/><circle cx="${x + 58}" cy="${y + 10}" r="13"/></g>`;
      case "filter":
        return `<g class="part-art filter"><rect x="${x - 34}" y="${y - 74}" width="68" height="148" rx="28"/><line x1="${x - 22}" y1="${y - 45}" x2="${x + 22}" y2="${y - 45}"/><line x1="${x - 22}" y1="${y + 45}" x2="${x + 22}" y2="${y + 45}"/></g>`;
      case "cap":
        return `<g class="part-art cap"><circle cx="${x}" cy="${y}" r="35"/><path d="M${x - 18} ${y}h36M${x} ${y - 18}v36"/></g>`;
      case "plug":
      case "nut":
        return `<g class="part-art bolt"><polygon points="${x},${y - 34} ${x + 30},${y - 17} ${x + 30},${y + 17} ${x},${y + 34} ${x - 30},${y + 17} ${x - 30},${y - 17}"/><circle cx="${x}" cy="${y}" r="12"/></g>`;
      case "panel":
        return `<g class="part-art panel"><path d="M${x - 110} ${y - 48}h220l-32 96h-172z"/><line x1="${x - 76}" y1="${y}" x2="${x + 78}" y2="${y}"/></g>`;
      case "terminal":
        return `<g class="part-art electric"><rect x="${x - 70}" y="${y - 45}" width="140" height="90" rx="12"/><circle cx="${x - 35}" cy="${y}" r="14"/><circle cx="${x + 35}" cy="${y}" r="14"/><path d="M${x - 44} ${y - 22}v-28M${x + 35} ${y - 22}v-28"/></g>`;
      case "strap":
        return `<g class="part-art strap"><path d="M${x - 88} ${y}c42-36 128-36 176 0"/><rect x="${x - 18}" y="${y - 24}" width="36" height="48" rx="8"/></g>`;
      case "starter":
        return `<g class="part-art starter"><rect x="${x - 70}" y="${y - 36}" width="140" height="72" rx="28"/><circle cx="${x + 82}" cy="${y}" r="28"/><rect x="${x - 95}" y="${y - 18}" width="34" height="36" rx="8"/></g>`;
      case "cable":
        return `<g class="part-art electric"><path d="M${x - 98} ${y + 32}C${x - 52} ${y - 60} ${x + 48} ${y - 60} ${x + 92} ${y + 30}"/><circle cx="${x - 98}" cy="${y + 32}" r="16"/><circle cx="${x + 92}" cy="${y + 30}" r="16"/></g>`;
      case "fuse":
        return `<g class="part-art electric"><rect x="${x - 68}" y="${y - 42}" width="136" height="84" rx="15"/><path d="M${x - 38} ${y}h22l14-22 18 44 14-22h36"/></g>`;
      case "chamber":
        return `<g class="part-art drum"><circle cx="${x}" cy="${y}" r="58"/><rect x="${x + 44}" y="${y - 18}" width="86" height="36" rx="18"/></g>`;
      case "arm":
        return `<g class="part-art arm"><path d="M${x - 75} ${y + 45}l150-90"/><circle cx="${x - 75}" cy="${y + 45}" r="24"/><circle cx="${x + 75}" cy="${y - 45}" r="18"/></g>`;
      case "shaft":
        return `<g class="part-art shaft"><rect x="${x - 96}" y="${y - 16}" width="192" height="32" rx="16"/><circle cx="${x}" cy="${y}" r="36"/></g>`;
      case "shoe":
        return `<g class="part-art shoe"><path d="M${x - 46} ${y - 92}c78 24 78 160 0 184"/><path d="M${x + 46} ${y - 92}c-78 24-78 160 0 184"/></g>`;
      case "drum":
        return `<g class="part-art drum"><circle cx="${x}" cy="${y}" r="86"/><circle cx="${x}" cy="${y}" r="58"/><circle cx="${x}" cy="${y}" r="18"/></g>`;
      case "housing":
        return `<g class="part-art marine"><path d="M${x - 55} ${y - 110}h90l28 64-22 156h-88l-28-156z"/></g>`;
      case "cover":
        return `<g class="part-art marine"><rect x="${x - 58}" y="${y - 46}" width="116" height="92" rx="15"/><circle cx="${x - 26}" cy="${y - 15}" r="6"/><circle cx="${x + 26}" cy="${y - 15}" r="6"/><circle cx="${x - 26}" cy="${y + 22}" r="6"/><circle cx="${x + 26}" cy="${y + 22}" r="6"/></g>`;
      case "impeller":
        return `<g class="part-art marine"><circle cx="${x}" cy="${y}" r="48"/><path d="M${x} ${y}c35-8 45-28 34-48M${x} ${y}c34 13 56 1 60-22M${x} ${y}c15 34 37 40 57 26M${x} ${y}c-6 36 8 53 33 58M${x} ${y}c-30 20-33 45-13 63M${x} ${y}c-35 2-50 22-44 49M${x} ${y}c-28-21-52-16-64 9M${x} ${y}c-9-34-30-45-55-32"/></g>`;
      case "prop":
        return `<g class="part-art marine"><circle cx="${x}" cy="${y}" r="28"/><path d="M${x} ${y - 28}c58-56 88-38 56 20-24 44-56 48-56 8zM${x + 24} ${y + 14}c78 20 82 56 18 68-48 10-72-12-42-44zM${x - 24} ${y + 14}c-52 60-84 44-58-18 20-46 52-52 58 4z"/></g>`;
      case "fairing":
        return `<g class="part-art aircraft"><path d="M${x - 105} ${y + 10}c10-72 82-108 176-76 64 22 58 100-4 128-80 36-154 10-172-52z"/></g>`;
      case "wheel":
        return `<g class="part-art aircraft"><circle cx="${x}" cy="${y}" r="76"/><circle cx="${x}" cy="${y}" r="42"/><line x1="${x - 74}" y1="${y}" x2="${x + 74}" y2="${y}"/></g>`;
      default:
        return `<g class="part-art"><circle cx="${x}" cy="${y}" r="46"/></g>`;
    }
  }

  function renderDiagram() {
    const procedure = currentProcedure();
    const zoom = state.zoom;
    els.diagramTitle.textContent = procedure.name;
    els.diagramSubtitle.textContent = procedure.subtitle;

    const parts = procedure.parts;
    const guides = parts
      .slice(0, -1)
      .map((part, index) => {
        const next = parts[index + 1];
        const x1 = safeNumber(part.x, 460) + 52;
        const y1 = safeNumber(part.y, 250);
        const x2 = safeNumber(next.x, 460) - 52;
        const y2 = safeNumber(next.y, 250);
        return `<line class="guide-line" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
      })
      .join("");

    els.diagramSvg.innerHTML = `
      <defs>
        <linearGradient id="metal" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#f7fafc"/>
          <stop offset="46%" stop-color="#b8c1c9"/>
          <stop offset="100%" stop-color="#4e5a63"/>
        </linearGradient>
        <filter id="drop" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="16" flood-color="#0b1117" flood-opacity=".22"/>
        </filter>
      </defs>
      <rect class="diagram-bg" x="0" y="0" width="920" height="500" rx="24"/>
      <g class="axis-cube" transform="translate(44 370)">
        <path d="M0 28l48-18 48 18-48 20z"/>
        <path d="M0 28v48l48 22v-50z"/>
        <path d="M96 28v48L48 98v-50z"/>
        <text x="21" y="66">L</text>
        <text x="57" y="66">F</text>
        <text x="44" y="-6">UP</text>
      </g>
      <g class="diagram-world" transform="translate(${(1 - zoom) * 460} ${(1 - zoom) * 250}) scale(${zoom})">
        ${guides}
        ${parts.map(partShape).join("")}
        ${parts
          .map((part) => {
            const x = safeNumber(part.x, 460);
            const y = safeNumber(part.y, 250);
            const lineEndY = y - 82;
            return `<g class="callout" data-part-id="${escapeHtml(part.id)}" tabindex="0" role="button" aria-label="${escapeHtml(part.name)}">
              <line x1="${x}" y1="${y - 45}" x2="${x}" y2="${lineEndY}"/>
              <circle cx="${x}" cy="${lineEndY - 16}" r="15"/>
              <text x="${x}" y="${lineEndY - 11}">${escapeHtml(part.id)}</text>
            </g>`;
          })
          .join("")}
      </g>
    `;

    els.partsLegend.textContent = "";
    parts.forEach((part) => {
      const item = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.partId = String(part.id);
      const number = document.createElement("span");
      number.textContent = part.id;
      button.append(number, document.createTextNode(String(part.name || "")));
      item.appendChild(button);
      els.partsLegend.appendChild(item);
    });

    els.diagramSvg.querySelectorAll(".callout").forEach((callout) => {
      callout.addEventListener("click", () => highlightPart(callout.dataset.partId));
      callout.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") highlightPart(callout.dataset.partId);
      });
    });
    els.partsLegend.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => highlightPart(button.dataset.partId));
    });
  }

  function highlightPart(id) {
    const procedure = currentProcedure();
    const part = procedure.parts.find((entry) => String(entry.id) === String(id));
    if (!part) return;

    els.diagramSvg.querySelectorAll(".callout").forEach((callout) => {
      callout.classList.toggle("selected", String(callout.dataset.partId) === String(id));
    });

    els.toolContent.querySelectorAll("[data-note-part]").forEach((note) => {
      note.classList.toggle("selected", String(note.dataset.notePart) === String(id));
    });
  }

  function renderTools() {
    const procedure = currentProcedure();
    const vehicle = currentVehicle();
    const quality = procedure.quality || {};
    const openDataRows = renderEvidenceRows(procedure.evidence);
    const sourceRows = renderEvidenceRows(procedure.sources);
    const partRows = (Array.isArray(procedure.parts) ? procedure.parts : [])
      .map((part) => `<li data-note-part="${escapeHtml(part.id)}"><strong>${escapeHtml(part.id)}. ${escapeHtml(part.name)}</strong><span>${escapeHtml(part.note)}</span></li>`)
      .join("");

    if (state.activeToolPanel === "data") {
      els.toolContent.innerHTML = `
        <section class="tool-section">
          <h3>Evidence status</h3>
          <p class="data-pill">Schema ${escapeHtml(data.schemaVersion)}</p>
          ${renderQuality(procedure)}
          <ul class="source-list">${openDataRows}</ul>
          ${sourceRows ? `<h4>Procedure sources</h4><ul class="source-list">${sourceRows}</ul>` : ""}
          <p class="quiet">This release ships original reference diagrams and accepts community JSON packs. It does not copy proprietary manufacturer schematics.</p>
        </section>
        <section class="tool-section">
          <h3>Selected pack</h3>
          <dl class="fact-list">
            <div><dt>Mode</dt><dd>${escapeHtml(vehicle.type)}</dd></div>
            <div><dt>Vehicle</dt><dd>${escapeHtml(`${vehicle.year} ${vehicle.make} ${vehicle.model}`)}</dd></div>
            <div><dt>System</dt><dd>${escapeHtml(currentSystem().name)}</dd></div>
            <div><dt>Accuracy level</dt><dd>${escapeHtml(quality.verificationLevel || "Reference data")}</dd></div>
          </dl>
        </section>
      `;
      return;
    }

    if (state.activeToolPanel === "saved") {
      els.toolContent.innerHTML = `
        <section class="tool-section">
          <h3>Saved locally</h3>
          <p class="quiet">Saved vehicles stay in Chrome local extension storage on this browser.</p>
          <ul class="source-list">
            ${state.savedVehicles.length
              ? state.savedVehicles.map((item) => `<li>${escapeHtml(item.label)}<br><span>${escapeHtml(item.meta)}</span></li>`).join("")
              : "<li>No saved vehicles yet.</li>"}
          </ul>
        </section>
      `;
      return;
    }

    els.toolContent.innerHTML = `
      <section class="tool-section">
        <h3>Socket stack</h3>
        <div class="tool-checklist">${renderToolChecklist(procedure.tools.sockets, "sockets")}</div>
      </section>
      <section class="tool-section">
        <h3>Wrenches</h3>
        <div class="tool-checklist">${renderToolChecklist(procedure.tools.wrenches, "wrenches")}</div>
      </section>
      <section class="tool-section">
        <h3>Specialty tools</h3>
        <div class="tool-checklist">${renderToolChecklist(procedure.tools.specialty, "specialty")}</div>
      </section>
      <section class="tool-section warning">
        <h3>Fastener notes</h3>
        <ul>${renderList(procedure.fasteners)}</ul>
      </section>
      <section class="tool-section evidence">
        <h3>Evidence / source</h3>
        <p>${escapeHtml(procedure.caution)}</p>
        ${renderQuality(procedure)}
        ${sourceRows ? `<h4>Procedure sources</h4><ul class="source-list">${sourceRows}</ul>` : ""}
        <ul class="part-notes">${partRows}</ul>
      </section>
    `;
    bindTaskInputs(els.toolContent);
  }

  function renderSaved() {
    els.savedList.textContent = "";
    if (!state.savedVehicles.length) {
      const empty = document.createElement("article");
      empty.className = "saved-empty";
      empty.textContent = "Saved vehicle profiles will appear here.";
      els.savedList.appendChild(empty);
      return;
    }

    state.savedVehicles.slice(0, 5).forEach((saved) => {
      const card = document.createElement("article");
      card.className = saved.vehicleId === state.vehicleId ? "saved-card active" : "saved-card";
      card.innerHTML = `
        <strong>${escapeHtml(saved.label)}</strong>
        <span>${escapeHtml(saved.meta)}</span>
        <small>${escapeHtml(saved.vin || `No ${profile.identifier.short} saved`)}</small>
      `;
      card.addEventListener("click", () => {
        if (saved.mode) state.mode = saved.mode;
        if (saved.vehicleId) state.vehicleId = saved.vehicleId;
        state.make = saved.make || currentVehicle().make;
        syncSelectionDefaults();
        render();
        persistWorkspace();
        queueWrenchieRefresh();
      });
      els.savedList.appendChild(card);
    });
  }

  function wrenchieContextKey() {
    const vehicle = currentVehicle();
    return [state.mode, vehicle && vehicle.year, vehicle && vehicle.make, vehicle && vehicle.model].filter(Boolean).join(":");
  }

  function plainText(value) {
    const documentValue = new DOMParser().parseFromString(String(value == null ? "" : value), "text/html");
    return String(documentValue.body.textContent || "").replace(/\s+/g, " ").trim();
  }

  function clippedText(value, limit = 260) {
    const text = plainText(value);
    if (text.length <= limit) return text;
    return `${text.slice(0, Math.max(0, limit - 1)).trim()}...`;
  }

  function readableAgencyText(value) {
    const text = plainText(value);
    const letters = text.replace(/[^A-Za-z]/g, "");
    if (!letters || letters !== letters.toUpperCase()) return text;
    const lower = text.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  function formatWrenchieDate(value) {
    if (!value) return "Date not listed";
    const source = /^\d{4}-\d{2}-\d{2}$/.test(value) ? `${value}T12:00:00` : value;
    const date = new Date(source);
    if (Number.isNaN(date.getTime())) return plainText(value);
    return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(date);
  }

  function reportDateToIso(value) {
    const match = String(value || "").match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    return match ? `${match[3]}-${match[2]}-${match[1]}` : String(value || "");
  }

  function wrenchieLessonItems() {
    return (wrenchieKnowledge.lessons || [])
      .filter((lesson) => {
        const modes = Array.isArray(lesson.modes) ? lesson.modes : ["all"];
        return state.mode === "all" ? modes.includes("all") : modes.includes(state.mode);
      })
      .map((lesson) => ({
        id: `lesson:${lesson.id}`,
        sourceType: "guidance",
        status: lesson.status || "Safety guidance",
        title: lesson.title,
        summary: lesson.summary,
        why: lesson.why,
        next: lesson.next,
        jurisdiction: lesson.jurisdiction,
        sourceLabel: lesson.sourceLabel,
        sourceUrl: lesson.sourceUrl,
        date: "Reference lesson",
        agency: lesson.sourceLabel,
        keywords: lesson.keywords || []
      }));
  }

  function wrenchieLiveItems() {
    const cache = state.wrenchieCache;
    if (!cache || cache.contextKey !== wrenchieContextKey() || !Array.isArray(cache.items)) return [];
    return cache.items;
  }

  function allWrenchieItems() {
    const items = wrenchieLiveItems().concat(wrenchieLessonItems(), state.wrenchieSavedItems || []);
    const uniqueItems = new Map();
    items.forEach((item) => {
      if (item && item.id && !uniqueItems.has(item.id)) uniqueItems.set(item.id, item);
    });
    return Array.from(uniqueItems.values());
  }

  function wrenchieSearchScore(item, query) {
    const tokens = String(query || "").toLowerCase().match(/[a-z0-9]+/g) || [];
    if (!tokens.length) return 1;
    const title = String(item.title || "").toLowerCase();
    const status = String(item.status || "").toLowerCase();
    const body = [item.summary, item.why, item.next, item.jurisdiction, item.agency, item.sourceLabel]
      .concat(item.keywords || [])
      .join(" ")
      .toLowerCase();
    return tokens.reduce((score, token) => {
      if (title.includes(token)) return score + 5;
      if (status.includes(token)) return score + 3;
      if (body.includes(token)) return score + 1;
      return score;
    }, 0);
  }

  function visibleWrenchieItems() {
    let items = [];
    if (state.wrenchieView === "learn") items = wrenchieLessonItems();
    else if (state.wrenchieView === "saved") items = state.wrenchieSavedItems || [];
    else items = wrenchieLiveItems();

    if (state.wrenchieView === "live" && state.wrenchieFilter !== "all") {
      items = items.filter((item) => item.sourceType === state.wrenchieFilter);
    }

    if (state.wrenchieQuery) {
      items = items
        .map((item) => ({ item, score: wrenchieSearchScore(item, state.wrenchieQuery) }))
        .filter((entry) => entry.score > 0)
        .sort((a, b) => b.score - a.score)
        .map((entry) => entry.item);
    }

    return items;
  }

  function wrenchieStatusClass(status) {
    const value = String(status || "").toLowerCase();
    if (value.includes("recall")) return "danger";
    if (value.includes("proposed") || value.includes("passed congress")) return "draft";
    if (value.includes("rule") || value.includes("regulation")) return "active";
    if (value.includes("guidance")) return "guide";
    return "info";
  }

  function isWrenchieItemSaved(itemId) {
    return (state.wrenchieSavedItems || []).some((item) => item.id === itemId);
  }

  function wrenchieItemById(itemId) {
    return allWrenchieItems().find((item) => item.id === itemId) || null;
  }

  function selectedWrenchieItem(items = visibleWrenchieItems()) {
    let item = items.find((entry) => entry.id === state.wrenchieSelectedId);
    if (!item) item = items[0] || null;
    if (item) state.wrenchieSelectedId = item.id;
    return item;
  }

  function renderWrenchieFeed(items) {
    els.wrenchieFeedList.textContent = "";
    if (!items.length) {
      const empty = document.createElement("div");
      empty.className = "wrenchie-empty";
      if (state.wrenchieLoading && state.wrenchieView === "live") {
        empty.textContent = "Checking official transportation sources...";
      } else if (state.wrenchieView === "saved") {
        empty.textContent = "No saved Mr. Wrenchie briefs yet.";
      } else if (state.wrenchieQuery) {
        empty.textContent = "No source-backed item matches this search.";
      } else if (state.wrenchieView === "live" && state.wrenchieCache && state.wrenchieCache.contextKey !== wrenchieContextKey()) {
        empty.textContent = "Refreshing the desk for the selected equipment.";
      } else {
        empty.textContent = "No transportation items are available for this view.";
      }
      els.wrenchieFeedList.appendChild(empty);
      return;
    }

    const selected = selectedWrenchieItem(items);
    items.slice(0, 18).forEach((item) => {
      const article = document.createElement("article");
      article.className = item.id === selected.id ? "wrenchie-item selected" : "wrenchie-item";
      article.dataset.itemId = item.id;
      article.innerHTML = `
        <button class="wrenchie-item-main" type="button" aria-label="Open ${escapeHtml(item.title)}">
          <span class="wrenchie-item-topline">
            <span class="wrenchie-badge ${wrenchieStatusClass(item.status)}">${escapeHtml(item.status)}</span>
            <span>${escapeHtml(formatWrenchieDate(item.date))}</span>
          </span>
          <strong>${escapeHtml(item.title)}</strong>
          <span class="wrenchie-item-summary">${escapeHtml(clippedText(item.summary, 190))}</span>
          <small>${escapeHtml(item.agency || item.sourceLabel || "Official source")}</small>
        </button>
        <button class="wrenchie-save-button${isWrenchieItemSaved(item.id) ? " saved" : ""}" type="button" title="${isWrenchieItemSaved(item.id) ? "Remove saved brief" : "Save brief"}" aria-label="${isWrenchieItemSaved(item.id) ? "Remove saved brief" : "Save brief"}">
          <span aria-hidden="true">${isWrenchieItemSaved(item.id) ? "★" : "☆"}</span>
        </button>
      `;
      article.querySelector(".wrenchie-item-main").addEventListener("click", () => {
        state.wrenchieSelectedId = item.id;
        renderWrenchie();
      });
      article.querySelector(".wrenchie-save-button").addEventListener("click", () => toggleWrenchieSavedItem(item.id));
      els.wrenchieFeedList.appendChild(article);
    });
  }

  function renderWrenchieBrief(item) {
    if (!item) {
      els.wrenchieBrief.innerHTML = `
        <div class="wrenchie-brief-mascot"><img src="assets/mr-wrenchie.png" alt=""><span class="wrenchie-brief-label">Mr. Wrenchie's brief</span></div>
        <h3>No item selected</h3>
        <p>Choose a source item or safety lesson to see its status, jurisdiction, practical meaning, and next verification step.</p>
      `;
      return;
    }

    const sourceUrl = safeExternalUrl(item.sourceUrl);
    const officialUrl = safeExternalUrl(item.officialUrl);
    const remedy = item.remedy ? `
      <section>
        <h4>Remedy or action</h4>
        <p>${escapeHtml(clippedText(item.remedy, 520))}</p>
      </section>
    ` : "";
    const sourceLinks = [
      sourceUrl ? `<a href="${escapeHtml(sourceUrl)}" target="_blank" rel="noopener noreferrer">Open source</a>` : "",
      officialUrl ? `<a href="${escapeHtml(officialUrl)}" target="_blank" rel="noopener noreferrer">Official PDF</a>` : ""
    ].filter(Boolean).join("");

    els.wrenchieBrief.innerHTML = `
      <div class="wrenchie-brief-heading">
        <span class="wrenchie-brief-mascot"><img src="assets/mr-wrenchie.png" alt=""><span class="wrenchie-brief-label">Mr. Wrenchie's brief</span></span>
        <span class="wrenchie-badge ${wrenchieStatusClass(item.status)}">${escapeHtml(item.status)}</span>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <dl class="wrenchie-facts">
        <div><dt>Source</dt><dd>${escapeHtml(item.sourceLabel || item.agency || "Official source")}</dd></div>
        <div><dt>Jurisdiction</dt><dd>${escapeHtml(item.jurisdiction || "Check source")}</dd></div>
        <div><dt>Date</dt><dd>${escapeHtml(formatWrenchieDate(item.date))}</dd></div>
      </dl>
      <section>
        <h4>What it says</h4>
        <p>${escapeHtml(clippedText(item.summary, 700))}</p>
      </section>
      <section>
        <h4>Why it matters</h4>
        <p>${escapeHtml(clippedText(item.why, 620))}</p>
      </section>
      <section>
        <h4>Verify next</h4>
        <p>${escapeHtml(clippedText(item.next, 620))}</p>
      </section>
      ${remedy}
      ${sourceLinks ? `<div class="wrenchie-source-links">${sourceLinks}</div>` : ""}
    `;
  }

  function renderWrenchie() {
    if (!els.wrenchieFeedList) return;
    const items = visibleWrenchieItems();
    const cache = state.wrenchieCache;
    const sources = cache && cache.contextKey === wrenchieContextKey() && Array.isArray(cache.sources) ? cache.sources : [];
    const online = sources.filter((source) => source.ok).length;

    els.wrenchiePromise.textContent = wrenchieKnowledge.identity.promise;
    els.wrenchieBoundary.textContent = wrenchieKnowledge.identity.boundary;
    els.wrenchieFilterRow.hidden = state.wrenchieView !== "live";
    els.wrenchieRefreshButton.disabled = state.wrenchieLoading;
    els.wrenchieRefreshButton.innerHTML = state.wrenchieLoading
      ? '<span aria-hidden="true">↻</span> Updating'
      : '<span aria-hidden="true">↻</span> Refresh';
    els.wrenchieSourceHealth.textContent = sources.length ? `${online} of ${sources.length} official sources available` : "Official source cache";
    els.wrenchieLastUpdated.textContent = cache && cache.contextKey === wrenchieContextKey()
      ? `Updated ${new Date(cache.updatedAt).toLocaleString()}`
      : "Waiting for current equipment refresh";
    els.wrenchieStatus.textContent = state.wrenchieMessage || (
      state.wrenchieView === "learn"
        ? `${items.length} source-backed safety and legal-literacy lessons`
        : state.wrenchieView === "saved"
          ? `${items.length} saved briefs stored in this browser`
          : `${items.length} current items for ${state.mode === "all" ? "transportation" : state.mode}`
    );

    document.querySelectorAll("[data-wrenchie-view]").forEach((button) => {
      const active = button.dataset.wrenchieView === state.wrenchieView;
      button.classList.toggle("active", active);
      button.setAttribute("aria-selected", String(active));
    });
    document.querySelectorAll("[data-wrenchie-filter]").forEach((button) => {
      button.classList.toggle("active", button.dataset.wrenchieFilter === state.wrenchieFilter);
    });

    renderWrenchieFeed(items);
    renderWrenchieBrief(selectedWrenchieItem(items));
  }

  async function toggleWrenchieSavedItem(itemId) {
    const index = state.wrenchieSavedItems.findIndex((item) => item.id === itemId);
    if (index >= 0) {
      state.wrenchieSavedItems.splice(index, 1);
    } else {
      const item = wrenchieItemById(itemId);
      if (item) state.wrenchieSavedItems.unshift(Object.assign({}, item, { savedAt: new Date().toISOString() }));
    }
    await storageSet({ wrenchieSavedItems: state.wrenchieSavedItems });
    renderWrenchie();
  }

  async function fetchWithTimeout(url, options = {}, timeout = 14000) {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), timeout);
    try {
      const response = await fetch(url, Object.assign({}, options, { signal: controller.signal }));
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response;
    } finally {
      window.clearTimeout(timer);
    }
  }

  function federalRegisterMeaning(type) {
    if (type === "Proposed Rule") {
      return {
        status: "Proposed rule",
        why: "This is a proposal for public participation, not a final requirement.",
        next: "Check the comment deadline, docket, later final rule, effective date, and current CFR text before treating it as binding."
      };
    }
    if (type === "Rule") {
      return {
        status: "Final rule",
        why: "The agency published adopted regulatory action, but applicability and timing still depend on the document.",
        next: "Verify the official PDF, effective and compliance dates, affected CFR sections, corrections, stays, and current eCFR text."
      };
    }
    return {
      status: type === "Notice" ? "Agency notice" : (type || "Agency document"),
      why: "An agency notice can announce a proceeding, request, decision, meeting, data collection, or other action; it is not automatically a new rule.",
      next: "Read the scope, dates, docket, legal authority, and any linked final action before drawing a compliance conclusion."
    };
  }

  async function fetchFederalRegisterItems() {
    const scopes = wrenchieKnowledge.agencyScopes[state.mode] || wrenchieKnowledge.agencyScopes.all || [];
    const params = new URLSearchParams({ per_page: "12", order: "newest" });
    scopes.forEach((agency) => params.append("conditions[agencies][]", agency.slug));
    const response = await fetchWithTimeout(`https://www.federalregister.gov/api/v1/documents.json?${params.toString()}`);
    const body = await response.json();
    return (body.results || []).map((entry) => {
      const meaning = federalRegisterMeaning(entry.type);
      const agencies = (entry.agencies || []).filter((agency) => agency.name !== "Transportation Department");
      const agency = agencies.map((item) => item.name).join(", ") || "Federal Register";
      return {
        id: `federal-register:${entry.document_number}`,
        sourceType: "rules",
        status: meaning.status,
        title: entry.title || "Federal Register document",
        summary: entry.abstract || entry.excerpts || "Open the source for the published summary.",
        why: meaning.why,
        next: meaning.next,
        jurisdiction: "United States federal",
        sourceLabel: `Federal Register ${entry.document_number || "document"}`,
        sourceUrl: entry.html_url,
        officialUrl: entry.pdf_url,
        date: entry.publication_date,
        agency
      };
    });
  }

  async function fetchCongressItems() {
    const response = await fetchWithTimeout("https://www.congress.gov/rss/presented-to-president.xml");
    const xml = new DOMParser().parseFromString(await response.text(), "application/xml");
    if (xml.querySelector("parsererror")) throw new Error("Congress.gov returned invalid RSS");
    const channelDate = xml.querySelector("channel > pubDate")?.textContent || "";
    const keywords = wrenchieKnowledge.transportKeywords || [];
    return Array.from(xml.querySelectorAll("channel > item")).map((entry) => {
      const bill = plainText(entry.querySelector("title")?.textContent);
      const description = plainText(entry.querySelector("description")?.textContent);
      const link = plainText(entry.querySelector("link")?.textContent);
      return { bill, description, link };
    }).filter((entry) => {
      const haystack = `${entry.bill} ${entry.description}`.toLowerCase();
      return keywords.some((keyword) => haystack.includes(String(keyword).toLowerCase()));
    }).map((entry) => ({
      id: `congress:${entry.bill}`,
      sourceType: "legislation",
      status: "Passed Congress",
      title: `${entry.bill}: ${entry.description || "Legislation presented to the President"}`,
      summary: "Congress.gov lists this measure as passed by both chambers and presented to the President.",
      why: "Presentation is a late legislative stage, but the measure is not necessarily enacted law.",
      next: "Check presidential action, the latest bill status, any public law number, effective provisions, and implementing regulations.",
      jurisdiction: "United States federal legislation",
      sourceLabel: "Congress.gov RSS",
      sourceUrl: entry.link,
      date: channelDate,
      agency: "United States Congress"
    }));
  }

  function recallVehicleContext() {
    const vehicle = currentVehicle();
    const decoded = state.decodedVin || {};
    const equipmentMode = state.mode === "all" ? vehicle.mode : state.mode;
    if (!["car", "truck"].includes(equipmentMode)) return null;
    return {
      year: decoded.year || vehicle.year,
      make: decoded.make || vehicle.make,
      model: decoded.model || vehicle.model
    };
  }

  async function fetchRecallItems() {
    const vehicle = recallVehicleContext();
    if (!vehicle || !vehicle.year || !vehicle.make || !vehicle.model) return [];
    const params = new URLSearchParams({
      make: vehicle.make,
      model: vehicle.model,
      modelYear: String(vehicle.year)
    });
    const response = await fetchWithTimeout(`https://api.nhtsa.gov/recalls/recallsByVehicle?${params.toString()}`);
    const body = await response.json();
    const campaigns = new Map();
    (body.results || []).forEach((entry) => {
      if (entry.NHTSACampaignNumber && !campaigns.has(entry.NHTSACampaignNumber)) {
        campaigns.set(entry.NHTSACampaignNumber, entry);
      }
    });
    return Array.from(campaigns.values()).slice(0, 6).map((entry) => ({
      id: `recall:${entry.NHTSACampaignNumber}`,
      sourceType: "recalls",
      status: "Safety recall",
      title: `${readableAgencyText(entry.Component || "Vehicle equipment")}: ${vehicle.year} ${vehicle.make} ${vehicle.model}`,
      summary: readableAgencyText(entry.Summary || "Open the NHTSA recall record for details."),
      why: readableAgencyText(entry.Consequence || "The campaign identifies a potential safety defect or noncompliance."),
      next: "Use the exact VIN at NHTSA Recalls and contact the manufacturer or dealer to confirm inclusion, repair status, and remedy availability.",
      remedy: readableAgencyText(entry.Remedy || "Follow the manufacturer's official recall remedy."),
      jurisdiction: "United States federal vehicle safety",
      sourceLabel: `NHTSA campaign ${entry.NHTSACampaignNumber}`,
      sourceUrl: "https://www.nhtsa.gov/recalls",
      date: reportDateToIso(entry.ReportReceivedDate),
      agency: entry.Manufacturer || "NHTSA"
    }));
  }

  async function refreshWrenchieFeeds(silent = false) {
    if (state.wrenchieLoading) return;
    state.wrenchieLoading = true;
    if (!silent) state.wrenchieMessage = "Checking official transportation sources...";
    renderWrenchie();

    const sourceJobs = [
      { id: "federal-register", name: "Federal Register", load: fetchFederalRegisterItems },
      { id: "congress", name: "Congress.gov", load: fetchCongressItems }
    ];
    if (recallVehicleContext()) {
      sourceJobs.push({ id: "nhtsa-recalls", name: "NHTSA Recalls", load: fetchRecallItems });
    }

    const results = await Promise.all(sourceJobs.map(async (source) => {
      try {
        const items = await source.load();
        return { id: source.id, name: source.name, ok: true, count: items.length, items };
      } catch (error) {
        return { id: source.id, name: source.name, ok: false, count: 0, items: [], message: error.message };
      }
    }));

    const successful = results.filter((result) => result.ok);
    if (successful.length) {
      const itemMap = new Map();
      results.flatMap((result) => result.items).forEach((item) => itemMap.set(item.id, item));
      state.wrenchieCache = {
        contextKey: wrenchieContextKey(),
        updatedAt: new Date().toISOString(),
        items: Array.from(itemMap.values()),
        sources: results.map(({ items, ...source }) => source)
      };
      await storageSet({ wrenchieCache: state.wrenchieCache });
      state.wrenchieMessage = results.some((result) => !result.ok)
        ? "Some official sources were unavailable; current results and the last local cache remain visible."
        : "Official transportation sources are current.";
    } else {
      state.wrenchieMessage = "Official sources are temporarily unavailable. Safety lessons and saved briefs remain available.";
    }
    state.wrenchieLoading = false;
    renderWrenchie();
  }

  function queueWrenchieRefresh() {
    window.clearTimeout(wrenchieRefreshTimer);
    wrenchieRefreshTimer = window.setTimeout(() => refreshWrenchieFeeds(true), 350);
  }

  function wrenchieCacheNeedsRefresh() {
    const cache = state.wrenchieCache;
    if (!cache || cache.contextKey !== wrenchieContextKey()) return true;
    const age = Date.now() - new Date(cache.updatedAt).getTime();
    return !Number.isFinite(age) || age > WRENCHIE_CACHE_TTL;
  }

  function renderToolTabs() {
    document.querySelectorAll(".tool-tabs button").forEach((button) => {
      button.classList.toggle("active", button.dataset.panel === state.activeToolPanel);
    });
  }

  function render() {
    renderBrand();
    renderRights();
    syncSelectionDefaults();
    renderModes();
    renderSelectors();
    renderRail();
    renderMission();
    renderDiagram();
    renderToolTabs();
    renderTools();
    renderWorkflow();
    renderSaved();
    renderWrenchie();
    renderWrenchieCoach();
  }

  async function persistWorkspace() {
    await storageSet({
      workspaceState: {
        mode: state.mode,
        type: state.type,
        make: state.make,
        vehicleId: state.vehicleId,
        systemId: state.systemId,
        subsystemId: state.subsystemId,
        zoom: state.zoom,
        torque: state.torque,
        decodedVin: state.decodedVin
      },
      savedVehicles: state.savedVehicles,
      communityVehicles: state.communityVehicles,
      taskChecks: state.taskChecks,
      repairNotes: state.repairNotes
    });
  }

  async function decodeVin(vin) {
    const clean = vin.toUpperCase().replace(/[^A-HJ-NPR-Z0-9*]/g, "");
    if (clean.length < 5) {
      throw new Error("Enter at least 5 VIN characters. A full 17-character VIN gives better results.");
    }

    const endpoint = `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/${encodeURIComponent(clean)}?format=json`;
    const response = await fetch(endpoint, { method: "GET" });
    if (!response.ok) {
      throw new Error(`NHTSA vPIC returned ${response.status}`);
    }

    const body = await response.json();
    const result = body.Results && body.Results[0];
    if (!result) throw new Error("No VIN decode result returned.");

    return {
      vin: clean,
      make: result.Make || "Unknown make",
      model: result.Model || "Unknown model",
      year: result.ModelYear || "",
      bodyClass: result.BodyClass || "",
      vehicleType: result.VehicleType || "",
      engine: result.EngineModel || result.DisplacementL ? `${result.DisplacementL || ""}L ${result.EngineModel || ""}`.trim() : "",
      errorText: result.ErrorText || ""
    };
  }

  function validateLocalIdentifier(value) {
    const clean = String(value || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
    const vehicle = currentVehicle();

    if (profile.identifier.type === "hin") {
      const hinPattern = /^[A-Z0-9]{3}[A-HJ-NPR-Z0-9]{5}[A-L][0-9]{3}$/;
      if (!hinPattern.test(clean)) {
        throw new Error("Enter a 12-character U.S. HIN. Serial positions 4-8 cannot use I, O, or Q; the final four positions must contain a month code and three digits.");
      }
      return {
        vin: clean,
        make: vehicle.make,
        model: vehicle.model,
        year: vehicle.year,
        bodyClass: "Marine vessel",
        vehicleType: "HIN format validated locally; no ownership or registry lookup",
        engine: vehicle.trim,
        localIdentifier: true
      };
    }

    if (profile.identifier.type === "nnumber") {
      const nNumberPattern = /^N(?:[1-9][0-9]{0,4}|[1-9][0-9]{0,3}[A-HJ-NP-Z]|[1-9][0-9]{0,2}[A-HJ-NP-Z]{2})$/;
      if (!nNumberPattern.test(clean)) {
        throw new Error("Enter an FAA-style N-number such as N172SP, N1234A, or N12345. I and O are not valid suffix letters.");
      }
      return {
        vin: clean,
        make: vehicle.make,
        model: vehicle.model,
        year: vehicle.year,
        bodyClass: "Aircraft reference",
        vehicleType: "N-number format validated locally; verify registry data with FAA",
        engine: vehicle.trim,
        localIdentifier: true
      };
    }

    if (profile.identifier.type === "unit") {
      const unitPattern = /^[A-Z]{1,4}[0-9]{1,6}$/;
      if (!unitPattern.test(clean)) {
        throw new Error("Enter a reporting mark and unit number such as UP 1234 or BNSF 7654. This is stored locally and is not a railroad roster lookup.");
      }
      return {
        vin: clean,
        make: vehicle.make,
        model: vehicle.model,
        year: vehicle.year,
        bodyClass: "Rail locomotive reference",
        vehicleType: "Unit ID format validated locally; no ownership, status, or roster lookup",
        engine: vehicle.trim,
        localIdentifier: true
      };
    }

    throw new Error("This identifier type is not supported.");
  }

  async function handleVinSubmit(event) {
    event.preventDefault();
    const button = els.vinForm.querySelector("button");
    button.disabled = true;
    button.textContent = profile.identifier.type === "vin" ? "Decoding" : "Validating";
    try {
      const decoded = profile.identifier.type === "vin"
        ? await decodeVin(els.vinInput.value)
        : validateLocalIdentifier(els.vinInput.value);
      state.decodedVin = decoded;
      const matched = decoded.localIdentifier
        ? currentVehicle()
        : allVehicles().find((vehicle) => {
          return (
            vehicle.make.toLowerCase() === decoded.make.toLowerCase() &&
            String(vehicle.year) === String(decoded.year)
          );
        });
      if (matched) {
        state.mode = matched.mode;
        state.make = matched.make;
        state.vehicleId = matched.id;
      }
      saveDecodedVehicle(decoded, matched);
      render();
      await persistWorkspace();
      queueWrenchieRefresh();
    } catch (error) {
      state.decodedVin = { vin: "Check failed", make: error.message, model: "", year: "" };
      renderRail();
    } finally {
      button.disabled = false;
      button.textContent = profile.identifier.action;
    }
  }

  function saveDecodedVehicle(decoded, matched) {
    const label = `${decoded.year || ""} ${decoded.make} ${decoded.model}`.trim();
    const meta = [decoded.vehicleType, decoded.bodyClass, decoded.engine].filter(Boolean).join(" • ") || "NHTSA vPIC decode";
    const entry = {
      id: `identifier-${decoded.vin}`,
      label,
      meta,
      vin: decoded.vin,
      mode: matched ? matched.mode : state.mode,
      make: matched ? matched.make : state.make,
      vehicleId: matched ? matched.id : state.vehicleId,
      savedAt: new Date().toISOString()
    };
    state.savedVehicles = [entry].concat(state.savedVehicles.filter((item) => item.id !== entry.id)).slice(0, 12);
  }

  function saveCurrentVehicle() {
    const vehicle = currentVehicle();
    const entry = {
      id: `manual-${vehicle.id}`,
      label: `${vehicle.year} ${vehicle.make} ${vehicle.model}`,
      meta: `${vehicle.type} • ${vehicle.trim}`,
      vin: state.decodedVin && state.decodedVin.vin !== "Check failed" ? state.decodedVin.vin : "",
      mode: vehicle.mode,
      make: vehicle.make,
      vehicleId: vehicle.id,
      savedAt: new Date().toISOString()
    };
    state.savedVehicles = [entry].concat(state.savedVehicles.filter((item) => item.id !== entry.id)).slice(0, 12);
    renderSaved();
    renderTools();
    persistWorkspace();
  }

  function hasSourceNotes(procedure) {
    const hasEvidence = Array.isArray(procedure.evidence) && procedure.evidence.length > 0;
    const hasSources = Array.isArray(procedure.sources) && procedure.sources.length > 0;
    return Boolean(procedure.caution || hasEvidence || hasSources);
  }

  function validateCommunityProcedure(procedure) {
    return Boolean(
      procedure &&
      procedure.id &&
      procedure.name &&
      Array.isArray(procedure.parts) &&
      procedure.tools &&
      Array.isArray(procedure.tools.sockets) &&
      Array.isArray(procedure.tools.wrenches) &&
      Array.isArray(procedure.tools.specialty) &&
      Array.isArray(procedure.fasteners) &&
      Array.isArray(procedure.safety) &&
      procedure.safety.length > 0 &&
      Array.isArray(procedure.workflow) &&
      procedure.workflow.length > 0 &&
      procedure.workflow.every((phase) => phase && phase.id && phase.title && Array.isArray(phase.items) && phase.items.length > 0) &&
      hasSourceNotes(procedure)
    );
  }

  function validateCommunityVehicle(vehicle) {
    return Boolean(
      vehicle &&
      vehicle.id &&
      vehicle.mode &&
      vehicle.make &&
      vehicle.model &&
      vehicle.year &&
      Array.isArray(vehicle.systems) &&
      vehicle.systems.every((system) => Array.isArray(system.subsystems) && system.subsystems.every(validateCommunityProcedure))
    );
  }

  async function importCommunityData(file) {
    const text = await file.text();
    const parsed = JSON.parse(text);
    const vehicles = Array.isArray(parsed) ? parsed : parsed.vehicles;
    if (!Array.isArray(vehicles)) {
      throw new Error("JSON must be an array or an object with a vehicles array.");
    }

    const valid = vehicles.filter(validateCommunityVehicle);
    if (!valid.length) {
      throw new Error("No valid WrenchAtlas vehicle records found.");
    }

    const existingIds = new Set(state.communityVehicles.map((vehicle) => vehicle.id));
    const merged = state.communityVehicles.concat(valid.filter((vehicle) => !existingIds.has(vehicle.id)));
    state.communityVehicles = merged;
    render();
    await persistWorkspace();
  }

  function wireEvents() {
    els.typeSelect.addEventListener("change", () => {
      if (variant.lockMode) return;
      state.mode = els.typeSelect.value;
      state.make = "";
      state.vehicleId = "";
      syncSelectionDefaults();
      render();
      persistWorkspace();
      queueWrenchieRefresh();
    });

    els.makeSelect.addEventListener("change", () => {
      state.make = els.makeSelect.value;
      state.vehicleId = "";
      syncSelectionDefaults();
      render();
      persistWorkspace();
      queueWrenchieRefresh();
    });

    els.vehicleSelect.addEventListener("change", () => {
      const vehicle = byId(allVehicles(), els.vehicleSelect.value);
      state.vehicleId = vehicle.id;
      state.make = vehicle.make;
      syncSelectionDefaults();
      render();
      persistWorkspace();
      queueWrenchieRefresh();
    });

    els.systemSelect.addEventListener("change", () => {
      state.systemId = els.systemSelect.value;
      state.subsystemId = "";
      syncSelectionDefaults();
      render();
      persistWorkspace();
    });

    els.subsystemSelect.addEventListener("change", () => {
      state.subsystemId = els.subsystemSelect.value;
      render();
      persistWorkspace();
    });

    els.vinForm.addEventListener("submit", handleVinSubmit);
    els.demoButton.addEventListener("click", runIndustryDemo);
    els.saveVehicleButton.addEventListener("click", saveCurrentVehicle);
    els.addSampleButton.addEventListener("click", saveCurrentVehicle);
    els.printButton.addEventListener("click", () => window.print());
    els.resetJobButton.addEventListener("click", resetCurrentJob);
    els.jobNotes.addEventListener("input", () => {
      state.repairNotes[currentProcedureKey()] = els.jobNotes.value;
    });
    els.jobNotes.addEventListener("change", persistWorkspace);

    [els.mascotGuideButton, els.wrenchieCoachMascot].filter(Boolean).forEach((button) => {
      button.addEventListener("click", () => advanceWrenchieCoach(button));
    });
    document.querySelectorAll("[data-coach-action]").forEach((button) => {
      button.addEventListener("click", () => runWrenchieCoachAction(button.dataset.coachAction));
    });
    if (els.wrenchieDeskMascotButton) {
      els.wrenchieDeskMascotButton.addEventListener("click", () => {
        animateWrenchie(els.wrenchieDeskMascotButton);
        els.wrenchieSearchInput.focus();
      });
    }

    els.zoomIn.addEventListener("click", () => {
      state.zoom = Math.min(1.45, Number((state.zoom + 0.1).toFixed(2)));
      renderDiagram();
      persistWorkspace();
    });
    els.zoomOut.addEventListener("click", () => {
      state.zoom = Math.max(0.8, Number((state.zoom - 0.1).toFixed(2)));
      renderDiagram();
      persistWorkspace();
    });
    els.zoomReset.addEventListener("click", () => {
      state.zoom = 1;
      renderDiagram();
      persistWorkspace();
    });
    els.torqueToggle.addEventListener("change", () => {
      state.torque = els.torqueToggle.checked;
      document.body.classList.toggle("hide-torque", !state.torque);
      persistWorkspace();
    });

    document.querySelectorAll(".tool-tabs button").forEach((button) => {
      button.addEventListener("click", () => {
        state.activeToolPanel = button.dataset.panel;
        renderToolTabs();
        renderTools();
      });
    });

    document.querySelectorAll(".rail-nav button").forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelectorAll(".rail-nav button").forEach((entry) => entry.classList.remove("active"));
        button.classList.add("active");
        const target = document.getElementById(button.dataset.jump);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });

    els.openDataButton.addEventListener("click", () => els.importInput.click());
    els.importButton.addEventListener("click", () => els.importInput.click());
    els.importInput.addEventListener("change", async () => {
      const file = els.importInput.files && els.importInput.files[0];
      if (!file) return;
      try {
        await importCommunityData(file);
      } catch (error) {
        alert(error.message);
      } finally {
        els.importInput.value = "";
      }
    });

    els.resetButton.addEventListener("click", async () => {
      state.mode = variant.lockMode ? variant.mode : "all";
      state.make = "";
      state.vehicleId = "";
      state.systemId = "";
      state.subsystemId = "";
      state.decodedVin = null;
      state.zoom = 1;
      syncSelectionDefaults();
      render();
      await persistWorkspace();
      queueWrenchieRefresh();
    });

    els.themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("high-contrast");
    });

    els.wrenchieRefreshButton.addEventListener("click", () => refreshWrenchieFeeds(false));
    els.wrenchieSearchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.wrenchieQuery = els.wrenchieSearchInput.value.trim();
      state.wrenchieMessage = "";
      if (state.wrenchieQuery) {
        const ranked = allWrenchieItems()
          .map((item) => ({ item, score: wrenchieSearchScore(item, state.wrenchieQuery) }))
          .filter((entry) => entry.score > 0)
          .sort((a, b) => b.score - a.score);
        if (ranked.length) {
          const best = ranked[0].item;
          state.wrenchieSelectedId = best.id;
          if (best.id.startsWith("lesson:")) state.wrenchieView = "learn";
          else if (wrenchieLiveItems().some((item) => item.id === best.id)) state.wrenchieView = "live";
          else state.wrenchieView = "saved";
          state.wrenchieMessage = `Mr. Wrenchie found ${ranked.length} source-backed match${ranked.length === 1 ? "" : "es"}.`;
        } else {
          state.wrenchieMessage = "No exact source-backed match. Try work zones, recalls, proposed rules, or hours of service.";
        }
      }
      renderWrenchie();
    });

    document.querySelectorAll("[data-wrenchie-view]").forEach((button) => {
      button.addEventListener("click", () => {
        state.wrenchieView = button.dataset.wrenchieView;
        state.wrenchieQuery = "";
        state.wrenchieMessage = "";
        els.wrenchieSearchInput.value = "";
        renderWrenchie();
      });
    });

    document.querySelectorAll("[data-wrenchie-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        state.wrenchieFilter = button.dataset.wrenchieFilter;
        state.wrenchieMessage = "";
        renderWrenchie();
      });
    });
  }

  async function init() {
    const saved = await storageGet(["workspaceState", "savedVehicles", "communityVehicles", "taskChecks", "repairNotes", "wrenchieCache", "wrenchieSavedItems"]);
    Object.assign(state, saved.workspaceState || {});
    enforceVariantMode();
    state.savedVehicles = Array.isArray(saved.savedVehicles) ? saved.savedVehicles : [];
    state.communityVehicles = Array.isArray(saved.communityVehicles) ? saved.communityVehicles : [];
    state.taskChecks = saved.taskChecks && typeof saved.taskChecks === "object" ? saved.taskChecks : {};
    state.repairNotes = saved.repairNotes && typeof saved.repairNotes === "object" ? saved.repairNotes : {};
    state.wrenchieCache = saved.wrenchieCache && typeof saved.wrenchieCache === "object" ? saved.wrenchieCache : null;
    state.wrenchieSavedItems = Array.isArray(saved.wrenchieSavedItems) ? saved.wrenchieSavedItems : [];
    syncSelectionDefaults();
    els.torqueToggle.checked = state.torque !== false;
    document.body.classList.toggle("hide-torque", state.torque === false);
    wireEvents();
    render();
    if (wrenchieCacheNeedsRefresh()) refreshWrenchieFeeds(true);
  }

  init();
})();
