(function () {
  const variant = window.WA_VARIANT || {
    name: "Lil Mechanic's: WrenchAtlas",
    familyPrefix: "Lil Mechanic's:",
    brandPrefix: "Wrench",
    brandAccent: "Atlas",
    mode: "all"
  };
  const profiles = {
    all: {
      industry: "car",
      edition: "American Garage Edition",
      identifier: { type: "vin", label: "VIN decode", placeholder: "17-character VIN", action: "Decode" },
      demo: { label: "Run Corolla brake demo", mode: "car", type: "Car Maintainer", make: "Toyota", vehicleId: "car-toyota-corolla-2001", systemId: "brakes", subsystemId: "front-disc" }
    },
    car: {
      industry: "car",
      edition: "American Garage Edition",
      identifier: { type: "vin", label: "VIN decode", placeholder: "17-character VIN", action: "Decode" },
      demo: { label: "Run Corolla brake demo", mode: "car", type: "Car Maintainer", make: "Toyota", vehicleId: "car-toyota-corolla-2001", systemId: "brakes", subsystemId: "front-disc" }
    },
    truck: {
      industry: "truck",
      edition: "American Fleet Edition",
      identifier: { type: "vin", label: "Truck VIN", placeholder: "17-character truck VIN", action: "Decode" },
      demo: { label: "Run Cascadia air-brake demo", mode: "truck", type: "Truck Maintainer", make: "Freightliner", vehicleId: "truck-freightliner-cascadia-2018", systemId: "air-brakes", subsystemId: "drum-air-brake" }
    },
    boat: {
      industry: "boat",
      edition: "American Dockside Edition",
      identifier: { type: "hin", label: "HIN format check", placeholder: "12-character U.S. HIN", action: "Validate" },
      demo: { label: "Run Yamaha impeller demo", mode: "boat", type: "Boat Maintainer", make: "Yamaha", vehicleId: "boat-yamaha-f150-2019", systemId: "outboard", subsystemId: "water-pump" }
    },
    plane: {
      industry: "plane",
      edition: "American Hangar Edition",
      identifier: { type: "nnumber", label: "N-number format check", placeholder: "N-number, e.g. N172SP", action: "Validate" },
      demo: { label: "Run Cessna wheel demo", mode: "plane", type: "Plane Maintainer", make: "Cessna", vehicleId: "plane-cessna-172s-2005", systemId: "landing-gear", subsystemId: "main-wheel-brake" }
    },
    train: {
      industry: "train",
      edition: "American Rail Edition",
      identifier: { type: "unit", label: "Locomotive unit ID", placeholder: "Reporting mark and unit", action: "Validate" },
      demo: { label: "Run GP38-2 brake demo", mode: "train", type: "Rail Maintainer", make: "EMD", vehicleId: "train-emd-gp38-2-1975", systemId: "locomotive-brakes", subsystemId: "foundation-brake-gear" }
    }
  };
  const profile = profiles[variant.mode] || profiles.all;
  const form = document.getElementById("popupVinForm");
  const input = document.getElementById("popupVinInput");
  const result = document.getElementById("popupResult");
  const openWorkspace = document.getElementById("openWorkspace");
  const openIndustryDemo = document.getElementById("openIndustryDemo");
  const identifierLabel = document.getElementById("popupIdentifierLabel");
  const lookupButton = document.getElementById("popupLookupButton");
  const edition = document.getElementById("popupEdition");
  const readyText = document.getElementById("popupReadyText");
  const wrenchieButton = document.getElementById("popupWrenchieButton");
  const wrenchieGuide = document.getElementById("popupWrenchieGuide");
  const wrenchieMessage = document.getElementById("popupWrenchieMessage");
  let wrenchieTipIndex = 0;
  const wrenchieTips = [
    "Start with the exact equipment identity, then stage the job.",
    "Verify installed hardware before trusting a socket size or service value.",
    "Read every safety gate before the first fastener moves.",
    "Use current official service data for critical procedures and return to service.",
    "Finish function checks, inspection, and documentation before release."
  ];

  function setResult(title, detail) {
    result.textContent = "";
    const strong = document.createElement("strong");
    strong.textContent = title;
    const span = document.createElement("span");
    span.textContent = detail;
    result.append(strong, span);
  }

  document.body.dataset.industry = profile.industry;
  document.title = variant.name || "Lil Mechanic's: WrenchAtlas";
  document.querySelectorAll(".popup-head h1").forEach((heading) => {
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
  edition.textContent = `${profile.edition} · v2.0`;
  identifierLabel.textContent = profile.identifier.label;
  input.placeholder = profile.identifier.placeholder;
  lookupButton.textContent = profile.identifier.action;
  readyText.textContent = `${profile.identifier.action} an identifier or load the industry demo.`;
  openIndustryDemo.textContent = profile.demo.label;

  function animateWrenchie() {
    [wrenchieButton, wrenchieGuide].filter(Boolean).forEach((element) => {
      element.classList.remove("wrenchie-wave");
      void element.offsetWidth;
      element.classList.add("wrenchie-wave");
    });
  }

  function nextWrenchieTip() {
    wrenchieTipIndex = (wrenchieTipIndex + 1) % wrenchieTips.length;
    wrenchieMessage.textContent = wrenchieTips[wrenchieTipIndex];
    animateWrenchie();
  }

  wrenchieButton.addEventListener("click", nextWrenchieTip);
  wrenchieGuide.addEventListener("click", nextWrenchieTip);

  function saveWorkspaceState(patch) {
    return new Promise((resolve) => {
      if (window.chrome && chrome.storage && chrome.storage.local) {
        chrome.storage.local.get(["workspaceState"], (saved) => {
          chrome.storage.local.set({
            workspaceState: Object.assign({}, saved.workspaceState || {}, patch)
          }, resolve);
        });
        return;
      }

      let current = {};
      try {
        current = JSON.parse(localStorage.getItem("workspaceState")) || {};
      } catch (_) {
        current = {};
      }
      localStorage.setItem("workspaceState", JSON.stringify(Object.assign(current, patch)));
      resolve();
    });
  }

  function openFullWorkspace() {
    if (window.chrome && chrome.runtime && chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
      return;
    }
    window.open("app.html", "_blank", "noopener");
  }

  function validateLocalIdentifier(value) {
    const clean = String(value || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (profile.identifier.type === "hin") {
      if (!/^[A-Z0-9]{3}[A-HJ-NPR-Z0-9]{5}[A-L][0-9]{3}$/.test(clean)) {
        throw new Error("Enter a valid 12-character U.S. HIN format.");
      }
      return { vin: clean, label: "Valid U.S. HIN format", meta: "Checked locally; not a registry or ownership lookup" };
    }
    if (profile.identifier.type === "nnumber") {
      if (!/^N(?:[1-9][0-9]{0,4}|[1-9][0-9]{0,3}[A-HJ-NP-Z]|[1-9][0-9]{0,2}[A-HJ-NP-Z]{2})$/.test(clean)) {
        throw new Error("Enter an FAA-style N-number such as N172SP.");
      }
      return { vin: clean, label: "Valid N-number format", meta: "Checked locally; verify registry data with FAA" };
    }
    if (profile.identifier.type === "unit") {
      if (!/^[A-Z]{1,4}[0-9]{1,6}$/.test(clean)) {
        throw new Error("Enter a reporting mark and unit such as UP 1234.");
      }
      return { vin: clean, label: "Valid locomotive unit-ID format", meta: "Stored locally; not a railroad roster or status lookup" };
    }
    throw new Error("Unsupported identifier type.");
  }

  async function lookupIdentifier(value) {
    if (profile.identifier.type !== "vin") return validateLocalIdentifier(value);
    const clean = String(value || "").toUpperCase().replace(/[^A-HJ-NPR-Z0-9*]/g, "");
    if (clean.length < 5) throw new Error("Enter at least 5 VIN characters.");
    const endpoint = `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/${encodeURIComponent(clean)}?format=json`;
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error(`NHTSA vPIC returned ${response.status}`);
    const body = await response.json();
    const decoded = body.Results && body.Results[0];
    if (!decoded) throw new Error("No decode result.");
    return {
      vin: clean,
      label: [decoded.ModelYear, decoded.Make, decoded.Model].filter(Boolean).join(" "),
      meta: [decoded.VehicleType, decoded.BodyClass].filter(Boolean).join(" · ")
    };
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    lookupButton.disabled = true;
    lookupButton.textContent = profile.identifier.type === "vin" ? "Decoding" : "Validating";
    setResult("Working", profile.identifier.type === "vin" ? "Calling NHTSA vPIC..." : "Checking the identifier format locally...");
    try {
      const decoded = await lookupIdentifier(input.value);
      setResult(decoded.label || decoded.vin, decoded.meta || "Identifier checked");
      wrenchieMessage.textContent = "Identity checked. Open the workspace and let me stage the tools, safety gates, and closeout sequence.";
      await saveWorkspaceState({
        decodedVin: {
          vin: decoded.vin,
          make: decoded.label,
          model: "",
          year: "",
          vehicleType: decoded.meta
        }
      });
    } catch (error) {
      setResult("Check failed", error.message);
      wrenchieMessage.textContent = "Check the identifier format and try again. I will not guess at equipment identity.";
    } finally {
      lookupButton.disabled = false;
      lookupButton.textContent = profile.identifier.action;
    }
  });

  openIndustryDemo.addEventListener("click", async () => {
    await saveWorkspaceState({
      mode: profile.demo.mode,
      type: profile.demo.type,
      make: profile.demo.make,
      vehicleId: profile.demo.vehicleId,
      systemId: profile.demo.systemId,
      subsystemId: profile.demo.subsystemId,
      zoom: 1,
      torque: true
    });
    openFullWorkspace();
  });

  openWorkspace.addEventListener("click", openFullWorkspace);
})();
